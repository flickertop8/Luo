import React from 'react';
import { MessageSquare, Mic, MicOff, Smile, UserPlus } from 'lucide-react';
import { soundManager } from '../../utils/sound';

interface GameBottomBarProps {
  onOpenChat: () => void;
  onOpenEmoji: () => void;
  onOpenInvite: () => void;
  isVoiceActive?: boolean;
  onToggleVoice?: () => void;
}

export const GameBottomBar: React.FC<GameBottomBarProps> = ({
  onOpenChat,
  onOpenEmoji,
  onOpenInvite,
  isVoiceActive = false,
  onToggleVoice,
}) => {
  return (
    <div className="w-full px-4 pt-2 pb-3 flex items-center justify-between select-none">
      {/* 1. Chat */}
      <button
        onClick={() => {
          soundManager.playClick();
          onOpenChat();
        }}
        className="flex flex-col items-center gap-1 group focus:outline-hidden"
      >
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-b from-[#1e3a8a] via-[#172554] to-[#0f172a] border-2 border-blue-400/80 shadow-[0_0_12px_rgba(59,130,246,0.4)] flex items-center justify-center group-hover:border-cyan-300 group-hover:scale-105 active:scale-95 transition-all">
          <MessageSquare className="w-5 h-5 text-white" />
        </div>
        <span className="text-xs font-black text-white tracking-wide">
          Chat
        </span>
      </button>

      {/* 2. Voice */}
      <button
        onClick={() => {
          soundManager.playClick();
          onToggleVoice?.();
        }}
        className="flex flex-col items-center gap-1 group focus:outline-hidden"
      >
        <div
          className={`w-12 h-12 rounded-2xl border-2 flex items-center justify-center group-hover:scale-105 active:scale-95 transition-all ${
            isVoiceActive
              ? 'bg-gradient-to-b from-emerald-600 via-teal-700 to-green-900 border-emerald-300 shadow-[0_0_15px_rgba(16,185,129,0.8)]'
              : 'bg-gradient-to-b from-[#1e3a8a] via-[#172554] to-[#0f172a] border-blue-400/80 shadow-[0_0_12px_rgba(59,130,246,0.4)] group-hover:border-cyan-300'
          }`}
        >
          {isVoiceActive ? (
            <Mic className="w-5 h-5 text-white animate-pulse" />
          ) : (
            <Mic className="w-5 h-5 text-white" />
          )}
        </div>
        <span
          className={`text-xs font-black tracking-wide ${
            isVoiceActive ? 'text-emerald-400' : 'text-white'
          }`}
        >
          Voice
        </span>
      </button>

      {/* 3. Emoji */}
      <button
        onClick={() => {
          soundManager.playClick();
          onOpenEmoji();
        }}
        className="flex flex-col items-center gap-1 group focus:outline-hidden"
      >
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-b from-[#1e3a8a] via-[#172554] to-[#0f172a] border-2 border-blue-400/80 shadow-[0_0_12px_rgba(59,130,246,0.4)] flex items-center justify-center group-hover:border-cyan-300 group-hover:scale-105 active:scale-95 transition-all">
          <Smile className="w-6 h-6 text-white" />
        </div>
        <span className="text-xs font-black text-white tracking-wide">
          Emoji
        </span>
      </button>

      {/* 4. Invite */}
      <button
        onClick={() => {
          soundManager.playCoin();
          onOpenInvite();
        }}
        className="flex flex-col items-center gap-1 group focus:outline-hidden"
      >
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-b from-[#1e3a8a] via-[#172554] to-[#0f172a] border-2 border-blue-400/80 shadow-[0_0_12px_rgba(59,130,246,0.4)] flex items-center justify-center group-hover:border-cyan-300 group-hover:scale-105 active:scale-95 transition-all">
          <UserPlus className="w-5 h-5 text-white" />
        </div>
        <span className="text-xs font-black text-white tracking-wide">
          Invite
        </span>
      </button>
    </div>
  );
};
