import React, { useState } from 'react';
import { PageId, ConceptProject, ProjectCategory } from '../types';
import { projectsData } from '../data/projectsData';
import { ArrowRight, Info, Filter, ArrowUpRight } from 'lucide-react';

interface WorkPageProps {
  onNavigate: (page: PageId) => void;
  onSelectProject: (project: ConceptProject) => void;
}

export const WorkPage: React.FC<WorkPageProps> = ({ onNavigate, onSelectProject }) => {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('all');

  const filterTabs: { id: ProjectCategory; label: string }[] = [
    { id: 'all', label: 'All Projects' },
    { id: 'branding', label: 'Branding' },
    { id: 'websites', label: 'Websites' },
    { id: 'marketing', label: 'Marketing' },
    { id: 'content', label: 'Content' },
    { id: 'ai', label: 'AI & Automation' },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projectsData
    : projectsData.filter((p) => p.category === activeFilter);

  return (
    <div className="pt-32 sm:pt-40 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      {/* Page Header */}
      <div className="max-w-3xl space-y-4">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1677FF] bg-[#1677FF]/10 px-3 py-1 rounded">
            Portfolio & Case Studies
          </span>
          <span className="text-xs text-[#9AA6B2] font-mono">
            (6 Concept Demonstrations)
          </span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
          Selected Concepts & Experiments
        </h1>
        <p className="text-base sm:text-lg text-[#9AA6B2] leading-relaxed">
          We believe in radical honesty. Rather than inventing fake client testimonials, we present self-initiated concept projects engineered to illustrate our strategic approach, aesthetic standards, and technical execution.
        </p>
      </div>

      {/* Radical Transparency Notice Box */}
      <div className="p-4 sm:p-5 rounded-2xl bg-[#101722]/80 border border-white/10 flex items-start gap-3.5 text-xs text-[#9AA6B2]">
        <Info className="w-5 h-5 text-[#2D8CFF] shrink-0 mt-0.5" />
        <div className="space-y-1">
          <span className="text-white font-semibold block">
            Authenticity & Transparency Guarantee
          </span>
          <p className="leading-relaxed">
            The projects below are self-initiated concept demonstrations. They simulate real-world constraints across branding, high-converting web applications, paid marketing funnels, and n8n AI workflows. We never claim these are past paying clients.
          </p>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {filterTabs.map((tab) => {
          const isActive = activeFilter === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-4 py-2 text-xs font-medium rounded-lg whitespace-nowrap transition-colors ${
                isActive
                  ? 'bg-[#1677FF] text-white shadow-sm'
                  : 'bg-[#101722] text-[#9AA6B2] hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            onClick={() => onSelectProject(project)}
            className="group rounded-3xl bg-[#090D14] border border-white/10 hover:border-[#1677FF]/50 overflow-hidden cursor-pointer transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Image Container with Badging */}
              <div className="aspect-[4/3] bg-[#101722] relative overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.name} concept showcase`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 bg-[#05070B]/90 backdrop-blur-md px-2.5 py-1 rounded text-[10px] font-semibold text-[#1677FF] border border-white/10">
                  Concept Project
                </div>
                <div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur-md px-2.5 py-1 rounded text-[10px] font-mono text-white/80 border border-white/10">
                  {project.industry}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-4">
                <div>
                  <h2 className="text-xl font-bold text-white group-hover:text-[#2D8CFF] transition-colors">
                    {project.name}
                  </h2>
                  <p className="text-xs text-[#9AA6B2] mt-1.5 leading-relaxed line-clamp-2">
                    {project.summary}
                  </p>
                </div>

                {/* Problem & Strategic Pivot Summary */}
                <div className="space-y-2 pt-2 border-t border-white/5 text-xs">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-rose-400 block">
                      The Challenge
                    </span>
                    <p className="text-[#9AA6B2] line-clamp-2 text-[11px] mt-0.5">
                      {project.problem}
                    </p>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-[#2D8CFF] block">
                      Focuss Solution
                    </span>
                    <p className="text-[#F2F5F8] line-clamp-2 text-[11px] mt-0.5">
                      {project.solution}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Interactive Trigger */}
            <div className="px-6 pb-6 pt-3 border-t border-white/5 flex items-center justify-between text-xs font-semibold text-[#1677FF]">
              <span>View Case Breakdown</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA for Custom Solutions */}
      <div className="p-8 sm:p-12 rounded-3xl bg-[#090D14] border border-white/10 text-center space-y-4">
        <h3 className="text-2xl font-bold text-white">
          Ready to build a real case study for your business?
        </h3>
        <p className="text-xs sm:text-sm text-[#9AA6B2] max-w-xl mx-auto">
          We bring this same level of rigorous strategy, aesthetic precision, and technical engineering to every business we partner with.
        </p>
        <button
          onClick={() => onNavigate('contact')}
          className="mt-2 px-7 py-3 text-xs font-semibold text-white bg-[#1677FF] hover:bg-[#2D8CFF] rounded-xl transition-all inline-flex items-center gap-2 shadow-md shadow-[#1677FF]/20"
        >
          <span>Start Your Project</span>
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
