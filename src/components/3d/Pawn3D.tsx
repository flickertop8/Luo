import React from 'react';

export type PawnColor = 'red' | 'blue' | 'green' | 'yellow' | 'cyan' | 'purple';

interface Pawn3DProps {
  color: PawnColor;
  size?: number;
  className?: string;
}

const COLOR_CONFIGS: Record<PawnColor, { main1: string; main2: string; head1: string; head2: string; ring: string; glow: string }> = {
  red: {
    main1: '#F87171',
    main2: '#DC2626',
    head1: '#EF4444',
    head2: '#991B1B',
    ring: '#FCA5A5',
    glow: 'rgba(239, 68, 68, 0.4)',
  },
  blue: {
    main1: '#60A5FA',
    main2: '#2563EB',
    head1: '#3B82F6',
    head2: '#1E3A8A',
    ring: '#93C5FD',
    glow: 'rgba(59, 130, 246, 0.4)',
  },
  green: {
    main1: '#4ADE80',
    main2: '#16A34A',
    head1: '#22C55E',
    head2: '#14532D',
    ring: '#86EFAC',
    glow: 'rgba(34, 197, 94, 0.4)',
  },
  yellow: {
    main1: '#FDE047',
    main2: '#EAB308',
    head1: '#FACC15',
    head2: '#A16207',
    ring: '#FEF08A',
    glow: 'rgba(234, 179, 8, 0.4)',
  },
  cyan: {
    main1: '#67E8F9',
    main2: '#06B6D4',
    head1: '#22D3EE',
    head2: '#164E63',
    ring: '#A5F3FC',
    glow: 'rgba(6, 182, 212, 0.4)',
  },
  purple: {
    main1: '#D8B4FE',
    main2: '#9333EA',
    head1: '#A855F7',
    head2: '#581C87',
    ring: '#E9D5FF',
    glow: 'rgba(168, 85, 247, 0.4)',
  },
};

export const Pawn3D: React.FC<Pawn3DProps> = ({ color, size = 36, className = '' }) => {
  const cfg = COLOR_CONFIGS[color] || COLOR_CONFIGS.red;
  const gradId = `pawn_${color}_${Math.floor(Math.random() * 1000)}`;

  return (
    <div className={`relative inline-block ${className}`} style={{ width: size, height: size * 1.35 }}>
      {/* Soft floor shadow */}
      <div
        className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4/5 h-2 rounded-full blur-sm"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}
      />

      <svg width="100%" height="100%" viewBox="0 0 50 70" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id={`${gradId}_body`} x1="15" y1="25" x2="40" y2="65" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor={cfg.main1} />
            <stop offset="60%" stopColor={cfg.main2} />
            <stop offset="100%" stopColor={cfg.head2} />
          </linearGradient>

          <radialGradient id={`${gradId}_head`} cx="40%" cy="35%" r="60%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="35%" stopColor={cfg.head1} />
            <stop offset="100%" stopColor={cfg.head2} />
          </radialGradient>
        </defs>

        {/* Base Pedestal Ring */}
        <ellipse cx="25" cy="62" rx="19" ry="6" fill={cfg.head2} />
        <ellipse cx="25" cy="60" rx="18" ry="5.5" fill={`url(#${gradId}_body)`} stroke={cfg.ring} strokeWidth="0.8" />

        {/* Flared Bell Body */}
        <path
          d="M17 32C17 40 9 52 9 58C9 60 41 60 41 58C41 52 33 40 33 32H17Z"
          fill={`url(#${gradId}_body)`}
        />

        {/* Body specular shine reflection */}
        <path
          d="M20 35C20 42 15 50 14 55C17 56 22 55 24 53C24 45 22 38 21 35H20Z"
          fill="#FFFFFF"
          opacity="0.35"
        />

        {/* Neck Collar */}
        <ellipse cx="25" cy="30" rx="9" ry="2.5" fill={cfg.ring} />

        {/* Spherical Head with specular highlight */}
        <circle cx="25" cy="19" r="13" fill={`url(#${gradId}_head)`} />
        {/* Specular sheen bubble on head */}
        <ellipse cx="21" cy="14" rx="4" ry="2.5" fill="#FFFFFF" opacity="0.75" transform="rotate(-20 21 14)" />
      </svg>
    </div>
  );
};
