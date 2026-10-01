import React, { useState } from 'react';
import { X, Send } from 'lucide-react';
import { soundManager } from '../../utils/sound';

interface ChatModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSendEmoji: (emoji: string) => void;
  onSendMessage: (msg: string) => void;
}

const QUICK_PHRASES = [
  'Hurry up! ⏰',
  'Well played! 👏',
  'Nice roll! 🎲',
  'Please spare my token! 🥺',
  'Good game! 👑',
  'Unlucky! 💔',
  'I am coming for you! ⚔️',
  'Haha nice try! 😂',
];

const EMOJIS = ['😂', '🔥', '👑', '🎲', '❤️', '😭', '😎', '💣', '🚀', '🥳', '😡', '👏'];

export const ChatModal: React.FC<ChatModalProps> = ({
  isOpen,
  onClose,
  onSendEmoji,
  onSendMessage,
}) => {
  const [customMsg, setCustomMsg] = useState('');

  if (!isOpen) return null;

  const handleSend = () => {
    if (!customMsg.trim()) return;
    soundManager.playClick();
    onSendMessage(customMsg);
    setCustomMsg('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-3 bg-black/80 backdrop-blur-xs animate-in fade-in duration-150 select-none">
      <div className="relative w-full max-w-sm rounded-3xl bg-gradient-to-b from-[#0b1d4d] via-[#051130] to-[#02091c] border-2 border-blue-400 p-4 shadow-2xl">
        <div className="flex items-center justify-between pb-2 border-b border-blue-500/20">
          <h3 className="font-black text-sm text-cyan-300 uppercase tracking-wider">
            Match Chat & Emojis
          </h3>
          <button onClick={onClose} className="p-1 rounded-lg text-slate-400 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Emojis Grid */}
        <div className="py-3">
          <span className="text-[10px] font-bold text-slate-400 block mb-1.5 uppercase">
            Quick Emojis
          </span>
          <div className="grid grid-cols-6 gap-2">
            {EMOJIS.map((e) => (
              <button
                key={e}
                onClick={() => {
                  soundManager.playClick();
                  onSendEmoji(e);
                  onClose();
                }}
                className="w-10 h-10 rounded-xl bg-blue-950/60 border border-blue-400/40 hover:border-amber-400 hover:scale-110 active:scale-95 text-xl flex items-center justify-center transition-all"
              >
                {e}
              </button>
            ))}
          </div>
        </div>

        {/* Quick Phrases */}
        <div className="py-2 border-t border-blue-500/20">
          <span className="text-[10px] font-bold text-slate-400 block mb-1.5 uppercase">
            Quick Phrases
          </span>
          <div className="grid grid-cols-2 gap-1.5 max-h-32 overflow-y-auto">
            {QUICK_PHRASES.map((p) => (
              <button
                key={p}
                onClick={() => {
                  soundManager.playClick();
                  onSendMessage(p);
                  onClose();
                }}
                className="py-1.5 px-2 rounded-lg bg-[#071640] border border-blue-500/30 hover:border-cyan-400 text-left text-xs font-semibold text-white truncate"
              >
                {p}
              </button>
            ))}
          </div>
        </div>

        {/* Custom Input */}
        <div className="pt-2 border-t border-blue-500/20 flex items-center gap-2">
          <input
            type="text"
            value={customMsg}
            onChange={(e) => setCustomMsg(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Type a message..."
            className="flex-1 px-3 py-1.5 rounded-xl bg-[#040c24] border border-blue-500/40 text-xs text-white focus:outline-hidden focus:border-cyan-400"
            maxLength={40}
          />
          <button
            onClick={handleSend}
            className="p-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-black shadow-md"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
