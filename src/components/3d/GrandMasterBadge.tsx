import React from 'react';

interface GrandMasterBadgeProps {
  size?: 'sm' | 'md' | 'lg';
  showBanner?: boolean;
  className?: string;
}

export const GrandMasterBadge: React.FC<GrandMasterBadgeProps> = ({
  size = 'md',
  showBanner = false,
  className = '',
}) => {
  const dim = size === 'sm' ? 44 : size === 'lg' ? 96 : 64;

  return (
    <div className={`relative inline-flex flex-col items-center justify-center ${className}`}>
      {/* Outer ambient glow */}
      <div
        className="absolute inset-0 rounded-full blur-md opacity-70 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.6) 0%, rgba(234, 179, 8, 0.4) 60%, transparent 100%)',
        }}
      />

      <svg width={dim} height={dim} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          {/* Gold Wings Gradient */}
          <linearGradient id="goldWing" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFF7B2" />
            <stop offset="30%" stopColor="#F59E0B" />
            <stop offset="70%" stopColor="#D97706" />
            <stop offset="100%" stopColor="#78350F" />
          </linearGradient>

          {/* Purple Royal Shield Gradient */}
          <linearGradient id="purpleShield" x1="50" y1="25" x2="50" y2="85" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#9333EA" />
            <stop offset="45%" stopColor="#6B21A8" />
            <stop offset="100%" stopColor="#3B0764" />
          </linearGradient>

          {/* Star Gold Gradient */}
          <linearGradient id="goldStar" x1="40" y1="40" x2="60" y2="60" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="40%" stopColor="#FDE047" />
            <stop offset="100%" stopColor="#D97706" />
          </linearGradient>
        </defs>

        {/* Left Wing Feathers */}
        <path
          d="M32 45C22 36 12 36 4 40C2 46 8 52 18 53C12 55 8 59 7 64C12 66 20 64 26 59C20 63 17 68 18 73C23 74 30 69 34 62"
          fill="url(#goldWing)"
          stroke="#FEF08A"
          strokeWidth="0.8"
        />
        {/* Right Wing Feathers */}
        <path
          d="M68 45C78 36 88 36 96 40C98 46 92 52 82 53C88 55 92 59 93 64C88 66 80 64 74 59C80 63 83 68 82 73C77 74 70 69 66 62"
          fill="url(#goldWing)"
          stroke="#FEF08A"
          strokeWidth="0.8"
        />

        {/* Crown on Top */}
        <path
          d="M38 27L42 16L50 22L58 16L62 27Z"
          fill="url(#goldWing)"
          stroke="#FEF08A"
          strokeWidth="0.8"
        />
        <circle cx="50" cy="18" r="1.5" fill="#EF4444" />
        <circle cx="42" cy="18" r="1.2" fill="#3B82F6" />
        <circle cx="58" cy="18" r="1.2" fill="#3B82F6" />

        {/* Royal Crest Outer Frame */}
        <path
          d="M50 25L70 33V58C70 71 50 83 50 83C50 83 30 71 30 58V33L50 25Z"
          fill="url(#goldWing)"
          stroke="#FEF08A"
          strokeWidth="1.2"
        />

        {/* Inner Purple Shield */}
        <path
          d="M50 29L66 36V56C66 67 50 78 50 78C50 78 34 67 34 56V36L50 29Z"
          fill="url(#purpleShield)"
          stroke="#C084FC"
          strokeWidth="0.8"
        />

        {/* Glowing Center Star */}
        <path
          d="M50 38L53.5 47H63L55.5 52.5L58.5 61.5L50 56L41.5 61.5L44.5 52.5L37 47H46.5L50 38Z"
          fill="url(#goldStar)"
          stroke="#FFFFFF"
          strokeWidth="0.6"
          filter="drop-shadow(0 0 3px #FACC15)"
        />

        {/* Ruby at bottom center of shield */}
        <circle cx="50" cy="71" r="2.2" fill="#EF4444" stroke="#FEF08A" strokeWidth="0.6" />
      </svg>

      {/* Optional "GRAND MASTER" Ribbon */}
      {showBanner && (
        <div className="-mt-3 relative z-10 px-2 py-0.5 bg-gradient-to-r from-amber-600 via-amber-400 to-amber-600 rounded-sm border border-amber-200 shadow-md">
          <span className="text-[9px] font-black uppercase tracking-wider text-slate-950">
            GRAND MASTER
          </span>
        </div>
      )}
    </div>
  );
};
