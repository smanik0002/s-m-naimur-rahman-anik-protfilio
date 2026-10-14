import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { CardTilt } from './CardTilt';
import confetti from 'canvas-confetti';
import { 
  Mail, 
  Phone, 
  MessageCircle, 
  Send, 
  Copy, 
  Check, 
  Github, 
  Facebook, 
  Instagram, 
  ExternalLink,
  Sparkles,
  CheckCircle2,
  Clock
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#06b6d4', '#38bdf8', '#3b82f6']
    });
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate reliable submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      confetti({
        particleCount: 80,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#06b6d4', '#38bdf8', '#10b981', '#3b82f6']
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 6000);
    }, 1000);
  };

  const contactChannels = [
    {
      title: "Email",
      value: PERSONAL_INFO.email,
      href: `mailto:${PERSONAL_INFO.email}`,
      icon: Mail,
      accent: "text-cyan-400",
      border: "border-cyan-500/30",
      actionLabel: "Send Email"
    },
    {
      title: "Phone / WhatsApp",
      value: PERSONAL_INFO.phone,
      href: PERSONAL_INFO.whatsappUrl,
      icon: MessageCircle,
      accent: "text-emerald-400",
      border: "border-emerald-500/30",
      actionLabel: "Chat on WhatsApp"
    },
    {
      title: "GitHub",
      value: "github.com/smanik0002",
      href: PERSONAL_INFO.socials.github,
      icon: Github,
      accent: "text-slate-200",
      border: "border-slate-700",
      actionLabel: "View Repos"
    },
    {
      title: "Facebook",
      value: "cloudboy.anik",
      href: PERSONAL_INFO.socials.facebook,
      icon: Facebook,
      accent: "text-blue-400",
      border: "border-blue-500/30",
      actionLabel: "Connect"
    },
    {
      title: "Instagram",
      value: "@cloudboy.anik",
      href: PERSONAL_INFO.socials.instagram,
      icon: Instagram,
      accent: "text-pink-400",
      border: "border-pink-500/30",
      actionLabel: "Follow"
    }
  ];

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Let's Build Something <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Together</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Have a project, internship opportunity, or question? Feel free to reach out directly via WhatsApp, email, or by dropping a message below.
          </p>
        </div>

        {/* Content Layout: Direct Channels on Left, Interactive Form on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Cards with 3D Tilt (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            
            {/* Quick Email Copy Banner */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-cyan-950/40 via-slate-900/80 to-blue-950/30 border border-cyan-500/30 backdrop-blur-md shadow-xl">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block mb-1">
                    Direct Email Address
                  </span>
                  <div className="font-mono text-sm sm:text-base font-semibold text-white truncate max-w-[240px] sm:max-w-xs">
                    {PERSONAL_INFO.email}
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="px-3.5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-xs font-mono flex items-center gap-1.5 transition-all shadow-md shrink-0"
                >
                  {copiedEmail ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  <span>{copiedEmail ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>
            </div>

            {/* Contact Channels Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
              {contactChannels.map((channel) => {
                const Icon = channel.icon;
                return (
                  <CardTilt key={channel.title} maxTilt={6}>
                    <a
                      href={channel.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-4 rounded-xl bg-slate-900/70 border ${channel.border} hover:bg-slate-800/80 transition-all flex items-center justify-between group backdrop-blur-sm`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                          <Icon className={`w-5 h-5 ${channel.accent}`} />
                        </div>
                        <div className="truncate">
                          <span className="text-xs font-mono text-slate-400 block">{channel.title}</span>
                          <span className="text-sm font-medium text-white group-hover:text-cyan-300 transition-colors truncate block">
                            {channel.value}
                          </span>
                        </div>
                      </div>
                      <span className="text-xs font-mono text-cyan-400 opacity-80 group-hover:opacity-100 group-hover:translate-x-1 transition-all flex items-center gap-1 shrink-0 ml-2">
                        <span>{channel.actionLabel}</span>
                        <ExternalLink className="w-3 h-3" />
                      </span>
                    </a>
                  </CardTilt>
                );
              })}
            </div>

            {/* Quick Response Notice */}
            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 text-xs font-mono text-slate-400 flex items-center gap-2.5">
              <Clock className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Available for fast replies via WhatsApp: <strong className="text-slate-200">+8801999459065</strong></span>
            </div>

          </div>

          {/* Right Column: Contact Form with 3D Tilt (7 cols) */}
          <div className="lg:col-span-7">
            <CardTilt maxTilt={6} glareEffect={false}>
              <div className="p-8 sm:p-10 rounded-2xl bg-slate-900/80 border border-slate-800/90 backdrop-blur-xl shadow-2xl relative overflow-hidden">
                
                {/* Form Header */}
                <div className="mb-6">
                  <h3 className="font-heading font-bold text-2xl text-white">
                    Send a Message
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1">
                    Fill out the form below to initiate an email directly to S M Naimur Rahman Anik.
                  </p>
                </div>

                {submitted ? (
                  <div className="p-8 rounded-xl bg-cyan-950/40 border border-cyan-400/40 text-center flex flex-col items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>
                    <h4 className="font-heading font-bold text-xl text-white">
                      Message Prepared!
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-300 max-w-md">
                      Thank you for reaching out! You can also chat directly on WhatsApp at <span className="text-cyan-300 font-mono">+8801999459065</span>.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-2 text-xs font-mono text-cyan-400 hover:underline"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="contact-name" className="block text-xs font-mono text-slate-300 mb-1.5">
                          Your Name *
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. John Doe"
                          className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-sm transition-all"
                        />
                      </div>

                      <div>
                        <label htmlFor="contact-email" className="block text-xs font-mono text-slate-300 mb-1.5">
                          Your Email *
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="name@example.com"
                          className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-sm transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="contact-subject" className="block text-xs font-mono text-slate-300 mb-1.5">
                        Subject
                      </label>
                      <input
                        id="contact-subject"
                        type="text"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="Internship / Project Collaboration / Inquiry"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-sm transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-message" className="block text-xs font-mono text-slate-300 mb-1.5">
                        Message *
                      </label>
                      <textarea
                        id="contact-message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Hello Anik, I came across your portfolio and would like to discuss..."
                        className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-sm transition-all resize-none"
                      />
                    </div>

                    <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                      <p className="text-xs text-slate-400 font-mono">
                        Direct destination: <span className="text-cyan-400">{PERSONAL_INFO.email}</span>
                      </p>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        id="contact-submit-btn"
                        className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-sm tracking-wide transition-all shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
                      >
                        {isSubmitting ? (
                          <div className="w-5 h-5 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                        ) : (
                          <>
                            <span>Send Message</span>
                            <Send className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </CardTilt>
          </div>

        </div>

      </div>
    </section>
  );
};
