import React from 'react';
import { X, Gamepad2, Crown, Flame, Target, Users, Key, Zap } from 'lucide-react';
import { GameModeStat } from '../../types';
import { soundManager } from '../../utils/sound';

interface GameModesModalProps {
  isOpen: boolean;
  onClose: () => void;
  modes: GameModeStat[];
}

export const GameModesModal: React.FC<GameModesModalProps> = ({
  isOpen,
  onClose,
  modes,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-md max-h-[90vh] flex flex-col rounded-2xl bg-gradient-to-b from-[#0b1e52] via-[#051133] to-[#020a20] border-2 border-cyan-400/50 shadow-[0_0_30px_rgba(34,211,238,0.3)] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-blue-500/20 bg-[#071744]">
          <div className="flex items-center gap-2">
            <Gamepad2 className="w-5 h-5 text-cyan-400 filter drop-shadow-[0_0_6px_rgba(34,211,238,0.8)]" />
            <h3 className="font-extrabold text-base tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-sky-300 to-amber-300">
              GAME MODES MASTER STATS
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
        <div className="flex-1 overflow-y-auto p-3 space-y-3">
          {modes.map((mode) => (
            <div
              key={mode.id}
              className="p-3 rounded-xl bg-[#071640]/80 border border-blue-500/30 hover:border-cyan-400/50 transition-all flex flex-col gap-2"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-900/60 border border-blue-400/40 flex items-center justify-center">
                    {mode.iconType === 'classic' && <Target className="w-4 h-4 text-rose-400" />}
                    {mode.iconType === 'teamup' && <Users className="w-4 h-4 text-cyan-400" />}
                    {mode.iconType === 'privateroom' && <Key className="w-4 h-4 text-purple-400" />}
                    {mode.iconType === 'quickmatch' && <Zap className="w-4 h-4 text-amber-400" />}
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-white">{mode.title}</h4>
                    <span className="text-[10px] text-slate-400">Total Played: {mode.matches} Matches</span>
                  </div>
                </div>

                <div className="flex items-center gap-1 px-2 py-1 rounded-lg bg-amber-500/20 border border-amber-400/40 text-amber-300 font-black text-xs">
                  <Crown className="w-3.5 h-3.5 fill-amber-400" />
                  <span>{mode.winRate}%</span>
                </div>
              </div>

              {/* Progress bar */}
              <div className="w-full h-2 rounded-full bg-slate-900 overflow-hidden border border-blue-500/30">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-amber-400"
                  style={{ width: `${mode.winRate}%` }}
                />
              </div>

              {/* Quick info row */}
              <div className="grid grid-cols-3 text-center text-[10px] text-slate-300 pt-1 border-t border-white/5">
                <div>
                  <span className="text-slate-500 block">Wins</span>
                  <span className="font-bold text-emerald-400">
                    {Math.round((mode.matches * mode.winRate) / 100)}
                  </span>
                </div>
                <div>
                  <span className="text-slate-500 block">Losses</span>
                  <span className="font-bold text-rose-400">
                    {mode.matches - Math.round((mode.matches * mode.winRate) / 100)}
                  </span>
                </div>
                <div>
                  <span className="text-slate-500 block">Favorite Color</span>
                  <span className="font-bold text-amber-300">
                    {mode.iconType === 'classic' ? 'Red' : mode.iconType === 'teamup' ? 'Yellow' : 'Blue'}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
