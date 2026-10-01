import React from 'react';
import { ArrowLeft, Plus, HelpCircle, RotateCw } from 'lucide-react';
import { soundManager } from '../../utils/sound';
import { GoldCoins } from '../3d/GoldCoins';

interface LeaderboardTopBarProps {
  coins?: number;
  gems?: number;
  onBack?: () => void;
  onAddCoins?: () => void;
  onAddGems?: () => void;
  onHelp?: () => void;
  onRefresh?: () => void;
  isRefreshing?: boolean;
}

export const LeaderboardTopBar: React.FC<LeaderboardTopBarProps> = ({
  coins = 149250,
  gems = 144,
  onBack,
  onAddCoins,
  onAddGems,
  onHelp,
  onRefresh,
  isRefreshing = false,
}) => {
  return (
    <div className="relative z-30 flex items-start justify-between px-3 pt-2.5 pb-1 select-none">
      {/* Left: Yellow/Blue Back Button */}
      <button
        onClick={() => {
          soundManager.playClick();
          onBack?.();
        }}
        className="w-10 h-10 rounded-xl bg-gradient-to-b from-[#1e40af] via-[#1d4ed8] to-[#0f172a] border-2 border-amber-400 shadow-[0_0_12px_rgba(251,191,36,0.6)] flex items-center justify-center active:scale-95 transition-transform shrink-0"
        aria-label="Back"
      >
        <ArrowLeft className="w-5 h-5 text-amber-300 stroke-[3] drop-shadow-[0_0_4px_rgba(251,191,36,0.8)]" />
      </button>

      {/* Right: Currency & Action buttons */}
      <div className="flex flex-col items-end gap-1.5">
        {/* Currencies Row */}
        <div className="flex items-center gap-2">
          {/* Gold Coins Pill */}
          <div
            onClick={() => {
              soundManager.playCoin();
              onAddCoins?.();
            }}
            className="cursor-pointer group flex items-center gap-1.5 pl-1.5 pr-1 py-0.5 rounded-full bg-[#0a183d]/90 border border-amber-400/70 shadow-[0_2px_8px_rgba(0,0,0,0.6)] hover:border-amber-400 transition-all"
          >
            <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-amber-600 via-yellow-400 to-amber-200 flex items-center justify-center shadow-xs border border-amber-300">
              <span className="text-[10px] font-black text-amber-950">★</span>
            </div>
            <span className="font-extrabold text-xs text-white tracking-tight">
              {coins.toLocaleString()}
            </span>
            <div className="w-4 h-4 rounded-md bg-gradient-to-b from-amber-400 to-amber-600 flex items-center justify-center text-slate-950 font-black shadow-xs group-hover:scale-105 transition-transform">
              <Plus className="w-3 h-3 stroke-[3]" />
            </div>
          </div>

          {/* Diamonds / Gems Pill */}
          <div
            onClick={() => {
              soundManager.playCoin();
              onAddGems?.();
            }}
            className="cursor-pointer group flex items-center gap-1.5 pl-1.5 pr-1 py-0.5 rounded-full bg-[#0a183d]/90 border border-cyan-400/70 shadow-[0_2px_8px_rgba(0,0,0,0.6)] hover:border-cyan-300 transition-all"
          >
            {/* 3D Cyan Diamond */}
            <div className="w-5 h-4 flex items-center justify-center">
              <svg viewBox="0 0 24 20" className="w-4 h-4 drop-shadow-[0_0_6px_rgba(34,211,238,0.9)]">
                <polygon points="6,2 18,2 23,8 12,19 1,8" fill="#0284C7" stroke="#7DD3FC" strokeWidth="1" />
                <polygon points="6,2 18,2 12,8" fill="#38BDF8" />
                <polygon points="1,8 6,2 12,8" fill="#BAE6FD" />
                <polygon points="18,2 23,8 12,8" fill="#0284C7" />
                <polygon points="1,8 12,8 12,19" fill="#0369A1" />
                <polygon points="12,8 23,8 12,19" fill="#0284C7" />
              </svg>
            </div>
            <span className="font-extrabold text-xs text-white tracking-tight">
              {gems}
            </span>
            <div className="w-4 h-4 rounded-md bg-gradient-to-b from-amber-400 to-amber-600 flex items-center justify-center text-slate-950 font-black shadow-xs group-hover:scale-105 transition-transform">
              <Plus className="w-3 h-3 stroke-[3]" />
            </div>
          </div>
        </div>

        {/* Action icons below (Help and Refresh) */}
        <div className="flex items-center gap-2 pr-0.5">
          <button
            onClick={() => {
              soundManager.playClick();
              onHelp?.();
            }}
            className="w-7 h-7 rounded-full bg-[#071740] border-2 border-amber-400/90 flex items-center justify-center text-amber-300 hover:text-amber-200 hover:border-amber-300 shadow-[0_0_8px_rgba(251,191,36,0.4)] active:scale-90 transition-all"
            title="Tournament Rules & Info"
          >
            <HelpCircle className="w-4 h-4 stroke-[2.5]" />
          </button>

          <button
            onClick={() => {
              soundManager.playRoll();
              onRefresh?.();
            }}
            className={`w-7 h-7 rounded-full bg-[#071740] border-2 border-amber-400/90 flex items-center justify-center text-amber-300 hover:text-amber-200 hover:border-amber-300 shadow-[0_0_8px_rgba(251,191,36,0.4)] active:scale-90 transition-all ${
              isRefreshing ? 'animate-spin' : ''
            }`}
            title="Refresh Leaderboard"
          >
            <RotateCw className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>
      </div>
    </div>
  );
};
