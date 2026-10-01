import React from 'react';
import { X, Trophy, HelpCircle, Flame, ShieldCheck } from 'lucide-react';
import { soundManager } from '../../utils/sound';

interface TournamentRulesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TournamentRulesModal: React.FC<TournamentRulesModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-xs animate-in fade-in duration-200 select-none">
      <div className="relative w-full max-w-md max-h-[85vh] flex flex-col rounded-2xl bg-gradient-to-b from-[#0b1d4d] via-[#051130] to-[#02091c] border-2 border-amber-400 shadow-[0_0_30px_rgba(251,191,36,0.3)] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-blue-500/20 bg-[#071640]">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-amber-400 filter drop-shadow-[0_0_6px_rgba(245,158,11,0.8)]" />
            <h3 className="font-extrabold text-base tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-yellow-400">
              TOURNAMENT LEADERBOARD RULES
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
        <div className="flex-1 overflow-y-auto p-4 space-y-3 text-xs text-slate-200">
          <div className="p-3 rounded-xl bg-amber-950/40 border border-amber-500/40 flex items-start gap-2.5">
            <Trophy className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-amber-200">Weekly Season Reset</h4>
              <p className="text-slate-300 text-[11px] mt-0.5">
                Leaderboards reset every Sunday at 23:59 GMT. Top 3 global winners receive exclusive golden frames, gems, and profile prestige badges.
              </p>
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="font-extrabold text-white text-xs uppercase tracking-wide">
              Ranking Calculation:
            </h4>
            <ul className="space-y-1.5 pl-3 border-l-2 border-cyan-400/40 text-[11px] text-slate-300">
              <li><strong className="text-white">Tournament Wins:</strong> +250 Points per 1st place victory.</li>
              <li><strong className="text-white">Win Rate Multiplier:</strong> Players maintaining &gt;70% win rate earn 1.5x score bonus.</li>
              <li><strong className="text-white">Country Leaderboard:</strong> Compete against top players from your country to win national titles.</li>
              <li><strong className="text-white">Fair Play Policy:</strong> Match-fixing or teaming up in solo rooms results in instant ranking reset.</li>
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="p-3 border-t border-blue-500/20 bg-[#040c24] flex items-center justify-end">
          <button
            onClick={() => {
              soundManager.playClick();
              onClose();
            }}
            className="px-5 py-2 rounded-xl bg-gradient-to-r from-amber-400 to-amber-600 text-slate-950 font-black text-xs hover:brightness-110 active:scale-95"
          >
            GOT IT
          </button>
        </div>
      </div>
    </div>
  );
};
