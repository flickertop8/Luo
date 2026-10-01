import React from 'react';
import { Crown } from 'lucide-react';
import { CountryFlag } from '../common/CountryFlag';
import { GoldCoins } from '../3d/GoldCoins';
import { soundManager } from '../../utils/sound';

export interface PodiumPlayer {
  rank: 1 | 2 | 3;
  name: string;
  avatarType: 'zahid' | 'rohit' | 'nisha';
  country: 'BD' | 'IN' | 'NP';
  level: number;
  totalWin: string;
  matches: string;
  wins: string;
  winRate: string;
}

const DEFAULT_PODIUM: Record<1 | 2 | 3, PodiumPlayer> = {
  1: {
    rank: 1,
    name: 'Zahid King',
    avatarType: 'zahid',
    country: 'BD',
    level: 98,
    totalWin: '12,580,000',
    matches: '2,450',
    wins: '1,860',
    winRate: '76%',
  },
  2: {
    rank: 2,
    name: 'Rohit Gamer',
    avatarType: 'rohit',
    country: 'IN',
    level: 95,
    totalWin: '9,820,000',
    matches: '2,120',
    wins: '1,540',
    winRate: '73%',
  },
  3: {
    rank: 3,
    name: 'Nisha Playz',
    avatarType: 'nisha',
    country: 'NP',
    level: 91,
    totalWin: '8,640,000',
    matches: '1,980',
    wins: '1,420',
    winRate: '71%',
  },
};

interface LeaderboardPodiumProps {
  players?: Record<1 | 2 | 3, PodiumPlayer>;
  onSelectPlayer?: (player: PodiumPlayer) => void;
}

