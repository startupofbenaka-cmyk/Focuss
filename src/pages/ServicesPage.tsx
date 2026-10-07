import React, { useState } from 'react';
import { PageId } from '../types';
import { servicesData } from '../data/servicesData';
import { 
  CheckCircle2, 
  ArrowRight, 
  ArrowUpRight, 
  Sparkles,
  Palette,
  Video,
  Globe,
  TrendingUp,
  Cpu,
  Briefcase,
  Layers
} from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: PageId) => void;
  onSelectServiceForContact: (serviceTitle: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onNavigate,
  onSelectServiceForContact
}) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Palette': return <Palette className="w-6 h-6 text-[#1677FF]" />;
      case 'Video': return <Video className="w-6 h-6 text-[#1677FF]" />;
      case 'Globe': return <Globe className="w-6 h-6 text-[#1677FF]" />;
      case 'TrendingUp': return <TrendingUp className="w-6 h-6 text-[#1677FF]" />;
      case 'Cpu': return <Cpu className="w-6 h-6 text-[#1677FF]" />;
      case 'Briefcase': return <Briefcase className="w-6 h-6 text-[#1677FF]" />;
      default: return <Layers className="w-6 h-6 text-[#1677FF]" />;
    }
  };

  const filteredServices = selectedFilter === 'all'
    ? servicesData
    : servicesData.filter((s) => s.id === selectedFilter);

  return (
    <div className="pt-32 sm:pt-40 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <span className="text-xs font-bold uppercase tracking-wider text-[#1677FF] bg-[#1677FF]/10 px-3 py-1 rounded">
          Full-Stack Capabilities
        </span>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
          Everything your business needs to move forward.
        </h1>
        <p className="text-base sm:text-lg text-[#9AA6B2] leading-relaxed">
          Focuss combines creative execution, technology, marketing and business strategy to solve practical growth problems. No disjointed agency handoffs—just clean, unified execution.
        </p>
      </div>

      {/* Filter Tabs / Quick Jump */}
      <div className="flex flex-wrap items-center gap-2 pb-4 border-b border-white/10">
        <button
          onClick={() => setSelectedFilter('all')}
          className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors ${
            selectedFilter === 'all'
              ? 'bg-[#1677FF] text-white'
              : 'bg-[#101722] text-[#9AA6B2] hover:text-white'
          }`}
        >
          All 6 Services
        </button>
        {servicesData.map((s) => (
          <button
            key={s.id}
            onClick={() => setSelectedFilter(s.id)}
            className={`px-3.5 py-2 text-xs font-medium rounded-lg transition-colors ${
              selectedFilter === s.id
                ? 'bg-[#1677FF] text-white'
                : 'bg-[#101722] text-[#9AA6B2] hover:text-white'
            }`}
          >
            {s.title}
          </button>
        ))}
      </div>

      {/* Services List / Cards */}
      <div className="space-y-12">
        {filteredServices.map((service) => (
          <div
            key={service.id}
            id={service.id}
            className="p-8 sm:p-12 rounded-3xl bg-[#090D14] border border-white/10 space-y-8 relative overflow-hidden"
          >
            {/* Top Row: Index, Icon, Title, Summary */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-white/10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#101722] border border-white/10 flex items-center justify-center shrink-0">
                  {getServiceIcon(service.iconName)}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-[#1677FF]">
                      SERVICE {service.number}
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
                    {service.title}
                  </h2>
                  <p className="text-sm font-medium text-[#2D8CFF] mt-1">
                    {service.tagline}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onSelectServiceForContact(service.title)}
                className="px-6 py-3 text-xs font-semibold text-white bg-[#1677FF] hover:bg-[#2D8CFF] active:scale-[0.98] rounded-xl transition-all self-start lg:self-center flex items-center gap-2 shrink-0 shadow-md shadow-[#1677FF]/20"
              >
                <span>Enquire About {service.title}</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

            {/* Description & Impact */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-4">
                <p className="text-sm sm:text-base text-[#F2F5F8] leading-relaxed">
                  {service.description}
                </p>
                <div className="p-4 rounded-xl bg-[#101722] border border-white/5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#4DA3FF] block mb-1">
                    Target Business Outcome
                  </span>
                  <p className="text-xs text-[#9AA6B2] leading-relaxed">
                    {service.impact}
                  </p>
                </div>
              </div>

              {/* Scope & Deliverables Preview */}
              <div className="p-5 rounded-2xl bg-[#101722]/60 border border-white/5 space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-white block">
                  Core Package Deliverables
                </span>
                <ul className="space-y-2 text-xs text-[#9AA6B2]">
                  {service.deliverables.map((del, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-2">
                      <span className="text-[#1677FF] font-bold">✓</span>
                      <span>{del}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Scope Capabilities Breakdown Grid */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#9AA6B2] mb-4">
                Specific Disciplines & Skills Included
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {service.capabilities.map((cap, cIdx) => (
                  <div
                    key={cIdx}
                    className="p-3.5 rounded-xl bg-[#05070B] border border-white/5 flex items-center gap-3 text-xs text-[#F2F5F8]"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#1677FF] shrink-0" />
                    <span>{cap}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Consultation Banner */}
      <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#101722] via-[#090D14] to-[#101722] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-white">
            Not sure which service fits your current stage?
          </h3>
          <p className="text-xs sm:text-sm text-[#9AA6B2] mt-1 max-w-xl">
            Book a 20-minute diagnostic session directly with our founder. We'll audit your bottleneck and suggest the most high-leverage starting point.
          </p>
        </div>
        <button
          onClick={() => onNavigate('contact')}
          className="px-6 py-3.5 text-xs font-semibold text-white bg-[#1677FF] hover:bg-[#2D8CFF] rounded-xl transition-all whitespace-nowrap shadow-md shadow-[#1677FF]/25 flex items-center gap-2"
        >
          <span>Schedule Diagnostic</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
