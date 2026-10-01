import React from 'react';
import { Crown } from 'lucide-react';
import { Pawn3D } from '../3d/Pawn3D';
import { Dice3D } from '../3d/Dice3D';

export const TournamentLogoHeader: React.FC = () => {
  return (
    <div className="relative flex flex-col items-center justify-center select-none pt-1 pb-2">
      {/* 3D LUDO TOURNAMENT Composition */}
      <div className="relative flex items-center justify-center w-full max-w-[280px] h-[92px]">
        {/* Red Pawn (Left) */}
        <div className="absolute left-6 -top-1 z-10 scale-75 transform -rotate-6">
          <Pawn3D color="red" size={28} />
        </div>

        {/* Blue Pawn (Right) */}
        <div className="absolute right-6 -top-1 z-10 scale-75 transform rotate-6">
          <Pawn3D color="blue" size={28} />
        </div>

        {/* Dice (Left) */}
        <div className="absolute left-2 top-6 z-10 scale-75 transform -rotate-12">
          <Dice3D size={32} rotation={-15} />
        </div>

        {/* Dice (Right) */}
        <div className="absolute right-2 top-6 z-10 scale-75 transform rotate-12">
          <Dice3D size={32} rotation={15} />
        </div>

        {/* Crown on top of LUDO */}
        <div className="absolute top-0 z-20">
          <svg width="40" height="26" viewBox="0 0 46 30" fill="none">
            <defs>
              <linearGradient id="tourCrown" x1="0" y1="0" x2="46" y2="30">
                <stop offset="0%" stopColor="#FFF2A3" />
                <stop offset="35%" stopColor="#FFD700" />
                <stop offset="70%" stopColor="#D49A00" />
                <stop offset="100%" stopColor="#8A5A00" />
              </linearGradient>
            </defs>
            <path
              d="M5 26L3 7L13 14L23 2L33 14L43 7L41 26C41 27.1 40.1 28 39 28H7C5.9 28 5 27.1 5 26Z"
              fill="url(#tourCrown)"
              stroke="#FFE875"
              strokeWidth="1.2"
            />
            <circle cx="23" cy="4" r="2.5" fill="#EF4444" stroke="#FFE875" strokeWidth="0.8" />
            <circle cx="3" cy="8" r="2" fill="#3B82F6" stroke="#FFE875" strokeWidth="0.6" />
            <circle cx="43" cy="8" r="2" fill="#3B82F6" stroke="#FFE875" strokeWidth="0.6" />
          </svg>
        </div>

        {/* 3D Gold LUDO Letters */}
        <div className="relative z-15 flex items-center justify-center font-black tracking-tight text-4xl sm:text-5xl leading-none mt-2">
          <span
            className="tracking-normal"
            style={{
              background: 'linear-gradient(180deg, #FFFFFF 0%, #FFF7B2 25%, #FBBF24 50%, #D97706 75%, #78350F 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              WebkitTextStroke: '1.5px #FFFBEB',
              filter: 'drop-shadow(0 3px 2px #451A03) drop-shadow(0 0 10px rgba(251, 191, 36, 0.6))',
            }}
          >
            LUDO
          </span>
        </div>

        {/* TOURNAMENT Red Ribbon Banner */}
        <div className="absolute -bottom-1 z-25 w-48 h-6 flex items-center justify-center">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 190 26" fill="none" preserveAspectRatio="none">
            <defs>
              <linearGradient id="ribbonGrad" x1="0" y1="0" x2="190" y2="26">
                <stop offset="0%" stopColor="#991B1B" />
                <stop offset="50%" stopColor="#DC2626" />
                <stop offset="100%" stopColor="#991B1B" />
              </linearGradient>
            </defs>
            <path
              d="M10 2H180L188 13L180 24H10L2 13L10 2Z"
              fill="url(#ribbonGrad)"
              stroke="#FDE047"
              strokeWidth="1.2"
            />
          </svg>
          <span className="relative z-10 font-black text-[11px] tracking-widest text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]">
            TOURNAMENT
          </span>
        </div>
      </div>

      {/* LEADERBOARD Laurel Wreath Banner */}
      <div className="relative mt-2 flex items-center justify-center gap-1.5 w-full max-w-[340px]">
        {/* Left Laurel Leaves */}
        <svg width="24" height="20" viewBox="0 0 24 20" fill="none" className="shrink-0">
          <path
            d="M22 18C16 17 12 13 8 7M18 16C13 14 10 9 7 3M12 18C8 14 6 9 5 2"
            stroke="#FBBF24"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>

        {/* Center Banner Box */}
        <div className="relative px-5 py-1 rounded-xl bg-gradient-to-r from-[#071333] via-[#0b1c4d] to-[#071333] border-2 border-amber-400 shadow-[0_0_15px_rgba(251,191,36,0.4)] flex flex-col items-center">
          <Crown className="w-3.5 h-3.5 text-amber-300 fill-amber-400 -mt-1 filter drop-shadow-[0_0_4px_rgba(245,158,11,0.8)]" />
          <h2
            className="font-black text-lg sm:text-xl tracking-wider uppercase text-transparent bg-clip-text"
            style={{
              backgroundImage: 'linear-gradient(180deg, #FFFFFF 0%, #FEF08A 30%, #F59E0B 70%, #B45309 100%)',
              filter: 'drop-shadow(0 2px 2px rgba(0,0,0,0.8))',
            }}
          >
            LEADERBOARD
          </h2>
        </div>

        {/* Right Laurel Leaves */}
        <svg width="24" height="20" viewBox="0 0 24 20" fill="none" className="shrink-0 transform scale-x-[-1]">
          <path
            d="M22 18C16 17 12 13 8 7M18 16C13 14 10 9 7 3M12 18C8 14 6 9 5 2"
            stroke="#FBBF24"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
};
