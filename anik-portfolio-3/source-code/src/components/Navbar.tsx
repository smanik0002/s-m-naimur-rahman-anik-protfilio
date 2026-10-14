import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { usePhotos } from '../context/PhotoContext';
import { Github, Mail, Menu, X, Terminal, ArrowUpRight, MessageCircle, Camera, FileCode } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const { photo1, openUploadModal } = usePhotos();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Education', href: '#academics' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0b0f17]/85 backdrop-blur-md border-b border-cyan-500/20 py-3 shadow-lg shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#hero"
          id="navbar-brand-logo"
          className="group flex items-center gap-3 text-slate-100 transition-colors"
        >
          <div className="relative w-10 h-10 rounded-xl overflow-hidden border border-cyan-400/50 group-hover:border-cyan-400 group-hover:glow-cyan transition-all shadow-md shadow-cyan-950/50">
            <img
              src={photo1}
              alt={PERSONAL_INFO.name}
              className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform"
            />
            <div className="absolute inset-0 bg-cyan-500/10 group-hover:opacity-0 transition-opacity pointer-events-none" />
          </div>
          <div>
            <span className="font-heading font-bold text-lg tracking-tight group-hover:text-cyan-300 transition-colors block">
              S.M. Naimur
            </span>
            <span className="text-xs text-cyan-400/80 font-mono tracking-wider flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
              CSE Student & Developer
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-sm">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.label}
                href={link.href}
                id={`nav-link-${link.label.toLowerCase()}`}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 glow-cyan'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right CTA / Social Icons */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={openUploadModal}
            id="nav-photos-btn"
            className="px-3 py-2 rounded-xl bg-slate-900/80 border border-cyan-500/40 text-cyan-300 hover:text-white hover:bg-cyan-950/60 transition-all flex items-center gap-1.5 text-xs font-mono"
            title="Set or Change Your 2 Photos"
          >
            <Camera className="w-3.5 h-3.5 text-cyan-400" />
            <span>My Photos</span>
          </button>

          <a
            href="/portfolio-single-file.html"
            target="_blank"
            rel="noopener noreferrer"
            id="nav-single-file-html-btn"
            className="p-2 rounded-xl bg-slate-900/80 border border-cyan-500/30 text-cyan-400 hover:text-cyan-300 hover:border-cyan-400 hover:bg-slate-800 transition-all flex items-center gap-1.5 text-xs font-mono"
            title="Open Standalone Single-File HTML"
          >
            <FileCode className="w-4 h-4" />
            <span className="hidden lg:inline">Single-File HTML</span>
          </a>

          <a
            href={PERSONAL_INFO.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            id="nav-github-btn"
            className="p-2 rounded-xl bg-slate-900/80 border border-slate-700/80 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-slate-800 transition-all flex items-center gap-1.5 text-xs font-mono"
            title="GitHub Profile"
          >
            <Github className="w-4 h-4" />
            <span>GitHub</span>
          </a>

          <a
            href={PERSONAL_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="nav-whatsapp-btn"
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/40 text-emerald-300 hover:text-emerald-200 hover:border-emerald-400 transition-all flex items-center gap-2 text-xs font-medium"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Hire Me / WhatsApp</span>
          </a>

          <a
            href="#contact"
            id="nav-contact-cta"
            className="px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-xs tracking-wide transition-all shadow-md shadow-cyan-500/20 flex items-center gap-1.5"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href={PERSONAL_INFO.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-slate-800 text-slate-300"
            aria-label="GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            id="mobile-menu-toggle-btn"
            className="p-2 rounded-lg bg-slate-800/80 border border-slate-700 text-slate-300 hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-cyan-400" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-drawer"
          className="md:hidden bg-[#0b0f17]/95 border-b border-cyan-500/20 backdrop-blur-xl px-4 pt-3 pb-6 transition-all"
        >
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 rounded-xl text-slate-200 hover:bg-slate-800 hover:text-cyan-300 font-medium text-base transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-xs font-mono text-cyan-400/60">→</span>
              </a>
            ))}
            <div className="pt-3 mt-2 border-t border-slate-800 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openUploadModal();
                }}
                className="px-4 py-3 rounded-xl bg-cyan-950/60 border border-cyan-500/40 text-cyan-300 flex items-center justify-center gap-2 font-medium text-sm"
              >
                <Camera className="w-4 h-4 text-cyan-400" />
                <span>Set / Change 2 Photos</span>
              </button>
              <a
                href="/portfolio-single-file.html"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 rounded-xl bg-slate-900 border border-cyan-500/30 text-cyan-300 flex items-center justify-center gap-2 font-medium text-sm"
              >
                <FileCode className="w-4 h-4 text-cyan-400" />
                <span>View Single-File HTML</span>
              </a>
              <a
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 flex items-center justify-center gap-2 font-medium text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 rounded-xl bg-cyan-500 text-slate-950 font-semibold flex items-center justify-center gap-2 text-sm"
              >
                <span>Contact S M Naimur</span>
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
