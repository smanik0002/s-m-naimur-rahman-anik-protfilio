import React, { useRef, useState } from 'react';
import { usePhotos } from '../context/PhotoContext';
import { 
  X, 
  Upload, 
  CheckCircle, 
  Camera, 
  Image as ImageIcon, 
  Sparkles, 
  RotateCcw,
  Info,
  FolderOpen
} from 'lucide-react';

export const PhotoUploadModal: React.FC = () => {
  const { 
    photo1, 
    photo2, 
    setPhoto1, 
    setPhoto2, 
    resetPhotos, 
    isCustomPhoto1, 
    isCustomPhoto2,
    isUploadModalOpen, 
    closeUploadModal 
  } = usePhotos();

  const fileInputRef1 = useRef<HTMLInputElement>(null);
  const fileInputRef2 = useRef<HTMLInputElement>(null);

  const [uploadSuccess1, setUploadSuccess1] = useState(false);
  const [uploadSuccess2, setUploadSuccess2] = useState(false);

  if (!isUploadModalOpen) return null;

  const handleFileChange = (slot: 1 | 2, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target?.result as string;
      if (!result) return;

      // Optional: resize/compress slightly to optimize storage if very large
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const maxDim = 1200;
        let { width, height } = img;
        if (width > maxDim || height > maxDim) {
          if (width > height) {
            height = Math.round((height * maxDim) / width);
            width = maxDim;
          } else {
            width = Math.round((width * maxDim) / height);
            height = maxDim;
          }
        }
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.drawImage(img, 0, 0, width, height);
          const compressed = canvas.toDataURL('image/jpeg', 0.88);
          if (slot === 1) {
            setPhoto1(compressed);
            setUploadSuccess1(true);
            setTimeout(() => setUploadSuccess1(false), 3000);
          } else {
            setPhoto2(compressed);
            setUploadSuccess2(true);
            setTimeout(() => setUploadSuccess2(false), 3000);
          }
        } else {
          if (slot === 1) setPhoto1(result);
          else setPhoto2(result);
        }
      };
      img.src = result;
    };
    reader.readAsDataURL(file);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={closeUploadModal}
    >
      <div 
        className="w-full max-w-2xl bg-slate-900 border border-cyan-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-cyan-950/50 relative max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={closeUploadModal}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
          title="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-300">
            <Camera className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-white">
              আপনার আসল ছবি দুটি সেট করুন
            </h3>
            <p className="text-xs sm:text-sm text-cyan-400/90 font-mono">
              Apply Your 2 Original Photos Live
            </p>
          </div>
        </div>

        <p className="text-sm text-slate-300 mb-6 leading-relaxed">
          আপনার ডিভাইসে থাকা আপনার ২টি আসল ছবি (ব্লু শার্ট ও গ্রে শার্ট) নিচে সিলেক্ট করুন। সিলেক্ট করার সাথে সাথে পুরো ওয়েবসাইটে আপনার আসল ছবি লাইভ হয়ে যাবে।
        </p>

        {/* 2 Photo Slots */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          
          {/* Photo Slot 1: Blue Shirt (Hero / Avatar) */}
          <div className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800 hover:border-cyan-500/40 transition-colors flex flex-col items-center text-center relative group">
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 mb-3">
              Photo 1: Profile & Avatar
            </span>

            {/* Circular Avatar Preview */}
            <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-cyan-400/60 shadow-lg shadow-cyan-950/50 mb-3 bg-slate-900">
              <img
                src={photo1}
                alt="Photo 1 - Blue Shirt Profile"
                className="w-full h-full object-cover"
              />
              {uploadSuccess1 && (
                <div className="absolute inset-0 bg-cyan-950/90 flex flex-col items-center justify-center text-cyan-300 animate-in fade-in">
                  <CheckCircle className="w-8 h-8 mb-1" />
                  <span className="text-[10px] font-mono">Updated!</span>
                </div>
              )}
            </div>

            <h4 className="font-heading font-semibold text-white text-sm mb-1">
              Blue Shirt & Patterned Tie
            </h4>
            <p className="text-xs text-slate-400 mb-4">
              Hero circular frame ও Navbar-এর জন্য
            </p>

            <input
              type="file"
              ref={fileInputRef1}
              accept="image/*"
              className="hidden"
              onChange={(e) => handleFileChange(1, e)}
            />

            <button
              onClick={() => fileInputRef1.current?.click()}
              className="w-full py-2.5 px-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-xs flex items-center justify-center gap-2 transition-colors shadow-md shadow-cyan-500/20"
            >
              <Upload className="w-3.5 h-3.5" />
              <span>{isCustomPhoto1 ? 'Change Photo 1' : 'Select Photo 1'}</span>
            </button>

            {isCustomPhoto1 && (
              <span className="text-[11px] font-mono text-emerald-400 mt-2 flex items-center gap-1">
                <CheckCircle className="w-3 h-3" />
                <span>Custom photo active</span>
              </span>
            )}
          </div>

          {/* Photo Slot 2: Grey Shirt (About Portrait) */}
          <div className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800 hover:border-blue-500/40 transition-colors flex flex-col items-center text-center relative group">
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/30 mb-3">
              Photo 2: About Portrait
            </span>

            {/* Rectangular / Portrait Preview */}
            <div className="relative w-28 h-32 rounded-xl overflow-hidden border-2 border-blue-400/60 shadow-lg shadow-blue-950/50 mb-3 bg-slate-900">
              <img
                src={photo2}
                alt="Photo 2 - Grey Shirt Portrait"
                className="w-full h-full object-cover"
              />
              {uploadSuccess2 && (
                <div className="absolute inset-0 bg-blue-950/90 flex flex-col items-center justify-center text-blue-300 animate-in fade-in">
                  <CheckCircle className="w-8 h-8 mb-1" />
                  <span className="text-[10px] font-mono">Updated!</span>
                </div>
              )}
            </div>

            <h4 className="font-heading font-semibold text-white text-sm mb-1">
              Grey Shirt & Dark Tie
            </h4>
            <p className="text-xs text-slate-400 mb-4">
              About সেকশন ও ফুল পোর্ট্রেট মডালের জন্য
            </p>

            <input
              type="file"
              ref={fileInputRef2}
              accept="image/*"
              className="hidden"
              onChange={(e) => handleFileChange(2, e)}
            />

            <button
              onClick={() => fileInputRef2.current?.click()}
              className="w-full py-2.5 px-4 rounded-xl bg-blue-500 hover:bg-blue-400 text-white font-semibold text-xs flex items-center justify-center gap-2 transition-colors shadow-md shadow-blue-500/20"
            >
              <Upload className="w-3.5 h-3.5" />
              <span>{isCustomPhoto2 ? 'Change Photo 2' : 'Select Photo 2'}</span>
            </button>

            {isCustomPhoto2 && (
              <span className="text-[11px] font-mono text-emerald-400 mt-2 flex items-center gap-1">
                <CheckCircle className="w-3 h-3" />
                <span>Custom photo active</span>
              </span>
            )}
          </div>

        </div>

        {/* Permanent Option Info Box */}
        <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300 mb-6 space-y-2">
          <div className="flex items-center gap-2 text-cyan-400 font-mono font-semibold">
            <Info className="w-4 h-4" />
            <span>Permanent Deployment Tip:</span>
          </div>
          <p className="leading-relaxed">
            যদি সবসময় প্রজেক্ট ফাইলের ভেতর সেভ রাখতে চান, AI Studio-র বাঁ পাশের <strong>Files</strong> এক্সপ্লোরারে <code className="text-cyan-300 bg-slate-900 px-1 py-0.5 rounded">public/images/</code> ফোল্ডারে আপনার মূল ছবি দুটি ড্রপ করে দিন।
          </p>
        </div>

        {/* Modal Footer Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-slate-800">
          {(isCustomPhoto1 || isCustomPhoto2) && (
            <button
              onClick={resetPhotos}
              className="text-xs font-mono text-rose-400 hover:text-rose-300 flex items-center gap-1.5 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Photos</span>
            </button>
          )}

          <div className="flex items-center gap-3 w-full sm:w-auto sm:ml-auto">
            <button
              onClick={closeUploadModal}
              className="w-full sm:w-auto py-2.5 px-6 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-sm transition-all shadow-lg shadow-cyan-500/25"
            >
              Done & Save
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
