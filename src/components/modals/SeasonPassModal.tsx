import React from 'react';
import { X, Crown, Star, Gift, ShieldAlert, CheckCircle } from 'lucide-react';
import { GrandMasterBadge } from '../3d/GrandMasterBadge';
import { GoldCoins } from '../3d/GoldCoins';
import { soundManager } from '../../utils/sound';

interface SeasonPassModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SEASON_TIERS = [
  { tier: 'Tier 1 - Silver', points: '0 - 400', reward: 'Silver Frame', unlocked: true },
  { tier: 'Tier 2 - Gold', points: '400 - 800', reward: 'Golden Dice Skin', unlocked: true },
  { tier: 'Tier 3 - Platinum', points: '800 - 1,200', reward: '10,000 Gold Coins', unlocked: true },
  { tier: 'Tier 4 - Diamond', points: '1,200 - 1,500', reward: 'Royal Crown Avatar', unlocked: true },
  { tier: 'Tier 5 - Grand Master', points: '1,500+ (Active)', reward: 'Exclusive Winged Crest & Top 1% Title', unlocked: true, current: true },
];

export const SeasonPassModal: React.FC<SeasonPassModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-md max-h-[90vh] flex flex-col rounded-2xl bg-gradient-to-b from-[#131d4d] via-[#091130] to-[#030718] border-2 border-amber-400/60 shadow-[0_0_35px_rgba(251,191,36,0.35)] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-blue-500/20 bg-[#0c1a4b]">
          <div className="flex items-center gap-2">
            <Crown className="w-5 h-5 text-amber-300 fill-amber-400 filter drop-shadow-[0_0_6px_rgba(245,158,11,0.8)]" />
            <h3 className="font-extrabold text-base tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-white via-amber-200 to-amber-400">
              SEASON 12: GRAND MASTER
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
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {/* Hero Banner */}
          <div className="p-4 rounded-xl bg-gradient-to-r from-purple-900/40 via-blue-900/40 to-amber-900/40 border border-amber-400/40 flex items-center gap-4">
            <div className="shrink-0">
              <GrandMasterBadge size="md" />
            </div>
            <div>
              <span className="text-[10px] font-bold text-amber-300 uppercase tracking-wider block">
                Top 1% Global Players
              </span>
              <h4 className="text-base font-black text-white">Grand Master Tier Reached</h4>
              <p className="text-xs text-slate-300 mt-0.5">
                Total Season Points: <span className="font-bold text-amber-300">1,240 Pts</span>
              </p>
            </div>
          </div>

          {/* Tier progression */}
          <div className="space-y-2">
            <h5 className="text-xs font-bold text-slate-300 uppercase tracking-wide">
              Season Tier Progression
            </h5>
            {SEASON_TIERS.map((t) => (
              <div
                key={t.tier}
                className={`p-2.5 rounded-xl border flex items-center justify-between text-xs transition-all ${
                  t.current
                    ? 'bg-amber-950/40 border-amber-400/80 shadow-[0_0_12px_rgba(251,191,36,0.3)]'
                    : 'bg-[#071336]/60 border-blue-500/20'
                }`}
              >
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <div>
                    <span className="font-bold text-white block">{t.tier}</span>
                    <span className="text-[10px] text-slate-400">{t.points}</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-amber-300 font-bold block">{t.reward}</span>
                  <span className="text-[9px] text-emerald-400 font-semibold">Claimed</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="p-3 border-t border-blue-500/20 bg-[#050e26] flex items-center justify-between text-xs">
          <span className="text-slate-400">Season ends in 8 days</span>
          <button
            onClick={() => {
              soundManager.playCoin();
              onClose();
            }}
            className="px-4 py-1.5 rounded-lg bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 font-black hover:brightness-110 active:scale-95"
          >
            CLAIM PASS REWARD
          </button>
        </div>
      </div>
    </div>
  );
};
