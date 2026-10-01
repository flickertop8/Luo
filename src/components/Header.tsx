import React from 'react';
import { ArrowLeft, Settings, Crown } from 'lucide-react';
import { soundManager } from '../utils/sound';

interface HeaderProps {
  onBack?: () => void;
  onOpenSettings?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onBack, onOpenSettings }) => {
  return (
    <header className="relative z-30 flex items-center justify-between px-3 pt-3 pb-2 select-none">
      {/* Back Button */}
      <button
        onClick={() => {
          soundManager.playClick();
          onBack?.();
        }}
        className="w-10 h-10 rounded-xl bg-gradient-to-b from-[#1e40af] via-[#1d4ed8] to-[#0f172a] border-2 border-cyan-400/80 shadow-[0_0_12px_rgba(34,211,238,0.4)] flex items-center justify-center active:scale-95 transition-transform"
        aria-label="Back"
      >
        <ArrowLeft className="w-5 h-5 text-cyan-200 drop-shadow-[0_0_4px_rgba(34,211,238,0.8)]" />
      </button>

      {/* Center Golden Banner: PLAYER PROFILE */}
      <div className="relative flex items-center justify-center px-6 py-1.5">
        {/* Banner Frame Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#09153a] to-transparent" />
        <div className="absolute inset-x-2 inset-y-0 rounded-lg border-2 border-amber-400/70 bg-[#081333]/90 shadow-[0_0_15px_rgba(251,191,36,0.35)]" />
        
        {/* Banner Content */}
        <div className="relative z-10 flex items-center gap-2">
          <Crown className="w-4 h-4 text-amber-300 fill-amber-400 filter drop-shadow-[0_0_6px_rgba(245,158,11,0.8)]" />
          <h1 className="font-extrabold tracking-wider text-base sm:text-lg text-transparent bg-clip-text bg-gradient-to-b from-white via-amber-200 to-amber-400 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
            PLAYER PROFILE
          </h1>
        </div>
      </div>

      {/* Settings Gear Button */}
      <button
        onClick={() => {
          soundManager.playClick();
          onOpenSettings?.();
        }}
        className="w-10 h-10 rounded-xl bg-gradient-to-b from-[#1e40af] via-[#1d4ed8] to-[#0f172a] border-2 border-cyan-400/80 shadow-[0_0_12px_rgba(34,211,238,0.4)] flex items-center justify-center active:scale-95 transition-transform"
        aria-label="Settings"
      >
        <Settings className="w-5 h-5 text-cyan-200 drop-shadow-[0_0_4px_rgba(34,211,238,0.8)]" />
      </button>
    </header>
  );
};
