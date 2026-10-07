import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { PageId } from '../types';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

interface NavLinkItem {
  id: PageId;
  label: string;
}

const NAV_ITEMS: NavLinkItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'services', label: 'Services' },
  { id: 'work', label: 'Work' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#05070B]/90 backdrop-blur-md py-3 border-b border-white/10 shadow-lg shadow-black/40'
          : 'bg-[#05070B]/60 backdrop-blur-sm py-5 border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Zone 1: Brand Logo */}
          <Logo onClick={() => handleNavClick('home')} />

          {/* Zone 2: Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
            {NAV_ITEMS.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative text-sm font-medium transition-colors duration-200 py-1.5 focus:outline-none focus-visible:text-white ${
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-[#9AA6B2] hover:text-white'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#1677FF] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: CTA Button (Desktop) */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => handleNavClick('contact')}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#1677FF] hover:bg-[#2D8CFF] active:scale-[0.98] transition-all rounded-lg shadow-md shadow-[#1677FF]/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4DA3FF]"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={() => handleNavClick('contact')}
              className="px-3 py-1.5 text-xs font-semibold text-white bg-[#1677FF] rounded-md"
            >
              Let's Talk
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#9AA6B2] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1677FF] rounded-lg border border-white/10"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Full-Screen Dropdown / Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[65px] bg-[#05070B]/98 backdrop-blur-xl z-40 md:hidden flex flex-col justify-between p-6 overflow-y-auto animate-in fade-in duration-200">
          <div className="space-y-6 pt-4">
            <div className="text-xs font-semibold uppercase tracking-widest text-[#9AA6B2] pb-2 border-b border-white/10">
              Menu Navigation
            </div>
            <div className="flex flex-col space-y-4">
              {NAV_ITEMS.map((item) => {
                const isActive = currentPage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`text-left text-2xl font-bold py-2 transition-colors flex items-center justify-between ${
                      isActive ? 'text-[#2D8CFF]' : 'text-white hover:text-[#9AA6B2]'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && (
                      <span className="text-xs bg-[#1677FF]/20 text-[#4DA3FF] px-2.5 py-1 rounded">Active</span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 space-y-4">
            <p className="text-xs text-[#9AA6B2] leading-relaxed">
              Founder-led digital growth, creative marketing, and automation for ambitious businesses.
            </p>
            <button
              onClick={() => handleNavClick('contact')}
              className="w-full py-4 text-center text-sm font-semibold text-white bg-[#1677FF] hover:bg-[#2D8CFF] rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-[#1677FF]/25"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
