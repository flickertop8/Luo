import React from 'react';
import { X, Gift } from 'lucide-react';
import { GamePlayerInfo } from './PlayerHud';
import { soundManager } from '../../utils/sound';

interface GiftModalProps {
  isOpen: boolean;
  onClose: () => void;
  targetPlayer: GamePlayerInfo | null;
  onSendGift: (giftName: string, cost: number) => void;
}

const GIFTS = [
  { id: 'rose', name: 'Rose', icon: '🌹', cost: 100 },
  { id: 'cake', name: 'Cake', icon: '🎂', cost: 250 },
  { id: 'diamond', name: 'Diamond Ring', icon: '💍', cost: 500 },
  { id: 'cocktail', name: 'Drink', icon: '🍹', cost: 150 },
  { id: 'kiss', name: 'Kiss', icon: '💋', cost: 300 },
  { id: 'tomato', name: 'Throw Tomato', icon: '🍅', cost: 50 },
  { id: 'egg', name: 'Throw Egg', icon: '🥚', cost: 50 },
  { id: 'bomb', name: 'Dynamite', icon: '💣', cost: 200 },
];

export const GiftModal: React.FC<GiftModalProps> = ({
  isOpen,
  onClose,
  targetPlayer,
  onSendGift,
}) => {
  if (!isOpen || !targetPlayer) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 bg-black/80 backdrop-blur-xs animate-in fade-in duration-150 select-none">
      <div className="relative w-full max-w-xs rounded-3xl bg-gradient-to-b from-[#0b1d4d] via-[#051130] to-[#02091c] border-2 border-amber-400 p-4 shadow-2xl text-center">
        <div className="flex items-center justify-between pb-2 border-b border-blue-500/20">
          <div className="flex items-center gap-1.5">
            <Gift className="w-4 h-4 text-amber-400" />
            <h3 className="font-black text-xs text-amber-300 uppercase tracking-wide">
              Send Gift to {targetPlayer.name}
            </h3>
          </div>
          <button onClick={onClose} className="p-1 rounded-lg text-slate-400 hover:text-white">
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-4 gap-2 my-3">
          {GIFTS.map((g) => (
            <button
              key={g.id}
              onClick={() => {
                soundManager.playCoin();
                onSendGift(g.name, g.cost);
                onClose();
              }}
              className="p-2 rounded-xl bg-[#071640] border border-blue-500/40 hover:border-amber-400 flex flex-col items-center gap-1 hover:scale-105 active:scale-95 transition-all"
            >
              <span className="text-2xl">{g.icon}</span>
              <span className="text-[9px] font-bold text-slate-300 truncate w-full">
                {g.name}
              </span>
              <span className="text-[8px] font-black text-amber-300">
                {g.cost} 🪙
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
