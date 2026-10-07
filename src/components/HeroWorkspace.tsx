import React, { useState } from 'react';
import { 
  TrendingUp, 
  Workflow, 
  Code2, 
  Palette, 
  ArrowUpRight, 
  Check, 
  Zap, 
  Layers, 
  Activity,
  Play
} from 'lucide-react';

export const HeroWorkspace: React.FC<{ onExploreWork: () => void }> = ({ onExploreWork }) => {
  const [activeTab, setActiveTab] = useState<'growth' | 'automation' | 'creative'>('growth');
  const [metricSim, setMetricSim] = useState(false);

  return (
    <div className="relative w-full max-w-5xl mx-auto rounded-2xl border border-white/10 bg-[#090D14]/90 shadow-2xl shadow-[#1677FF]/10 overflow-hidden backdrop-blur-xl">
      {/* Top OS Window Chrome */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#05070B] border-b border-white/10 text-xs">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
          </div>
          <span className="text-[#9AA6B2] text-[11px] ml-2 font-mono hidden sm:inline">
            focuss.workspace / growth-engine
          </span>
        </div>

        {/* Workspace Switcher */}
        <div className="flex items-center gap-1 bg-[#101722] p-0.5 rounded-lg border border-white/5 text-[11px]">
          <button
            onClick={() => setActiveTab('growth')}
            className={`px-2.5 py-1 rounded-md transition-colors ${
              activeTab === 'growth'
                ? 'bg-[#1677FF] text-white font-medium shadow-sm'
                : 'text-[#9AA6B2] hover:text-white'
            }`}
          >
            Growth Pipeline
          </button>
          <button
            onClick={() => setActiveTab('automation')}
            className={`px-2.5 py-1 rounded-md transition-colors ${
              activeTab === 'automation'
                ? 'bg-[#1677FF] text-white font-medium shadow-sm'
                : 'text-[#9AA6B2] hover:text-white'
            }`}
          >
            n8n Automations
          </button>
          <button
            onClick={() => setActiveTab('creative')}
            className={`px-2.5 py-1 rounded-md transition-colors ${
              activeTab === 'creative'
                ? 'bg-[#1677FF] text-white font-medium shadow-sm'
                : 'text-[#9AA6B2] hover:text-white'
            }`}
          >
            Design & Code
          </button>
        </div>

        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          <span className="text-[11px] text-[#9AA6B2] font-mono hidden md:inline">
            SYSTEM READY
          </span>
        </div>
      </div>

      {/* Main Workspace Body */}
      <div className="p-4 sm:p-6 lg:p-8">
        {activeTab === 'growth' && (
          <div className="space-y-6">
            {/* Top Metric Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
              <div className="p-3 sm:p-4 rounded-xl bg-[#101722]/80 border border-white/5">
                <span className="text-[11px] text-[#9AA6B2] uppercase tracking-wider block">
                  Qualified Inbound
                </span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-xl sm:text-2xl font-bold font-mono text-white tabular-nums">
                    {metricSim ? '142' : '96'}
                  </span>
                  <span className="text-xs text-emerald-400 font-medium inline-flex items-center">
                    +185%
                  </span>
                </div>
                <span className="text-[10px] text-[#9AA6B2] mt-1 block">Through automated funnels</span>
              </div>

              <div className="p-3 sm:p-4 rounded-xl bg-[#101722]/80 border border-white/5">
                <span className="text-[11px] text-[#9AA6B2] uppercase tracking-wider block">
                  Lead Response Time
                </span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-xl sm:text-2xl font-bold font-mono text-white tabular-nums">
                    &lt; 2 min
                  </span>
                  <span className="text-xs text-[#2D8CFF] font-medium">99.4% faster</span>
                </div>
                <span className="text-[10px] text-[#9AA6B2] mt-1 block">AI intake webhook</span>
              </div>

              <div className="p-3 sm:p-4 rounded-xl bg-[#101722]/80 border border-white/5">
                <span className="text-[11px] text-[#9AA6B2] uppercase tracking-wider block">
                  Conversion Rate
                </span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-xl sm:text-2xl font-bold font-mono text-white tabular-nums">
                    {metricSim ? '6.4%' : '5.1%'}
                  </span>
                  <span className="text-xs text-emerald-400 font-medium">+2.8x</span>
                </div>
                <span className="text-[10px] text-[#9AA6B2] mt-1 block">Optimized offer page</span>
              </div>

              <div className="p-3 sm:p-4 rounded-xl bg-[#101722]/80 border border-white/5">
                <span className="text-[11px] text-[#9AA6B2] uppercase tracking-wider block">
                  Manual Hours Saved
                </span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-xl sm:text-2xl font-bold font-mono text-white tabular-nums">
                    28 hrs/wk
                  </span>
                  <span className="text-xs text-[#4DA3FF] font-medium">Auto-pilot</span>
                </div>
                <span className="text-[10px] text-[#9AA6B2] mt-1 block">No manual data entry</span>
              </div>
            </div>

            {/* Growth Graph & Acquisition Flow */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Interactive SVG Chart */}
              <div className="lg:col-span-2 p-5 rounded-xl bg-[#101722]/50 border border-white/10 relative">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h4 className="text-sm font-semibold text-white">
                      Customer Acquisition & Revenue Velocity
                    </h4>
                    <p className="text-xs text-[#9AA6B2]">
                      Targeted paid traffic + high-converting landing architecture
                    </p>
                  </div>
                  <button
                    onClick={() => setMetricSim(!metricSim)}
                    className="text-[11px] px-2.5 py-1 bg-white/5 hover:bg-[#1677FF] text-[#9AA6B2] hover:text-white rounded border border-white/10 transition-colors"
                  >
                    Simulate +30 Days
                  </button>
                </div>

                {/* SVG Line Chart */}
                <div className="h-44 w-full relative">
                  <svg className="w-full h-full" viewBox="0 0 500 160" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#1677FF" stopOpacity="0.35" />
                        <stop offset="100%" stopColor="#1677FF" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>
                    {/* Gridlines */}
                    <line x1="0" y1="40" x2="500" y2="40" stroke="rgba(255,255,255,0.05)" strokeDasharray="3 3" />
                    <line x1="0" y1="80" x2="500" y2="80" stroke="rgba(255,255,255,0.05)" strokeDasharray="3 3" />
                    <line x1="0" y1="120" x2="500" y2="120" stroke="rgba(255,255,255,0.05)" strokeDasharray="3 3" />

                    {/* Gradient Fill Area */}
                    <path
                      d={
                        metricSim
                          ? "M0,130 Q70,120 140,95 T280,60 T400,30 T500,10 L500,160 L0,160 Z"
                          : "M0,140 Q80,130 160,110 T320,80 T420,55 T500,35 L500,160 L0,160 Z"
                      }
                      fill="url(#chartGradient)"
                      className="transition-all duration-700 ease-out"
                    />

                    {/* Line Path */}
                    <path
                      d={
                        metricSim
                          ? "M0,130 Q70,120 140,95 T280,60 T400,30 T500,10"
                          : "M0,140 Q80,130 160,110 T320,80 T420,55 T500,35"
                      }
                      fill="none"
                      stroke="#1677FF"
                      strokeWidth="3"
                      strokeLinecap="round"
                      className="transition-all duration-700 ease-out"
                    />

                    {/* Peak focal point */}
                    <circle cx="500" cy={metricSim ? 10 : 35} r="4" fill="#4DA3FF" />
                    <circle cx="500" cy={metricSim ? 10 : 35} r="8" stroke="#1677FF" strokeWidth="1.5" strokeOpacity="0.5" />
                  </svg>
                </div>

                <div className="flex items-center justify-between text-[11px] text-[#9AA6B2] mt-2 pt-2 border-t border-white/5 font-mono">
                  <span>Month 1: Foundation</span>
                  <span>Month 2: Funnel Launch</span>
                  <span>Month 3: Creative Scaling</span>
                  <span className="text-[#2D8CFF] font-semibold">Month 4+: Automation Maturity</span>
                </div>
              </div>

              {/* Side Live Feed */}
              <div className="p-5 rounded-xl bg-[#101722]/50 border border-white/10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-white">
                      Live Funnel Actions
                    </span>
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  </div>
                  <div className="space-y-3">
                    <div className="p-2.5 rounded-lg bg-[#090D14] border border-white/5 text-xs">
                      <div className="flex items-center justify-between text-[#9AA6B2] text-[10px] mb-1">
                        <span>Paid Meta Campaign</span>
                        <span>Just now</span>
                      </div>
                      <p className="text-white font-medium">New Discovery Form Completed</p>
                      <p className="text-[11px] text-emerald-400">Qualified Budget Tier: $5k - $10k</p>
                    </div>

                    <div className="p-2.5 rounded-lg bg-[#090D14] border border-white/5 text-xs">
                      <div className="flex items-center justify-between text-[#9AA6B2] text-[10px] mb-1">
                        <span>n8n AI Intake Agent</span>
                        <span>12s ago</span>
                      </div>
                      <p className="text-white font-medium">Enrichment & CRM Sync</p>
                      <p className="text-[11px] text-[#2D8CFF]">Sent personalized booking calendar</p>
                    </div>

                    <div className="p-2.5 rounded-lg bg-[#090D14] border border-white/5 text-xs">
                      <div className="flex items-center justify-between text-[#9AA6B2] text-[10px] mb-1">
                        <span>Website Core Web Vitals</span>
                        <span>2m ago</span>
                      </div>
                      <p className="text-white font-medium">PageSpeed Performance: 99/100</p>
                      <p className="text-[11px] text-[#9AA6B2]">Largest Contentful Paint: 0.6s</p>
                    </div>
                  </div>
                </div>

                <button
                  onClick={onExploreWork}
                  className="mt-4 w-full py-2 text-xs font-medium text-white bg-[#101722] hover:bg-[#1677FF] border border-white/10 hover:border-[#1677FF] rounded-lg transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>View Proof & Concept Projects</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'automation' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 pb-2">
              <div>
                <h4 className="text-sm font-semibold text-white">
                  n8n Intelligent Automation Architecture
                </h4>
                <p className="text-xs text-[#9AA6B2]">
                  Self-healing webhook pipelines syncing forms, AI qualification, and instant calendar scheduling.
                </p>
              </div>
              <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded border border-emerald-500/20">
                ACTIVE WORKFLOW (24/7)
              </span>
            </div>

            {/* Workflow Pipeline Diagram */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl bg-[#101722] border border-white/10 relative">
                <div className="w-8 h-8 rounded-lg bg-[#1677FF]/20 text-[#2D8CFF] flex items-center justify-center mb-3">
                  <Activity className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-mono uppercase text-[#9AA6B2] block">Step 01</span>
                <h5 className="text-sm font-bold text-white mt-1">Inbound Trigger</h5>
                <p className="text-xs text-[#9AA6B2] mt-1.5 leading-relaxed">
                  Prospect submits consultation form or engages with voice booking agent.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#101722] border border-white/10 relative">
                <div className="w-8 h-8 rounded-lg bg-[#1677FF]/20 text-[#2D8CFF] flex items-center justify-center mb-3">
                  <Zap className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-mono uppercase text-[#9AA6B2] block">Step 02</span>
                <h5 className="text-sm font-bold text-white mt-1">AI Qualification</h5>
                <p className="text-xs text-[#9AA6B2] mt-1.5 leading-relaxed">
                  Model checks fit criteria, enriches company data, and tags high-intent leads.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#101722] border border-white/10 relative">
                <div className="w-8 h-8 rounded-lg bg-[#1677FF]/20 text-[#2D8CFF] flex items-center justify-center mb-3">
                  <Workflow className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-mono uppercase text-[#9AA6B2] block">Step 03</span>
                <h5 className="text-sm font-bold text-white mt-1">CRM Sync & Slack</h5>
                <p className="text-xs text-[#9AA6B2] mt-1.5 leading-relaxed">
                  Lead inserted into pipeline, founder notified with tailored conversation brief.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#101722] border border-emerald-500/30 bg-emerald-500/5 relative">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-3">
                  <Check className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-mono uppercase text-emerald-400 block">Step 04</span>
                <h5 className="text-sm font-bold text-white mt-1">Instant Calendar</h5>
                <p className="text-xs text-[#9AA6B2] mt-1.5 leading-relaxed">
                  SMS / WhatsApp confirmation dispatched with zero friction.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#101722]/50 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
              <span className="text-[#9AA6B2]">
                Eliminates the average 14-hour delay in business inquiry responses.
              </span>
              <button
                onClick={onExploreWork}
                className="px-4 py-2 text-white bg-[#1677FF] hover:bg-[#2D8CFF] rounded-lg transition-colors font-medium whitespace-nowrap"
              >
                Inspect AI & Automation Services
              </button>
            </div>
          </div>
        )}

        {activeTab === 'creative' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Creative Design System */}
              <div className="p-5 rounded-xl bg-[#101722] border border-white/10 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Palette className="w-4 h-4 text-[#1677FF]" />
                    <h5 className="text-sm font-semibold text-white">Visual Design System</h5>
                  </div>
                  <span className="text-[11px] text-[#9AA6B2] font-mono">FIGMA MASTER</span>
                </div>
                <p className="text-xs text-[#9AA6B2] leading-relaxed">
                  Crafting brand guidelines, typography hierarchies, and ad creative components that scale across Instagram, web, and physical print.
                </p>
                <div className="flex items-center gap-2 pt-2">
                  <div className="w-8 h-8 rounded-lg bg-[#05070B] border border-white/20 flex items-center justify-center text-[10px] text-white font-mono">
                    #05
                  </div>
                  <div className="w-8 h-8 rounded-lg bg-[#1677FF] flex items-center justify-center text-[10px] text-white font-mono">
                    #16
                  </div>
                  <div className="w-8 h-8 rounded-lg bg-[#2D8CFF] flex items-center justify-center text-[10px] text-white font-mono">
                    #2D
                  </div>
                  <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-[10px] text-black font-mono">
                    #FF
                  </div>
                </div>
              </div>

              {/* Code & Engineering */}
              <div className="p-5 rounded-xl bg-[#101722] border border-white/10 space-y-4 font-mono text-xs">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Code2 className="w-4 h-4 text-[#1677FF]" />
                    <h5 className="text-sm font-semibold text-white font-sans">Engineering Stack</h5>
                  </div>
                  <span className="text-[11px] text-emerald-400">REACT 19 + VITE</span>
                </div>
                <div className="p-3 rounded-lg bg-[#05070B] border border-white/5 text-[#9AA6B2] space-y-1 text-[11px]">
                  <p className="text-blue-400">const growthSystem = &#123;</p>
                  <p className="pl-4">framework: &quot;Vite + React 19 + TypeScript&quot;,</p>
                  <p className="pl-4">styling: &quot;Tailwind CSS v4&quot;,</p>
                  <p className="pl-4">performance: &quot;0ms Layout Shift / Core Web Vitals A+&quot;,</p>
                  <p className="pl-4">automation: &quot;n8n + OpenAI / Gemini Webhooks&quot;</p>
                  <p className="text-blue-400">&#125;;</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
