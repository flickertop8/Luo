import React from 'react';
import { CountryFlag, CountryCode } from '../common/CountryFlag';
import { GoldCoins } from '../3d/GoldCoins';
import { soundManager } from '../../utils/sound';

export interface LeaderboardRowItem {
  rank: number;
  name: string;
  avatarVariant: 'red_ninja' | 'rdx' | 'toxic' | 'alif' | 'queen_riya' | 'killer' | 'legend';
  country: CountryCode;
  level: number;
  totalWin: string;
  winRate: string;
  isCurrentUser?: boolean;
}

const DEFAULT_ROWS: LeaderboardRowItem[] = [
  { rank: 4, name: 'Sk Sabir', avatarVariant: 'red_ninja', country: 'BD', level: 88, totalWin: '6,540,000', winRate: '68%' },
  { rank: 5, name: 'RDX Gamer', avatarVariant: 'rdx', country: 'IN', level: 86, totalWin: '5,980,000', winRate: '67%' },
  { rank: 6, name: 'Toxic Playz', avatarVariant: 'toxic', country: 'PK', level: 84, totalWin: '5,420,000', winRate: '65%' },
  { rank: 7, name: 'Alif Ludo', avatarVariant: 'alif', country: 'BD', level: 83, totalWin: '4,860,000', winRate: '62%' },
  { rank: 8, name: 'Queen Riya', avatarVariant: 'queen_riya', country: 'NP', level: 81, totalWin: '4,210,000', winRate: '61%' },
  { rank: 9, name: 'Killer Boy', avatarVariant: 'killer', country: 'IN', level: 79, totalWin: '3,980,000', winRate: '59%' },
  { rank: 10, name: 'Legend 99', avatarVariant: 'legend', country: 'BD', level: 78, totalWin: '3,640,000', winRate: '58%' },
];

interface LeaderboardTableProps {
  rows?: LeaderboardRowItem[];
  currentUser?: {
    rank: number;
    name: string;
    country: CountryCode;
    level: number;
    totalWin: string;
    winRate: string;
  };
  onSelectRow?: (row: LeaderboardRowItem) => void;
}

