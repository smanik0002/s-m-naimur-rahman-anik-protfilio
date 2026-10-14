import React, { useState, useEffect } from 'react';
import { PROJECTS_DATA, PERSONAL_INFO } from '../data/portfolioData';
import { ProjectItem } from '../types';
import { CardTilt } from './CardTilt';
import { 
  Github, 
  ExternalLink, 
  Star, 
  GitFork, 
  Layers, 
  FolderGit2, 
  Sparkles, 
  Smartphone, 
  Database, 
  Globe, 
  Cpu,
  RefreshCw,
  Eye
} from 'lucide-react';

interface GitHubApiRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  forks_count: number;
  topics?: string[];
  language?: string | null;
}

export const ProjectsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [liveRepos, setLiveRepos] = useState<ProjectItem[]>(PROJECTS_DATA);
  const [loading, setLoading] = useState<boolean>(false);
  const [isLiveConnected, setIsLiveConnected] = useState<boolean>(false);

  // Fetch repositories dynamically from GitHub
  useEffect(() => {
    const fetchGitHubRepos = async () => {
      try {
        setLoading(true);
        const res = await fetch('https://api.github.com/users/smanik0002/repos?sort=updated&per_page=12');
        if (!res.ok) throw new Error('GitHub API response not ok');
        const data: GitHubApiRepo[] = await res.json();

        if (Array.isArray(data) && data.length > 0) {
          const mappedRepos: ProjectItem[] = data.map((repo) => {
            const lang = repo.language || 'Code';
            let cat: ProjectItem['category'] = 'Web';
            if (repo.name.toLowerCase().includes('native') || repo.name.toLowerCase().includes('mobile') || repo.name.toLowerCase().includes('app')) {
              cat = 'Mobile';
            } else if (repo.name.toLowerCase().includes('db') || repo.name.toLowerCase().includes('sql') || repo.name.toLowerCase().includes('data')) {
              cat = 'Database';
            } else if (repo.name.toLowerCase().includes('algo') || repo.name.toLowerCase().includes('problem') || repo.name.toLowerCase().includes('asm') || repo.name.toLowerCase().includes('processor')) {
              cat = 'Systems & Algorithms';
            }

            return {
              id: String(repo.id),
              title: repo.name.replace(/-/g, ' ').replace(/_/g, ' '),
              description: repo.description || 'Interactive software repository by S M Naimur Rahman Anik hosted on GitHub.',
              tags: [lang, ...(repo.topics || [])].slice(0, 4),
              category: cat,
              githubUrl: repo.html_url,
              liveDemoUrl: repo.homepage || undefined,
              stars: repo.stargazers_count,
              forks: repo.forks_count,
              featured: true,
              highlights: [
                `Built with ${lang} and open-source tooling`,
                'Version controlled repository on GitHub',
                'Modular architecture following software development practices'
              ]
            };
          });

          // Merge curated featured projects with any live GitHub repos not already present
          const existingUrls = new Set(PROJECTS_DATA.map(p => p.githubUrl));
          const newRepos = mappedRepos.filter(r => !existingUrls.has(r.githubUrl));
          setLiveRepos([...PROJECTS_DATA, ...newRepos]);
          setIsLiveConnected(true);
        }
      } catch (err) {
        // Graceful fallback to curated data
        setLiveRepos(PROJECTS_DATA);
        setIsLiveConnected(false);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubRepos();
  }, []);

  const categories = ['All', 'Web', 'Mobile', 'Database', 'Systems & Algorithms'];

  const filteredProjects = activeTab === 'All'
    ? liveRepos
    : liveRepos.filter((p) => p.category === activeTab);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-3">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>GitHub Showcase & Applications</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              Featured <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Projects & Repositories</span>
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-300 max-w-2xl">
              Exploring solutions across mobile applications (React Native), database systems, 3D web interfaces, and algorithms.
            </p>
          </div>

          {/* GitHub Live sync status pill */}
          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-700 hover:border-cyan-400 text-slate-200 hover:text-cyan-300 transition-all text-xs font-mono flex items-center gap-2"
            >
              <Github className="w-4 h-4 text-cyan-400" />
              <span>@smanik0002</span>
              <ExternalLink className="w-3 h-3 text-slate-500" />
            </a>

            <div className="px-3 py-2 rounded-xl bg-slate-900/80 border border-slate-800 text-xs font-mono text-slate-400 flex items-center gap-2">
              <span className={`w-2 h-2 rounded-full ${isLiveConnected ? 'bg-emerald-400 animate-pulse' : 'bg-cyan-400'}`} />
              <span>{isLiveConnected ? 'GitHub Synced' : 'Curated Repos'}</span>
            </div>
          </div>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                activeTab === cat
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 glow-cyan'
                  : 'bg-slate-900/60 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 3D Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <CardTilt
              key={project.id}
              maxTilt={10}
              scaleOnHover={1.03}
              glareEffect={true}
              className="h-full"
            >
              <div className="p-6 rounded-2xl bg-slate-900/75 border border-slate-800/80 hover:border-cyan-400/50 transition-all duration-300 flex flex-col justify-between h-full backdrop-blur-md relative overflow-hidden group shadow-xl hover:shadow-cyan-500/10">
                
                {/* Header Badge Row */}
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-cyan-950/60 text-cyan-300 border border-cyan-500/30 flex items-center gap-1.5">
                      {project.category === 'Mobile' && <Smartphone className="w-3 h-3" />}
                      {project.category === 'Database' && <Database className="w-3 h-3" />}
                      {project.category === 'Web' && <Globe className="w-3 h-3" />}
                      {project.category === 'Systems & Algorithms' && <Cpu className="w-3 h-3" />}
                      <span>{project.category}</span>
                    </span>

                    <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                      {typeof project.stars === 'number' && (
                        <span className="flex items-center gap-1">
                          <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                          <span>{project.stars}</span>
                        </span>
                      )}
                      {typeof project.forks === 'number' && (
                        <span className="flex items-center gap-1">
                          <GitFork className="w-3 h-3 text-slate-400" />
                          <span>{project.forks}</span>
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading font-bold text-xl text-white group-hover:text-cyan-300 transition-colors mb-2 line-clamp-1">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Bottom Tags & Action Buttons */}
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-slate-800 text-slate-300 border border-slate-700/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-3">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="text-xs font-mono text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 transition-colors"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Details</span>
                    </button>

                    <div className="flex items-center gap-2">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-cyan-400 border border-slate-700/80 transition-all flex items-center gap-1.5 text-xs font-mono"
                        title="View Source on GitHub"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>Code</span>
                        <ExternalLink className="w-3 h-3 opacity-60" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Subtle bottom decorative glow */}
                <div className="absolute -bottom-12 -left-12 w-28 h-28 rounded-full bg-cyan-500/10 blur-xl group-hover:bg-cyan-500/20 transition-all pointer-events-none" />
              </div>
            </CardTilt>
          ))}
        </div>

        {/* View all on GitHub banner */}
        <div className="mt-14 text-center">
          <a
            href={PERSONAL_INFO.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            id="view-github-profile-btn"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-slate-900 to-slate-800 hover:from-slate-800 hover:to-slate-700 border border-cyan-500/40 hover:border-cyan-400 text-cyan-300 hover:text-white font-mono text-xs sm:text-sm font-semibold transition-all shadow-lg glow-cyan"
          >
            <Github className="w-4 h-4" />
            <span>View GitHub Profile</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative max-w-xl w-full rounded-2xl bg-slate-900 border border-cyan-500/40 p-6 sm:p-8 shadow-2xl text-left"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block mb-1">
                  {selectedProject.category}
                </span>
                <h3 className="font-heading text-2xl font-bold text-white">
                  {selectedProject.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed mb-6">
              {selectedProject.description}
            </p>

            {selectedProject.highlights && (
              <div className="mb-6">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                  Key Technical Highlights:
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-200">
                  {selectedProject.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-cyan-400 mt-0.5">•</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="flex flex-wrap gap-2 mb-8">
              {selectedProject.tags.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 rounded-lg bg-slate-800 text-cyan-300 border border-slate-700 text-xs font-mono"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-800">
              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs font-mono flex items-center gap-2 transition-all"
              >
                <Github className="w-4 h-4" />
                <span>Open in GitHub</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
