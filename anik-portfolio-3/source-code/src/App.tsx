import React, { useState, useEffect } from 'react';
import { PhotoProvider, usePhotos } from './context/PhotoContext';
import { PhotoUploadModal } from './components/PhotoUploadModal';
import { Navbar } from './components/Navbar';
import { ThreeCanvas } from './components/ThreeCanvas';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { AcademicSection } from './components/AcademicSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { PERSONAL_INFO } from './data/portfolioData';
import { MessageCircle, Mail, Camera } from 'lucide-react';

function PortfolioContent() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [showFloatingBar, setShowFloatingBar] = useState<boolean>(false);
  const { openUploadModal } = usePhotos();

  useEffect(() => {
    const sectionIds = ['hero', 'about', 'skills', 'projects', 'academics', 'contact'];
    
    const handleScroll = () => {
      setShowFloatingBar(window.scrollY > 500);

      const scrollPosition = window.scrollY + 200;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0b0f17] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
      
      {/* Three.js Interactive 3D Canvas Background (Reacts to Mouse Parallax) */}
      <ThreeCanvas enableInteraction={true} />

      {/* Decorative ambient radial glows for futuristic depth */}
      <div 
        className="fixed top-0 left-1/4 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-3xl pointer-events-none -z-10" 
        aria-hidden="true" 
      />
      <div 
        className="fixed bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-10" 
        aria-hidden="true" 
      />

      {/* Fixed Navigation Bar */}
      <Navbar activeSection={activeSection} />

      {/* Main Portfolio Sections */}
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <AcademicSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Photo Upload / Update Modal */}
      <PhotoUploadModal />

      {/* Floating Quick Action Widget for Instant Connectivity */}
      {showFloatingBar && (
        <aside
          aria-label="Quick contact tools"
          className="fixed bottom-6 right-6 z-40 flex flex-col items-center gap-2.5 transition-all duration-300"
        >
          <button
            onClick={openUploadModal}
            className="w-11 h-11 rounded-full bg-cyan-500/90 hover:bg-cyan-400 text-slate-950 flex items-center justify-center shadow-lg shadow-cyan-500/30 hover:scale-110 transition-transform"
            title="Set / Change Your 2 Photos"
          >
            <Camera className="w-5 h-5" />
          </button>

          <a
            href={PERSONAL_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 flex items-center justify-center shadow-lg shadow-emerald-500/30 hover:scale-110 transition-transform"
            title="Instant WhatsApp Chat"
          >
            <MessageCircle className="w-6 h-6" />
          </a>

          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="w-11 h-11 rounded-full bg-slate-900/90 border border-cyan-500/40 text-cyan-400 hover:text-white hover:bg-slate-800 flex items-center justify-center shadow-lg shadow-black/40 hover:scale-110 transition-transform backdrop-blur-md"
            title="Email S M Naimur Rahman"
          >
            <Mail className="w-5 h-5" />
          </a>
        </aside>
      )}

    </div>
  );
}

export default function App() {
  return (
    <PhotoProvider>
      <PortfolioContent />
    </PhotoProvider>
  );
}