export const LeaderboardTable: React.FC<LeaderboardTableProps> = ({
  rows = DEFAULT_ROWS,
  currentUser = {
    rank: 158,
    name: 'You',
    country: 'BD',
    level: 62,
    totalWin: '320,000',
    winRate: '54%',
  },
  onSelectRow,
}) => {
  const renderAvatar = (variant: LeaderboardRowItem['avatarVariant']) => {
    switch (variant) {
      case 'red_ninja':
        return (
          <div className="w-8 h-8 rounded-full bg-red-950 border-2 border-red-500 overflow-hidden flex items-center justify-center">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <circle cx="50" cy="50" r="50" fill="#450A0A" />
              <path d="M25 85C25 60 35 30 50 30C65 30 75 60 75 85Z" fill="#991B1B" />
              <ellipse cx="50" cy="50" rx="18" ry="14" fill="#18181B" />
              <ellipse cx="44" cy="48" rx="4" ry="1.5" fill="#EF4444" />
              <ellipse cx="56" cy="48" rx="4" ry="1.5" fill="#EF4444" />
            </svg>
          </div>
        );
      case 'rdx':
        return (
          <div className="w-8 h-8 rounded-full bg-amber-950 border-2 border-amber-500 overflow-hidden flex items-center justify-center">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <circle cx="50" cy="50" r="50" fill="#1E293B" />
              <ellipse cx="50" cy="50" rx="20" ry="22" fill="#D97706" />
              <path d="M30 46H70" stroke="#000" strokeWidth="4" />
              <path d="M35 48L45 52M65 48L55 52" stroke="#000" strokeWidth="3" />
              <path d="M38 65C45 72 55 72 62 65" stroke="#18181B" strokeWidth="4" fill="none" />
            </svg>
          </div>
        );
      case 'toxic':
        return (
          <div className="w-8 h-8 rounded-full bg-cyan-950 border-2 border-cyan-400 overflow-hidden flex items-center justify-center">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <circle cx="50" cy="50" r="50" fill="#0C4A6E" />
              <path d="M20 30C30 15 50 15 80 30L50 45Z" fill="#38BDF8" />
              <ellipse cx="50" cy="52" rx="18" ry="20" fill="#E0F2FE" />
              <path d="M34 56H66V70H34Z" fill="#0369A1" />
              <ellipse cx="44" cy="48" rx="3" ry="2" fill="#0284C7" />
              <ellipse cx="56" cy="48" rx="3" ry="2" fill="#0284C7" />
            </svg>
          </div>
        );
      case 'alif':
        return (
          <div className="w-8 h-8 rounded-full bg-purple-950 border-2 border-purple-500 overflow-hidden flex items-center justify-center">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <circle cx="50" cy="50" r="50" fill="#2E1065" />
              <path d="M25 80C25 50 35 25 50 25C65 25 75 50 75 80Z" fill="#581C87" />
              <ellipse cx="50" cy="50" rx="16" ry="12" fill="#09090B" />
              <line x1="38" y1="48" x2="48" y2="48" stroke="#C084FC" strokeWidth="2.5" />
              <line x1="52" y1="48" x2="62" y2="48" stroke="#C084FC" strokeWidth="2.5" />
            </svg>
          </div>
        );
      case 'queen_riya':
        return (
          <div className="w-8 h-8 rounded-full bg-pink-950 border-2 border-pink-500 overflow-hidden flex items-center justify-center">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <circle cx="50" cy="50" r="50" fill="#500724" />
              <ellipse cx="50" cy="50" rx="18" ry="20" fill="#FCE7F3" />
              <path d="M22 25C30 18 70 18 78 25V65H22Z" fill="#831843" />
              <path d="M36 56H64V72H36Z" fill="#BE185D" />
              <ellipse cx="44" cy="48" rx="3" ry="2" fill="#4C0519" />
              <ellipse cx="56" cy="48" rx="3" ry="2" fill="#4C0519" />
            </svg>
          </div>
        );
      case 'killer':
        return (
          <div className="w-8 h-8 rounded-full bg-rose-950 border-2 border-rose-500 overflow-hidden flex items-center justify-center">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <circle cx="50" cy="50" r="50" fill="#1C1917" />
              <path d="M25 80C25 55 35 30 50 30C65 30 75 55 75 80Z" fill="#991B1B" />
              <circle cx="50" cy="52" r="16" fill="#F87171" />
              <ellipse cx="44" cy="50" rx="3" ry="2" fill="#18181B" />
              <ellipse cx="56" cy="50" rx="3" ry="2" fill="#18181B" />
            </svg>
          </div>
        );
      case 'legend':
      default:
        return (
          <div className="w-8 h-8 rounded-full bg-indigo-950 border-2 border-indigo-400 overflow-hidden flex items-center justify-center">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <circle cx="50" cy="50" r="50" fill="#1E1B4B" />
              <path d="M25 25C40 10 60 10 75 25L50 40Z" fill="#E2E8F0" />
              <ellipse cx="50" cy="52" rx="18" ry="18" fill="#F1F5F9" />
              <path d="M35 56H65V70H35Z" fill="#1E293B" />
              <ellipse cx="44" cy="48" rx="3" ry="1.5" fill="#3B82F6" />
              <ellipse cx="56" cy="48" rx="3" ry="1.5" fill="#3B82F6" />
            </svg>
          </div>
        );
    }
  };

  return (
    <div className="flex flex-col w-full select-none pb-2">
      {/* Table Header Bar (Cyan/Blue gradient bar) */}
      <div className="rounded-t-xl bg-gradient-to-r from-[#003884] via-[#0256ba] to-[#003884] py-2 px-2 sm:px-3 grid grid-cols-12 items-center text-[10px] sm:text-[11px] font-black tracking-wider text-slate-100 uppercase border border-cyan-400/40 shadow-xs">
        <span className="col-span-1 text-center">RANK</span>
        <span className="col-span-4 pl-3">PLAYER</span>
        <span className="col-span-2 text-center">COUNTRY</span>
        <span className="col-span-2 text-center">LEVEL</span>
        <span className="col-span-2 text-right pr-1">TOTAL WIN</span>
        <span className="col-span-1 text-right">WIN RATE</span>
      </div>

      {/* Rows Container */}
      <div className="divide-y divide-blue-500/15 bg-[#030d29]/90 border-x border-b border-blue-500/30 rounded-b-xl overflow-hidden shadow-lg">
        {rows.map((row) => (
          <div
            key={row.rank}
            onClick={() => {
              soundManager.playClick();
              onSelectRow?.(row);
            }}
            className="cursor-pointer group grid grid-cols-12 items-center py-2 px-2 sm:px-3 text-xs hover:bg-[#091f5e]/80 transition-colors"
          >
            {/* Rank */}
            <span className="col-span-1 text-center font-black text-sm text-white drop-shadow-sm">
              {row.rank}
            </span>

            {/* Player (Avatar + Name) */}
            <div className="col-span-4 flex items-center gap-2 min-w-0 pl-1">
              <div className="shrink-0">{renderAvatar(row.avatarVariant)}</div>
              <span className="font-extrabold text-xs text-white truncate group-hover:text-amber-300 transition-colors">
                {row.name}
              </span>
            </div>

            {/* Country */}
            <div className="col-span-2 flex items-center justify-center">
              <CountryFlag country={row.country} size="sm" />
            </div>

            {/* Level */}
            <div className="col-span-2 flex items-center justify-center">
              <div className="px-2 py-0.5 rounded-full bg-[#0a1844] border border-blue-400/50 text-[10px] font-bold text-amber-200">
                Lv. {row.level}
              </div>
            </div>

            {/* Total Win */}
            <div className="col-span-2 flex items-center justify-end gap-1 pr-1">
              <GoldCoins size={14} />
              <span className="font-black text-xs text-white tracking-tight">
                {row.totalWin}
              </span>
            </div>

            {/* Win Rate */}
            <span className="col-span-1 text-right font-black text-xs text-amber-400">
              {row.winRate}
            </span>
          </div>
        ))}
      </div>

      {/* ===================== STICKY BOTTOM USER ROW (RANK 158 YOU) ===================== */}
      <div className="mt-3 relative rounded-2xl p-0.5 bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 shadow-[0_0_20px_rgba(251,191,36,0.6)]">
        <div className="rounded-[14px] bg-gradient-to-r from-[#170e01] via-[#091538] to-[#120b02] p-2 flex items-center justify-between">
          {/* Left: Yellow Rank 158 Box */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-12 h-10 rounded-xl bg-gradient-to-b from-amber-300 via-yellow-400 to-amber-500 flex items-center justify-center font-black text-slate-950 text-base shadow-md border border-amber-200">
              {currentUser.rank}
            </div>

            {/* User Avatar with Golden Ring */}
            <div className="relative w-10 h-10 rounded-full p-0.5 bg-gradient-to-b from-amber-300 to-amber-600 shadow-md">
              <div className="w-full h-full rounded-full overflow-hidden bg-slate-950 flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <circle cx="50" cy="50" r="50" fill="#0C152B" />
                  <path d="M12 95C12 75 30 70 50 70C70 70 88 75 88 95Z" fill="#0F172A" />
                  <ellipse cx="50" cy="46" rx="19" ry="22" fill="#DE9E76" />
                  <path d="M28 42C28 26 34 18 50 18C66 18 72 26 72 42Z" fill="#1E293B" />
                  <path d="M33 43C33 38 46 38 46 43C46 47 33 47 33 43Z" fill="#050811" stroke="#38BDF8" strokeWidth="0.8" />
                  <path d="M54 43C54 38 67 38 67 43C67 47 54 47 54 43Z" fill="#050811" stroke="#38BDF8" strokeWidth="0.8" />
                </svg>
              </div>
            </div>

            {/* Name */}
            <span className="font-black text-sm text-amber-300 drop-shadow-sm">
              {currentUser.name}
            </span>
          </div>

          {/* Middle: Country + Level */}
          <div className="flex items-center gap-2 sm:gap-3">
            <CountryFlag country={currentUser.country} size="md" />

            {/* Purple Level Badge */}
            <div className="px-2.5 py-0.5 rounded-md bg-gradient-to-r from-purple-800 to-purple-900 border border-purple-400 text-[11px] font-black text-white shadow-xs">
              Lv. {currentUser.level}
            </div>
          </div>

          {/* Right: Total Win + Win Rate */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <GoldCoins size={16} />
              <span className="font-black text-xs sm:text-sm text-white">
                {currentUser.totalWin}
              </span>
            </div>

            <span className="font-black text-xs sm:text-sm text-amber-400 pr-1">
              {currentUser.winRate}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
