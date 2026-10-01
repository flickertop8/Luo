import React from 'react';
import { Trophy, User, Dices, Swords, MessageSquare } from 'lucide-react';
import { soundManager } from '../../utils/sound';

export type NavTab = 'game' | 'tournaments' | 'leaderboard' | 'chat' | 'profile';

interface BottomNavBarProps {
  currentTab: NavTab;
  onChangeTab: (tab: NavTab) => void;
}

export const BottomNavBar: React.FC<BottomNavBarProps> = ({
  currentTab,
  onChangeTab,
}) => {
  const tabs = [
    { id: 'game' as NavTab, label: 'Game', icon: Dices, isMain: true },
    { id: 'tournaments' as NavTab, label: 'Arena', icon: Swords, badge: 'HOT' },
    { id: 'leaderboard' as NavTab, label: 'Leaderboard', icon: Trophy },
    { id: 'chat' as NavTab, label: 'Chat', icon: MessageSquare, badge: '3' },
    { id: 'profile' as NavTab, label: 'Profile', icon: User },
  ];

  return (
    <div className="sticky bottom-0 left-0 right-0 z-40 pt-1 pb-1 px-2 select-none">
      <div className="relative rounded-2xl bg-gradient-to-r from-[#061233]/95 via-[#0b1d4f]/95 to-[#061233]/95 border-2 border-blue-400/50 backdrop-blur-md shadow-[0_-5px_25px_rgba(0,0,0,0.8)] px-2 py-1.5 flex items-center justify-around">
        {tabs.map((tab) => {
          const isActive = currentTab === tab.id;
          const Icon = tab.icon;

          if (tab.isMain) {
            return (
              <button
                key={tab.id}
                onClick={() => {
                  soundManager.playRoll();
                  onChangeTab(tab.id);
                }}
                className="relative -mt-6 group focus:outline-hidden"
              >
                {/* Glow ring */}
                <div className="absolute inset-0 rounded-full blur-md bg-amber-400/50 group-hover:bg-amber-400/80 transition-all" />
                <div
                  className={`w-14 h-14 rounded-full flex flex-col items-center justify-center border-2 transition-all ${
                    isActive
                      ? 'bg-gradient-to-b from-amber-300 via-yellow-400 to-amber-600 border-white text-slate-950 shadow-[0_0_20px_rgba(251,191,36,0.9)] scale-105'
                      : 'bg-gradient-to-b from-blue-500 via-indigo-600 to-blue-900 border-amber-300 text-white shadow-lg group-hover:scale-105'
                  }`}
                >
                  <Icon className="w-6 h-6 drop-shadow-md stroke-[2.5]" />
                  <span className="text-[9px] font-black uppercase tracking-tight -mt-0.5">
                    PLAY
                  </span>
                </div>
              </button>
            );
          }

          return (
            <button
              key={tab.id}
              onClick={() => {
                soundManager.playClick();
                onChangeTab(tab.id);
              }}
              className={`relative flex flex-col items-center justify-center py-1 px-2 rounded-xl transition-all ${
                isActive
                  ? 'bg-gradient-to-b from-amber-500/25 to-yellow-500/10 text-amber-300 border border-amber-400/40'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {tab.badge && (
                <div className="absolute -top-1 right-1 px-1 py-0.2 rounded-full bg-rose-600 text-white text-[7px] font-black uppercase border border-rose-300 shadow-xs">
                  {tab.badge}
                </div>
              )}

              <Icon
                className={`w-5 h-5 transition-transform ${
                  isActive
                    ? 'text-amber-300 scale-110 drop-shadow-[0_0_8px_rgba(251,191,36,0.8)]'
                    : 'text-slate-400'
                }`}
              />
              <span
                className={`text-[10px] font-extrabold mt-0.5 tracking-tight ${
                  isActive ? 'text-amber-200' : 'text-slate-400'
                }`}
              >
                {tab.label}
              </span>

              {isActive && (
                <div className="w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_6px_rgba(251,191,36,0.9)] -mb-1 mt-0.5" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};
