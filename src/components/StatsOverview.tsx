import React from 'react';
import { Trophy, Users, Crown, Flame } from 'lucide-react';
import { PlayerProfile, PlayerStats } from '../types';
import { GrandMasterBadge } from './3d/GrandMasterBadge';
import { soundManager } from '../utils/sound';

interface StatsOverviewProps {
  profile: PlayerProfile;
  stats: PlayerStats;
  onOpenRankDetails?: () => void;
}

export const StatsOverview: React.FC<StatsOverviewProps> = ({
  profile,
  stats,
  onOpenRankDetails,
}) => {
  const xpPercent = Math.min(100, Math.round((profile.currentXp / profile.maxXp) * 100));

  return (
    <div className="flex flex-col gap-2.5">
      {/* Row 1: 3 Main Cards (Current Rank, Level, Popularity) */}
      <div className="grid grid-cols-12 gap-2">
        {/* Card 1: Grand Master / Current Rank */}
        <div
          onClick={() => {
            soundManager.playBadge();
            onOpenRankDetails?.();
          }}
          className="col-span-4 rounded-xl bg-gradient-to-b from-[#0b1d4f] to-[#040e2b] border border-blue-500/30 p-2 sm:p-2.5 flex items-center gap-2 cursor-pointer hover:border-amber-400/50 hover:bg-[#0e2463] transition-all shadow-[0_4px_16px_rgba(0,0,0,0.6)]"
        >
          <div className="shrink-0 -my-1">
            <GrandMasterBadge size="sm" />
          </div>
          <div className="min-w-0 flex flex-col">
            <span className="font-extrabold text-xs sm:text-sm text-white tracking-tight truncate leading-tight">
              {profile.rankTitle}
            </span>
            <span className="text-[10px] text-slate-400 truncate leading-tight">
              Current Rank
            </span>
          </div>
        </div>

        {/* Card 2: Level 78 & XP Bar */}
        <div className="col-span-5 rounded-xl bg-gradient-to-b from-[#0b1d4f] to-[#040e2b] border border-blue-500/30 p-2 sm:p-2.5 flex items-center gap-2 shadow-[0_4px_16px_rgba(0,0,0,0.6)]">
          {/* Hexagon Level Badge */}
          <div className="relative shrink-0 w-8 h-8 flex items-center justify-center">
            <svg viewBox="0 0 40 40" className="w-full h-full">
              <defs>
                <linearGradient id="lvlHexGrad" x1="0" y1="0" x2="40" y2="40">
                  <stop offset="0%" stopColor="#FFFBEB" />
                  <stop offset="40%" stopColor="#F59E0B" />
                  <stop offset="100%" stopColor="#92400E" />
                </linearGradient>
              </defs>
              <polygon
                points="20,2 36,11 36,29 20,38 4,29 4,11"
                fill="#451A03"
                stroke="url(#lvlHexGrad)"
                strokeWidth="2.5"
              />
            </svg>
            <span className="absolute font-black text-xs text-amber-200">
              {profile.level}
            </span>
          </div>

          <div className="flex-1 min-w-0 flex flex-col justify-center gap-1">
            <span className="font-extrabold text-xs sm:text-sm text-white tracking-tight truncate leading-none">
              Level {profile.level}
            </span>
            {/* XP Neon Progress Bar */}
            <div className="w-full h-2 rounded-full bg-slate-900 border border-purple-500/40 overflow-hidden relative">
              <div
                className="h-full rounded-full bg-gradient-to-r from-purple-600 via-fuchsia-500 to-purple-400 shadow-[0_0_8px_rgba(217,70,239,0.8)] transition-all duration-500"
                style={{ width: `${xpPercent}%` }}
              />
            </div>
            <span className="text-[9px] text-slate-400 font-mono tracking-tight leading-none">
              {profile.currentXp.toLocaleString()} / {profile.maxXp.toLocaleString()}
            </span>
          </div>
        </div>

        {/* Card 3: Popularity */}
        <div className="col-span-3 rounded-xl bg-gradient-to-b from-[#0b1d4f] to-[#040e2b] border border-blue-500/30 p-2 sm:p-2.5 flex items-center gap-1.5 sm:gap-2 shadow-[0_4px_16px_rgba(0,0,0,0.6)]">
          <div className="shrink-0 p-1 rounded-lg bg-orange-950/60 border border-orange-500/40">
            <Flame className="w-4 h-4 text-orange-400 fill-orange-500 filter drop-shadow-[0_0_6px_rgba(249,115,22,0.9)] animate-pulse" />
          </div>
          <div className="min-w-0 flex flex-col">
            <span className="font-black text-xs sm:text-sm text-white tracking-tight truncate leading-tight">
              {profile.popularity}
            </span>
            <span className="text-[10px] text-slate-400 truncate leading-tight">
              Popularity
            </span>
          </div>
        </div>
      </div>

      {/* Row 2: 4 Small Metrics (Tournaments, Matches, Wins, Losses) */}
      <div className="grid grid-cols-4 gap-2">
        {/* Tournaments */}
        <div className="rounded-xl bg-gradient-to-b from-[#08173e] to-[#030a20] border border-blue-600/30 p-2 flex items-center gap-2 shadow-sm">
          <div className="shrink-0">
            <Trophy className="w-5 h-5 text-amber-400 fill-amber-500/80 drop-shadow-[0_0_4px_rgba(245,158,11,0.6)]" />
          </div>
          <div className="min-w-0 flex flex-col">
            <span className="font-black text-xs sm:text-sm text-white leading-tight">
              {stats.tournaments}
            </span>
            <span className="text-[9px] text-slate-400 truncate leading-tight">
              Tournaments
            </span>
          </div>
        </div>

        {/* Matches */}
        <div className="rounded-xl bg-gradient-to-b from-[#08173e] to-[#030a20] border border-blue-600/30 p-2 flex items-center gap-2 shadow-sm">
          <div className="shrink-0">
            <Users className="w-5 h-5 text-cyan-400 fill-cyan-500/70 drop-shadow-[0_0_4px_rgba(34,211,238,0.6)]" />
          </div>
          <div className="min-w-0 flex flex-col">
            <span className="font-black text-xs sm:text-sm text-white leading-tight">
              {stats.matches}
            </span>
            <span className="text-[9px] text-slate-400 truncate leading-tight">
              Matches
            </span>
          </div>
        </div>

        {/* Wins */}
        <div className="rounded-xl bg-gradient-to-b from-[#08173e] to-[#030a20] border border-blue-600/30 p-2 flex items-center gap-2 shadow-sm">
          <div className="shrink-0">
            <Crown className="w-5 h-5 text-amber-400 fill-amber-500/90 drop-shadow-[0_0_4px_rgba(245,158,11,0.7)]" />
          </div>
          <div className="min-w-0 flex flex-col">
            <span className="font-black text-xs sm:text-sm text-white leading-tight">
              {stats.wins}
            </span>
            <span className="text-[9px] text-slate-400 truncate leading-tight">
              Wins
            </span>
          </div>
        </div>

        {/* Losses */}
        <div className="rounded-xl bg-gradient-to-b from-[#08173e] to-[#030a20] border border-blue-600/30 p-2 flex items-center gap-2 shadow-sm">
          <div className="shrink-0">
            {/* Red glowing skull icon */}
            <svg className="w-5 h-5 filter drop-shadow-[0_0_4px_rgba(239,68,68,0.7)]" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 2C6.48 2 2 6.48 2 12C2 15.68 4 18.89 7 20.6V22H17V20.6C20 18.89 22 15.68 22 12C22 6.48 17.52 2 12 2Z"
                fill="#EF4444"
              />
              <circle cx="8" cy="11" r="2.2" fill="#450A0A" />
              <circle cx="16" cy="11" r="2.2" fill="#450A0A" />
              <path d="M12 14L10 17H14L12 14Z" fill="#450A0A" />
              <line x1="9" y1="21" x2="9" y2="19" stroke="#450A0A" strokeWidth="1.5" />
              <line x1="12" y1="21" x2="12" y2="19" stroke="#450A0A" strokeWidth="1.5" />
              <line x1="15" y1="21" x2="15" y2="19" stroke="#450A0A" strokeWidth="1.5" />
            </svg>
          </div>
          <div className="min-w-0 flex flex-col">
            <span className="font-black text-xs sm:text-sm text-white leading-tight">
              {stats.losses}
            </span>
            <span className="text-[9px] text-slate-400 truncate leading-tight">
              Losses
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
