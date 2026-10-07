import React from 'react';
import { Logo } from './Logo';
import { PageId } from '../types';
import { ArrowUp, Mail, Phone, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();

  const handleNav = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#090D14] border-t border-white/10 pt-16 pb-12 text-[#9AA6B2] text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-12 border-b border-white/10">
          {/* Col 1 & 2: Brand & Positioning */}
          <div className="lg:col-span-2 space-y-4">
            <Logo onClick={() => handleNav('home')} />
            <p className="text-white font-medium text-base pt-2">
              Creative. Technology. Growth.
            </p>
            <p className="text-xs text-[#9AA6B2] max-w-sm leading-relaxed">
              Focuss is a founder-led growth partner helping businesses improve their brand, digital presence, marketing, sales and operations using creative services, modern engineering, and automation.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 text-xs text-white/90 bg-[#101722] px-3 py-1.5 rounded-md border border-white/10">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Accepting Selected Growth Partners</span>
              </span>
            </div>
          </div>

          {/* Col 3: Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Pages</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="hover:text-white transition-colors text-xs text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-white transition-colors text-xs text-left"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('work')}
                  className="hover:text-white transition-colors text-xs text-left"
                >
                  Work (Selected Concepts)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="hover:text-white transition-colors text-xs text-left"
                >
                  About Focuss
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="hover:text-white transition-colors text-xs text-left"
                >
                  Contact & Inquiries
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Services</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-white transition-colors text-xs text-left"
                >
                  Brand & Graphic Design
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-white transition-colors text-xs text-left"
                >
                  Video & Content
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-white transition-colors text-xs text-left"
                >
                  Modern Websites
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-white transition-colors text-xs text-left"
                >
                  Paid Ads & Marketing
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-white transition-colors text-xs text-left"
                >
                  AI & Workflow Automation
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-white transition-colors text-xs text-left"
                >
                  Business Growth & Operations
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Direct Inquiries */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Direct Connect</h4>
            <div className="space-y-2.5 text-xs">
              <a
                href="mailto:hello@focuss.growth"
                className="flex items-center gap-2 text-white hover:text-[#2D8CFF] transition-colors group"
              >
                <Mail className="w-3.5 h-3.5 text-[#1677FF]" />
                <span>hello@focuss.growth</span>
                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a
                href="tel:+18005553628"
                className="flex items-center gap-2 text-white hover:text-[#2D8CFF] transition-colors group"
              >
                <Phone className="w-3.5 h-3.5 text-[#1677FF]" />
                <span>+1 (800) 555-FOCS</span>
                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <p className="text-[11px] text-[#9AA6B2] pt-2">
                Direct founder consultation. Zero intermediary account executives.
              </p>
              <button
                onClick={() => handleNav('contact')}
                className="w-full mt-2 px-3 py-2 text-xs font-medium text-white bg-[#101722] hover:bg-[#1677FF] border border-white/10 hover:border-[#1677FF] rounded-md transition-all text-center"
              >
                Start a Conversation
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-[#9AA6B2]">
            © {currentYear} Focuss. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <span className="text-[11px] text-[#9AA6B2]">
              Concept projects created for capability demonstration.
            </span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-xs text-[#9AA6B2] hover:text-white transition-colors"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
