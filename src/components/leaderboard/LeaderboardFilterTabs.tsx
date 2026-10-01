import React from 'react';
import { Globe, Trophy, Shield } from 'lucide-react';
import { soundManager } from '../../utils/sound';
import { CountryFlag } from '../common/CountryFlag';

export type LeaderboardTab = 'global' | 'country' | 'season' | 'tournament';

interface LeaderboardFilterTabsProps {
  activeTab: LeaderboardTab;
  onSelectTab: (tab: LeaderboardTab) => void;
}

export const LeaderboardFilterTabs: React.FC<LeaderboardFilterTabsProps> = ({
  activeTab,
  onSelectTab,
}) => {
  return (
    <div className="grid grid-cols-4 gap-1.5 px-2 py-1 select-none">
      {/* 1. GLOBAL */}
      <button
        onClick={() => {
          soundManager.playClick();
          onSelectTab('global');
        }}
        className={`py-2 px-1 rounded-xl font-black text-[11px] sm:text-xs flex items-center justify-center gap-1 transition-all border ${
          activeTab === 'global'
            ? 'bg-gradient-to-b from-amber-300 via-yellow-400 to-amber-500 text-slate-950 border-amber-200 shadow-[0_0_12px_rgba(251,191,36,0.7)] scale-[1.02]'
            : 'bg-[#06143c]/90 text-slate-300 border-blue-500/30 hover:bg-[#0a205a]'
        }`}
      >
        <Globe className={`w-3.5 h-3.5 ${activeTab === 'global' ? 'text-slate-950 stroke-[2.5]' : 'text-cyan-400'}`} />
        <span>GLOBAL</span>
      </button>

      {/* 2. COUNTRY */}
      <button
        onClick={() => {
          soundManager.playClick();
          onSelectTab('country');
        }}
        className={`py-2 px-1 rounded-xl font-black text-[11px] sm:text-xs flex items-center justify-center gap-1 transition-all border ${
          activeTab === 'country'
            ? 'bg-gradient-to-b from-amber-300 via-yellow-400 to-amber-500 text-slate-950 border-amber-200 shadow-[0_0_12px_rgba(251,191,36,0.7)] scale-[1.02]'
            : 'bg-[#06143c]/90 text-slate-300 border-blue-500/30 hover:bg-[#0a205a]'
        }`}
      >
        <div className="w-3.5 h-3.5 rounded-full overflow-hidden border border-white/40 flex items-center justify-center bg-[#006a4e]">
          <div className="w-2 h-2 rounded-full bg-[#f42a41]" />
        </div>
        <span>COUNTRY</span>
      </button>

      {/* 3. SEASON */}
      <button
        onClick={() => {
          soundManager.playClick();
          onSelectTab('season');
        }}
        className={`py-2 px-1 rounded-xl font-black text-[11px] sm:text-xs flex items-center justify-center gap-1 transition-all border ${
          activeTab === 'season'
            ? 'bg-gradient-to-b from-amber-300 via-yellow-400 to-amber-500 text-slate-950 border-amber-200 shadow-[0_0_12px_rgba(251,191,36,0.7)] scale-[1.02]'
            : 'bg-[#06143c]/90 text-slate-300 border-blue-500/30 hover:bg-[#0a205a]'
        }`}
      >
        <Trophy className={`w-3.5 h-3.5 ${activeTab === 'season' ? 'text-slate-950' : 'text-amber-400 fill-amber-400'}`} />
        <span>SEASON</span>
      </button>

      {/* 4. TOURNAMENT */}
      <button
        onClick={() => {
          soundManager.playClick();
          onSelectTab('tournament');
        }}
        className={`py-2 px-1 rounded-xl font-black text-[10px] sm:text-xs flex items-center justify-center gap-1 transition-all border ${
          activeTab === 'tournament'
            ? 'bg-gradient-to-b from-amber-300 via-yellow-400 to-amber-500 text-slate-950 border-amber-200 shadow-[0_0_12px_rgba(251,191,36,0.7)] scale-[1.02]'
            : 'bg-[#06143c]/90 text-slate-300 border-blue-500/30 hover:bg-[#0a205a]'
        }`}
      >
        <div className="w-3.5 h-3.5 rounded-xs bg-red-600 border border-amber-300 flex items-center justify-center">
          <Shield className="w-2.5 h-2.5 text-amber-300 fill-amber-300" />
        </div>
        <span>TOURNAMENT</span>
      </button>
    </div>
  );
};
