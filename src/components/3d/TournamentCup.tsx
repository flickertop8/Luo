import React from 'react';

interface TournamentCupProps {
  size?: number;
  glowColor?: 'purple' | 'gold';
}

export const TournamentCup: React.FC<TournamentCupProps> = ({ size = 64, glowColor = 'purple' }) => {
  return (
    <div className="relative inline-flex items-center justify-center">
      {/* Radiant glow */}
      <div
        className={`absolute inset-0 rounded-full blur-md opacity-70 ${
          glowColor === 'purple' ? 'bg-purple-600/60' : 'bg-amber-500/60'
        }`}
      />

      <svg width={size} height={size} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="goldCupGrad" x1="20" y1="15" x2="60" y2="70" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFFBEB" />
            <stop offset="25%" stopColor="#FDE047" />
            <stop offset="60%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#B45309" />
          </linearGradient>

          <linearGradient id="cupStemGrad" x1="35" y1="48" x2="45" y2="65" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#F59E0B" />
            <stop offset="50%" stopColor="#FEF08A" />
            <stop offset="100%" stopColor="#92400E" />
          </linearGradient>

          <linearGradient id="cupBaseGrad" x1="25" y1="62" x2="55" y2="68" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#78350F" />
            <stop offset="50%" stopColor="#FDE047" />
            <stop offset="100%" stopColor="#78350F" />
          </linearGradient>
        </defs>

        {/* Left Ear Handle */}
        <path
          d="M26 24C16 24 16 38 26 42"
          stroke="url(#goldCupGrad)"
          strokeWidth="3.5"
          strokeLinecap="round"
          fill="none"
        />
        {/* Right Ear Handle */}
        <path
          d="M54 24C64 24 64 38 54 42"
          stroke="url(#goldCupGrad)"
          strokeWidth="3.5"
          strokeLinecap="round"
          fill="none"
        />

        {/* Cup Bowl */}
        <path
          d="M24 18H56C56 18 56 36 48 46C44 51 36 51 32 46C24 36 24 18 24 18Z"
          fill="url(#goldCupGrad)"
          stroke="#FEF9C3"
          strokeWidth="1.2"
        />

        {/* Star on Cup */}
        <path
          d="M40 26L41.5 30H45.5L42.5 32.5L43.5 36.5L40 34L36.5 36.5L37.5 32.5L34.5 30H38.5L40 26Z"
          fill="#FFF"
          filter="drop-shadow(0 0 2px #FDE047)"
        />

        {/* Stem */}
        <path d="M37 49H43V58H37V49Z" fill="url(#cupStemGrad)" />

        {/* Base Pedestal */}
        <path
          d="M30 58H50L53 66H27L30 58Z"
          fill="url(#cupBaseGrad)"
          stroke="#FEF08A"
          strokeWidth="1"
        />
      </svg>
    </div>
  );
};
