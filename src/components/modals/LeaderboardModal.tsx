import React, { useState } from 'react';
import { X, Trophy, Globe, Flag, Shield, Award } from 'lucide-react';
import { soundManager } from '../../utils/sound';

interface LeaderboardModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTab?: 'global' | 'country';
}

interface LeaderboardPlayer {
  rank: number;
  name: string;
  country?: string;
  points: number;
  winRate: number;
  isUser?: boolean;
  avatar: string;
}

const GLOBAL_TOP_PLAYERS: LeaderboardPlayer[] = [
  { rank: 1, name: 'KingOfLudo99', country: 'India', points: 18450, winRate: 78, avatar: '👑' },
  { rank: 2, name: 'DragonMaster', country: 'Brazil', points: 17200, winRate: 75, avatar: '🐉' },
  { rank: 3, name: 'Sultana_BD', country: 'Bangladesh', points: 16900, winRate: 74, avatar: '⚡' },
  { rank: 4, name: 'LudoValkyrie', country: 'Turkey', points: 15400, winRate: 71, avatar: '🛡️' },
  { rank: 5, name: 'SpeedyDice', country: 'Egypt', points: 14950, winRate: 69, avatar: '🎲' },
  { rank: 58, name: 'Zahid Gaming (You)', country: 'Bangladesh', points: 12450, winRate: 72, isUser: true, avatar: '😎' },
  { rank: 59, name: 'ApexStriker', country: 'USA', points: 12410, winRate: 66, avatar: '🎯' },
  { rank: 60, name: 'NightFury_77', country: 'Pakistan', points: 12380, winRate: 65, avatar: '⚔️' },
];

const BANGLADESH_TOP_PLAYERS: LeaderboardPlayer[] = [
  { rank: 1, name: 'Shakib_Pro_Ludo', country: 'Bangladesh', points: 17100, winRate: 76, avatar: '🐯' },
  { rank: 2, name: 'Sultana_BD', country: 'Bangladesh', points: 16900, winRate: 74, avatar: '⚡' },
  { rank: 3, name: 'Zahid Gaming (You)', country: 'Bangladesh', points: 12450, winRate: 72, isUser: true, avatar: '😎' },
  { rank: 4, name: 'DhakaKing', country: 'Bangladesh', points: 11800, winRate: 68, avatar: '🏰' },
  { rank: 5, name: 'ChittagongRider', country: 'Bangladesh', points: 10950, winRate: 67, avatar: '⚓' },
  { rank: 6, name: 'SylhetSniper', country: 'Bangladesh', points: 10400, winRate: 64, avatar: '🍃' },
];

export const LeaderboardModal: React.FC<LeaderboardModalProps> = ({
  isOpen,
  onClose,
  defaultTab = 'global',
}) => {
  const [tab, setTab] = useState<'global' | 'country'>(defaultTab);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-md max-h-[90vh] flex flex-col rounded-2xl bg-gradient-to-b from-[#0b1d4d] via-[#051130] to-[#02091c] border-2 border-amber-400/50 shadow-[0_0_30px_rgba(251,191,36,0.3)] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-blue-500/20 bg-[#071640]">
          <div className="flex items-center gap-2">
            <Trophy className="w-5 h-5 text-amber-400 fill-amber-400 filter drop-shadow-[0_0_6px_rgba(245,158,11,0.8)]" />
            <h3 className="font-extrabold text-base tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-yellow-400">
              LEADERBOARD RANKINGS
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

        {/* Tab Switcher */}
        <div className="grid grid-cols-2 p-2 bg-[#040c24] border-b border-blue-500/20 gap-2">
          <button
            onClick={() => {
              soundManager.playClick();
              setTab('global');
            }}
            className={`py-2 px-3 rounded-xl font-black text-xs flex items-center justify-center gap-2 transition-all ${
              tab === 'global'
                ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-[0_0_12px_rgba(34,211,238,0.5)]'
                : 'text-slate-400 hover:text-slate-200 bg-white/5'
            }`}
          >
            <Globe className="w-4 h-4" />
            <span>GLOBAL RANK (#58)</span>
          </button>

          <button
            onClick={() => {
              soundManager.playClick();
              setTab('country');
            }}
            className={`py-2 px-3 rounded-xl font-black text-xs flex items-center justify-center gap-2 transition-all ${
              tab === 'country'
                ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-[0_0_12px_rgba(16,185,129,0.5)]'
                : 'text-slate-400 hover:text-slate-200 bg-white/5'
            }`}
          >
            <Flag className="w-4 h-4" />
            <span>BANGLADESH (#3)</span>
          </button>
        </div>

        {/* List Content */}
        <div className="flex-1 overflow-y-auto p-3 space-y-2">
          {(tab === 'global' ? GLOBAL_TOP_PLAYERS : BANGLADESH_TOP_PLAYERS).map((player) => (
            <div
              key={player.name}
              className={`flex items-center justify-between p-2.5 rounded-xl border transition-all ${
                player.isUser
                  ? 'bg-gradient-to-r from-amber-950/70 via-[#1e3a8a]/70 to-[#0c1e54] border-amber-400/80 shadow-[0_0_15px_rgba(251,191,36,0.35)]'
                  : 'bg-[#06143c]/60 border-blue-500/20 hover:bg-[#091f5e]/60'
              }`}
            >
              {/* Rank & Name */}
              <div className="flex items-center gap-3 min-w-0">
                <div
                  className={`w-7 h-7 rounded-lg flex items-center justify-center font-black text-xs ${
                    player.rank === 1
                      ? 'bg-amber-400 text-black shadow-[0_0_8px_rgba(251,191,36,0.8)]'
                      : player.rank === 2
                      ? 'bg-slate-300 text-black'
                      : player.rank === 3
                      ? 'bg-amber-700 text-white'
                      : 'bg-slate-800 text-slate-300'
                  }`}
                >
                  #{player.rank}
                </div>

                <div className="flex items-center gap-2 min-w-0">
                  <span className="text-lg">{player.avatar}</span>
                  <div className="flex flex-col min-w-0">
                    <span
                      className={`text-xs font-bold truncate ${
                        player.isUser ? 'text-amber-300 font-black' : 'text-white'
                      }`}
                    >
                      {player.name}
                    </span>
                    <span className="text-[10px] text-slate-400">
                      {'country' in player ? player.country : 'Bangladesh'} · {player.winRate}% Win Rate
                    </span>
                  </div>
                </div>
              </div>

              {/* Points */}
              <div className="text-right shrink-0">
                <span className="font-black text-xs sm:text-sm text-amber-300">
                  {player.points.toLocaleString()}
                </span>
                <span className="block text-[9px] text-slate-400">Points</span>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="p-3 border-t border-blue-500/20 bg-[#040c24] flex items-center justify-between text-xs text-slate-300">
          <span>Weekly reset in 2 days 14 hours</span>
          <span className="font-bold text-amber-300">Season 12</span>
        </div>
      </div>
    </div>
  );
};
