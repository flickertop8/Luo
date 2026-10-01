import React, { useState } from 'react';
import { X, Check, Upload, RefreshCw } from 'lucide-react';
import { PlayerProfile } from '../../types';
import { soundManager } from '../../utils/sound';

interface EditProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: PlayerProfile;
  onSave: (updated: PlayerProfile) => void;
}

const AVATAR_PRESETS = [
  { id: 'default', label: 'Cool Shades (Original)' },
  { id: 'pro_gamer', label: 'Pro Gamer Headset' },
  { id: 'golden_king', label: 'Royal King' },
  { id: 'champion', label: 'Tournament Champ' },
];

export const EditProfileModal: React.FC<EditProfileModalProps> = ({
  isOpen,
  onClose,
  profile,
  onSave,
}) => {
  const [name, setName] = useState(profile.name);
  const [bio, setBio] = useState(profile.bio);
  const [age, setAge] = useState(profile.age);
  const [avatarUrl, setAvatarUrl] = useState(profile.avatarUrl);

  if (!isOpen) return null;

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setAvatarUrl(event.target.result as string);
          soundManager.playCoin();
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    soundManager.playBadge();
    onSave({
      ...profile,
      name,
      bio,
      age,
      avatarUrl,
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-md rounded-2xl bg-gradient-to-b from-[#0b1d4d] via-[#051130] to-[#02091c] border-2 border-amber-400/50 p-5 shadow-[0_0_30px_rgba(251,191,36,0.3)]">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-blue-500/20">
          <h3 className="font-extrabold text-base tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-yellow-400">
            EDIT PLAYER PROFILE
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

        {/* Form Body */}
        <div className="flex flex-col gap-4 py-4">
          {/* Avatar Section */}
          <div className="flex items-center gap-4">
            <div className="relative w-16 h-16 rounded-xl border-2 border-amber-400 overflow-hidden bg-slate-900 shrink-0">
              {avatarUrl ? (
                <img src={avatarUrl} alt="Avatar" className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full bg-slate-800 flex items-center justify-center text-xs text-amber-300 font-bold">
                  Original
                </div>
              )}
            </div>

            <div className="flex flex-col gap-1.5 flex-1">
              <label className="text-xs font-bold text-slate-300">Custom Photo</label>
              <div className="flex items-center gap-2">
                <label className="cursor-pointer px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-xs font-bold text-white flex items-center gap-1.5 shadow-sm active:scale-95 transition-all">
                  <Upload className="w-3.5 h-3.5" />
                  <span>Upload Photo</span>
                  <input type="file" accept="image/*" onChange={handleFileUpload} className="hidden" />
                </label>
                {avatarUrl && (
                  <button
                    onClick={() => {
                      setAvatarUrl('');
                      soundManager.playClick();
                    }}
                    className="px-2 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs text-slate-300 flex items-center gap-1"
                  >
                    <RefreshCw className="w-3 h-3" />
                    <span>Reset</span>
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Name */}
          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold text-slate-300">Player Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="px-3 py-2 rounded-lg bg-[#040c24] border border-blue-500/40 text-sm font-bold text-white focus:outline-hidden focus:border-amber-400"
              maxLength={20}
            />
          </div>

          {/* Bio / Status */}
          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold text-slate-300">Status / Bio Quote</label>
            <input
              type="text"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              className="px-3 py-2 rounded-lg bg-[#040c24] border border-blue-500/40 text-sm text-amber-200 focus:outline-hidden focus:border-amber-400"
              maxLength={60}
            />
          </div>

          {/* Age / Tenure */}
          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold text-slate-300">Age / Member Since</label>
            <input
              type="text"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="px-3 py-2 rounded-lg bg-[#040c24] border border-blue-500/40 text-sm text-white focus:outline-hidden focus:border-amber-400"
              maxLength={20}
            />
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-end gap-2 pt-3 border-t border-blue-500/20">
          <button
            onClick={() => {
              soundManager.playClick();
              onClose();
            }}
            className="px-4 py-2 rounded-lg bg-slate-800 text-xs font-bold text-slate-300 hover:bg-slate-700"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-5 py-2 rounded-lg bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 text-slate-950 font-black text-xs flex items-center gap-1.5 shadow-[0_0_15px_rgba(251,191,36,0.6)] hover:brightness-110 active:scale-95 transition-all"
          >
            <Check className="w-4 h-4 stroke-[3]" />
            <span>SAVE CHANGES</span>
          </button>
        </div>
      </div>
    </div>
  );
};
