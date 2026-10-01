import React from 'react';

interface BangladeshFlagBadgeProps {
  size?: number;
}

export const BangladeshFlagBadge: React.FC<BangladeshFlagBadgeProps> = ({ size = 64 }) => {
  return (
    <div className="relative inline-flex items-center justify-center">
      {/* Emerald aura glow */}
      <div className="absolute inset-0 rounded-full blur-md opacity-60 bg-emerald-500/50" />

      <svg width={size} height={size} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="emeraldWing" x1="0" y1="0" x2="80" y2="80" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#6EE7B7" />
            <stop offset="50%" stopColor="#10B981" />
            <stop offset="100%" stopColor="#047857" />
          </linearGradient>

          <linearGradient id="bdGreenShield" x1="40" y1="20" x2="40" y2="65" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#059669" />
            <stop offset="60%" stopColor="#047857" />
            <stop offset="100%" stopColor="#064E3B" />
          </linearGradient>

          <radialGradient id="bdRedCircle" cx="48%" cy="48%" r="52%">
            <stop offset="0%" stopColor="#F87171" />
            <stop offset="50%" stopColor="#DC2626" />
            <stop offset="100%" stopColor="#991B1B" />
          </radialGradient>
        </defs>

        {/* Emerald Wings */}
        <path
          d="M24 40C14 30 6 34 2 39C0 44 6 50 14 51C8 53 4 57 4 62C8 63 16 61 22 56"
          fill="url(#emeraldWing)"
          stroke="#A7F3D0"
          strokeWidth="0.8"
        />
        <path
          d="M56 40C66 30 74 34 78 39C80 44 74 50 66 51C72 53 76 57 76 62C72 63 64 61 58 56"
          fill="url(#emeraldWing)"
          stroke="#A7F3D0"
          strokeWidth="0.8"
        />

        {/* Shield Frame Outer */}
        <path
          d="M40 18L60 27V48C60 60 40 70 40 70C40 70 20 60 20 48V27L40 18Z"
          fill="#064E3B"
          stroke="#34D399"
          strokeWidth="2"
        />

        {/* Inner Shield */}
        <path
          d="M40 22L56 29V46C56 56 40 65 40 65C40 65 24 56 24 46V29L40 22Z"
          fill="url(#bdGreenShield)"
        />

        {/* Bangladesh Red Disc */}
        <circle
          cx="39"
          cy="42"
          r="10.5"
          fill="url(#bdRedCircle)"
          stroke="#FECA57"
          strokeWidth="0.8"
          filter="drop-shadow(0 0 5px rgba(239, 68, 68, 0.7))"
        />
      </svg>
    </div>
  );
};
