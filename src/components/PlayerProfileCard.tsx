import React, { useState } from 'react';
import { Copy, Check, Camera, Calendar, Crown, Pencil } from 'lucide-react';
import { PlayerProfile } from '../types';
import { LudoLogo } from './3d/LudoLogo';
import { soundManager } from '../utils/sound';
import { Dice3D } from './3d/Dice3D';
import { Pawn3D } from './3d/Pawn3D';

interface PlayerProfileCardProps {
  profile: PlayerProfile;
  onEditProfile: () => void;
  onEditBio: () => void;
  onChangePhoto: () => void;
}

export const PlayerProfileCard: React.FC<PlayerProfileCardProps> = ({
  profile,
  onEditProfile,
  onEditBio,
  onChangePhoto,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopyId = () => {
    soundManager.playCoin();
    navigator.clipboard?.writeText(profile.playerId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-[#091b48] via-[#051130] to-[#03091c] border border-blue-500/30 p-3 sm:p-4 shadow-[0_8px_30px_rgba(0,0,0,0.8)]">
      {/* Decorative Stadium Background Graphics (Ludo Board Atmosphere) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Stadium light beam effects */}
        <div className="absolute -top-10 left-1/4 w-32 h-64 bg-cyan-400/10 blur-2xl transform -rotate-45" />
        <div className="absolute -top-10 right-1/4 w-40 h-64 bg-blue-500/15 blur-2xl transform rotate-30" />
        <div className="absolute top-1/2 right-10 w-24 h-24 bg-purple-600/15 blur-2xl" />

        {/* Ambient floating 3D game props in background */}
        <div className="absolute -top-1 right-24 opacity-35 transform rotate-12 scale-75">
          <Dice3D size={42} rotation={15} />
        </div>
        <div className="absolute top-6 right-36 opacity-30 transform -rotate-12 scale-65">
          <Dice3D size={36} rotation={-25} />
        </div>
        <div className="absolute -top-2 right-4 opacity-40 scale-75">
          <Pawn3D color="blue" size={32} />
        </div>
        <div className="absolute top-8 right-1 opacity-35 scale-65">
          <Pawn3D color="yellow" size={28} />
        </div>
        <div className="absolute top-1 left-28 opacity-25 scale-75">
          <Pawn3D color="green" size={26} />
        </div>
      </div>

      <div className="relative z-10 flex flex-col gap-3">
        {/* Top Row: Avatar & Profile Details & Ludo King Logo */}
        <div className="flex items-start justify-between gap-2 sm:gap-3">
          {/* Avatar with Ornate Golden Frame */}
          <div className="relative shrink-0">
            {/* Golden Outer Frame with Bevel and Glow */}
            <div className="relative p-1 rounded-2xl bg-gradient-to-b from-amber-200 via-amber-400 to-amber-600 shadow-[0_0_15px_rgba(251,191,36,0.6)]">
              <div className="p-0.5 rounded-xl bg-gradient-to-b from-amber-700 via-yellow-900 to-amber-950">
                {/* Photo container */}
                <div className="relative w-20 h-20 sm:w-22 sm:h-22 rounded-xl overflow-hidden bg-slate-900 flex items-center justify-center">
                  {profile.avatarUrl ? (
                    <img
                      src={profile.avatarUrl}
                      alt={profile.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center"
                    />
                  ) : (
                    /* Default stylish man in sunglasses avatar */
                    <div className="w-full h-full bg-gradient-to-b from-slate-800 to-slate-950 relative flex items-center justify-center">
                      <svg viewBox="0 0 100 100" className="w-full h-full">
                        <defs>
                          <linearGradient id="skinGrad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#DE9E76" />
                            <stop offset="100%" stopColor="#C47D53" />
                          </linearGradient>
                          <linearGradient id="hairGrad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#1E293B" />
                            <stop offset="100%" stopColor="#020617" />
                          </linearGradient>
                        </defs>
                        {/* Background subtle glow */}
                        <circle cx="50" cy="50" r="50" fill="#0B1329" />
                        {/* Shoulders / Black Shirt */}
                        <path d="M10 95C10 75 30 70 50 70C70 70 90 75 90 95Z" fill="#090D16" />
                        <path d="M42 70L50 82L58 70" stroke="#334155" strokeWidth="1.5" fill="none" />
                        {/* Neck */}
                        <rect x="42" y="58" width="16" height="16" rx="2" fill="url(#skinGrad)" />
                        {/* Head & Face */}
                        <ellipse cx="50" cy="46" rx="19" ry="22" fill="url(#skinGrad)" />
                        {/* Hair */}
                        <path d="M28 42C28 26 34 18 50 18C66 18 72 26 72 42C67 36 60 30 50 30C40 30 33 36 28 42Z" fill="url(#hairGrad)" />
                        {/* Beard */}
                        <path d="M36 50C36 62 44 68 50 68C56 68 64 62 64 50C60 56 54 58 50 58C46 58 40 56 36 50Z" fill="#111827" opacity="0.85" />
                        {/* Sunglasses */}
                        <path d="M33 43C33 38 46 38 46 43C46 47 33 47 33 43Z" fill="#050811" stroke="#38BDF8" strokeWidth="0.8" />
                        <path d="M54 43C54 38 67 38 67 43C67 47 54 47 54 43Z" fill="#050811" stroke="#38BDF8" strokeWidth="0.8" />
                        <line x1="46" y1="41" x2="54" y2="41" stroke="#050811" strokeWidth="2.5" />
                        {/* Sunglasses specular gleam */}
                        <line x1="36" y1="40" x2="43" y2="44" stroke="#FFF" strokeWidth="1" strokeLinecap="round" opacity="0.8" />
                        <line x1="57" y1="40" x2="64" y2="44" stroke="#FFF" strokeWidth="1" strokeLinecap="round" opacity="0.8" />
                      </svg>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Level 78 Star Badge at Bottom-Left */}
            <div className="absolute -bottom-2 -left-2 z-20 flex items-center justify-center">
              <div className="relative w-8 h-8 flex items-center justify-center filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                {/* Golden Octagon/Star badge background */}
                <svg viewBox="0 0 40 40" className="w-full h-full">
                  <defs>
                    <linearGradient id="lvlBadgeGrad" x1="0" y1="0" x2="40" y2="40">
                      <stop offset="0%" stopColor="#FFFBEB" />
                      <stop offset="35%" stopColor="#F59E0B" />
                      <stop offset="70%" stopColor="#D97706" />
                      <stop offset="100%" stopColor="#78350F" />
                    </linearGradient>
                  </defs>
                  {/* Octagram star */}
                  <polygon
                    points="20,2 25,9 34,7 33,16 40,20 33,24 34,33 25,31 20,38 15,31 6,33 7,24 0,20 7,16 6,7 15,9"
                    fill="url(#lvlBadgeGrad)"
                    stroke="#FEF08A"
                    strokeWidth="1.2"
                  />
                  <circle cx="20" cy="20" r="13" fill="#78350F" />
                  <circle cx="20" cy="20" r="11.5" fill="#451A03" stroke="#FDE047" strokeWidth="0.8" />
                </svg>
                <span className="absolute font-black text-xs text-amber-200 drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]">
                  {profile.level}
                </span>
              </div>
            </div>

            {/* Camera Edit Button at Bottom-Right */}
            <button
              onClick={() => {
                soundManager.playClick();
                onChangePhoto();
              }}
              className="absolute -bottom-1 -right-1 z-20 w-6 h-6 rounded-md bg-gradient-to-b from-cyan-400 to-blue-600 border border-white/60 shadow-md flex items-center justify-center hover:scale-110 active:scale-95 transition-transform"
              aria-label="Change Profile Photo"
            >
              <Camera className="w-3.5 h-3.5 text-white" />
            </button>
          </div>

          {/* Middle: Player Credentials */}
          <div className="flex-1 min-w-0 flex flex-col justify-center gap-1 pl-1">
            {/* Player Name with Verified Blue Tick */}
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="font-extrabold text-base sm:text-lg text-white tracking-wide truncate drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                {profile.name}
              </span>
              {profile.isVerified && (
                <div className="w-4 h-4 rounded-full bg-[#1d9bf0] flex items-center justify-center shrink-0 shadow-[0_0_8px_rgba(29,155,240,0.8)]">
                  <Check className="w-2.5 h-2.5 text-white stroke-[3.5]" />
                </div>
              )}
            </div>

            {/* ID with Copy Button */}
            <div className="flex items-center gap-1.5 text-xs text-slate-300">
              <span className="font-semibold tracking-wide text-slate-200">
                ID: {profile.playerId}
              </span>
              <button
                onClick={handleCopyId}
                className="p-0.5 rounded hover:bg-white/10 active:scale-90 transition-transform text-cyan-300"
                title="Copy ID"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
              {copied && <span className="text-[10px] text-emerald-400 font-bold animate-pulse">Copied!</span>}
            </div>

            {/* Country: Bangladesh flag & text */}
            <div className="flex items-center gap-1.5 text-xs font-medium text-slate-200">
              {/* Bangladesh Flag SVG */}
              <div className="w-4 h-3 rounded-xs overflow-hidden bg-[#006a4e] relative shrink-0 shadow-xs border border-white/10 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-[#f42a41] -translate-x-0.2" />
              </div>
              <span className="truncate">{profile.country}</span>
            </div>

            {/* Age: Calendar Icon */}
            <div className="flex items-center gap-1.5 text-xs text-slate-300">
              <Calendar className="w-3.5 h-3.5 text-cyan-300 shrink-0" />
              <span>{profile.age}</span>
            </div>
          </div>

          {/* Right: 3D Ludo King Logo */}
          <div className="shrink-0 flex items-center justify-center">
            <LudoLogo onEditLogo={onEditProfile} />
          </div>
        </div>

        {/* Status / Bio Bar */}
        <div
          onClick={() => {
            soundManager.playClick();
            onEditBio();
          }}
          className="group cursor-pointer flex items-center justify-between gap-2 px-3 py-1.5 rounded-lg bg-[#06143c]/80 border border-amber-400/20 hover:border-amber-400/50 hover:bg-[#081a4d] transition-all"
        >
          <div className="flex items-center gap-2 min-w-0">
            <Crown className="w-3.5 h-3.5 text-amber-400 fill-amber-400 shrink-0 filter drop-shadow-[0_0_4px_rgba(251,191,36,0.6)]" />
            <p className="text-xs text-amber-100 font-medium italic truncate">
              "{profile.bio}"
            </p>
          </div>
          <Pencil className="w-3 h-3 text-amber-300 opacity-60 group-hover:opacity-100 shrink-0 transition-opacity" />
        </div>
      </div>
    </div>
  );
};
