import React from 'react';

interface GlobalGlobeBadgeProps {
  size?: number;
}

export const GlobalGlobeBadge: React.FC<GlobalGlobeBadgeProps> = ({ size = 64 }) => {
  return (
    <div className="relative inline-flex items-center justify-center">
      {/* Cyan/Purple aura */}
      <div className="absolute inset-0 rounded-full blur-md opacity-60 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600" />
      
      <svg width={size} height={size} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="globeWingGrad" x1="0" y1="0" x2="80" y2="80" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#93C5FD" />
            <stop offset="50%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#1E3A8A" />
          </linearGradient>
          <radialGradient id="earthGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#38BDF8" />
            <stop offset="60%" stopColor="#0284C7" />
            <stop offset="100%" stopColor="#0369A1" />
          </radialGradient>
          <linearGradient id="globeCrown" x1="0" y1="0" x2="0" y2="20" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FDE047" />
            <stop offset="100%" stopColor="#D97706" />
          </linearGradient>
        </defs>

        {/* Wings spreading outwards */}
        {/* Left wing feathers */}
        <path
          d="M26 42C16 32 8 35 2 39C0 44 6 50 14 51C8 53 4 57 4 62C8 63 16 61 22 57"
          fill="url(#globeWingGrad)"
          stroke="#93C5FD"
          strokeWidth="0.8"
        />
        {/* Right wing feathers */}
        <path
          d="M54 42C64 32 72 35 78 39C80 44 74 50 66 51C72 53 76 57 76 62C72 63 64 61 58 57"
          fill="url(#globeWingGrad)"
          stroke="#93C5FD"
          strokeWidth="0.8"
        />

        {/* Crown atop the globe */}
        <path
          d="M32 26L35 17L40 22L45 17L48 26Z"
          fill="url(#globeCrown)"
          stroke="#FEF08A"
          strokeWidth="0.8"
        />
        <circle cx="40" cy="18" r="1.2" fill="#EF4444" />

        {/* Globe Sphere */}
        <circle cx="40" cy="42" r="18" fill="url(#earthGrad)" stroke="#7DD3FC" strokeWidth="1.5" />

        {/* Green Continents */}
        <path
          d="M33 34C35 32 39 33 38 37C37 40 33 41 31 39C29 37 31 35 33 34Z"
          fill="#4ADE80"
          opacity="0.9"
        />
        <path
          d="M44 32C47 31 51 34 50 38C49 41 46 43 42 42C41 39 42 34 44 32Z"
          fill="#4ADE80"
          opacity="0.9"
        />
        <path
          d="M36 45C39 44 43 47 41 52C39 55 35 56 34 53C33 50 34 47 36 45Z"
          fill="#4ADE80"
          opacity="0.9"
        />

        {/* Grid lines (meridians) */}
        <ellipse cx="40" cy="42" rx="9" ry="18" fill="none" stroke="#BAE6FD" strokeWidth="0.7" opacity="0.6" />
        <line x1="22" y1="42" x2="58" y2="42" stroke="#BAE6FD" strokeWidth="0.7" opacity="0.6" />

        {/* Outer Ring Accent */}
        <ellipse cx="40" cy="42" rx="23" ry="8" fill="none" stroke="#A855F7" strokeWidth="1.5" strokeDasharray="3 2" transform="rotate(-15 40 42)" />
      </svg>
    </div>
  );
};
