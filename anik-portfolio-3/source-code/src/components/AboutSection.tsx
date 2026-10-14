import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { usePhotos } from '../context/PhotoContext';
import { CardTilt } from './CardTilt';
import { 
  User, 
  GraduationCap, 
  Sparkles, 
  Code2, 
  Terminal, 
  BookOpen, 
  Compass, 
  CheckCircle,
  ExternalLink,
  Phone,
  Mail,
  MapPin,
  Maximize2,
  Camera
} from 'lucide-react';

export const AboutSection: React.FC = () => {
  const { photo1, photo2, openUploadModal, isCustomPhoto1, isCustomPhoto2 } = usePhotos();
  const [activePhotoModal, setActivePhotoModal] = useState<string | null>(null);

  const pillars = [
    {
      title: "Web & Mobile Engineering",
      description: "Developing modern web interfaces with HTML5/CSS3 and exploring cross-platform mobile apps using React Native.",
      icon: Code2,
      color: "text-cyan-400",
      border: "border-cyan-500/30"
    },
    {
      title: "Relational Database Systems",
      description: "Designing structured, normalized schemas (SQL) with strict data integrity, indexing, and performant queries.",
      icon: Terminal,
      color: "text-blue-400",
      border: "border-blue-500/30"
    },
    {
      title: "Algorithmic Problem Solving",
      description: "Strengthening analytical depth through data structure implementations and competitive algorithmic reasoning.",
      icon: Sparkles,
      color: "text-teal-400",
      border: "border-teal-500/30"
    },
    {
      title: "Hardware & Networks",
      description: "Understanding low-level computing architectures—microprocessors (8086) and data communications across network layers.",
      icon: BookOpen,
      color: "text-indigo-400",
      border: "border-indigo-500/30"
    }
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-3">
            <User className="w-3.5 h-3.5" />
            <span>Profile & Background</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Engineering Tomorrow, <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">One Line at a Time</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            A comprehensive look into my academic journey, core technical interests, and philosophy as an aspiring developer.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Photos Gallery with 3D Tilt (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <CardTilt maxTilt={8} className="w-full">
              <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800/80 backdrop-blur-md shadow-xl relative overflow-hidden group">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/60" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
                    <span className="w-3 h-3 rounded-full bg-green-500/60" />
                    <span className="text-xs font-mono text-slate-400 ml-2">bio.profile.preview</span>
                  </div>
                  <button
                    onClick={() => setActivePhotoModal(photo2)}
                    className="p-1.5 rounded-lg bg-slate-800/70 hover:bg-cyan-500/20 text-slate-400 hover:text-cyan-300 transition-colors"
                    title="Enlarge Image"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>

                {/* Featured Portrait with 3D perspective */}
                <div className="relative aspect-[4/5] rounded-xl overflow-hidden border border-slate-700/60">
                  <img
                    src={photo2}
                    alt={`${PERSONAL_INFO.name} - Portrait`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent flex flex-col justify-end p-5">
                    <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">CSE Undergraduate</span>
                    <h3 className="font-heading text-xl font-bold text-white">{PERSONAL_INFO.name}</h3>
                    <p className="text-xs text-slate-300 mt-1 flex items-center gap-1.5">
                      <MapPin className="w-3 h-3 text-cyan-400" />
                      <span>{PERSONAL_INFO.location}</span>
                    </p>
                  </div>
                </div>

                {/* Both Original Photos Switcher / Gallery Strip */}
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setActivePhotoModal(photo1)}
                    className="flex items-center gap-2.5 p-2 rounded-xl bg-slate-950/70 border border-slate-800 hover:border-cyan-400/50 transition-all text-left group/thumb cursor-pointer"
                  >
                    <div className="w-10 h-10 rounded-lg overflow-hidden border border-cyan-500/30 shrink-0">
                      <img
                        src={photo1}
                        alt="Profile Studio Avatar"
                        className="w-full h-full object-cover group-hover/thumb:scale-110 transition-transform"
                      />
                    </div>
                    <div className="truncate">
                      <span className="text-[11px] font-mono text-cyan-300 font-semibold block">Photo 1</span>
                      <span className="text-[10px] text-slate-400 block truncate">Blue Shirt & Tie</span>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setActivePhotoModal(photo2)}
                    className="flex items-center gap-2.5 p-2 rounded-xl bg-slate-950/70 border border-slate-800 hover:border-cyan-400/50 transition-all text-left group/thumb cursor-pointer"
                  >
                    <div className="w-10 h-10 rounded-lg overflow-hidden border border-blue-500/30 shrink-0">
                      <img
                        src={photo2}
                        alt="Outdoor Campus Portrait"
                        className="w-full h-full object-cover group-hover/thumb:scale-110 transition-transform"
                      />
                    </div>
                    <div className="truncate">
                      <span className="text-[11px] font-mono text-blue-300 font-semibold block">Photo 2</span>
                      <span className="text-[10px] text-slate-400 block truncate">Grey Shirt & Tie</span>
                    </div>
                  </button>
                </div>

                {/* Direct Set/Upload Real Photos Button */}
                <button
                  onClick={openUploadModal}
                  className="mt-3 w-full py-2 px-3 rounded-xl bg-cyan-950/50 hover:bg-cyan-900/60 border border-cyan-500/30 hover:border-cyan-400 text-cyan-300 text-xs font-mono flex items-center justify-center gap-2 transition-all shadow-sm"
                  title="আপনার দেওয়া আসল ২টি ছবি আপলোড / আপডেট করুন"
                >
                  <Camera className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{isCustomPhoto1 || isCustomPhoto2 ? 'Update Original Photos' : 'Set Original 2 Photos'}</span>
                </button>

                {/* Quick Info Grid */}
                <div className="mt-4 grid grid-cols-2 gap-3 text-xs font-mono">
                  <div className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800">
                    <span className="text-slate-400 block mb-1">Focus Areas:</span>
                    <span className="text-cyan-300 font-medium">Web, Mobile & DBMS</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800">
                    <span className="text-slate-400 block mb-1">Status:</span>
                    <span className="text-emerald-300 font-medium flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      Open for Roles
                    </span>
                  </div>
                </div>
              </div>
            </CardTilt>

            {/* Quick Contact snippet card */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-cyan-950/30 to-slate-900/60 border border-cyan-500/20 backdrop-blur-md">
              <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-3 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Direct Contact Details</span>
              </h4>
              <div className="space-y-2 text-sm text-slate-300">
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-cyan-300 transition-colors font-mono text-xs">
                    {PERSONAL_INFO.email}
                  </a>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                  <a href={`tel:${PERSONAL_INFO.phone}`} className="hover:text-cyan-300 transition-colors font-mono text-xs">
                    {PERSONAL_INFO.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio Details and Pillars (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            <div className="p-8 rounded-2xl bg-slate-900/70 border border-slate-800/80 backdrop-blur-md shadow-xl">
              <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs mb-3">
                <GraduationCap className="w-4 h-4" />
                <span>Academic & Professional Profile</span>
              </div>
              
              <h3 className="font-heading text-2xl font-bold text-white mb-4">
                "Driven to learn, explore, and build digital experiences that matter."
              </h3>

              <div className="space-y-4 text-slate-300 leading-relaxed text-base">
                <p>
                  {PERSONAL_INFO.bio}
                </p>
                <p className="text-slate-300">
                  {PERSONAL_INFO.extendedBio}
                </p>
              </div>

              {/* Academic Credentials Badges */}
              <div className="mt-5 p-4 rounded-xl bg-slate-950/70 border border-cyan-500/25">
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block mb-2 font-semibold">
                  Academic Institutions:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs font-mono">
                  <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                    <span className="text-slate-400 text-[10px] block">University:</span>
                    <span className="text-cyan-300 font-medium truncate block" title={PERSONAL_INFO.university}>
                      {PERSONAL_INFO.university}
                    </span>
                  </div>
                  <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                    <span className="text-slate-400 text-[10px] block">College:</span>
                    <span className="text-blue-300 font-medium truncate block" title={PERSONAL_INFO.college}>
                      {PERSONAL_INFO.college}
                    </span>
                  </div>
                  <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                    <span className="text-slate-400 text-[10px] block">School:</span>
                    <span className="text-teal-300 font-medium truncate block" title={PERSONAL_INFO.school}>
                      {PERSONAL_INFO.school}
                    </span>
                  </div>
                </div>
              </div>

              {/* Core Strengths Checklist */}
              <div className="mt-6 pt-6 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-start gap-2 text-sm text-slate-200">
                  <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>Strong Computer Science & Mathematics Foundation</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-slate-200">
                  <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>Hands-on Database Modeling & SQL Architecture</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-slate-200">
                  <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>Cross-Platform Exploration with React Native</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-slate-200">
                  <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>Low-Level Hardware & Network Fundamentals</span>
                </div>
              </div>
            </div>

            {/* 4 Technical Focus Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <CardTilt key={pillar.title} maxTilt={6}>
                    <div className={`p-5 rounded-2xl bg-slate-900/60 border ${pillar.border} hover:bg-slate-800/70 transition-all h-full flex flex-col justify-between`}>
                      <div>
                        <div className="w-10 h-10 rounded-xl bg-slate-800/80 flex items-center justify-center mb-3">
                          <Icon className={`w-5 h-5 ${pillar.color}`} />
                        </div>
                        <h4 className="font-heading font-semibold text-white text-base mb-1.5">
                          {pillar.title}
                        </h4>
                        <p className="text-xs text-slate-300 leading-relaxed">
                          {pillar.description}
                        </p>
                      </div>
                    </div>
                  </CardTilt>
                );
              })}
            </div>

          </div>

        </div>

      </div>

      {/* Image Zoom Modal */}
      {activePhotoModal && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setActivePhotoModal(null)}
        >
          <div className="relative max-w-lg w-full rounded-2xl overflow-hidden border border-cyan-500/40 shadow-2xl">
            <img
              src={activePhotoModal}
              alt="Enlarged portrait"
              className="w-full h-auto object-cover max-h-[85vh]"
            />
            <button
              onClick={() => setActivePhotoModal(null)}
              className="absolute top-4 right-4 px-3 py-1 rounded-full bg-slate-900/80 text-white text-xs font-mono border border-slate-700 hover:bg-cyan-500 hover:text-black transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
