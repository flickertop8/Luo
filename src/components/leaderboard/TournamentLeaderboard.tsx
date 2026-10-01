import React, { useState } from 'react';
import { LeaderboardTopBar } from './LeaderboardTopBar';
import { TournamentLogoHeader } from './TournamentLogoHeader';
import { LeaderboardFilterTabs, LeaderboardTab } from './LeaderboardFilterTabs';
import { LeaderboardPodium, PodiumPlayer } from './LeaderboardPodium';
import { LeaderboardTable, LeaderboardRowItem } from './LeaderboardTable';
import { soundManager } from '../../utils/sound';

interface TournamentLeaderboardProps {
  onBack?: () => void;
  onHelp?: () => void;
}

// Data sets for different tabs
const DATA_BY_TAB: Record<
  LeaderboardTab,
  {
    podium: Record<1 | 2 | 3, PodiumPlayer>;
    rows: LeaderboardRowItem[];
    userRank: { rank: number; name: string; country: 'BD' | 'IN' | 'NP'; level: number; totalWin: string; winRate: string };
  }
> = {
  global: {
    podium: {
      1: { rank: 1, name: 'Zahid King', avatarType: 'zahid', country: 'BD', level: 98, totalWin: '12,580,000', matches: '2,450', wins: '1,860', winRate: '76%' },
      2: { rank: 2, name: 'Rohit Gamer', avatarType: 'rohit', country: 'IN', level: 95, totalWin: '9,820,000', matches: '2,120', wins: '1,540', winRate: '73%' },
      3: { rank: 3, name: 'Nisha Playz', avatarType: 'nisha', country: 'NP', level: 91, totalWin: '8,640,000', matches: '1,980', wins: '1,420', winRate: '71%' },
    },
    rows: [
      { rank: 4, name: 'Sk Sabir', avatarVariant: 'red_ninja', country: 'BD', level: 88, totalWin: '6,540,000', winRate: '68%' },
      { rank: 5, name: 'RDX Gamer', avatarVariant: 'rdx', country: 'IN', level: 86, totalWin: '5,980,000', winRate: '67%' },
      { rank: 6, name: 'Toxic Playz', avatarVariant: 'toxic', country: 'PK', level: 84, totalWin: '5,420,000', winRate: '65%' },
      { rank: 7, name: 'Alif Ludo', avatarVariant: 'alif', country: 'BD', level: 83, totalWin: '4,860,000', winRate: '62%' },
      { rank: 8, name: 'Queen Riya', avatarVariant: 'queen_riya', country: 'NP', level: 81, totalWin: '4,210,000', winRate: '61%' },
      { rank: 9, name: 'Killer Boy', avatarVariant: 'killer', country: 'IN', level: 79, totalWin: '3,980,000', winRate: '59%' },
      { rank: 10, name: 'Legend 99', avatarVariant: 'legend', country: 'BD', level: 78, totalWin: '3,640,000', winRate: '58%' },
    ],
    userRank: { rank: 158, name: 'You', country: 'BD', level: 62, totalWin: '320,000', winRate: '54%' },
  },
  country: {
    podium: {
      1: { rank: 1, name: 'Zahid King', avatarType: 'zahid', country: 'BD', level: 98, totalWin: '12,580,000', matches: '2,450', wins: '1,860', winRate: '76%' },
      2: { rank: 2, name: 'Sk Sabir', avatarType: 'rohit', country: 'BD', level: 88, totalWin: '6,540,000', matches: '1,820', wins: '1,240', winRate: '68%' },
      3: { rank: 3, name: 'Alif Ludo', avatarType: 'nisha', country: 'BD', level: 83, totalWin: '4,860,000', matches: '1,510', wins: '940', winRate: '62%' },
    },
    rows: [
      { rank: 4, name: 'Legend 99', avatarVariant: 'legend', country: 'BD', level: 78, totalWin: '3,640,000', winRate: '58%' },
      { rank: 5, name: 'DhakaKing', avatarVariant: 'rdx', country: 'BD', level: 75, totalWin: '3,120,000', winRate: '57%' },
      { rank: 6, name: 'ChittagongRider', avatarVariant: 'toxic', country: 'BD', level: 74, totalWin: '2,890,000', winRate: '55%' },
      { rank: 7, name: 'SylhetSniper', avatarVariant: 'alif', country: 'BD', level: 71, totalWin: '2,450,000', winRate: '53%' },
      { rank: 8, name: 'RajshahiBoss', avatarVariant: 'killer', country: 'BD', level: 69, totalWin: '2,100,000', winRate: '52%' },
      { rank: 9, name: 'BarisalStar', avatarVariant: 'queen_riya', country: 'BD', level: 68, totalWin: '1,950,000', winRate: '51%' },
      { rank: 10, name: 'KhulnaFighter', avatarVariant: 'red_ninja', country: 'BD', level: 66, totalWin: '1,820,000', winRate: '50%' },
    ],
    userRank: { rank: 3, name: 'You', country: 'BD', level: 62, totalWin: '1,240,000', winRate: '65%' },
  },
  season: {
    podium: {
      1: { rank: 1, name: 'Zahid King', avatarType: 'zahid', country: 'BD', level: 98, totalWin: '15,200,000', matches: '3,100', wins: '2,400', winRate: '77%' },
      2: { rank: 2, name: 'ApexStriker', avatarType: 'rohit', country: 'IN', level: 92, totalWin: '11,400,000', matches: '2,600', wins: '1,900', winRate: '73%' },
      3: { rank: 3, name: 'Sultana_BD', avatarType: 'nisha', country: 'BD', level: 89, totalWin: '9,800,000', matches: '2,200', wins: '1,560', winRate: '71%' },
    },
    rows: [
      { rank: 4, name: 'DragonMaster', avatarVariant: 'red_ninja', country: 'IN', level: 87, totalWin: '7,100,000', winRate: '69%' },
      { rank: 5, name: 'SpeedyDice', avatarVariant: 'toxic', country: 'PK', level: 85, totalWin: '6,400,000', winRate: '66%' },
      { rank: 6, name: 'NightFury', avatarVariant: 'alif', country: 'NP', level: 82, totalWin: '5,200,000', winRate: '63%' },
      { rank: 7, name: 'LudoValkyrie', avatarVariant: 'queen_riya', country: 'BD', level: 80, totalWin: '4,500,000', winRate: '61%' },
      { rank: 8, name: 'RoyalStrike', avatarVariant: 'killer', country: 'IN', level: 77, totalWin: '3,800,000', winRate: '58%' },
      { rank: 9, name: 'MasterMind', avatarVariant: 'rdx', country: 'PK', level: 75, totalWin: '3,200,000', winRate: '56%' },
      { rank: 10, name: 'KingHunter', avatarVariant: 'legend', country: 'BD', level: 73, totalWin: '2,900,000', winRate: '55%' },
    ],
    userRank: { rank: 58, name: 'You', country: 'BD', level: 62, totalWin: '1,240,000', winRate: '68%' },
  },
  tournament: {
    podium: {
      1: { rank: 1, name: 'Zahid King', avatarType: 'zahid', country: 'BD', level: 98, totalWin: '8,400,000', matches: '1,450', wins: '1,120', winRate: '78%' },
      2: { rank: 2, name: 'Rohit Gamer', avatarType: 'rohit', country: 'IN', level: 95, totalWin: '6,200,000', matches: '1,200', wins: '880', winRate: '73%' },
      3: { rank: 3, name: 'Nisha Playz', avatarType: 'nisha', country: 'NP', level: 91, totalWin: '5,100,000', matches: '1,050', wins: '740', winRate: '70%' },
    },
    rows: [
      { rank: 4, name: 'Sk Sabir', avatarVariant: 'red_ninja', country: 'BD', level: 88, totalWin: '4,500,000', winRate: '68%' },
      { rank: 5, name: 'RDX Gamer', avatarVariant: 'rdx', country: 'IN', level: 86, totalWin: '3,900,000', winRate: '65%' },
      { rank: 6, name: 'Toxic Playz', avatarVariant: 'toxic', country: 'PK', level: 84, totalWin: '3,400,000', winRate: '63%' },
      { rank: 7, name: 'Alif Ludo', avatarVariant: 'alif', country: 'BD', level: 83, totalWin: '2,900,000', winRate: '60%' },
      { rank: 8, name: 'Queen Riya', avatarVariant: 'queen_riya', country: 'NP', level: 81, totalWin: '2,400,000', winRate: '58%' },
      { rank: 9, name: 'Killer Boy', avatarVariant: 'killer', country: 'IN', level: 79, totalWin: '2,100,000', winRate: '56%' },
      { rank: 10, name: 'Legend 99', avatarVariant: 'legend', country: 'BD', level: 78, totalWin: '1,850,000', winRate: '54%' },
    ],
    userRank: { rank: 12, name: 'You', country: 'BD', level: 62, totalWin: '640,000', winRate: '64%' },
  },
};

