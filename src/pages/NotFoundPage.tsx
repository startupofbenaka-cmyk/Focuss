import React from 'react';
import { PageId } from '../types';
import { ArrowLeft, ArrowRight, Compass } from 'lucide-react';

interface NotFoundPageProps {
  onNavigate: (page: PageId) => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ onNavigate }) => {
  return (
    <div className="pt-32 sm:pt-44 pb-32 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto text-center space-y-8">
      <div className="w-16 h-16 rounded-2xl bg-[#101722] border border-white/10 text-[#1677FF] mx-auto flex items-center justify-center">
        <Compass className="w-8 h-8 animate-spin" style={{ animationDuration: '8s' }} />
      </div>

      <div className="space-y-3">
        <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#1677FF] bg-[#1677FF]/10 px-3 py-1 rounded">
          Error 404
        </span>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
          Looks like you lost focus.
        </h1>
        <p className="text-base text-[#9AA6B2] max-w-md mx-auto leading-relaxed">
          The page you're looking for doesn't exist or may have moved.
        </p>
      </div>

      <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
        <button
          onClick={() => onNavigate('home')}
          className="w-full sm:w-auto px-7 py-3 text-xs font-semibold text-white bg-[#1677FF] hover:bg-[#2D8CFF] rounded-xl transition-all flex items-center justify-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back Home</span>
        </button>

        <button
          onClick={() => onNavigate('services')}
          className="w-full sm:w-auto px-7 py-3 text-xs font-medium text-white bg-[#101722] hover:bg-white/10 border border-white/10 rounded-xl transition-all flex items-center justify-center gap-2"
        >
          <span>Explore Services</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
