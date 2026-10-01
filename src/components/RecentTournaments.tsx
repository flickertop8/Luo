import React from 'react';
import { Trophy, ChevronRight } from 'lucide-react';
import { TournamentRecord } from '../types';
import { GoldCoins } from './3d/GoldCoins';
import { soundManager } from '../utils/sound';

interface RecentTournamentsProps {
  tournaments: TournamentRecord[];
  onSeeAll: () => void;
  onSelectTournament?: (record: TournamentRecord) => void;
}

export const RecentTournaments: React.FC<RecentTournamentsProps> = ({
  tournaments,
  onSeeAll,
  onSelectTournament,
}) => {
  return (
    <div className="flex flex-col gap-2 pb-6">
      {/* Header */}
      <div className="flex items-center justify-between px-1">
        <div className="flex items-center gap-2">
          <Trophy className="w-4 h-4 text-amber-400 fill-amber-400 filter drop-shadow-[0_0_6px_rgba(245,158,11,0.8)]" />
          <h2 className="font-extrabold text-xs sm:text-sm tracking-wider uppercase text-slate-100">
            RECENT TOURNAMENTS
          </h2>
        </div>
        <button
          onClick={() => {
            soundManager.playClick();
            onSeeAll();
          }}
          className="flex items-center gap-0.5 text-xs font-bold text-sky-400 hover:text-sky-300 transition-colors active:scale-95"
        >
          <span>See All</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* 3 Cards */}
      <div className="grid grid-cols-3 gap-2">
        {tournaments.map((t) => {
          const isFirst = t.position === '1st';
          const isSecond = t.position === '2nd';

          return (
            <div
              key={t.id}
              onClick={() => {
                soundManager.playCoin();
                onSelectTournament?.(t);
              }}
              className="cursor-pointer group rounded-xl bg-gradient-to-b from-[#0a1f52] via-[#051336] to-[#020a20] border border-blue-500/30 p-2 sm:p-2.5 flex flex-col justify-between hover:border-amber-400 hover:scale-[1.02] active:scale-98 transition-all shadow-[0_4px_16px_rgba(0,0,0,0.6)]"
            >
              {/* Top Row: Medal Badge & Tournament Name */}
              <div className="flex items-center gap-1.5">
                {/* Position Medal Ribbon */}
                <div
                  className={`shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center font-black text-xs shadow-md border ${
                    isFirst
                      ? 'bg-gradient-to-b from-amber-300 via-amber-500 to-yellow-700 text-slate-950 border-amber-200'
                      : isSecond
                      ? 'bg-gradient-to-b from-slate-200 via-sky-400 to-blue-700 text-slate-950 border-sky-200'
                      : 'bg-gradient-to-b from-amber-600 via-amber-800 to-amber-950 text-amber-200 border-amber-600'
                  }`}
                >
                  {t.position}
                </div>

                <div className="min-w-0 flex-1">
                  <h4 className="font-extrabold text-[11px] sm:text-xs text-white truncate leading-tight">
                    {t.name}
                  </h4>
                </div>
              </div>

              {/* Prize Winnings Area with Gold Coins */}
              <div className="flex items-center gap-1.5 my-2 p-1.5 rounded-lg bg-black/30 border border-white/5">
                <GoldCoins size={22} />
                <div className="flex flex-col min-w-0">
                  <span className="text-[9px] text-amber-300 font-bold leading-none">
                    Win
                  </span>
                  <span className="font-black text-xs sm:text-sm text-white tracking-tight leading-tight">
                    {t.winnings}
                  </span>
                </div>
              </div>

              {/* Bottom Metadata */}
              <div className="flex flex-col text-[9px] text-slate-400 leading-tight">
                <span>Entry: {t.entryFee}</span>
                <span className="text-slate-500">{t.date}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
