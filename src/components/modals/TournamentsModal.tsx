import React from 'react';
import { X, Trophy, Coins, Calendar, ShieldCheck } from 'lucide-react';
import { TournamentRecord } from '../../types';
import { GoldCoins } from '../3d/GoldCoins';
import { soundManager } from '../../utils/sound';

interface TournamentsModalProps {
  isOpen: boolean;
  onClose: () => void;
  tournaments: TournamentRecord[];
}

export const TournamentsModal: React.FC<TournamentsModalProps> = ({
  isOpen,
  onClose,
  tournaments,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-md max-h-[90vh] flex flex-col rounded-2xl bg-gradient-to-b from-[#0e1d4d] via-[#061233] to-[#020a1f] border-2 border-amber-400/50 shadow-[0_0_30px_rgba(251,191,36,0.3)] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-blue-500/20 bg-[#081845]">
          <div className="flex items-center gap-2">
            <Trophy className="w-5 h-5 text-amber-400 fill-amber-400 filter drop-shadow-[0_0_6px_rgba(245,158,11,0.8)]" />
            <h3 className="font-extrabold text-base tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-yellow-400">
              TOURNAMENT HISTORY & PRIZES
            </h3>
          </div>
          <button
            onClick={() => {
              soundManager.playClick();
              onClose();
            }}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/10"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-3 space-y-2.5">
          {/* Summary Box */}
          <div className="p-3 rounded-xl bg-gradient-to-r from-amber-950/40 via-amber-900/30 to-blue-950/40 border border-amber-500/40 flex items-center justify-between">
            <div>
              <span className="text-[10px] text-amber-300 font-bold uppercase tracking-wider block">Total Career Earnings</span>
              <span className="text-lg font-black text-amber-200">2,16,000 Coins</span>
            </div>
            <div className="text-right">
              <span className="text-[10px] text-slate-400 block">Win Trophies</span>
              <span className="text-sm font-black text-white">124 Cups</span>
            </div>
          </div>

          {tournaments.map((t) => (
            <div
              key={t.id}
              className="p-3 rounded-xl bg-[#061339]/80 border border-blue-500/25 hover:border-amber-400/50 transition-all flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-9 h-9 rounded-lg flex items-center justify-center font-black text-xs shadow-md border ${
                    t.position === '1st'
                      ? 'bg-amber-400 text-slate-950 border-amber-200'
                      : t.position === '2nd'
                      ? 'bg-sky-400 text-slate-950 border-sky-200'
                      : 'bg-amber-800 text-amber-200 border-amber-600'
                  }`}
                >
                  {t.position}
                </div>
                <div>
                  <h4 className="text-xs font-black text-white">{t.name}</h4>
                  <div className="flex items-center gap-2 text-[10px] text-slate-400 mt-0.5">
                    <span>Entry: {t.entryFee}</span>
                    <span>·</span>
                    <span>{t.date}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-right">
                <GoldCoins size={22} />
                <div className="flex flex-col">
                  <span className="text-[9px] text-amber-300 font-bold leading-none">Prize</span>
                  <span className="text-xs font-black text-white leading-tight">{t.winnings}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
