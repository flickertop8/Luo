import React from 'react';

interface Dice3DProps {
  size?: number;
  rotation?: number;
  dotsTop?: number;
  dotsLeft?: number;
  dotsRight?: number;
  className?: string;
}

export const Dice3D: React.FC<Dice3DProps> = ({
  size = 40,
  rotation = 0,
  className = '',
}) => {
  return (
    <div
      className={`relative inline-block ${className}`}
      style={{
        width: size,
        height: size,
        transform: `rotate(${rotation}deg)`,
      }}
    >
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          {/* Top Face Gradient */}
          <linearGradient id="diceTop" x1="50" y1="10" x2="50" y2="45" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#F1F5F9" />
          </linearGradient>

          {/* Left Face Gradient */}
          <linearGradient id="diceLeft" x1="15" y1="35" x2="50" y2="85" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#E2E8F0" />
            <stop offset="100%" stopColor="#CBD5E1" />
          </linearGradient>

          {/* Right Face Gradient */}
          <linearGradient id="diceRight" x1="50" y1="35" x2="85" y2="85" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#CBD5E1" />
            <stop offset="100%" stopColor="#94A3B8" />
          </linearGradient>

          <filter id="diceGlow" x="-10" y="-10" width="120" height="120">
            <feDropShadow dx="0" dy="8" stdDeviation="6" floodColor="#000000" floodOpacity="0.5" />
          </filter>
        </defs>

        <g filter="url(#diceGlow)">
          {/* Top Face */}
          <path
            d="M50 12L84 29L50 46L16 29L50 12Z"
            fill="url(#diceTop)"
            stroke="#FFFFFF"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />

          {/* Left Face */}
          <path
            d="M16 29L50 46V84L16 67V29Z"
            fill="url(#diceLeft)"
            stroke="#E2E8F0"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />

          {/* Right Face */}
          <path
            d="M50 46L84 29V67L50 84V46Z"
            fill="url(#diceRight)"
            stroke="#CBD5E1"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />

          {/* Top Face Dots (e.g. 5 dots or 3) */}
          <ellipse cx="50" cy="29" rx="3.5" ry="2" fill="#0F172A" />
          <ellipse cx="36" cy="23" rx="3" ry="1.8" fill="#0F172A" />
          <ellipse cx="64" cy="35" rx="3" ry="1.8" fill="#0F172A" />
          <ellipse cx="36" cy="35" rx="3" ry="1.8" fill="#0F172A" />
          <ellipse cx="64" cy="23" rx="3" ry="1.8" fill="#0F172A" />

          {/* Left Face Dots (e.g. 3 dots) */}
          <circle cx="32" cy="46" r="3.2" fill="#0F172A" />
          <circle cx="26" cy="56" r="3.2" fill="#0F172A" />
          <circle cx="40" cy="68" r="3.2" fill="#0F172A" />

          {/* Right Face Dots (e.g. 2 dots) */}
          <circle cx="64" cy="50" r="3.2" fill="#0F172A" />
          <circle cx="72" cy="62" r="3.2" fill="#0F172A" />
        </g>
      </svg>
    </div>
  );
};
