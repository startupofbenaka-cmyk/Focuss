import React from 'react';
import { PageId, ConceptProject } from '../types';
import { HeroWorkspace } from '../components/HeroWorkspace';
import { servicesData } from '../data/servicesData';
import { projectsData } from '../data/projectsData';
import { 
  ArrowRight, 
  ArrowUpRight, 
  CheckCircle2, 
  Palette, 
  Video, 
  Globe, 
  TrendingUp, 
  Cpu, 
  Briefcase,
  Layers,
  Sparkles,
  BarChart3,
  Bot,
  Zap,
  Target
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onSelectProject: (project: ConceptProject) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onSelectProject }) => {
  const featuredProjects = projectsData.slice(0, 3);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Palette': return <Palette className="w-5 h-5 text-[#1677FF]" />;
      case 'Video': return <Video className="w-5 h-5 text-[#1677FF]" />;
      case 'Globe': return <Globe className="w-5 h-5 text-[#1677FF]" />;
      case 'TrendingUp': return <TrendingUp className="w-5 h-5 text-[#1677FF]" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-[#1677FF]" />;
      case 'Briefcase': return <Briefcase className="w-5 h-5 text-[#1677FF]" />;
      default: return <Layers className="w-5 h-5 text-[#1677FF]" />;
    }
  };

  return (
    <div className="space-y-24 sm:space-y-32 pb-24 overflow-x-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 sm:pt-40 lg:pt-48 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Subtle background ambient blue glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] bg-[#1677FF]/10 blur-[120px] rounded-full pointer-events-none -z-10" />

        <div className="text-center max-w-3xl mx-auto space-y-6">
          {/* Trust Statement / Tagline */}
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#9AA6B2] bg-[#101722] px-4 py-1.5 rounded-full border border-white/10">
            <span>Design</span>
            <span className="text-[#1677FF]">•</span>
            <span>Technology</span>
            <span className="text-[#1677FF]">•</span>
            <span>Marketing</span>
            <span className="text-[#1677FF]">•</span>
            <span>Automation</span>
            <span className="text-[#1677FF]">•</span>
            <span>Growth</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08] text-balance">
            Build Better. <br />
            Market Smarter. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#F2F5F8] to-[#2D8CFF]">
              Grow Faster.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-[#9AA6B2] max-w-2xl mx-auto leading-relaxed">
            Focuss helps ambitious businesses improve their brand, digital presence, marketing, sales and operations through creative execution, modern technology, AI and automation.
          </p>

          {/* Primary Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <button
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto px-8 py-3.5 text-sm font-semibold text-white bg-[#1677FF] hover:bg-[#2D8CFF] active:scale-[0.98] rounded-xl shadow-lg shadow-[#1677FF]/25 transition-all flex items-center justify-center gap-2"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onNavigate('services')}
              className="w-full sm:w-auto px-7 py-3.5 text-sm font-medium text-[#F2F5F8] bg-[#101722] hover:bg-[#101722]/80 hover:text-white border border-white/10 rounded-xl transition-all flex items-center justify-center gap-2"
            >
              <span>Explore Our Services</span>
              <ArrowRight className="w-4 h-4 text-[#9AA6B2]" />
            </button>
          </div>

          <p className="text-xs text-[#9AA6B2] pt-2">
            Founder-led growth partner · No junior pass-offs · Direct strategic execution
          </p>
        </div>

        {/* HERO VISUAL: Live Workspace Interface */}
        <div className="mt-14 sm:mt-18">
          <HeroWorkspace onExploreWork={() => onNavigate('work')} />
        </div>
      </section>

      {/* 2. PROBLEM & SOLUTION SECTION */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="p-8 sm:p-12 lg:p-16 rounded-3xl bg-[#090D14] border border-white/10 relative overflow-hidden">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1677FF] block mb-2">
              The Reality of Fragmented Growth
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Your business doesn't need more noise. <br />
              <span className="text-[#2D8CFF]">It needs Focuss.</span>
            </h2>
            <p className="text-sm sm:text-base text-[#9AA6B2] mt-4 leading-relaxed">
              Most businesses don't fail for lack of effort. They struggle because their efforts are scattered across disconnected freelancers who don't understand the larger business objective.
            </p>
          </div>

          {/* Pain Points vs Focuss Solution Grid */}
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* The Usual Struggle */}
            <div className="space-y-3 p-6 rounded-2xl bg-[#05070B] border border-white/5">
              <h3 className="text-sm font-bold uppercase tracking-wider text-rose-400">
                Where Businesses Get Stuck
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-[#9AA6B2]">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500/80 mt-2 shrink-0" />
                  <span><strong>Weak branding:</strong> Inconsistent logos and visuals that fail to command premium pricing.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500/80 mt-2 shrink-0" />
                  <span><strong>Outdated websites:</strong> Slow, template-heavy pages that look like every competitor and don't convert.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500/80 mt-2 shrink-0" />
                  <span><strong>Ineffective advertising:</strong> Burning ad spend on vanity impressions with low-quality leads.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500/80 mt-2 shrink-0" />
                  <span><strong>Manual repetitive busywork:</strong> Losing 20+ hours a week copying data between emails and spreadsheets.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500/80 mt-2 shrink-0" />
                  <span><strong>Lack of strategic direction:</strong> Chasing random hacks without a clear customer acquisition funnel.</span>
                </li>
              </ul>
            </div>

            {/* The Focuss Advantage */}
            <div className="space-y-3 p-6 rounded-2xl bg-[#101722] border border-[#1677FF]/30">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#4DA3FF]">
                The Focuss Solution
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-[#F2F5F8]">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1677FF] shrink-0 mt-1" />
                  <span><strong>One unified partner:</strong> Creative thinking, code, marketing, and operations aligned together.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1677FF] shrink-0 mt-1" />
                  <span><strong>Conversion-first web engineering:</strong> Fast, clean, bespoke websites engineered for measurable signups.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1677FF] shrink-0 mt-1" />
                  <span><strong>Performance-driven campaigns:</strong> Systematic creative testing and targeted ad funnels on Meta & Google.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1677FF] shrink-0 mt-1" />
                  <span><strong>Practical AI & automations:</strong> Hands-off intake, automated lead scoring, and instant scheduling via n8n.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1677FF] shrink-0 mt-1" />
                  <span><strong>Founder-level focus:</strong> You work directly with an experienced operator who cares about revenue.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SERVICE SNAPSHOT */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#1677FF] block mb-1">
              Core Capabilities
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Services Built for Measurable Progress
            </h2>
          </div>
          <button
            onClick={() => onNavigate('services')}
            className="text-xs font-semibold text-[#2D8CFF] hover:text-white flex items-center gap-1.5 transition-colors self-start md:self-end"
          >
            <span>View All Detailed Deliverables</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((svc) => (
            <div
              key={svc.id}
              onClick={() => onNavigate('services')}
              className="group p-6 rounded-2xl bg-[#090D14] hover:bg-[#101722] border border-white/10 hover:border-[#1677FF]/40 transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-[#101722] group-hover:bg-[#1677FF]/20 flex items-center justify-center border border-white/5 transition-colors">
                    {getServiceIcon(svc.iconName)}
                  </div>
                  <span className="text-xs font-mono text-[#9AA6B2] group-hover:text-white transition-colors">
                    {svc.number}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-[#2D8CFF] transition-colors">
                    {svc.title}
                  </h3>
                  <p className="text-xs text-[#9AA6B2] mt-2 leading-relaxed">
                    {svc.description}
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-xs">
                <span className="text-[#9AA6B2] group-hover:text-white transition-colors">
                  Explore Deliverables
                </span>
                <ArrowRight className="w-3.5 h-3.5 text-[#1677FF] group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. HOW WE WORK (4-STEP PROCESS) */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#090D14] border border-white/10">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1677FF] block mb-2">
              Our Operating Process
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              How We Work With You
            </h2>
            <p className="text-sm text-[#9AA6B2] mt-2">
              A disciplined four-step execution cycle designed to move fast without wasting cycles.
            </p>
          </div>

          {/* Timeline steps: Horizontal on desktop, vertical on mobile */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            {/* Desktop timeline line */}
            <div className="hidden md:block absolute top-7 left-8 right-8 h-0.5 bg-gradient-to-r from-[#1677FF] via-[#2D8CFF] to-white/10 -z-0" />

            <div className="relative z-10 p-5 rounded-2xl bg-[#05070B] border border-white/10">
              <div className="w-9 h-9 rounded-full bg-[#1677FF] text-white flex items-center justify-center text-xs font-bold font-mono mb-4 shadow-md shadow-[#1677FF]/30">
                01
              </div>
              <h3 className="text-base font-bold text-white">Understand</h3>
              <p className="text-xs text-[#9AA6B2] mt-2 leading-relaxed">
                We dissect your business, current bottlenecks, audience demographics, and margin drivers.
              </p>
            </div>

            <div className="relative z-10 p-5 rounded-2xl bg-[#05070B] border border-white/10">
              <div className="w-9 h-9 rounded-full bg-[#101722] text-[#2D8CFF] border border-[#2D8CFF]/40 flex items-center justify-center text-xs font-bold font-mono mb-4">
                02
              </div>
              <h3 className="text-base font-bold text-white">Strategize</h3>
              <p className="text-xs text-[#9AA6B2] mt-2 leading-relaxed">
                We identify high-leverage growth opportunities and design a practical implementation roadmap.
              </p>
            </div>

            <div className="relative z-10 p-5 rounded-2xl bg-[#05070B] border border-white/10">
              <div className="w-9 h-9 rounded-full bg-[#101722] text-white border border-white/20 flex items-center justify-center text-xs font-bold font-mono mb-4">
                03
              </div>
              <h3 className="text-base font-bold text-white">Build</h3>
              <p className="text-xs text-[#9AA6B2] mt-2 leading-relaxed">
                We execute: design brand systems, develop fast websites, deploy ads, and engineer automation pipelines.
              </p>
            </div>

            <div className="relative z-10 p-5 rounded-2xl bg-[#05070B] border border-white/10">
              <div className="w-9 h-9 rounded-full bg-[#101722] text-white border border-white/20 flex items-center justify-center text-xs font-bold font-mono mb-4">
                04
              </div>
              <h3 className="text-base font-bold text-white">Improve</h3>
              <p className="text-xs text-[#9AA6B2] mt-2 leading-relaxed">
                We track metrics, analyze conversion drop-offs, and iterate relentlessly to compound results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CONCEPT PROJECTS (PROOF & CAPABILITIES) */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1677FF]">
                Selected Concepts & Experiments
              </span>
              <span className="text-[11px] text-[#9AA6B2] bg-white/5 px-2 py-0.5 rounded border border-white/10">
                Self-Initiated Concept Projects
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Demonstrating Our Approach & Execution
            </h2>
            <p className="text-xs sm:text-sm text-[#9AA6B2] mt-2 max-w-2xl">
              We believe in radical honesty. These are self-initiated concept projects created to showcase our design systems, web development, and automation capabilities.
            </p>
          </div>
          <button
            onClick={() => onNavigate('work')}
            className="text-xs font-semibold text-[#2D8CFF] hover:text-white flex items-center gap-1.5 transition-colors self-start md:self-end"
          >
            <span>View All Concept Projects</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group rounded-2xl bg-[#090D14] border border-white/10 hover:border-[#1677FF]/50 overflow-hidden cursor-pointer transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="aspect-[4/3] bg-[#101722] relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-[#05070B]/85 backdrop-blur-md px-2.5 py-1 rounded text-[10px] font-semibold text-[#1677FF] border border-white/10">
                    Concept Project
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between text-xs text-[#9AA6B2] mb-1.5">
                    <span>{project.industry}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-[#2D8CFF] transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-xs text-[#9AA6B2] mt-2 line-clamp-2 leading-relaxed">
                    {project.summary}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 flex items-center justify-between text-xs text-[#1677FF] font-medium border-t border-white/5">
                <span>View Case Breakdown</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. BUSINESS IMPACT SECTION */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="p-8 sm:p-12 lg:p-16 rounded-3xl bg-[#090D14] border border-white/10">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1677FF] block mb-2">
              Measurable Business Impact
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Real Levers for Sustainable Growth
            </h2>
            <p className="text-sm text-[#9AA6B2] mt-2">
              Instead of relying on fabricated case statistics, we focus on concrete operational capabilities that drive enterprise value.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="p-5 rounded-2xl bg-[#05070B] border border-white/5 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#2D8CFF] block">
                Better Brand
              </span>
              <h3 className="text-base font-bold text-white">Stronger Identity</h3>
              <p className="text-xs text-[#9AA6B2] leading-relaxed">
                Build a memorable visual identity that commands higher customer trust and pricing authority.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#05070B] border border-white/5 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#2D8CFF] block">
                Better Reach
              </span>
              <h3 className="text-base font-bold text-white">Attract Attention</h3>
              <p className="text-xs text-[#9AA6B2] leading-relaxed">
                Produce hook-tested creative content and paid ad campaigns that cut through digital noise.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#05070B] border border-white/5 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#2D8CFF] block">
                Better Systems
              </span>
              <h3 className="text-base font-bold text-white">Automate Busywork</h3>
              <p className="text-xs text-[#9AA6B2] leading-relaxed">
                Eliminate manual data re-entry with n8n pipelines, AI lead qualification, and instant calendar routing.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#05070B] border border-white/5 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#2D8CFF] block">
                Better Sales
              </span>
              <h3 className="text-base font-bold text-white">Optimize Funnels</h3>
              <p className="text-xs text-[#9AA6B2] leading-relaxed">
                Streamline consultation scheduling, remove checkout hurdles, and raise conversion rates.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#05070B] border border-white/5 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#2D8CFF] block">
                Better Decisions
              </span>
              <h3 className="text-base font-bold text-white">Clarity & Data</h3>
              <p className="text-xs text-[#9AA6B2] leading-relaxed">
                Rely on customer journey diagnostics, competitor analysis, and unit economics to guide strategy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FINAL CALL TO ACTION */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="relative p-8 sm:p-14 lg:p-20 rounded-3xl bg-gradient-to-b from-[#101722] to-[#090D14] border border-white/10 text-center overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#1677FF]/15 blur-3xl pointer-events-none rounded-full" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Have a business worth growing?
            </h2>

            <p className="text-sm sm:text-base text-[#9AA6B2] leading-relaxed">
              Let's find the opportunities, build the right systems and move your business forward with clarity.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <button
                onClick={() => onNavigate('contact')}
                className="w-full sm:w-auto px-8 py-3.5 text-sm font-semibold text-white bg-[#1677FF] hover:bg-[#2D8CFF] active:scale-[0.98] rounded-xl shadow-lg shadow-[#1677FF]/25 transition-all flex items-center justify-center gap-2"
              >
                <span>Start a Conversation</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate('services')}
                className="w-full sm:w-auto px-7 py-3.5 text-sm font-medium text-white bg-[#05070B] hover:bg-black/80 border border-white/10 rounded-xl transition-all"
              >
                View Our Services
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
