import React from 'react';
import { X, Award, CheckCircle2, Lock } from 'lucide-react';
import { soundManager } from '../../utils/sound';

interface AchievementsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ACHIEVEMENTS_DATA = [
  { id: 1, title: 'Grand Master Prestige', desc: 'Reach Grand Master tier in any competitive season', unlocked: true, reward: '10,000 Coins', icon: '👑' },
  { id: 2, title: 'Sixer Prodigy', desc: 'Roll three consecutive sixes in a high-stakes match', unlocked: true, reward: '2,500 Coins', icon: '🎲' },
  { id: 3, title: 'Bengal Tiger Striker', desc: 'Reach Top 5 rank in the Bangladesh Country Leaderboard', unlocked: true, reward: '5,000 Coins', icon: '🐯' },
  { id: 4, title: 'Tournament Slayer', desc: 'Win 1st place in 50 registered tournaments', unlocked: true, reward: '20,000 Coins', icon: '🏆' },
  { id: 5, title: 'Royal Pawn Hunter', desc: 'Capture 500 enemy tokens in Classic 4-Player mode', unlocked: true, reward: '3,000 Coins', icon: '⚔️' },
  { id: 6, title: 'Unbeatable Duo', desc: 'Maintain a 70%+ win rate in 200+ Team Up matches', unlocked: true, reward: '8,000 Coins', icon: '🤝' },
  { id: 7, title: 'High Roller Elite', desc: 'Win a private high-stakes room match with 50K+ entry', unlocked: true, reward: '15,000 Coins', icon: '💎' },
  { id: 8, title: 'Speed of Light', desc: 'Finish a Quick Match in under 3 minutes', unlocked: true, reward: '1,500 Coins', icon: '⚡' },
  { id: 9, title: 'Popularity Icon', desc: 'Amass over 1,000,000 player popularity points', unlocked: true, reward: 'Flame Badge', icon: '🔥' },
  { id: 10, title: 'Century Veteran', desc: 'Play over 300 competitive matches with verified record', unlocked: true, reward: 'Silver Shield', icon: '🛡️' },
  { id: 11, title: 'Clean Sweep', desc: 'Take all 4 pawns home without losing a single token', unlocked: true, reward: '4,000 Coins', icon: '🎯' },
  { id: 12, title: 'Golden Crown Sovereign', desc: 'Achieve 250+ total career tournament wins', unlocked: true, reward: 'Golden Token Skin', icon: '🌟' },
  { id: 13, title: 'Immortal King (Locked)', desc: 'Reach Global Rank #1 in any official World Tournament', unlocked: false, reward: '50,000 Gems', icon: '🪐' },
];

export const AchievementsModal: React.FC<AchievementsModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-md max-h-[90vh] flex flex-col rounded-2xl bg-gradient-to-b from-[#1a0a38] via-[#0e0524] to-[#040112] border-2 border-purple-400/50 shadow-[0_0_30px_rgba(192,132,252,0.3)] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-purple-500/20 bg-[#160630]">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-purple-400 filter drop-shadow-[0_0_6px_rgba(192,132,252,0.8)]" />
            <h3 className="font-extrabold text-base tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-pink-300 to-amber-300">
              PLAYER ACHIEVEMENTS (12/13)
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

        {/* List of achievements */}
        <div className="flex-1 overflow-y-auto p-3 space-y-2">
          {ACHIEVEMENTS_DATA.map((ach) => (
            <div
              key={ach.id}
              className={`flex items-start gap-3 p-3 rounded-xl border transition-all ${
                ach.unlocked
                  ? 'bg-[#150a30]/70 border-purple-500/30 hover:border-purple-400/60'
                  : 'bg-[#090417]/50 border-slate-800 opacity-60'
              }`}
            >
              {/* Icon badge */}
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center text-xl shrink-0 border ${
                  ach.unlocked
                    ? 'bg-gradient-to-br from-purple-700 to-indigo-900 border-purple-300 shadow-[0_0_10px_rgba(168,85,247,0.4)]'
                    : 'bg-slate-900 border-slate-700 text-slate-500'
                }`}
              >
                {ach.icon}
              </div>

              {/* Details */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-1">
                  <h4 className="text-xs font-black text-white truncate">
                    {ach.title}
                  </h4>
                  {ach.unlocked ? (
                    <span className="flex items-center gap-1 text-[10px] font-bold text-emerald-400 shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Unlocked</span>
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 text-[10px] font-bold text-slate-500 shrink-0">
                      <Lock className="w-3 h-3" />
                      <span>Locked</span>
                    </span>
                  )}
                </div>
                <p className="text-[11px] text-slate-300 mt-0.5 leading-snug">
                  {ach.desc}
                </p>
                <div className="mt-1.5 flex items-center gap-1.5 text-[10px] font-semibold text-amber-300">
                  <span>Reward:</span>
                  <span className="px-1.5 py-0.2 rounded-sm bg-amber-500/20 border border-amber-500/30 text-amber-200">
                    {ach.reward}
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
