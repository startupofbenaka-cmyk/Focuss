import React, { useEffect } from 'react';
import { ConceptProject } from '../types';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';

interface ProjectModalProps {
  project: ConceptProject | null;
  onClose: () => void;
  onContactForSimilar: (projectName: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onContactForSimilar
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-[#090D14] border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-project-title"
      >
        {/* Header bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#05070B]/80 sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-wider text-[#1677FF] font-semibold bg-[#1677FF]/10 px-2.5 py-1 rounded">
              Self-Initiated Concept Project
            </span>
            <span className="text-xs text-[#9AA6B2] hidden sm:inline">
              · {project.industry}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#9AA6B2] hover:text-white rounded-lg hover:bg-white/5 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable content */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
          <div>
            <h2 id="modal-project-title" className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {project.name}
            </h2>
            <p className="text-sm text-[#9AA6B2] mt-1">
              Industry: {project.industry}
            </p>
            <p className="text-base text-[#F2F5F8] mt-3 leading-relaxed">
              {project.summary}
            </p>
          </div>

          {/* Project Visual Showcase */}
          <div className="rounded-xl overflow-hidden border border-white/10 bg-[#101722] aspect-[16/9] relative group">
            <img
              src={project.image}
              alt={`${project.name} visual design mockup`}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-3 right-3 bg-black/75 backdrop-blur-md px-3 py-1 rounded text-[11px] text-[#9AA6B2] border border-white/10">
              Concept Demonstration Mockup
            </div>
          </div>

          {/* Problem vs Strategy Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#101722] p-5 rounded-xl border border-white/5">
              <h3 className="text-xs font-bold uppercase tracking-wider text-rose-400 mb-2">
                01. The Business Challenge
              </h3>
              <p className="text-sm text-[#9AA6B2] leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="bg-[#101722] p-5 rounded-xl border border-white/5">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#2D8CFF] mb-2">
                02. Focuss Strategic Direction
              </h3>
              <p className="text-sm text-[#9AA6B2] leading-relaxed">
                {project.strategy}
              </p>
            </div>
          </div>

          {/* The Solution */}
          <div className="bg-[#101722]/60 p-6 rounded-xl border border-white/10">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#4DA3FF] mb-2">
              03. Execution & Solution
            </h3>
            <p className="text-sm text-[#F2F5F8] leading-relaxed">
              {project.solution}
            </p>
          </div>

          {/* Deliverables List */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
              Included Deliverables & Assets
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.deliverables.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-lg bg-[#101722]/40 border border-white/5 text-xs text-[#F2F5F8]"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#1677FF] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Expected Outcome */}
          <div className="p-4 rounded-xl bg-gradient-to-r from-[#1677FF]/15 to-transparent border border-[#1677FF]/30">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#4DA3FF] block mb-1">
              Projected Commercial Impact
            </span>
            <p className="text-sm font-medium text-white">
              {project.expectedImpact}
            </p>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-[#05070B] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11px] text-[#9AA6B2] text-center sm:text-left">
            Need a similar transformation for your company?
          </p>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-1/2 sm:w-auto px-4 py-2 text-xs font-medium text-[#9AA6B2] hover:text-white transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onContactForSimilar(project.name);
              }}
              className="w-1/2 sm:w-auto px-5 py-2 text-xs font-semibold text-white bg-[#1677FF] hover:bg-[#2D8CFF] rounded-lg transition-colors inline-flex items-center justify-center gap-2"
            >
              <span>Build Something Similar</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
