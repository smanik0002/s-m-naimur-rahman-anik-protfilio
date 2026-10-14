import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { usePhotos } from '../context/PhotoContext';
import { 
  ArrowUp, 
  Github, 
  Facebook, 
  Instagram, 
  Mail, 
  MessageCircle, 
  Terminal, 
  Heart
} from 'lucide-react';

export const Footer: React.FC = () => {
  const { photo1 } = usePhotos();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800/90 bg-[#070b11] py-14 px-4 sm:px-6 lg:px-8 relative z-10 text-slate-400">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center justify-between pb-10 border-b border-slate-800/60">
          
          {/* Brand Info */}
          <div className="md:col-span-6 flex flex-col items-start gap-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl overflow-hidden border border-cyan-500/40 shrink-0">
                <img
                  src={photo1}
                  alt={PERSONAL_INFO.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-heading font-bold text-lg text-white">
                S. M. Naimur Rahman Anik
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 max-w-md">
              Computer Science & Engineering Undergraduate at Khwaja Yunus Ali University | Tech Enthusiast & Aspiring Developer exploring Web, Mobile (React Native), and Database Systems.
            </p>
          </div>

          {/* Social Links */}
          <div className="md:col-span-6 flex flex-wrap items-center md:justify-end gap-3">
            <a
              href={PERSONAL_INFO.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-400 text-slate-300 hover:text-cyan-400 transition-all"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-emerald-400 text-slate-300 hover:text-emerald-400 transition-all"
              title="WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-blue-400 text-slate-300 hover:text-blue-400 transition-all"
              title="Facebook"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-pink-400 text-slate-300 hover:text-pink-400 transition-all"
              title="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-400 text-slate-300 hover:text-cyan-400 transition-all"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-cyan-500/20 hover:bg-cyan-500 text-cyan-300 hover:text-slate-950 border border-cyan-500/30 transition-all flex items-center gap-1.5 text-xs font-mono ml-2 cursor-pointer"
              title="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
              <span className="hidden sm:inline">Top</span>
            </button>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © {new Date().getFullYear()} S M Naimur Rahman Anik. All rights reserved.
          </div>
          <div className="flex items-center gap-1.5">
            <span>Crafted with</span>
            <span className="text-cyan-400 font-semibold">Three.js</span>
            <span>&</span>
            <span className="text-sky-400 font-semibold">Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
