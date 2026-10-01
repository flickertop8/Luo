import React from 'react';
import { Crown, Gift } from 'lucide-react';
import { RealisticAvatar, PlayerId } from './RealisticAvatar';
import { soundManager } from '../../utils/sound';

export type PlayerColor = 'red' | 'green' | 'blue' | 'yellow';

export interface GamePlayerInfo {
  id: PlayerId;
  name: string;
  color: PlayerColor;
  points: number;
  diceValue: number;
  isActiveTurn: boolean;
  hasCrown?: boolean;
  isTimerActive?: boolean;
}

interface PlayerHudProps {
  player: GamePlayerInfo;
  onRollDice?: () => void;
  onSendGift?: (player: GamePlayerInfo) => void;
}

export const PlayerHud: React.FC<PlayerHudProps> = ({
  player,
  onRollDice,
  onSendGift,
}) => {
  const isRed = player.color === 'red';
  const isGreen = player.color === 'green';
  const isBlue = player.color === 'blue';
  const isYellow = player.color === 'yellow';

  const isRightSide = isGreen || isYellow;

  const renderDiceFace = (val: number) => {
    if (player.isTimerActive) {
      return (
        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-gradient-to-br from-[#fbcfe8] via-[#f472b6] to-[#ec4899] shadow-inner border border-pink-300" />
      );
    }

    return (
      <div className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-gradient-to-b from-white via-[#f1f5f9] to-[#e2e8f0] border border-slate-300 shadow-[inset_0_1px_2px_rgba(255,255,255,1),0_2px_4px_rgba(0,0,0,0.5)] flex items-center justify-center p-0.5 sm:p-1">
        {val === 1 && <div className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 rounded-full bg-slate-950 shadow-xs" />}
        {val === 2 && (
          <div className="w-full h-full flex justify-between p-1">
            <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-slate-950 self-start" />
            <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-slate-950 self-end" />
          </div>
        )}
        {val === 3 && (
          <div className="w-full h-full flex justify-between p-0.5 sm:p-1">
            <div className="w-1.5 h-1.5 sm:w-2.5 sm:h-2.5 rounded-full bg-slate-950 self-start" />
            <div className="w-1.5 h-1.5 sm:w-2.5 sm:h-2.5 rounded-full bg-slate-950 self-center" />
            <div className="w-1.5 h-1.5 sm:w-2.5 sm:h-2.5 rounded-full bg-slate-950 self-end" />
          </div>
        )}
        {val === 4 && (
          <div className="w-full h-full grid grid-cols-2 p-0.5 sm:p-1 gap-0.5 sm:gap-1">
            <div className="w-1.5 h-1.5 sm:w-2.5 sm:h-2.5 rounded-full bg-slate-950 justify-self-start" />
            <div className="w-1.5 h-1.5 sm:w-2.5 sm:h-2.5 rounded-full bg-slate-950 justify-self-end" />
            <div className="w-1.5 h-1.5 sm:w-2.5 sm:h-2.5 rounded-full bg-slate-950 justify-self-start" />
            <div className="w-1.5 h-1.5 sm:w-2.5 sm:h-2.5 rounded-full bg-slate-950 justify-self-end" />
          </div>
        )}
        {val === 5 && (
          <div className="w-full h-full relative p-0.5 sm:p-1">
            <div className="absolute top-1 left-1 w-1.5 h-1.5 sm:w-2.5 sm:h-2.5 rounded-full bg-slate-950" />
            <div className="absolute top-1 right-1 w-1.5 h-1.5 sm:w-2.5 sm:h-2.5 rounded-full bg-slate-950" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 sm:w-2.5 sm:h-2.5 rounded-full bg-slate-950" />
            <div className="absolute bottom-1 left-1 w-1.5 h-1.5 sm:w-2.5 sm:h-2.5 rounded-full bg-slate-950" />
            <div className="absolute bottom-1 right-1 w-1.5 h-1.5 sm:w-2.5 sm:h-2.5 rounded-full bg-slate-950" />
          </div>
        )}
        {val === 6 && (
          <div className="w-full h-full grid grid-cols-2 p-0.5 gap-x-0.5 sm:gap-x-1 gap-y-0.5 sm:gap-y-1 items-center justify-items-center">
            <div className="w-1.5 h-1.5 sm:w-2.5 sm:h-2.5 rounded-full bg-slate-950" />
            <div className="w-1.5 h-1.5 sm:w-2.5 sm:h-2.5 rounded-full bg-slate-950" />
            <div className="w-1.5 h-1.5 sm:w-2.5 sm:h-2.5 rounded-full bg-slate-950" />
            <div className="w-1.5 h-1.5 sm:w-2.5 sm:h-2.5 rounded-full bg-slate-950" />
            <div className="w-1.5 h-1.5 sm:w-2.5 sm:h-2.5 rounded-full bg-slate-950" />
            <div className="w-1.5 h-1.5 sm:w-2.5 sm:h-2.5 rounded-full bg-slate-950" />
          </div>
        )}
      </div>
    );
  };

  const renderPin = () => (
    <div className="relative w-5 h-6 sm:w-6 sm:h-8 flex items-center justify-center filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
      <svg viewBox="0 0 24 32" className="w-full h-full">
        <path
          d="M12 2C6.5 2 2 6.5 2 12C2 19 12 30 12 30C12 30 22 19 22 12C22 6.5 17.5 2 12 2Z"
          fill="#FFFFFF"
          stroke="#E2E8F0"
          strokeWidth="1.2"
        />
        <circle
          cx="12"
          cy="12"
          r="5.5"
          fill={
            isRed
              ? '#E11D48'
              : isGreen
              ? '#16A34A'
              : isBlue
              ? '#2563EB'
              : '#EAB308'
          }
        />
      </svg>
    </div>
  );

  return (
    <div className="flex flex-col gap-1 select-none">
      {/* Top Row: Avatar & Badge Card */}
      <div className="flex items-center gap-1 sm:gap-1.5">
        {/* Avatar with Ring */}
        <div className="relative shrink-0">
          {player.hasCrown && (
            <div className="absolute -top-2.5 -left-1.5 z-20 transform -rotate-12 filter drop-shadow-[0_0_4px_rgba(251,191,36,0.9)]">
              <svg width="20" height="14" viewBox="0 0 46 30" fill="none">
                <path
                  d="M5 26L3 7L13 14L23 2L33 14L43 7L41 26C41 27.1 40.1 28 39 28H7C5.9 28 5 27.1 5 26Z"
                  fill="#FACC15"
                  stroke="#FEF08A"
                  strokeWidth="1.5"
                />
                <circle cx="23" cy="4" r="2.5" fill="#EF4444" />
                <circle cx="3" cy="8" r="2" fill="#3B82F6" />
                <circle cx="43" cy="8" r="2" fill="#3B82F6" />
              </svg>
            </div>
          )}

          <div
            className={`w-11 h-11 sm:w-13 sm:h-13 rounded-full p-0.5 shadow-md flex items-center justify-center ${
              isRed
                ? 'bg-gradient-to-b from-red-500 via-rose-600 to-red-800'
                : isGreen
                ? 'bg-gradient-to-b from-emerald-400 via-green-600 to-emerald-800'
                : isBlue
                ? 'bg-gradient-to-b from-sky-400 via-blue-600 to-indigo-800'
                : 'bg-gradient-to-b from-amber-300 via-yellow-500 to-amber-700'
            }`}
          >
            <RealisticAvatar playerId={player.id} size={42} />
          </div>
        </div>

        {/* Player Badge Card */}
        <div
          className={`flex items-center justify-between px-2 sm:px-2.5 py-1 rounded-xl shadow-md min-w-[95px] sm:min-w-[125px] border ${
            isRed
              ? 'bg-gradient-to-r from-[#991b1b] via-[#b91c1c] to-[#7f1d1d] border-red-400'
              : isGreen
              ? 'bg-gradient-to-r from-[#14532d] via-[#15803d] to-[#14532d] border-emerald-400'
              : isBlue
              ? 'bg-gradient-to-r from-[#1e3a8a] via-[#1d4ed8] to-[#1e3a8a] border-blue-400'
              : 'bg-gradient-to-r from-[#713f12] via-[#854d0e] to-[#713f12] border-amber-400'
          }`}
        >
          <div className="flex flex-col leading-tight min-w-0 pr-1">
            <span className="font-extrabold text-[11px] sm:text-xs text-white truncate drop-shadow-sm">
              {player.name}
            </span>
            <div className="flex items-center gap-1 mt-0.5">
              <Crown className="w-3 h-3 text-amber-300 fill-amber-300 shrink-0" />
              <span className="font-extrabold text-[10px] sm:text-[11px] text-white">
                {player.points.toLocaleString()}
              </span>
            </div>
          </div>

          <button
            onClick={() => {
              soundManager.playClick();
              onSendGift?.(player);
            }}
            className="w-5 h-5 sm:w-6 sm:h-6 rounded-md bg-gradient-to-b from-blue-700 to-indigo-950 border border-amber-300/80 flex items-center justify-center text-amber-300 shadow-sm hover:scale-110 active:scale-95 transition-transform shrink-0"
            title="Send Gift"
          >
            <Gift className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-amber-400/90 text-amber-300" />
          </button>
        </div>
      </div>

      {/* Bottom Row: Location Pin & Dice Box */}
      <div className={`flex items-center gap-1.5 ${isRightSide ? 'justify-end pr-1' : 'pl-1'}`}>
        {!isRightSide && (
          <>
            {renderPin()}
            <div
              onClick={() => {
                if (isBlue) {
                  soundManager.playRoll();
                  onRollDice?.();
                }
              }}
              className={`cursor-pointer rounded-xl sm:rounded-2xl p-0.5 sm:p-1 flex items-center justify-center transition-all ${
                isRed
                  ? 'border-2 border-red-500 shadow-[0_0_10px_rgba(239,68,68,0.7)] bg-red-950/40'
                  : 'border-2 border-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.8)] bg-blue-950/60 hover:scale-105 active:scale-95'
              }`}
            >
              {renderDiceFace(player.diceValue)}
            </div>
          </>
        )}

        {isRightSide && (
          <>
            <div
              className={`rounded-xl sm:rounded-2xl p-0.5 sm:p-1 flex items-center justify-center transition-all ${
                isGreen
                  ? 'border-2 border-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.7)] bg-emerald-950/40'
                  : 'border-2 border-amber-400 shadow-[0_0_10px_rgba(251,191,36,0.7)] bg-amber-950/40'
              }`}
            >
              {renderDiceFace(player.diceValue)}
            </div>
            {renderPin()}
          </>
        )}
      </div>
    </div>
  );
};
