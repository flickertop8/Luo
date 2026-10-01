import React from 'react';
import { Menu, Trophy, Plus, Settings } from 'lucide-react';
import { soundManager } from '../../utils/sound';

interface GameTopBarProps {
  coins?: number;
  roomId?: string;
  onOpenMenu?: () => void;
  onOpenSettings?: () => void;
  onAddCoins?: () => void;
}

export const GameTopBar: React.FC<GameTopBarProps> = ({
  coins = 12450,
  roomId = '786532',
  onOpenMenu,
  onOpenSettings,
  onAddCoins,
}) => {
  return (
    <div className="relative z-20 flex flex-col w-full px-2 pt-2 pb-1 select-none">
      {/* Top Row: Menu + Game Mode Pill | Coins + Settings */}
      <div className="flex items-center justify-between">
        {/* Left: Menu & Classic 4 Players pill */}
        <div className="flex items-center gap-2">
          {/* Hamburger Menu Button */}
          <button
            onClick={() => {
              soundManager.playClick();
              onOpenMenu?.();
            }}
            className="w-10 h-10 rounded-xl bg-gradient-to-b from-[#1d4ed8] via-[#1e40af] to-[#0f172a] border-2 border-blue-400/80 shadow-[0_0_12px_rgba(59,130,246,0.5)] flex items-center justify-center active:scale-95 transition-transform"
            aria-label="Menu"
          >
            <Menu className="w-5 h-5 text-white stroke-[2.5]" />
          </button>

          {/* Classic 4 Players Pill */}
          <div className="flex items-center gap-2 px-3 py-1 rounded-xl bg-gradient-to-r from-[#0d1d47] to-[#081538] border-2 border-blue-400/70 shadow-md">
            <Trophy className="w-4 h-4 text-amber-400 fill-amber-400 filter drop-shadow-[0_0_4px_rgba(245,158,11,0.8)]" />
            <div className="flex flex-col leading-none">
              <span className="font-black text-xs text-white tracking-wide">
                Classic
              </span>
              <span className="text-[10px] font-bold text-amber-300">
                4 Players
              </span>
            </div>
          </div>
        </div>

        {/* Right: Coins pill & Settings button */}
        <div className="flex items-center gap-2">
          {/* Gold Coins Pill */}
          <div
            onClick={() => {
              soundManager.playCoin();
              onAddCoins?.();
            }}
            className="cursor-pointer group flex items-center gap-1.5 pl-1.5 pr-1 py-0.5 rounded-full bg-[#0a183d]/90 border-2 border-blue-400/70 shadow-md hover:border-amber-400 transition-all"
          >
            {/* Coin icon with star */}
            <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-amber-600 via-yellow-400 to-amber-200 flex items-center justify-center shadow-xs border border-amber-300">
              <span className="text-[10px] font-black text-amber-950">★</span>
            </div>
            <span className="font-black text-xs text-white tracking-tight">
              {coins.toLocaleString()}
            </span>
            {/* Green plus button */}
            <div className="w-4 h-4 rounded-md bg-gradient-to-b from-emerald-400 to-green-600 flex items-center justify-center text-white font-black shadow-xs group-hover:scale-105 transition-transform">
              <Plus className="w-3 h-3 stroke-[3]" />
            </div>
          </div>

          {/* Settings Button */}
          <button
            onClick={() => {
              soundManager.playClick();
              onOpenSettings?.();
            }}
            className="w-10 h-10 rounded-xl bg-gradient-to-b from-[#1d4ed8] via-[#1e40af] to-[#0f172a] border-2 border-blue-400/80 shadow-[0_0_12px_rgba(59,130,246,0.5)] flex items-center justify-center active:scale-95 transition-transform"
            aria-label="Settings"
          >
            <Settings className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>

      {/* Room ID Badge (Pinned Below Top-Right) */}
      <div className="flex justify-end pr-0.5 mt-1">
        <div
          onClick={() => {
            soundManager.playCoin();
            navigator.clipboard?.writeText(roomId);
          }}
          className="cursor-pointer px-3 py-0.5 rounded-lg bg-[#071740]/90 border border-blue-400/50 shadow-md flex items-center gap-1.5 hover:border-amber-400 transition-colors"
          title="Click to copy Room ID"
        >
          <span className="text-[10px] font-medium text-slate-300">Room ID</span>
          <span className="text-xs font-black text-amber-300 tracking-wider">
            {roomId}
          </span>
        </div>
      </div>
    </div>
  );
};
