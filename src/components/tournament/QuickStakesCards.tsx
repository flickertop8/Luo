import React from 'react';
import { GoldCoins } from '../3d/GoldCoins';
import { soundManager } from '../../utils/sound';

interface QuickStake {
  id: string;
  winAmount: string;
  entryFee: string;
  theme: 'green' | 'blue' | 'purple';
  hasChest?: boolean;
}

const STAKES: QuickStake[] = [
  { id: 'stake_32k', winAmount: '32,000', entryFee: '5,000', theme: 'green' },
  { id: 'stake_64k', winAmount: '64,000', entryFee: '10,000', theme: 'blue' },
  { id: 'stake_640k', winAmount: '640,000', entryFee: '100,000', theme: 'purple', hasChest: true },
];

interface QuickStakesCardsProps {
  onSelectStake?: (stake: QuickStake) => void;
}

export const QuickStakesCards: React.FC<QuickStakesCardsProps> = ({ onSelectStake }) => {
  return (
    <div className="grid grid-cols-3 gap-2 px-2 py-1 select-none">
      {STAKES.map((s) => {
        const isGreen = s.theme === 'green';
        const isBlue = s.theme === 'blue';
        const isPurple = s.theme === 'purple';

        return (
          <div
            key={s.id}
            onClick={() => {
              soundManager.playCoin();
              onSelectStake?.(s);
            }}
            className={`cursor-pointer group flex flex-col justify-between rounded-xl overflow-hidden border-2 shadow-[0_4px_16px_rgba(0,0,0,0.6)] hover:scale-[1.03] transition-all ${
              isGreen
                ? 'border-emerald-400 bg-gradient-to-b from-[#064e3b] via-[#022c22] to-[#011a14]'
                : isBlue
                ? 'border-cyan-400 bg-gradient-to-b from-[#0369a1] via-[#082f49] to-[#031c2e]'
                : 'border-purple-400 bg-gradient-to-b from-[#6b21a8] via-[#3b0764] to-[#200336]'
            }`}
          >
            {/* Top Bar: WIN + Coins / Chest */}
            <div
              className={`py-1 px-2 flex items-center justify-center gap-1.5 ${
                isGreen
                  ? 'bg-gradient-to-r from-emerald-600 to-teal-500'
                  : isBlue
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-500'
                  : 'bg-gradient-to-r from-purple-700 to-fuchsia-600'
              }`}
            >
              {s.hasChest ? (
                /* Glowing 3D Treasure Chest */
                <div className="w-5 h-4 flex items-center justify-center filter drop-shadow-[0_0_4px_rgba(251,191,36,0.9)]">
                  <svg viewBox="0 0 40 32" className="w-full h-full">
                    <defs>
                      <linearGradient id="chestGrad" x1="0" y1="0" x2="40" y2="30">
                        <stop offset="0%" stopColor="#F59E0B" />
                        <stop offset="50%" stopColor="#D97706" />
                        <stop offset="100%" stopColor="#78350F" />
                      </linearGradient>
                    </defs>
                    <path d="M4 14H36L34 28H6L4 14Z" fill="url(#chestGrad)" stroke="#FEF08A" strokeWidth="1" />
                    <path d="M2 14C2 8 8 4 20 4C32 4 38 8 38 14H2Z" fill="#B45309" stroke="#FEF08A" strokeWidth="1" />
                    <circle cx="20" cy="18" r="2" fill="#FEF08A" />
                    <ellipse cx="14" cy="12" rx="3" ry="1.5" fill="#FEF08A" />
                    <ellipse cx="26" cy="12" rx="3" ry="1.5" fill="#FEF08A" />
                  </svg>
                </div>
              ) : (
                <GoldCoins size={16} />
              )}
              <span className="font-black text-xs text-white uppercase tracking-wider drop-shadow-sm">
                WIN
              </span>
            </div>

            {/* Middle Big Amount */}
            <div className="py-2.5 px-1 text-center">
              <span className="font-black text-base sm:text-lg text-white tracking-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                {s.winAmount}
              </span>
            </div>

            {/* Bottom Bar: Yellow background Entry */}
            <div className="py-1 px-1 bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-400 text-slate-950 flex items-center justify-center gap-1 font-black text-[10px] sm:text-[11px] shadow-inner">
              <GoldCoins size={13} />
              <span>Entry: {s.entryFee}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};
