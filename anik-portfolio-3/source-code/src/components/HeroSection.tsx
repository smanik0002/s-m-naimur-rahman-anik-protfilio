import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { usePhotos } from '../context/PhotoContext';
import { CardTilt } from './CardTilt';
import { 
  Github, 
  Mail, 
  ArrowRight, 
  Phone, 
  MessageCircle, 
  Sparkles, 
  Code, 
  Database, 
  Layers, 
  Download,
  Image as ImageIcon,
  CheckCircle2,
  Cpu,
  Camera
} from 'lucide-react';

export const HeroSection: React.FC = () => {
  const { photo1, photo2, openUploadModal, isCustomPhoto1, isCustomPhoto2 } = usePhotos();

  // Typing effect state
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(80);

  // Profile image toggle (close headshot vs full portrait)
  const [selectedImage, setSelectedImage] = useState<'profile' | 'portrait'>('profile');

  useEffect(() => {
    const phrases = PERSONAL_INFO.typingPhrases;
    const fullText = phrases[currentPhraseIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing forward
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setTypingSpeed(70);

        if (currentText === fullText) {
          // Pause at full word
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        // Backspacing
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setTypingSpeed(35);

        if (currentText === '') {
          setIsDeleting(false);
          setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentPhraseIndex, typingSpeed]);

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Left Content Column (7 cols) */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-6 backdrop-blur-md glow-cyan">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span>Academic Portfolio • CSE Undergraduate</span>
          </div>

          {/* Greeting & Full Name */}
          <h2 className="text-sm sm:text-base font-mono uppercase tracking-widest text-cyan-400/90 mb-2">
            Hello World, I'm
          </h2>

          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-4 leading-none">
            S. M. Naimur <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 bg-clip-text text-transparent">
              Rahman Anik
            </span>
          </h1>

          {/* Dynamic Typing Subtitle */}
          <div className="h-10 sm:h-12 flex items-center mb-6">
            <p className="text-lg sm:text-xl md:text-2xl font-medium text-slate-300 font-heading flex items-center">
              <span className="text-cyan-400 mr-2">&gt;</span>
              <span className="text-slate-100">{currentText}</span>
              <span className="inline-block w-2.5 h-6 bg-cyan-400 ml-1.5 animate-pulse rounded-sm" />
            </p>
          </div>

          {/* Official Bio */}
          <p className="text-base sm:text-lg text-slate-300/95 leading-relaxed max-w-2xl mb-8 font-normal">
            {PERSONAL_INFO.bio}
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
            <a
              href="#projects"
              id="hero-explore-projects-btn"
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-sm tracking-wide transition-all shadow-lg shadow-cyan-500/25 flex items-center gap-2.5 group"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#contact"
              id="hero-contact-btn"
              className="px-6 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700/80 hover:border-cyan-500/40 transition-all text-sm font-semibold flex items-center gap-2 backdrop-blur-sm"
            >
              <Mail className="w-4 h-4 text-cyan-400" />
              <span>Contact Me</span>
            </a>

            <a
              href={PERSONAL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="hero-whatsapp-btn"
              className="px-5 py-3.5 rounded-xl bg-emerald-950/50 hover:bg-emerald-900/60 text-emerald-300 border border-emerald-500/30 hover:border-emerald-400 transition-all text-sm font-medium flex items-center gap-2"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Quick Metrics / Key Focus Area Bar */}
          <div className="pt-6 border-t border-slate-800/80 grid grid-cols-3 gap-4 sm:gap-8 w-full max-w-lg">
            <div>
              <div className="text-2xl font-heading font-bold text-cyan-400">CSE</div>
              <div className="text-xs text-slate-400 mt-0.5">Undergraduate Degree</div>
            </div>
            <div>
              <div className="text-2xl font-heading font-bold text-blue-400">8+</div>
              <div className="text-xs text-slate-400 mt-0.5">Core Tech Domains</div>
            </div>
            <div>
              <div className="text-2xl font-heading font-bold text-emerald-400">Active</div>
              <div className="text-xs text-slate-400 mt-0.5">GitHub Repos & Labs</div>
            </div>
          </div>

        </div>

        {/* Right 3D Visual Profile Column (5 cols) */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
          
          <CardTilt maxTilt={14} glareEffect={true} scaleOnHover={1.03} className="relative z-10">
            {/* Glowing Backdrop Aura */}
            <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-cyan-500/30 via-blue-600/20 to-teal-400/20 blur-2xl opacity-70 animate-pulse pointer-events-none" />

            {/* Circular stylish glassmorphism frame with glowing borders */}
            <div className="relative p-3 rounded-full bg-gradient-to-b from-cyan-500/40 via-slate-800/60 to-blue-600/40 shadow-2xl shadow-cyan-950/60 border border-cyan-400/40 backdrop-blur-xl">
              
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-2 border-cyan-400/60 shadow-inner group">
                <img
                  src={selectedImage === 'profile' ? photo1 : photo2}
                  alt={PERSONAL_INFO.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Subtle cyber grid overlay on image hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f17]/80 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />

                {/* Overlay camera button on hover */}
                <button
                  onClick={openUploadModal}
                  className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-full bg-slate-950/80 hover:bg-cyan-500 text-cyan-300 hover:text-slate-950 border border-cyan-500/40 text-xs font-mono flex items-center gap-1.5 transition-all shadow-lg backdrop-blur-sm opacity-85 hover:opacity-100"
                  title="আপনার আসল ২টি ছবি সেট করুন"
                >
                  <Camera className="w-3.5 h-3.5" />
                  <span>{isCustomPhoto1 || isCustomPhoto2 ? 'Change Photos' : 'Set My Photos'}</span>
                </button>
              </div>

              {/* Glowing decorative rings */}
              <div className="absolute -inset-1 rounded-full border border-cyan-400/20 pointer-events-none animate-spin" style={{ animationDuration: '30s' }} />
              <div className="absolute -inset-3 rounded-full border border-dashed border-blue-400/20 pointer-events-none animate-spin" style={{ animationDuration: '45s', animationDirection: 'reverse' }} />
            </div>

            {/* Floating Orbiting Tech Badges (3D motion effect) */}
            <div className="absolute -top-3 -left-4 sm:-left-6 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-cyan-500/40 text-cyan-300 text-xs font-mono shadow-lg flex items-center gap-1.5 backdrop-blur-md animate-bounce" style={{ animationDuration: '4s' }}>
              <Code className="w-3.5 h-3.5 text-cyan-400" />
              <span>React Native</span>
            </div>

            <div className="absolute top-1/2 -right-6 sm:-right-8 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-blue-500/40 text-blue-300 text-xs font-mono shadow-lg flex items-center gap-1.5 backdrop-blur-md animate-bounce" style={{ animationDuration: '5s', animationDelay: '1s' }}>
              <Database className="w-3.5 h-3.5 text-blue-400" />
              <span>DBMS & SQL</span>
            </div>

            <div className="absolute -bottom-3 left-6 sm:left-8 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-teal-500/40 text-teal-300 text-xs font-mono shadow-lg flex items-center gap-1.5 backdrop-blur-md animate-bounce" style={{ animationDuration: '4.5s', animationDelay: '0.5s' }}>
              <Cpu className="w-3.5 h-3.5 text-teal-400" />
              <span>Microprocessors</span>
            </div>
          </CardTilt>

          {/* Photo Switcher Controls (since 2 images were provided!) */}
          <div className="mt-8 flex items-center gap-2 bg-slate-900/80 border border-slate-800 p-1 rounded-xl backdrop-blur-sm z-10">
            <button
              onClick={() => setSelectedImage('profile')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-all ${
                selectedImage === 'profile'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <ImageIcon className="w-3 h-3" />
              <span>Photo 1 (Blue Shirt)</span>
            </button>
            <button
              onClick={() => setSelectedImage('portrait')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-all ${
                selectedImage === 'portrait'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <ImageIcon className="w-3 h-3" />
              <span>Photo 2 (Grey Shirt)</span>
            </button>
          </div>

          {/* GitHub Quick Link Pill */}
          <a
            href={PERSONAL_INFO.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 text-xs font-mono text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-1.5"
          >
            <Github className="w-3.5 h-3.5" />
            <span>github.com/smanik0002</span>
          </a>

        </div>

      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-500 text-xs font-mono pointer-events-none">
        <span>Scroll to Explore</span>
        <div className="w-5 h-8 rounded-full border border-slate-700 flex items-start justify-center p-1">
          <div className="w-1 h-2 rounded-full bg-cyan-400 animate-bounce" />
        </div>
      </div>
    </section>
  );
};
