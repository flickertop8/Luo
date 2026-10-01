import React from 'react';
import { Pencil } from 'lucide-react';
import { soundManager } from '../../utils/sound';

interface LudoLogoProps {
  onEditLogo?: () => void;
}

export const LudoLogo: React.FC<LudoLogoProps> = ({ onEditLogo }) => {
  return (
    <div className="relative inline-flex flex-col items-center select-none group cursor-pointer"
         onClick={() => {
           soundManager.playClick();
           onEditLogo?.();
         }}>
      {/* 3D Royal Crown */}
      <div className="relative -mb-2 z-10 filter drop-shadow-[0_4px_6px_rgba(0,0,0,0.6)]">
        <svg width="46" height="30" viewBox="0 0 46 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="crownGrad" x1="0" y1="0" x2="46" y2="30" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FFF2A3" />
              <stop offset="35%" stopColor="#FFD700" />
              <stop offset="70%" stopColor="#D49A00" />
              <stop offset="100%" stopColor="#8A5A00" />
            </linearGradient>
            <filter id="crownShadow" x="-2" y="-2" width="50" height="34">
              <feDropShadow dx="0" dy="1" stdDeviation="1" floodColor="#ffe066" floodOpacity="0.5"/>
            </filter>
          </defs>
          {/* Crown Base & Spikes */}
          <path
            d="M5 26L3 7L13 14L23 2L33 14L43 7L41 26C41 27.1 40.1 28 39 28H7C5.9 28 5 27.1 5 26Z"
            fill="url(#crownGrad)"
            stroke="#FFE875"
            strokeWidth="1.2"
          />
          {/* Jewels */}
          <circle cx="23" cy="4" r="2.5" fill="#EF4444" stroke="#FFE875" strokeWidth="0.8" />
          <circle cx="3" cy="8" r="2" fill="#3B82F6" stroke="#FFE875" strokeWidth="0.6" />
          <circle cx="43" cy="8" r="2" fill="#3B82F6" stroke="#FFE875" strokeWidth="0.6" />
          <circle cx="13" cy="15" r="1.8" fill="#10B981" stroke="#FFE875" strokeWidth="0.6" />
          <circle cx="33" cy="15" r="1.8" fill="#10B981" stroke="#FFE875" strokeWidth="0.6" />
          {/* Lower band gems */}
          <circle cx="15" cy="24" r="1.5" fill="#EF4444" />
          <circle cx="23" cy="24" r="2" fill="#10B981" />
          <circle cx="31" cy="24" r="1.5" fill="#3B82F6" />
        </svg>
      </div>

      {/* LUDO Letters Container */}
      <div className="flex items-center justify-center font-black tracking-tighter text-3xl sm:text-4xl drop-shadow-[0_5px_4px_rgba(0,0,0,0.85)] leading-none px-1">
        {/* L - Red */}
        <span
          className="relative inline-block transform -rotate-2 -mr-0.5"
          style={{
            background: 'linear-gradient(180deg, #FF7B90 0%, #E11D48 45%, #9F1239 90%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            WebkitTextStroke: '1.2px #FFE4E6',
            filter: 'drop-shadow(0 2px 0 #4C0519)',
          }}
        >
          L
        </span>

        {/* U - Yellow */}
        <span
          className="relative inline-block transform -translate-y-0.5"
          style={{
            background: 'linear-gradient(180deg, #FFFBEB 0%, #FBBF24 45%, #D97706 90%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            WebkitTextStroke: '1.2px #FEF3C7',
            filter: 'drop-shadow(0 2px 0 #78350F)',
          }}
        >
          U
        </span>

        {/* D - Green */}
        <span
          className="relative inline-block transform rotate-1 -ml-0.5"
          style={{
            background: 'linear-gradient(180deg, #A7F3D0 0%, #10B981 45%, #047857 90%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            WebkitTextStroke: '1.2px #D1FAE5',
            filter: 'drop-shadow(0 2px 0 #064E3B)',
          }}
        >
          D
        </span>

        {/* O - Blue */}
        <span
          className="relative inline-block transform rotate-3 -ml-0.5"
          style={{
            background: 'linear-gradient(180deg, #BAE6FD 0%, #38BDF8 45%, #0284C7 90%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            WebkitTextStroke: '1.2px #E0F2FE',
            filter: 'drop-shadow(0 2px 0 #0C4A6E)',
          }}
        >
          O
        </span>
      </div>

      {/* KING Crimson Banner with Gold Trim */}
      <div className="relative -mt-1 w-full max-w-[108px] h-6 flex items-center justify-center">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 110 26" fill="none" preserveAspectRatio="none">
          <defs>
            <linearGradient id="kingBannerGrad" x1="0" y1="0" x2="110" y2="26" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#7F1D1D" />
              <stop offset="50%" stopColor="#DC2626" />
              <stop offset="100%" stopColor="#7F1D1D" />
            </linearGradient>
            <linearGradient id="goldBorderGrad" x1="0" y1="0" x2="110" y2="0" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#D97706" />
              <stop offset="50%" stopColor="#FDE047" />
              <stop offset="100%" stopColor="#D97706" />
            </linearGradient>
          </defs>
          {/* Banner Shape */}
          <path
            d="M8 2H102L108 13L102 24H8L2 13L8 2Z"
            fill="url(#kingBannerGrad)"
            stroke="url(#goldBorderGrad)"
            strokeWidth="1.5"
          />
        </svg>
        <span className="relative z-10 font-black text-xs tracking-widest text-amber-200 drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]">
          KING
        </span>
      </div>

      {/* Edit pencil subtle indicator */}
      <div className="absolute -bottom-1 -right-4 p-1 rounded-full bg-slate-900/80 border border-amber-400/40 opacity-70 group-hover:opacity-100 transition-opacity">
        <Pencil className="w-2.5 h-2.5 text-amber-300" />
      </div>
    </div>
  );
};
