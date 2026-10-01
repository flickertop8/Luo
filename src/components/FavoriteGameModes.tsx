import React from 'react';
import { Gamepad2, ChevronRight, Crown, Zap } from 'lucide-react';
import { GameModeStat } from '../types';
import { Pawn3D } from './3d/Pawn3D';
import { Dice3D } from './3d/Dice3D';
import { TournamentCup } from './3d/TournamentCup';
import { soundManager } from '../utils/sound';

interface FavoriteGameModesProps {
  modes: GameModeStat[];
  onSeeAll: () => void;
  onSelectMode?: (mode: GameModeStat) => void;
}

export const FavoriteGameModes: React.FC<FavoriteGameModesProps> = ({
  modes,
  onSeeAll,
  onSelectMode,
}) => {
  return (
    <div className="flex flex-col gap-2">
      {/* Header */}
      <div className="flex items-center justify-between px-1">
        <div className="flex items-center gap-2">
          <Gamepad2 className="w-4 h-4 text-cyan-400 filter drop-shadow-[0_0_6px_rgba(34,211,238,0.8)]" />
          <h2 className="font-extrabold text-xs sm:text-sm tracking-wider uppercase text-slate-100">
            FAVORITE GAME MODES
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

      {/* 4 Cards */}
      <div className="grid grid-cols-4 gap-2">
        {modes.map((mode) => (
          <div
            key={mode.id}
            onClick={() => {
              soundManager.playClick();
              onSelectMode?.(mode);
            }}
            className="cursor-pointer group rounded-xl bg-gradient-to-b from-[#0a1e50] via-[#051236] to-[#02091e] border border-blue-500/30 p-2 sm:p-2.5 flex flex-col items-center justify-between text-center hover:border-cyan-400 hover:scale-[1.02] active:scale-98 transition-all shadow-[0_4px_16px_rgba(0,0,0,0.6)] min-h-[148px]"
          >
            {/* Visual Icon Area */}
            <div className="relative my-auto h-12 w-full flex items-center justify-center">
              {mode.iconType === 'classic' && (
                <div className="relative flex items-center justify-center">
                  <div className="absolute -left-3 bottom-0 scale-75 transform -rotate-6">
                    <Pawn3D color="red" size={26} />
                  </div>
                  <div className="absolute right-0 bottom-0 scale-75 transform rotate-6">
                    <Pawn3D color="blue" size={26} />
                  </div>
                  <div className="relative z-10 scale-75 -mt-1">
                    <Dice3D size={28} rotation={10} />
                  </div>
                </div>
              )}

              {mode.iconType === 'teamup' && (
                <div className="relative flex items-center justify-center gap-0.5">
                  <div className="scale-60 -mr-2">
                    <Pawn3D color="yellow" size={24} />
                  </div>
                  <div className="scale-70 -mr-1 z-10">
                    <Pawn3D color="red" size={26} />
                  </div>
                  <div className="scale-70 -ml-1 z-10">
                    <Pawn3D color="cyan" size={26} />
                  </div>
                  <div className="scale-60 -ml-2">
                    <Pawn3D color="blue" size={24} />
                  </div>
                </div>
              )}

              {mode.iconType === 'privateroom' && (
                <div className="relative flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full blur-sm bg-purple-600/40" />
                  <TournamentCup size={42} glowColor="purple" />
                </div>
              )}

              {mode.iconType === 'quickmatch' && (
                <div className="relative flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full blur-md bg-amber-400/50" />
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-800 to-indigo-950 border border-purple-500/60 flex items-center justify-center shadow-lg">
                    <Zap className="w-6 h-6 text-amber-300 fill-amber-400 filter drop-shadow-[0_0_8px_rgba(251,191,36,0.9)]" />
                  </div>
                </div>
              )}
            </div>

            {/* Info Area */}
            <div className="flex flex-col items-center w-full">
              <span className="font-extrabold text-[11px] sm:text-xs text-white truncate w-full leading-tight">
                {mode.title}
              </span>
              <span className="text-[9px] text-slate-400 truncate w-full mt-0.5">
                {mode.matches} Matches
              </span>
              <div className="flex items-center justify-center gap-1 mt-1 text-[9px] font-bold text-amber-300">
                <Crown className="w-2.5 h-2.5 text-amber-400 fill-amber-400" />
                <span>{mode.winRate}% Win Rate</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
