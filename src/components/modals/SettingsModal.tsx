import React, { useState } from 'react';
import { X, Volume2, VolumeX, Shield, Smartphone, Globe, Sparkles } from 'lucide-react';
import { soundManager } from '../../utils/sound';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  isSoundOn: boolean;
  onToggleSound: () => void;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({
  isOpen,
  onClose,
  isSoundOn,
  onToggleSound,
}) => {
  const [graphicsQuality, setGraphicsQuality] = useState<'ultra' | 'high' | 'balanced'>('ultra');
  const [language, setLanguage] = useState<'en' | 'bn'>('en');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-md rounded-2xl bg-gradient-to-b from-[#0b1d4d] via-[#051130] to-[#02091c] border-2 border-cyan-400/50 shadow-[0_0_30px_rgba(34,211,238,0.3)] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-blue-500/20 bg-[#071640]">
          <h3 className="font-extrabold text-base tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-sky-400">
            GAME SETTINGS & AUDIO
          </h3>
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
        <div className="p-4 space-y-4 text-xs">
          {/* Sound FX Toggle */}
          <div className="flex items-center justify-between p-3 rounded-xl bg-[#06143c] border border-blue-500/30">
            <div className="flex items-center gap-2.5">
              {isSoundOn ? (
                <Volume2 className="w-5 h-5 text-cyan-400" />
              ) : (
                <VolumeX className="w-5 h-5 text-slate-500" />
              )}
              <div>
                <span className="font-bold text-white block">Sound Effects</span>
                <span className="text-[10px] text-slate-400">Tactile Web Audio chimes & dice rolls</span>
              </div>
            </div>

            <button
              onClick={() => {
                onToggleSound();
                soundManager.playClick();
              }}
              className={`w-12 h-6 rounded-full transition-colors relative p-0.5 ${
                isSoundOn ? 'bg-cyan-500' : 'bg-slate-700'
              }`}
            >
              <div
                className={`w-5 h-5 rounded-full bg-white transition-transform ${
                  isSoundOn ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </button>
          </div>

          {/* Graphics Quality */}
          <div className="flex flex-col gap-2 p-3 rounded-xl bg-[#06143c] border border-blue-500/30">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span className="font-bold text-white">Graphics & 3D Shaders</span>
            </div>
            <div className="grid grid-cols-3 gap-2 mt-1">
              {(['ultra', 'high', 'balanced'] as const).map((q) => (
                <button
                  key={q}
                  onClick={() => {
                    soundManager.playClick();
                    setGraphicsQuality(q);
                  }}
                  className={`py-1.5 rounded-lg font-bold text-xs uppercase transition-all ${
                    graphicsQuality === q
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-sm'
                      : 'bg-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  {q}
                </button>
              ))}
            </div>
          </div>

          {/* Language Toggle */}
          <div className="flex items-center justify-between p-3 rounded-xl bg-[#06143c] border border-blue-500/30">
            <div className="flex items-center gap-2.5">
              <Globe className="w-4 h-4 text-emerald-400" />
              <span className="font-bold text-white">Language (ভাষা)</span>
            </div>
            <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-lg border border-slate-700">
              <button
                onClick={() => {
                  soundManager.playClick();
                  setLanguage('en');
                }}
                className={`px-2.5 py-1 rounded text-xs font-bold ${
                  language === 'en' ? 'bg-blue-600 text-white' : 'text-slate-400'
                }`}
              >
                English
              </button>
              <button
                onClick={() => {
                  soundManager.playClick();
                  setLanguage('bn');
                }}
                className={`px-2.5 py-1 rounded text-xs font-bold ${
                  language === 'bn' ? 'bg-emerald-600 text-white' : 'text-slate-400'
                }`}
              >
                বাংলা
              </button>
            </div>
          </div>

          {/* App Info */}
          <div className="text-center pt-2 text-[10px] text-slate-500 space-y-0.5">
            <p>Ludo King™ Profile Replica UI v4.2.0</p>
            <p className="text-slate-400">Crafted with high-fidelity 3D vector graphics & Web Audio</p>
          </div>
        </div>
      </div>
    </div>
  );
};