export const LeaderboardPodium: React.FC<LeaderboardPodiumProps> = ({
  players = DEFAULT_PODIUM,
  onSelectPlayer,
}) => {
  const p1 = players[1];
  const p2 = players[2];
  const p3 = players[3];

  return (
    <div className="relative pt-6 pb-2 px-1 grid grid-cols-3 gap-1.5 sm:gap-2 items-end select-none">
      {/* ===================== RANK 2 (ROHIT GAMER - LEFT) ===================== */}
      <div
        onClick={() => {
          soundManager.playClick();
          onSelectPlayer?.(p2);
        }}
        className="cursor-pointer group flex flex-col items-center rounded-2xl bg-gradient-to-b from-[#0e276b] via-[#081745] to-[#040c26] border-2 border-blue-400/80 shadow-[0_0_20px_rgba(59,130,246,0.35)] p-2 relative hover:scale-[1.02] transition-transform"
      >
        {/* Silver Crown on top */}
        <div className="absolute -top-5 z-20">
          <svg width="34" height="22" viewBox="0 0 46 30" fill="none">
            <defs>
              <linearGradient id="silverCrown" x1="0" y1="0" x2="46" y2="30">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="50%" stopColor="#93C5FD" />
                <stop offset="100%" stopColor="#3B82F6" />
              </linearGradient>
            </defs>
            <path
              d="M5 26L3 7L13 14L23 2L33 14L43 7L41 26C41 27.1 40.1 28 39 28H7C5.9 28 5 27.1 5 26Z"
              fill="url(#silverCrown)"
              stroke="#BAE6FD"
              strokeWidth="1.2"
            />
            <circle cx="23" cy="4" r="2.5" fill="#38BDF8" stroke="#FFF" strokeWidth="0.8" />
          </svg>
        </div>

        {/* Avatar with Silver/Blue Wings & Badge 2 */}
        <div className="relative mt-2 mb-1 w-16 h-16 sm:w-18 sm:h-18 flex items-center justify-center">
          {/* Silver/Blue Wings */}
          <div className="absolute inset-0 scale-125 -z-0">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <path
                d="M20 50C10 40 5 42 0 45C0 50 6 56 14 56M80 50C90 40 95 42 100 45C100 50 94 56 86 56"
                stroke="#60A5FA"
                strokeWidth="3.5"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
          </div>

          {/* Circular Frame */}
          <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full p-0.5 bg-gradient-to-b from-sky-200 via-blue-500 to-indigo-700 shadow-md">
            <div className="w-full h-full rounded-full overflow-hidden bg-slate-950 flex items-center justify-center">
              {/* Rohit Gamer (Hooded / Masked Blue Eyes) */}
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <circle cx="50" cy="50" r="50" fill="#091124" />
                {/* Hood */}
                <path d="M22 80C22 50 30 25 50 25C70 25 78 50 78 80Z" fill="#1E293B" stroke="#38BDF8" strokeWidth="1.5" />
                {/* Dark Face shadow */}
                <path d="M34 50C34 40 42 34 50 34C58 34 66 40 66 50C66 65 58 75 50 75C42 75 34 65 34 50Z" fill="#020617" />
                {/* Glowing Blue Eyes */}
                <ellipse cx="44" cy="48" rx="4" ry="1.5" fill="#38BDF8" filter="drop-shadow(0 0 3px #38BDF8)" />
                <ellipse cx="56" cy="48" rx="4" ry="1.5" fill="#38BDF8" filter="drop-shadow(0 0 3px #38BDF8)" />
                {/* Mask lines */}
                <path d="M42 60L50 66L58 60" stroke="#38BDF8" strokeWidth="1.5" fill="none" opacity="0.6" />
              </svg>
            </div>
          </div>

          {/* Badge Number 2 */}
          <div className="absolute -top-1 -left-1 w-6 h-6 rounded-full bg-gradient-to-b from-blue-400 via-indigo-600 to-blue-900 border border-sky-300 shadow-md flex items-center justify-center text-xs font-black text-white">
            2
          </div>

          {/* Country Flag */}
          <div className="absolute -bottom-1 -right-1 z-10 shadow-md">
            <CountryFlag country={p2.country} size="sm" />
          </div>
        </div>

        {/* Name */}
        <h3 className="font-extrabold text-xs sm:text-sm text-white truncate w-full text-center drop-shadow-sm mt-0.5">
          {p2.name}
        </h3>

        {/* Level */}
        <div className="my-1 px-2 py-0.5 rounded-full bg-amber-400 text-slate-950 font-black text-[10px] shadow-xs">
          Lv. {p2.level}
        </div>

        {/* Total Win */}
        <div className="flex items-center gap-1 my-0.5">
          <GoldCoins size={16} />
          <span className="font-black text-xs sm:text-sm text-white tracking-tight">
            {p2.totalWin}
          </span>
        </div>

        {/* 3-stat Bottom Bar */}
        <div className="w-full mt-1.5 pt-1.5 border-t border-blue-400/30 grid grid-cols-3 text-center text-[9px] leading-tight text-slate-300">
          <div>
            <span className="text-slate-400 block text-[8px]">Matches</span>
            <span className="font-bold text-white">{p2.matches}</span>
          </div>
          <div>
            <span className="text-slate-400 block text-[8px]">Wins</span>
            <span className="font-bold text-white">{p2.wins}</span>
          </div>
          <div>
            <span className="text-slate-400 block text-[8px]">Win Rate</span>
            <span className="font-bold text-cyan-300">{p2.winRate}</span>
          </div>
        </div>
      </div>

      {/* ===================== RANK 1 (ZAHID KING - CENTER, GOLD & ELEVATED) ===================== */}
      <div
        onClick={() => {
          soundManager.playBadge();
          onSelectPlayer?.(p1);
        }}
        className="cursor-pointer group flex flex-col items-center rounded-2xl bg-gradient-to-b from-[#3a2503] via-[#1f1302] to-[#0d0701] border-2 border-amber-400 shadow-[0_0_30px_rgba(251,191,36,0.6)] p-2 relative -translate-y-3 z-10 hover:scale-[1.03] transition-transform"
      >
        {/* Big Golden Crown */}
        <div className="absolute -top-7 z-20">
          <svg width="46" height="30" viewBox="0 0 46 30" fill="none">
            <defs>
              <linearGradient id="goldPodiumCrown" x1="0" y1="0" x2="46" y2="30">
                <stop offset="0%" stopColor="#FFFBEB" />
                <stop offset="35%" stopColor="#FDE047" />
                <stop offset="70%" stopColor="#F59E0B" />
                <stop offset="100%" stopColor="#92400E" />
              </linearGradient>
            </defs>
            <path
              d="M5 26L3 7L13 14L23 2L33 14L43 7L41 26C41 27.1 40.1 28 39 28H7C5.9 28 5 27.1 5 26Z"
              fill="url(#goldPodiumCrown)"
              stroke="#FFF"
              strokeWidth="1.2"
            />
            <circle cx="23" cy="4" r="2.5" fill="#EF4444" stroke="#FFF" strokeWidth="0.8" />
            <circle cx="3" cy="8" r="2" fill="#3B82F6" stroke="#FFF" strokeWidth="0.6" />
            <circle cx="43" cy="8" r="2" fill="#3B82F6" stroke="#FFF" strokeWidth="0.6" />
          </svg>
        </div>

        {/* Avatar with Golden Wings & Badge 1 */}
        <div className="relative mt-2 mb-1 w-18 h-18 sm:w-20 sm:h-20 flex items-center justify-center">
          {/* Golden Wings */}
          <div className="absolute inset-0 scale-135 -z-0">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <path
                d="M16 50C6 38 2 40 -4 44C-4 50 4 58 14 58M84 50C94 38 98 40 104 44C104 50 96 58 86 58"
                stroke="#FBBF24"
                strokeWidth="4"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
          </div>

          {/* Golden Circular Frame with Bevel & Glow */}
          <div className="relative w-16 h-16 sm:w-18 sm:h-18 rounded-full p-1 bg-gradient-to-b from-amber-100 via-amber-400 to-amber-700 shadow-[0_0_15px_rgba(251,191,36,0.8)]">
            <div className="w-full h-full rounded-full overflow-hidden bg-slate-950 flex items-center justify-center">
              {/* Zahid King (Stylish with Sunglasses & Collar) */}
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <defs>
                  <linearGradient id="zahidSkin" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#DE9E76" />
                    <stop offset="100%" stopColor="#C47D53" />
                  </linearGradient>
                </defs>
                <circle cx="50" cy="50" r="50" fill="#0C152B" />
                <path d="M12 95C12 75 30 70 50 70C70 70 88 75 88 95Z" fill="#0F172A" />
                <path d="M42 70L50 82L58 70" stroke="#334155" strokeWidth="1.5" fill="none" />
                <rect x="42" y="58" width="16" height="16" rx="2" fill="url(#zahidSkin)" />
                <ellipse cx="50" cy="46" rx="19" ry="22" fill="url(#zahidSkin)" />
                {/* Hair */}
                <path d="M28 42C28 26 34 18 50 18C66 18 72 26 72 42C67 36 60 30 50 30C40 30 33 36 28 42Z" fill="#1E293B" />
                {/* Beard */}
                <path d="M36 50C36 62 44 68 50 68C56 68 64 62 64 50C60 56 54 58 50 58C46 58 40 56 36 50Z" fill="#0F172A" opacity="0.8" />
                {/* Sunglasses */}
                <path d="M33 43C33 38 46 38 46 43C46 47 33 47 33 43Z" fill="#050811" stroke="#38BDF8" strokeWidth="0.8" />
                <path d="M54 43C54 38 67 38 67 43C67 47 54 47 54 43Z" fill="#050811" stroke="#38BDF8" strokeWidth="0.8" />
                <line x1="46" y1="41" x2="54" y2="41" stroke="#050811" strokeWidth="2.5" />
                <line x1="36" y1="40" x2="43" y2="44" stroke="#FFF" strokeWidth="1" strokeLinecap="round" opacity="0.8" />
              </svg>
            </div>
          </div>

          {/* Badge Number 1 with Shield */}
          <div className="absolute -top-1 -left-1 w-7 h-7 rounded-full bg-gradient-to-b from-red-600 via-amber-500 to-amber-700 border-2 border-amber-200 shadow-md flex items-center justify-center text-xs font-black text-white">
            1
          </div>

          {/* Bangladesh Flag */}
          <div className="absolute -bottom-1 -right-1 z-10 shadow-md">
            <CountryFlag country={p1.country} size="sm" />
          </div>
        </div>

        {/* Name */}
        <h3 className="font-black text-xs sm:text-sm text-white truncate w-full text-center drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] mt-0.5">
          {p1.name}
        </h3>

        {/* Level */}
        <div className="my-1 px-2.5 py-0.5 rounded-full bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 text-slate-950 font-black text-[10px] shadow-sm">
          Lv. {p1.level}
        </div>

        {/* Total Win */}
        <div className="flex items-center gap-1 my-0.5">
          <GoldCoins size={18} />
          <span className="font-black text-sm sm:text-base text-white tracking-tight">
            {p1.totalWin}
          </span>
        </div>

        {/* 3-stat Bottom Bar (Gold) */}
        <div className="w-full mt-1.5 pt-1.5 border-t border-amber-400/40 grid grid-cols-3 text-center text-[9px] leading-tight text-amber-100">
          <div>
            <span className="text-amber-300/70 block text-[8px]">Matches</span>
            <span className="font-black text-white">{p1.matches}</span>
          </div>
          <div>
            <span className="text-amber-300/70 block text-[8px]">Wins</span>
            <span className="font-black text-white">{p1.wins}</span>
          </div>
          <div>
            <span className="text-amber-300/70 block text-[8px]">Win Rate</span>
            <span className="font-black text-amber-300">{p1.winRate}</span>
          </div>
        </div>
      </div>

      {/* ===================== RANK 3 (NISHA PLAYZ - RIGHT, BRONZE/PURPLE) ===================== */}
      <div
        onClick={() => {
          soundManager.playClick();
          onSelectPlayer?.(p3);
        }}
        className="cursor-pointer group flex flex-col items-center rounded-2xl bg-gradient-to-b from-[#2e0b4d] via-[#1a062e] to-[#0e021a] border-2 border-purple-400/80 shadow-[0_0_20px_rgba(168,85,247,0.35)] p-2 relative hover:scale-[1.02] transition-transform"
      >
        {/* Bronze/Rose-Gold Crown */}
        <div className="absolute -top-5 z-20">
          <svg width="34" height="22" viewBox="0 0 46 30" fill="none">
            <defs>
              <linearGradient id="bronzeCrown" x1="0" y1="0" x2="46" y2="30">
                <stop offset="0%" stopColor="#FFD1DC" />
                <stop offset="50%" stopColor="#C084FC" />
                <stop offset="100%" stopColor="#7E22CE" />
              </linearGradient>
            </defs>
            <path
              d="M5 26L3 7L13 14L23 2L33 14L43 7L41 26C41 27.1 40.1 28 39 28H7C5.9 28 5 27.1 5 26Z"
              fill="url(#bronzeCrown)"
              stroke="#E9D5FF"
              strokeWidth="1.2"
            />
            <circle cx="23" cy="4" r="2.5" fill="#F43F5E" stroke="#FFF" strokeWidth="0.8" />
          </svg>
        </div>

        {/* Avatar with Purple Wings & Badge 3 */}
        <div className="relative mt-2 mb-1 w-16 h-16 sm:w-18 sm:h-18 flex items-center justify-center">
          {/* Purple Wings */}
          <div className="absolute inset-0 scale-125 -z-0">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <path
                d="M20 50C10 40 5 42 0 45C0 50 6 56 14 56M80 50C90 40 95 42 100 45C100 50 94 56 86 56"
                stroke="#C084FC"
                strokeWidth="3.5"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
          </div>

          {/* Circular Frame */}
          <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full p-0.5 bg-gradient-to-b from-pink-200 via-purple-500 to-indigo-800 shadow-md">
            <div className="w-full h-full rounded-full overflow-hidden bg-slate-950 flex items-center justify-center">
              {/* Nisha Playz (Female Gamer with Dark Hair & Mask) */}
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <circle cx="50" cy="50" r="50" fill="#170624" />
                {/* Hair back */}
                <path d="M22 40C22 25 32 18 50 18C68 18 78 25 78 40V80H22Z" fill="#1E1B4B" />
                {/* Face */}
                <ellipse cx="50" cy="48" rx="18" ry="20" fill="#FBCFE8" />
                {/* Eyes */}
                <ellipse cx="43" cy="44" rx="3.5" ry="2.5" fill="#4A044E" />
                <ellipse cx="57" cy="44" rx="3.5" ry="2.5" fill="#4A044E" />
                <circle cx="44" cy="43.5" r="1" fill="#FFF" />
                <circle cx="58" cy="43.5" r="1" fill="#FFF" />
                {/* Ninja / Gamer Mask */}
                <path d="M34 52C34 52 42 56 50 56C58 56 66 52 66 52V70C66 70 58 74 50 74C42 74 34 70 34 70Z" fill="#0F172A" stroke="#C084FC" strokeWidth="1" />
                {/* Bangs */}
                <path d="M30 30C35 45 42 42 50 35C58 42 65 45 70 30" stroke="#1E1B4B" strokeWidth="8" strokeLinecap="round" fill="none" />
              </svg>
            </div>
          </div>

          {/* Badge Number 3 */}
          <div className="absolute -top-1 -left-1 w-6 h-6 rounded-full bg-gradient-to-b from-amber-500 via-orange-600 to-amber-900 border border-amber-300 shadow-md flex items-center justify-center text-xs font-black text-white">
            3
          </div>

          {/* Nepal Flag */}
          <div className="absolute -bottom-1 -right-1 z-10 shadow-md">
            <CountryFlag country={p3.country} size="sm" />
          </div>
        </div>

        {/* Name */}
        <h3 className="font-extrabold text-xs sm:text-sm text-white truncate w-full text-center drop-shadow-sm mt-0.5">
          {p3.name}
        </h3>

        {/* Level */}
        <div className="my-1 px-2 py-0.5 rounded-full bg-amber-400 text-slate-950 font-black text-[10px] shadow-xs">
          Lv. {p3.level}
        </div>

        {/* Total Win */}
        <div className="flex items-center gap-1 my-0.5">
          <GoldCoins size={16} />
          <span className="font-black text-xs sm:text-sm text-white tracking-tight">
            {p3.totalWin}
          </span>
        </div>

        {/* 3-stat Bottom Bar */}
        <div className="w-full mt-1.5 pt-1.5 border-t border-purple-400/30 grid grid-cols-3 text-center text-[9px] leading-tight text-slate-300">
          <div>
            <span className="text-slate-400 block text-[8px]">Matches</span>
            <span className="font-bold text-white">{p3.matches}</span>
          </div>
          <div>
            <span className="text-slate-400 block text-[8px]">Wins</span>
            <span className="font-bold text-white">{p3.wins}</span>
          </div>
          <div>
            <span className="text-slate-400 block text-[8px]">Win Rate</span>
            <span className="font-bold text-purple-300">{p3.winRate}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
