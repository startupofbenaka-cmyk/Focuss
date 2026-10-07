import React from 'react';

interface LogoProps {
  className?: string;
  onClick?: () => void;
  showWordmark?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const LogoSymbol: React.FC<{ size?: 'sm' | 'md' | 'lg'; className?: string }> = ({
  size = 'md',
  className = ''
}) => {
  const dim = size === 'sm' ? 24 : size === 'lg' ? 40 : 32;

  return (
    <svg
      width={dim}
      height={dim}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 transition-transform duration-300 hover:scale-105 ${className}`}
      aria-label="Focuss Brand Mark"
    >
      {/* Background foundation */}
      <rect width="32" height="32" rx="8" fill="#090D14" stroke="rgba(255, 255, 255, 0.12)" strokeWidth="1" />
      
      {/* Precision grid accents / reticle crosshairs */}
      <line x1="16" y1="5" x2="16" y2="9" stroke="#1677FF" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      <line x1="16" y1="23" x2="16" y2="27" stroke="#1677FF" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      <line x1="5" y1="16" x2="9" y2="16" stroke="#1677FF" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      <line x1="23" y1="16" x2="27" y2="16" stroke="#1677FF" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />

      {/* Direction & Forward Growth Vector */}
      <path
        d="M9 22L16 15L20 19L24 10"
        stroke="#1677FF"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Focus aperture target dot */}
      <circle cx="24" cy="10" r="2.2" fill="#4DA3FF" />
      <circle cx="24" cy="10" r="4.5" stroke="#2D8CFF" strokeWidth="1" strokeDasharray="2 2" opacity="0.7" />
    </svg>
  );
};

export const Logo: React.FC<LogoProps> = ({
  className = '',
  onClick,
  showWordmark = true,
  size = 'md'
}) => {
  return (
    <div
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={(e) => {
        if (onClick && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          onClick();
        }
      }}
      className={`inline-flex items-center gap-3 cursor-pointer select-none group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1677FF] rounded-lg p-1 transition-opacity ${className}`}
      aria-label="Focuss Home"
    >
      <LogoSymbol size={size} />

      {showWordmark && (
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <span className="font-extrabold tracking-wider text-white text-lg font-['Manrope'] group-hover:text-[#F2F5F8] transition-colors">
              FOCUSS
            </span>
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#1677FF] group-hover:bg-[#4DA3FF] transition-colors" />
          </div>
        </div>
      )}
    </div>
  );
};
