import React from 'react';
import { Trophy, ChevronRight } from 'lucide-react';
import { GlobalGlobeBadge } from './3d/GlobalGlobeBadge';
import { BangladeshFlagBadge } from './3d/BangladeshFlagBadge';
import { TournamentCup } from './3d/TournamentCup';
import { GrandMasterBadge } from './3d/GrandMasterBadge';
import { Dice3D } from './3d/Dice3D';
import { GoldCoins } from './3d/GoldCoins';
import { soundManager } from '../utils/sound';

interface LeaderboardSectionProps {
  onViewAll: () => void;
  onOpenCard?: (cardId: string) => void;
}

export const LeaderboardSection: React.FC<LeaderboardSectionProps> = ({
  onViewAll,
  onOpenCard,
}) => {
  return (
    <div className="flex flex-col gap-2">
      {/* Section Header */}
      <div className="flex items-center justify-between px-1">
        <div className="flex items-center gap-2">
          <Trophy className="w-4 h-4 text-amber-400 fill-amber-400 filter drop-shadow-[0_0_6px_rgba(245,158,11,0.8)]" />
          <h2 className="font-extrabold text-xs sm:text-sm tracking-wider uppercase text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-300">
            LEADERBOARD & ACHIEVEMENT
          </h2>
        </div>
        <button
          onClick={() => {
            soundManager.playClick();
            onViewAll();
          }}
          className="flex items-center gap-0.5 text-xs font-bold text-sky-400 hover:text-sky-300 transition-colors active:scale-95"
        >
          <span>View All</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* 4 Cards Grid */}
      <div className="grid grid-cols-4 gap-2">
        {/* Card 1: Global Leaderboard */}
        <div
          onClick={() => {
            soundManager.playBadge();
            onOpenCard?.('global');
          }}
          className="cursor-pointer group rounded-xl bg-gradient-to-b from-[#0a205a] via-[#05143a] to-[#020b22] border border-cyan-500/40 p-2 sm:p-2.5 flex flex-col items-center justify-between text-center hover:border-cyan-400 hover:scale-[1.02] active:scale-98 transition-all shadow-[0_4px_16px_rgba(0,0,0,0.6)] min-h-[148px]"
        >
          {/* Badge Icon */}
          <div className="relative my-auto flex items-center justify-center">
            <GlobalGlobeBadge size={52} />
          </div>

          <div className="flex flex-col items-center w-full">
            <span className="text-[10px] font-bold text-slate-300 line-clamp-1 leading-tight">
              Global
            </span>
            <span className="text-[9px] font-semibold text-slate-400 -mt-0.5 leading-tight">
              Leaderboard
            </span>
            <span className="font-black text-sm sm:text-base text-white mt-1 leading-none tracking-tight">
              # 58
            </span>
            <span className="text-[9px] font-medium text-cyan-300 truncate w-full mt-0.5">
              Top 1% Players
            </span>
          </div>
        </div>

        {/* Card 2: Country Leaderboard */}
        <div
          onClick={() => {
            soundManager.playBadge();
            onOpenCard?.('country');
          }}
          className="cursor-pointer group rounded-xl bg-gradient-to-b from-[#0a3830] via-[#06241e] to-[#021310] border border-emerald-500/40 p-2 sm:p-2.5 flex flex-col items-center justify-between text-center hover:border-emerald-400 hover:scale-[1.02] active:scale-98 transition-all shadow-[0_4px_16px_rgba(0,0,0,0.6)] min-h-[148px]"
        >
          {/* Badge Icon */}
          <div className="relative my-auto flex items-center justify-center">
            <BangladeshFlagBadge size={52} />
          </div>

          <div className="flex flex-col items-center w-full">
            <span className="text-[10px] font-bold text-slate-300 line-clamp-1 leading-tight">
              Country
            </span>
            <span className="text-[9px] font-semibold text-slate-400 -mt-0.5 leading-tight">
              Leaderboard
            </span>
            <span className="font-black text-sm sm:text-base text-white mt-1 leading-none tracking-tight">
              # 3
            </span>
            <span className="text-[9px] font-medium text-emerald-300 truncate w-full mt-0.5">
              Bangladesh
            </span>
          </div>
        </div>

        {/* Card 3: Tournament Achievement */}
        <div
          onClick={() => {
            soundManager.playBadge();
            onOpenCard?.('tournament');
          }}
          className="cursor-pointer group rounded-xl bg-gradient-to-b from-[#31104e] via-[#200836] to-[#0f041b] border border-purple-500/40 p-2 sm:p-2.5 flex flex-col items-center justify-between text-center hover:border-purple-400 hover:scale-[1.02] active:scale-98 transition-all shadow-[0_4px_16px_rgba(0,0,0,0.6)] min-h-[148px]"
        >
          {/* Badge Icon */}
          <div className="relative my-auto flex items-center justify-center">
            <TournamentCup size={48} glowColor="purple" />
          </div>

          <div className="flex flex-col items-center w-full">
            <span className="text-[10px] font-bold text-slate-300 line-clamp-1 leading-tight">
              Tournament
            </span>
            <span className="text-[9px] font-semibold text-slate-400 -mt-0.5 leading-tight">
              Achievement
            </span>
            <span className="font-black text-sm sm:text-base text-white mt-1 leading-none tracking-tight">
              12
            </span>
            <span className="text-[9px] font-medium text-purple-300 truncate w-full mt-0.5">
              Total Achievements
            </span>
          </div>
        </div>

        {/* Card 4: Grand Master / Honor */}
        <div
          onClick={() => {
            soundManager.playBadge();
            onOpenCard?.('grandmaster');
          }}
          className="cursor-pointer group rounded-xl bg-gradient-to-b from-[#1b1c4b] via-[#101235] to-[#06081e] border border-amber-500/40 p-2 sm:p-2.5 flex flex-col items-center justify-between text-center hover:border-amber-400 hover:scale-[1.02] active:scale-98 transition-all shadow-[0_4px_16px_rgba(0,0,0,0.6)] min-h-[148px] relative overflow-hidden"
        >
          {/* Background coins & dice scattered */}
          <div className="absolute top-1 left-1 opacity-40 scale-50">
            <GoldCoins size={22} />
          </div>
          <div className="absolute top-2 right-1 opacity-50 scale-60 transform rotate-12">
            <Dice3D size={24} rotation={20} />
          </div>
          <div className="absolute bottom-6 left-1 opacity-50 scale-50 transform -rotate-12">
            <Dice3D size={24} rotation={-15} />
          </div>
          <div className="absolute bottom-7 right-1 opacity-45 scale-50">
            <GoldCoins size={22} />
          </div>

          {/* Badge Icon */}
          <div className="relative my-auto flex items-center justify-center">
            <GrandMasterBadge size="sm" showBanner={true} />
          </div>

          <div className="flex flex-col items-center w-full relative z-10">
            <div className="px-1.5 py-0.5 rounded-full bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 shadow-xs border border-amber-200 mt-1">
              <span className="text-[8px] font-black text-slate-950 uppercase tracking-tight">
                Top 1% Players
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
