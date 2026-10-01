import React from 'react';

interface GoldCoinsProps {
  size?: number;
  className?: string;
}

export const GoldCoins: React.FC<GoldCoinsProps> = ({ size = 28, className = '' }) => {
  return (
    <div className={`relative inline-block ${className}`} style={{ width: size, height: size * 0.85 }}>
      <svg width="100%" height="100%" viewBox="0 0 40 34" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="coinFace" x1="0" y1="0" x2="40" y2="20" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFFBEB" />
            <stop offset="40%" stopColor="#FBBF24" />
            <stop offset="100%" stopColor="#B45309" />
          </linearGradient>
          <linearGradient id="coinEdge" x1="0" y1="0" x2="0" y2="10" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#78350F" />
          </linearGradient>
        </defs>

        {/* Bottom coin stack left */}
        <path d="M5 22V26C5 28.5 12 30 19 30C26 30 33 28.5 33 26V22" fill="url(#coinEdge)" />
        <ellipse cx="19" cy="22" rx="14" ry="4.5" fill="url(#coinFace)" stroke="#FEF08A" strokeWidth="0.6" />

        {/* Stack 2 */}
        <path d="M8 16V20C8 22.5 15 24 22 24C29 24 36 22.5 36 20V16" fill="url(#coinEdge)" />
        <ellipse cx="22" cy="16" rx="14" ry="4.5" fill="url(#coinFace)" stroke="#FEF08A" strokeWidth="0.6" />

        {/* Top Coin tilted */}
        <path d="M12 9V13C12 15.5 19 17 26 17C33 17 40 15.5 40 13V9" fill="url(#coinEdge)" />
        <ellipse cx="26" cy="9" rx="14" ry="4.5" fill="url(#coinFace)" stroke="#FEF08A" strokeWidth="0.8" />
        <ellipse cx="26" cy="9" rx="10" ry="3" fill="none" stroke="#FFF7B2" strokeWidth="0.5" />
        <text x="26" y="11" fill="#78350F" fontSize="5" fontWeight="900" textAnchor="middle">$</text>
      </svg>
    </div>
  );
};
