import React, { useState } from 'react';
import { SKILLS_DATA } from '../data/portfolioData';
import { SkillItem } from '../types';
import { CardTilt } from './CardTilt';
import { 
  Code2, 
  Palette, 
  Smartphone, 
  Database, 
  BrainCircuit, 
  Cpu, 
  Network, 
  FileSpreadsheet, 
  Sparkles,
  Layers,
  Filter,
  CheckCircle2
} from 'lucide-react';

const ICON_MAP: Record<string, React.ElementType> = {
  Code2,
  Palette,
  Smartphone,
  Database,
  BrainCircuit,
  Cpu,
  Network,
  FileSpreadsheet
};

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const categories = [
    'All',
    'Frontend & Mobile',
    'Core CS & Engineering',
    'Databases & Tools',
    'Productivity & Office'
  ];

  const filteredSkills = selectedCategory === 'All'
    ? SKILLS_DATA
    : SKILLS_DATA.filter((s) => s.category === selectedCategory);

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Skills & <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Core Competencies</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            A balanced synthesis of modern software technologies, foundational computer architecture, and academic problem-solving skills.
          </p>
        </div>

        {/* Category Filter Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 flex items-center gap-1.5 ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-semibold shadow-lg shadow-cyan-500/20'
                  : 'bg-slate-900/70 text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700'
              }`}
            >
              {selectedCategory === cat && <Sparkles className="w-3.5 h-3.5 text-slate-950" />}
              <span>{cat}</span>
            </button>
          ))}
        </div>

        {/* 3D Skills Grid with Perspective Tilt */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredSkills.map((skill) => {
            const IconComponent = ICON_MAP[skill.iconName] || Code2;
            const isHovered = hoveredSkill === skill.id;

            return (
              <CardTilt
                key={skill.id}
                maxTilt={12}
                scaleOnHover={1.03}
                glareEffect={true}
                className="h-full"
              >
                <div
                  onMouseEnter={() => setHoveredSkill(skill.id)}
                  onMouseLeave={() => setHoveredSkill(null)}
                  className={`p-6 rounded-2xl bg-slate-900/70 border transition-all duration-300 flex flex-col justify-between h-full backdrop-blur-md relative overflow-hidden group ${
                    isHovered
                      ? 'border-cyan-400/60 shadow-xl shadow-cyan-500/15 bg-slate-900/90'
                      : 'border-slate-800/80 hover:border-slate-700'
                  }`}
                >
                  {/* Subtle top glowing line */}
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div>
                    {/* Top row: Icon + Category Badge */}
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-cyan-500/10 to-blue-500/20 border border-cyan-500/30 flex items-center justify-center group-hover:scale-110 group-hover:border-cyan-400 transition-all">
                        <IconComponent className="w-6 h-6 text-cyan-400" />
                      </div>
                      <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-slate-800/90 text-cyan-300/90 border border-slate-700/60">
                        {skill.levelLabel}
                      </span>
                    </div>

                    {/* Skill Title */}
                    <h3 className="font-heading font-bold text-lg text-white mb-2 group-hover:text-cyan-300 transition-colors">
                      {skill.name}
                    </h3>

                    {/* Skill Description */}
                    <p className="text-xs text-slate-300 leading-relaxed mb-6">
                      {skill.description}
                    </p>
                  </div>

                  {/* Proficiency Progress Visualizer */}
                  <div>
                    <div className="flex items-center justify-between text-xs font-mono mb-2">
                      <span className="text-slate-400">Competency</span>
                      <span className="text-cyan-400 font-bold">{skill.level}%</span>
                    </div>

                    <div className="w-full h-2 rounded-full bg-slate-800/90 overflow-hidden p-0.5 border border-slate-700/50">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>

                  {/* Background Corner Glow */}
                  <div className="absolute -bottom-10 -right-10 w-24 h-24 rounded-full bg-cyan-500/10 blur-xl pointer-events-none group-hover:bg-cyan-500/20 transition-all" />
                </div>
              </CardTilt>
            );
          })}
        </div>

        {/* Highlight Banner: Key Tools & Productivity (MS Office Suite & Microprocessors) */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900/80 via-cyan-950/20 to-slate-900/80 border border-cyan-500/20 backdrop-blur-md flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center shrink-0">
              <Sparkles className="w-6 h-6 text-cyan-300" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-white text-base sm:text-lg">
                Academic Rigor & Industry Productivity
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
                Combining high-level software development (React Native & Web) with hardware-level architecture (8086 Assembly, Microprocessors) and corporate-ready documentation (MS Word, Excel, PowerPoint).
              </p>
            </div>
          </div>
          <a
            href="#projects"
            className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-medium hover:text-white transition-all whitespace-nowrap"
          >
            View Projects in Action →
          </a>
        </div>

      </div>
    </section>
  );
};