export const TournamentLeaderboard: React.FC<TournamentLeaderboardProps> = ({
  onBack,
  onHelp,
}) => {
  const [activeTab, setActiveTab] = useState<LeaderboardTab>('global');
  const [coins, setCoins] = useState(149250);
  const [gems, setGems] = useState(144);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [selectedPlayer, setSelectedPlayer] = useState<string | null>(null);

  const currentData = DATA_BY_TAB[activeTab];

  const handleRefresh = () => {
    setIsRefreshing(true);
    soundManager.playRoll();
    setTimeout(() => {
      setIsRefreshing(false);
    }, 800);
  };

  const handleAddCoins = () => {
    setCoins((prev) => prev + 10000);
  };

  const handleAddGems = () => {
    setGems((prev) => prev + 50);
  };

  return (
    <div className="relative flex flex-col w-full min-h-screen bg-[#02091d] text-white">
      {/* Background Lighting Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Top radial yellow/amber glow behind Ludo Tournament logo */}
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[340px] h-[300px] bg-gradient-to-b from-amber-400/20 via-yellow-600/10 to-transparent blur-3xl rounded-full" />
        {/* Blue ambient side glows */}
        <div className="absolute top-48 left-0 w-36 h-96 bg-blue-600/15 blur-3xl" />
        <div className="absolute top-48 right-0 w-36 h-96 bg-purple-600/15 blur-3xl" />
      </div>

      {/* 1. Top Bar (Back button, 149,250 coins +, 144 gems +, ?, refresh) */}
      <LeaderboardTopBar
        coins={coins}
        gems={gems}
        onBack={onBack}
        onAddCoins={handleAddCoins}
        onAddGems={handleAddGems}
        onHelp={onHelp}
        onRefresh={handleRefresh}
        isRefreshing={isRefreshing}
      />

      {/* 2. 3D Ludo Tournament Logo + Golden Laurel LEADERBOARD banner */}
      <TournamentLogoHeader />

      {/* 3. 4-Filter Tabs (GLOBAL, COUNTRY, SEASON, TOURNAMENT) */}
      <LeaderboardFilterTabs
        activeTab={activeTab}
        onSelectTab={(tab) => setActiveTab(tab)}
      />

      {/* 4. Top 3 Podium (Rank 2 Rohit Gamer, Rank 1 Zahid King, Rank 3 Nisha Playz) */}
      <LeaderboardPodium
        players={currentData.podium}
        onSelectPlayer={(p) => {
          setSelectedPlayer(p.name);
          soundManager.playBadge();
        }}
      />

      {/* 5. Leaderboard Table (Ranks 4-10) + Sticky User Bottom Card (Rank 158 You) */}
      <div className="px-2 mt-2">
        <LeaderboardTable
          rows={currentData.rows}
          currentUser={currentData.userRank}
          onSelectRow={(row) => {
            setSelectedPlayer(row.name);
            soundManager.playClick();
          }}
        />
      </div>

      {/* Player Profile Quick Toast / Popup */}
      {selectedPlayer && (
        <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-50 px-4 py-2 rounded-xl bg-slate-900/95 border-2 border-amber-400 text-amber-200 text-xs font-bold shadow-2xl flex items-center gap-2 animate-in fade-in zoom-in-95 duration-150">
          <span>Viewing player: {selectedPlayer}</span>
          <button
            onClick={() => setSelectedPlayer(null)}
            className="ml-2 text-slate-400 hover:text-white"
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
};
