import React from 'react';
import { ACADEMIC_COURSES, EDUCATION_DATA, PERSONAL_INFO } from '../data/portfolioData';
import { usePhotos } from '../context/PhotoContext';
import { CardTilt } from './CardTilt';
import { 
  GraduationCap, 
  Cpu, 
  Network, 
  Database, 
  Binary, 
  CheckCircle2, 
  BookOpen, 
  Award,
  Calendar,
  Building2,
  MapPin,
  Sparkles,
  School,
  ExternalLink,
  ChevronRight,
  Camera
} from 'lucide-react';

const ICON_MAP: Record<string, React.ElementType> = {
  Cpu,
  Network,
  Database,
  Binary
};

export const AcademicSection: React.FC = () => {
  const { photo2, openUploadModal } = usePhotos();

  return (
    <section id="academics" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-4 glow-cyan">
            <GraduationCap className="w-4 h-4" />
            <span>Academic Background & Timeline</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Academic <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 bg-clip-text text-transparent">Journey & Timeline</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Chronological academic progression from school foundation to B.Sc. in Computer Science & Engineering at {PERSONAL_INFO.university}.
          </p>
        </div>

        {/* 1. Interactive Visual Timeline Grid with Integrated Image #2 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-20">
          
          {/* Left Column: Image #2 in Futuristic Glowing 3D Glass Frame (5 Cols) */}
          <div className="lg:col-span-5">
            <CardTilt maxTilt={8} glareEffect={true} className="w-full">
              <div className="p-6 rounded-3xl bg-slate-900/80 border border-cyan-500/40 backdrop-blur-xl shadow-2xl shadow-cyan-950/40 relative overflow-hidden group">
                
                {/* Glowing neon top accent */}
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-teal-400" />
                
                {/* Header tag */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Campus Academic Portrait</span>
                  </span>
                  <button
                    onClick={openUploadModal}
                    className="p-1.5 rounded-lg bg-slate-800/80 hover:bg-cyan-500/20 text-slate-400 hover:text-cyan-300 transition-colors"
                    title="Change Photo"
                  >
                    <Camera className="w-4 h-4" />
                  </button>
                </div>

                {/* The User's Image #2 (Portrait) */}
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border-2 border-cyan-500/40 shadow-inner group/img mb-4 bg-slate-950">
                  <img
                    src={photo2}
                    alt={`${PERSONAL_INFO.name} - Academic Portrait`}
                    className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/25 to-transparent flex flex-col justify-end p-5">
                    <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">Undergraduate Scholar</span>
                    <h3 className="font-heading text-xl font-bold text-white">{PERSONAL_INFO.name}</h3>
                    <p className="text-xs text-slate-300 mt-1 flex items-center gap-1.5">
                      <Building2 className="w-3 h-3 text-cyan-400" />
                      <span>{PERSONAL_INFO.university}</span>
                    </p>
                  </div>
                </div>

                {/* Quick Academic Meta */}
                <div className="space-y-2.5 pt-2">
                  <div className="flex items-center justify-between text-xs font-mono py-2 border-b border-slate-800">
                    <span className="text-slate-400">Current Discipline:</span>
                    <span className="text-cyan-300 font-semibold">B.Sc. in CSE</span>
                  </div>
                  <div className="flex items-center justify-between text-xs font-mono py-2 border-b border-slate-800">
                    <span className="text-slate-400">Current Status:</span>
                    <span className="text-emerald-400 font-semibold flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      Active Student
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-xs font-mono py-1">
                    <span className="text-slate-400">Location:</span>
                    <span className="text-slate-300 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-cyan-400" />
                      {PERSONAL_INFO.location}
                    </span>
                  </div>
                </div>

              </div>
            </CardTilt>
          </div>

          {/* Right Column: Interactive Vertical Timeline (7 Cols) */}
          <div className="lg:col-span-7 relative">
            <div className="relative pl-6 sm:pl-8 border-l-2 border-cyan-500/30 space-y-8">
              
              {EDUCATION_DATA.map((edu, idx) => {
                const isUniversity = edu.stage === 'University';
                return (
                  <div key={edu.stage} className="relative group">
                    
                    {/* Glowing Timeline Node / Milestone Dot */}
                    <div className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                      isUniversity 
                        ? 'bg-cyan-500 border-cyan-300 shadow-lg shadow-cyan-500/50 scale-110' 
                        : 'bg-slate-900 border-slate-600 group-hover:border-cyan-400'
                    }`}>
                      <span className={`w-2 h-2 rounded-full ${isUniversity ? 'bg-slate-950' : 'bg-cyan-400'}`} />
                    </div>

                    {/* Timeline Card */}
                    <CardTilt maxTilt={6} glareEffect={true}>
                      <div className={`p-6 sm:p-7 rounded-2xl bg-slate-900/80 border transition-all duration-300 backdrop-blur-md shadow-xl relative overflow-hidden ${
                        isUniversity
                          ? 'border-cyan-500/50 shadow-cyan-950/40 ring-1 ring-cyan-500/20'
                          : 'border-slate-800 hover:border-cyan-500/30'
                      }`}>
                        
                        {/* Period & Stage Header */}
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                          <span className={`text-xs font-mono px-3 py-1 rounded-full border ${
                            isUniversity
                              ? 'bg-cyan-500/15 text-cyan-300 border-cyan-500/40'
                              : 'bg-slate-800 text-slate-300 border-slate-700'
                          }`}>
                            {edu.stage}
                          </span>

                          <span className="text-xs font-mono text-cyan-400/90 flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5" />
                            <span>{edu.period}</span>
                          </span>
                        </div>

                        {/* Institution Name */}
                        <h4 className="font-heading font-bold text-xl text-white mb-1 group-hover:text-cyan-300 transition-colors">
                          {edu.institution}
                        </h4>

                        {/* Degree / Program */}
                        <div className="text-sm font-medium text-cyan-400 mb-3 flex items-center gap-1.5">
                          <GraduationCap className="w-4 h-4 shrink-0 text-cyan-400" />
                          <span>{edu.degree}</span>
                        </div>

                        {/* Location */}
                        <div className="text-xs text-slate-400 mb-4 flex items-center gap-1.5 font-mono">
                          <MapPin className="w-3.5 h-3.5 text-slate-500" />
                          <span>{edu.location}</span>
                        </div>

                        {/* Highlights List */}
                        <div className="space-y-2 pt-3 border-t border-slate-800/80">
                          {edu.highlights.map((item, hIdx) => (
                            <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-300 leading-relaxed">
                              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>

                        {/* Status Footer */}
                        <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between">
                          <span className="text-[11px] font-mono text-slate-400">Academic Status</span>
                          <span className={`text-xs font-mono px-2.5 py-0.5 rounded-md ${
                            edu.status === 'In Progress' 
                              ? 'bg-emerald-950/60 text-emerald-400 border border-emerald-500/30' 
                              : 'bg-slate-800 text-slate-300 border border-slate-700'
                          }`}>
                            {edu.status}
                          </span>
                        </div>

                      </div>
                    </CardTilt>

                  </div>
                );
              })}

            </div>
          </div>

        </div>

        {/* 2. Computer Science & Engineering Core Coursework */}
        <div>
          <div className="flex items-center gap-2 mb-8">
            <BookOpen className="w-5 h-5 text-blue-400" />
            <h3 className="font-heading font-bold text-2xl text-white">
              Core CSE Coursework & Technical Domains
            </h3>
            <div className="h-px bg-slate-800 flex-1 ml-4" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ACADEMIC_COURSES.map((course) => {
              const IconComp = ICON_MAP[course.icon] || BookOpen;
              return (
                <CardTilt key={course.code} maxTilt={10} glareEffect={true} className="h-full">
                  <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800/90 hover:border-cyan-500/40 transition-all duration-300 h-full flex flex-col justify-between group backdrop-blur-sm">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-mono text-cyan-400/90 bg-cyan-950/40 px-2.5 py-1 rounded-md border border-cyan-500/20">
                          {course.code}
                        </span>
                        <div className="w-8 h-8 rounded-lg bg-slate-800/80 border border-slate-700 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                          <IconComp className="w-4 h-4" />
                        </div>
                      </div>

                      <h4 className="font-heading font-bold text-base text-white mb-2 group-hover:text-cyan-300 transition-colors">
                        {course.title}
                      </h4>

                      <p className="text-xs text-slate-400 leading-relaxed">
                        {course.description}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-xs font-mono">
                      <span className="text-slate-500">Core Subject</span>
                      <span className="text-cyan-400 group-hover:translate-x-1 transition-transform flex items-center gap-1">
                        <span>Syllabus</span>
                        <ChevronRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </CardTilt>
              );
            })}
          </div>
        </div>

        {/* Academic Journey Summary Banner */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-slate-900/95 via-slate-900/80 to-slate-950/95 border border-cyan-500/25 backdrop-blur-md relative overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center shrink-0">
                <GraduationCap className="w-6 h-6 text-cyan-300" />
              </div>
              <div>
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">Current Degree</span>
                <h4 className="font-heading font-bold text-lg text-white mt-0.5">Undergraduate CSE</h4>
                <p className="text-xs text-slate-300 mt-1">
                  Khwaja Yunus Ali University
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/20 border border-blue-400/40 flex items-center justify-center shrink-0">
                <Award className="w-6 h-6 text-blue-300" />
              </div>
              <div>
                <span className="text-xs font-mono text-blue-400 uppercase tracking-wider">Technical Rigor</span>
                <h4 className="font-heading font-bold text-lg text-white mt-0.5">Theory + Applied Labs</h4>
                <p className="text-xs text-slate-300 mt-1">
                  Microprocessor Labs, SQL DB & Network Simulations
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-teal-500/20 border border-teal-400/40 flex items-center justify-center shrink-0">
                <Calendar className="w-6 h-6 text-teal-300" />
              </div>
              <div>
                <span className="text-xs font-mono text-teal-400 uppercase tracking-wider">Next Objective</span>
                <h4 className="font-heading font-bold text-lg text-white mt-0.5">Software Engineering</h4>
                <p className="text-xs text-slate-300 mt-1">
                  Ready for Web, Mobile, and DBMS Roles
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
