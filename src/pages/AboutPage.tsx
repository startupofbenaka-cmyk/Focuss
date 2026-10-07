import React from 'react';
import { PageId } from '../types';
import { ArrowRight, ArrowUpRight, CheckCircle2, ShieldCheck, Zap, Target, Users, Compass } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="pt-32 sm:pt-40 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-20">
      {/* 1. HERO SECTION */}
      <div className="max-w-3xl space-y-6">
        <span className="text-xs font-bold uppercase tracking-wider text-[#1677FF] bg-[#1677FF]/10 px-3 py-1 rounded">
          Founder-Led Growth Practice
        </span>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
          Small by design. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#2D8CFF]">
            Focused by nature.
          </span>
        </h1>
        <p className="text-base sm:text-xl text-[#9AA6B2] leading-relaxed">
          Focuss is a founder-led service business built around one simple conviction: businesses don't need disconnected freelancers for every problem. They need someone who can understand the bigger picture and connect design, technology, marketing, and business strategy.
        </p>
      </div>

      {/* 2. THE FOUNDER'S NOTE & WHY WE EXIST */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-5 p-8 rounded-3xl bg-[#090D14] border border-white/10 space-y-6">
          <div className="w-12 h-12 rounded-2xl bg-[#101722] border border-white/10 flex items-center justify-center">
            <Compass className="w-6 h-6 text-[#1677FF]" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">The Agency Broken Model</h2>
            <p className="text-xs text-[#9AA6B2] mt-2 leading-relaxed">
              Traditional agencies sell you on the senior partner, then pass your account off to an inexperienced junior while charging a 400% markup. Freelancer platforms give you fragmented contractors who care about completing a gig, not whether your sales actually grow.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-[#101722] border border-white/5 space-y-2 text-xs">
            <span className="text-white font-semibold block">The Focuss Standard:</span>
            <p className="text-[#9AA6B2] leading-relaxed">
              You communicate directly with the founder. Every line of code, every marketing campaign, and every automation node is held to commercial accountability.
            </p>
          </div>
        </div>

        <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-[#101722] border border-white/10 space-y-6">
          <span className="text-xs font-bold uppercase tracking-wider text-[#2D8CFF]">
            Our Guiding Philosophy
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
            Understand → Build → Measure → Improve
          </h3>
          <p className="text-sm text-[#F2F5F8] leading-relaxed">
            We don't believe in vanity redesigns or buzzword-heavy AI promises that don't produce revenue. Our work is grounded in real business fundamentals: What is your actual gross margin? Where are prospects dropping off? Which manual processes are slowing down customer fulfillment?
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-[#05070B] border border-white/5 space-y-1.5">
              <span className="text-xs font-mono font-bold text-[#1677FF]">01. Understand</span>
              <p className="text-xs text-[#9AA6B2]">
                We unpack unit economics, buyer friction, and competitive differentiation before touching design files.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[#05070B] border border-white/5 space-y-1.5">
              <span className="text-xs font-mono font-bold text-[#1677FF]">02. Build</span>
              <p className="text-xs text-[#9AA6B2]">
                We ship high-performance assets—clean websites, tested ad creatives, and resilient n8n automation pipelines.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[#05070B] border border-white/5 space-y-1.5">
              <span className="text-xs font-mono font-bold text-[#1677FF]">03. Measure</span>
              <p className="text-xs text-[#9AA6B2]">
                We audit real conversion data, qualified inbound volume, and page speed rather than abstract impressions.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[#05070B] border border-white/5 space-y-1.5">
              <span className="text-xs font-mono font-bold text-[#1677FF]">04. Improve</span>
              <p className="text-xs text-[#9AA6B2]">
                We iteratively refine offers and workflows so your digital presence continuously compounds value over time.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 3. WHAT MAKES US DIFFERENT */}
      <div className="p-8 sm:p-12 lg:p-16 rounded-3xl bg-[#090D14] border border-white/10 space-y-10">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1677FF] block mb-2">
            Core Differentiators
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            We don't just deliver files. <br />
            We understand the business objective behind them.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-[#05070B] border border-white/5 space-y-3">
            <div className="w-9 h-9 rounded-xl bg-[#1677FF]/20 flex items-center justify-center text-[#2D8CFF]">
              <Target className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-white">One Focused Partner</h4>
            <p className="text-xs text-[#9AA6B2] leading-relaxed">
              No multiple contractor management overhead. One partner orchestrating your brand, web development, paid traffic, and automated operations seamlessly.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#05070B] border border-white/5 space-y-3">
            <div className="w-9 h-9 rounded-xl bg-[#1677FF]/20 flex items-center justify-center text-[#2D8CFF]">
              <Zap className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-white">AI-Assisted Rapid Execution</h4>
            <p className="text-xs text-[#9AA6B2] leading-relaxed">
              We leverage modern AI tools to code faster, iterate creative variations in hours instead of weeks, and pass those speed advantages directly to your business.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#05070B] border border-white/5 space-y-3">
            <div className="w-9 h-9 rounded-xl bg-[#1677FF]/20 flex items-center justify-center text-[#2D8CFF]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-white">Radical Honesty</h4>
            <p className="text-xs text-[#9AA6B2] leading-relaxed">
              If your current website doesn't need a rebuild and your ad creative is the real bottleneck, we'll tell you directly. We don't sell bloated retainers you don't need.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#05070B] border border-white/5 space-y-3">
            <div className="w-9 h-9 rounded-xl bg-[#1677FF]/20 flex items-center justify-center text-[#2D8CFF]">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-white">Practical Business-First Thinking</h4>
            <p className="text-xs text-[#9AA6B2] leading-relaxed">
              Every deliverable must have a commercial purpose: lower customer acquisition cost, higher retention, faster response time, or higher margins.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#05070B] border border-white/5 space-y-3">
            <div className="w-9 h-9 rounded-xl bg-[#1677FF]/20 flex items-center justify-center text-[#2D8CFF]">
              <Users className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-white">Direct Founder Accessibility</h4>
            <p className="text-xs text-[#9AA6B2] leading-relaxed">
              When you have a strategic question or need an urgent change, you talk directly with the person who builds the systems. Zero telephone game.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#05070B] border border-white/5 space-y-3">
            <div className="w-9 h-9 rounded-xl bg-[#1677FF]/20 flex items-center justify-center text-[#2D8CFF]">
              <Compass className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-white">Continuous Compounding</h4>
            <p className="text-xs text-[#9AA6B2] leading-relaxed">
              Great growth systems aren't one-off events. We set up analytics and feedback loops so your conversion funnels get smarter each month.
            </p>
          </div>
        </div>
      </div>

      {/* 4. READY TO TALK CTA */}
      <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#101722] to-[#090D14] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-2xl font-bold text-white">
            Let's evaluate your business bottlenecks.
          </h3>
          <p className="text-xs sm:text-sm text-[#9AA6B2] mt-1">
            Reach out for a direct consultation. No sales scripts, just practical strategy.
          </p>
        </div>
        <button
          onClick={() => onNavigate('contact')}
          className="px-7 py-3.5 text-xs font-semibold text-white bg-[#1677FF] hover:bg-[#2D8CFF] rounded-xl transition-all whitespace-nowrap shadow-md shadow-[#1677FF]/25 flex items-center gap-2"
        >
          <span>Connect With Our Founder</span>
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
