import React from 'react';
import { Crown, Star, BarChart3 } from 'lucide-react';
import { GrandMasterBadge } from './3d/GrandMasterBadge';
import { Dice3D } from './3d/Dice3D';
import { Pawn3D } from './3d/Pawn3D';
import { GoldCoins } from './3d/GoldCoins';
import { PlayerStats } from '../types';
import { soundManager } from '../utils/sound';

interface CurrentSeasonBannerProps {
  stats: PlayerStats;
  onOpenSeasonPass?: () => void;
}

export const CurrentSeasonBanner: React.FC<CurrentSeasonBannerProps> = ({
  stats,
  onOpenSeasonPass,
}) => {
  return (
    <div
      onClick={() => {
        soundManager.playBadge();
        onOpenSeasonPass?.();
      }}
      className="cursor-pointer group relative overflow-hidden rounded-2xl bg-gradient-to-b from-[#0e2769] via-[#071745] to-[#030b24] border-2 border-blue-400/40 p-3 sm:p-4 shadow-[0_8px_30px_rgba(0,0,0,0.8)] hover:border-amber-400/60 transition-all"
    >
      {/* Background Lighting & FX */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-48 h-48 bg-amber-400/15 blur-3xl rounded-full" />
        <div className="absolute bottom-0 left-1/4 w-40 h-40 bg-purple-500/20 blur-3xl rounded-full" />
        <div className="absolute -top-10 left-10 w-24 h-48 bg-cyan-400/15 blur-2xl transform rotate-45" />
      </div>

      {/* Main Top Area: Title & 3D Trophy / Pawn Scene */}
      <div className="relative z-10 flex items-center justify-between min-h-[96px]">
        {/* Left: Titles */}
        <div className="flex flex-col gap-0.5">
          <div className="flex items-center gap-1.5">
            <Crown className="w-4 h-4 text-amber-300 fill-amber-400 filter drop-shadow-[0_0_6px_rgba(245,158,11,0.8)]" />
            <span className="font-extrabold text-xs tracking-wider uppercase text-amber-200 drop-shadow-sm">
              CURRENT SEASON
            </span>
          </div>

          <h3 className="font-black text-2xl sm:text-3xl tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-amber-200 to-amber-400 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            Grand Master
          </h3>

          <span className="text-xs font-semibold text-slate-300 drop-shadow-sm">
            Top 1% Players
          </span>
        </div>

        {/* Right: 3D Grand Master Emblem with Pawns & Dice */}
        <div className="relative flex items-center justify-center shrink-0 w-36 h-28">
          {/* Scattered pawns */}
          <div className="absolute -left-2 bottom-0 z-10 scale-75 transform -rotate-6">
            <Pawn3D color="red" size={30} />
          </div>
          <div className="absolute right-1 bottom-1 z-10 scale-75 transform rotate-6">
            <Pawn3D color="green" size={30} />
          </div>
          <div className="absolute -right-3 top-3 z-0 scale-65 opacity-80">
            <Pawn3D color="blue" size={28} />
          </div>

          {/* Dice */}
          <div className="absolute left-2 bottom-1 z-20 scale-75 transform rotate-12">
            <Dice3D size={32} rotation={15} />
          </div>

          {/* Gold coins */}
          <div className="absolute right-0 bottom-0 z-10 scale-60 opacity-80">
            <GoldCoins size={28} />
          </div>

          {/* Central Ornate Crest */}
          <div className="relative z-15 transform group-hover:scale-105 transition-transform duration-300">
            <GrandMasterBadge size="lg" />
          </div>
        </div>
      </div>

      {/* Bottom 4-Column Metric Bar */}
      <div className="relative z-10 mt-3 pt-2.5 border-t border-blue-400/20 grid grid-cols-4 gap-2">
        {/* Total Points */}
        <div className="flex items-center gap-1.5 min-w-0">
          <div className="shrink-0 p-1 rounded-md bg-amber-500/20 border border-amber-400/40">
            <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400 filter drop-shadow-[0_0_4px_rgba(245,158,11,0.8)]" />
          </div>
          <div className="min-w-0 flex flex-col">
            <span className="font-extrabold text-xs sm:text-sm text-white tracking-tight leading-tight">
              {stats.totalPoints.toLocaleString()}
            </span>
            <span className="text-[9px] text-slate-400 truncate leading-tight">
              Total Points
            </span>
          </div>
        </div>

        {/* Global Rank */}
        <div className="flex items-center gap-1.5 min-w-0">
          <div className="shrink-0 p-1 rounded-md bg-cyan-500/20 border border-cyan-400/40">
            <BarChart3 className="w-3.5 h-3.5 text-cyan-400 filter drop-shadow-[0_0_4px_rgba(34,211,238,0.8)]" />
          </div>
          <div className="min-w-0 flex flex-col">
            <span className="font-extrabold text-xs sm:text-sm text-white tracking-tight leading-tight">
              # {stats.globalRank}
            </span>
            <span className="text-[9px] text-slate-400 truncate leading-tight">
              Global Rank
            </span>
          </div>
        </div>

        {/* Country Rank */}
        <div className="flex items-center gap-1.5 min-w-0">
          <div className="shrink-0 w-5 h-4 rounded-xs overflow-hidden bg-[#006a4e] relative border border-white/20 flex items-center justify-center">
            <div className="w-2.5 h-2.5 rounded-full bg-[#f42a41] -translate-x-0.2" />
          </div>
          <div className="min-w-0 flex flex-col">
            <span className="font-extrabold text-xs sm:text-sm text-white tracking-tight leading-tight">
              # {stats.countryRank}
            </span>
            <span className="text-[9px] text-slate-400 truncate leading-tight">
              Country Rank
            </span>
          </div>
        </div>

        {/* Season 12 Hexagon Badge */}
        <div className="flex items-center gap-1.5 min-w-0">
          <div className="shrink-0 w-6 h-6 rounded-md bg-gradient-to-b from-amber-400 to-amber-700 border border-amber-200 flex items-center justify-center shadow-xs">
            <span className="font-black text-[9px] text-slate-950">
              S{stats.seasonNumber}
            </span>
          </div>
          <div className="min-w-0 flex flex-col">
            <span className="font-extrabold text-xs text-white tracking-tight leading-tight">
              Season {stats.seasonNumber}
            </span>
            <span className="text-[9px] text-slate-400 truncate leading-tight">
              {stats.seasonRankTier}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
