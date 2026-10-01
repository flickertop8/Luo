import React, { useState } from 'react';
import { Heart, ArrowLeft, Plus, HelpCircle, RotateCw } from 'lucide-react';
import { TournamentLogoHeader } from '../leaderboard/TournamentLogoHeader';
import { QuickStakesCards } from './QuickStakesCards';
import { TournamentRoomsList, TournamentRoom } from './TournamentRoomsList';
import { soundManager } from '../../utils/sound';

export type TournamentTab = 'instant' | 'upcoming' | 'running';

interface TournamentLobbyProps {
  onBack?: () => void;
  onHelp?: () => void;
  coins?: number;
  gems?: number;
  onUpdateCoins?: (delta: number) => void;
}

export const TournamentLobby: React.FC<TournamentLobbyProps> = ({
  onBack,
  onHelp,
  coins = 149250,
  gems = 144,
  onUpdateCoins,
}) => {
  const [activeTab, setActiveTab] = useState<TournamentTab>('instant');
  const [isFavorite, setIsFavorite] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState<TournamentRoom | null>(null);
  const [joiningSuccess, setJoiningSuccess] = useState<string | null>(null);

  const handleRefresh = () => {
    setIsRefreshing(true);
    soundManager.playRoll();
    setTimeout(() => setIsRefreshing(false), 700);
  };

  const handleJoin = (room: TournamentRoom) => {
    setSelectedRoom(room);
  };

  const confirmJoin = () => {
    if (!selectedRoom) return;
    soundManager.playCoin();
    const feeNum = parseInt(selectedRoom.entryFee.replace(/,/g, ''), 10) || 5000;
    onUpdateCoins?.(-feeNum);
    const roomName = selectedRoom.name;
    setSelectedRoom(null);
    setJoiningSuccess(`Successfully joined ${roomName}! Match starting in 5s...`);
    setTimeout(() => setJoiningSuccess(null), 3500);
  };

  return (
    <div className="relative flex flex-col w-full min-h-screen bg-[#02091d] text-white select-none">
      {/* Background Lighting Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[340px] h-[300px] bg-gradient-to-b from-amber-400/20 via-yellow-600/10 to-transparent blur-3xl rounded-full" />
        <div className="absolute top-48 left-0 w-36 h-96 bg-blue-600/15 blur-3xl" />
        <div className="absolute top-48 right-0 w-36 h-96 bg-purple-600/15 blur-3xl" />
      </div>

      {/* Top Header Bar matching Screenshot */}
      <div className="relative z-30 flex items-start justify-between px-3 pt-2.5 pb-1">
        {/* Left Side: Back Button + Heart Favorite Button underneath */}
        <div className="flex flex-col items-center gap-2">
          {/* Back button */}
          <button
            onClick={() => {
              soundManager.playClick();
              onBack?.();
            }}
            className="w-10 h-10 rounded-xl bg-gradient-to-b from-[#1e40af] via-[#1d4ed8] to-[#0f172a] border-2 border-amber-400 shadow-[0_0_12px_rgba(251,191,36,0.6)] flex items-center justify-center active:scale-95 transition-transform"
            aria-label="Back"
          >
            <ArrowLeft className="w-5 h-5 text-amber-300 stroke-[3] drop-shadow-[0_0_4px_rgba(251,191,36,0.8)]" />
          </button>

          {/* Red Heart Favorite Button */}
          <button
            onClick={() => {
              soundManager.playClick();
              setIsFavorite(!isFavorite);
            }}
            className={`w-9 h-9 rounded-xl border-2 flex items-center justify-center transition-all ${
              isFavorite
                ? 'bg-red-900/90 border-red-400 shadow-[0_0_10px_rgba(239,68,68,0.8)] scale-105'
                : 'bg-[#0a1844] border-amber-400 shadow-md hover:border-amber-300 active:scale-90'
            }`}
            title="Bookmark Tournament"
          >
            <Heart
              className={`w-4 h-4 transition-colors ${
                isFavorite
                  ? 'text-red-400 fill-red-500 drop-shadow-[0_0_6px_rgba(239,68,68,0.9)]'
                  : 'text-red-400 fill-red-500'
              }`}
            />
          </button>
        </div>

        {/* Right Side: Coins, Gems, Help, Refresh */}
        <div className="flex flex-col items-end gap-1.5">
          <div className="flex items-center gap-2">
            {/* Coins */}
            <div className="flex items-center gap-1.5 pl-1.5 pr-1 py-0.5 rounded-full bg-[#0a183d]/90 border border-amber-400/70 shadow-md">
              <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-amber-600 via-yellow-400 to-amber-200 flex items-center justify-center shadow-xs border border-amber-300">
                <span className="text-[10px] font-black text-amber-950">★</span>
              </div>
              <span className="font-extrabold text-xs text-white tracking-tight">
                {coins.toLocaleString()}
              </span>
              <div className="w-4 h-4 rounded-md bg-gradient-to-b from-amber-400 to-amber-600 flex items-center justify-center text-slate-950 font-black shadow-xs">
                <Plus className="w-3 h-3 stroke-[3]" />
              </div>
            </div>

            {/* Gems */}
            <div className="flex items-center gap-1.5 pl-1.5 pr-1 py-0.5 rounded-full bg-[#0a183d]/90 border border-cyan-400/70 shadow-md">
              <div className="w-5 h-4 flex items-center justify-center">
                <svg viewBox="0 0 24 20" className="w-4 h-4 drop-shadow-[0_0_6px_rgba(34,211,238,0.9)]">
                  <polygon points="6,2 18,2 23,8 12,19 1,8" fill="#0284C7" stroke="#7DD3FC" strokeWidth="1" />
                  <polygon points="6,2 18,2 12,8" fill="#38BDF8" />
                  <polygon points="1,8 6,2 12,8" fill="#BAE6FD" />
                  <polygon points="18,2 23,8 12,8" fill="#0284C7" />
                  <polygon points="1,8 12,8 12,19" fill="#0369A1" />
                  <polygon points="12,8 23,8 12,19" fill="#0284C7" />
                </svg>
              </div>
              <span className="font-extrabold text-xs text-white tracking-tight">
                {gems}
              </span>
              <div className="w-4 h-4 rounded-md bg-gradient-to-b from-amber-400 to-amber-600 flex items-center justify-center text-slate-950 font-black shadow-xs">
                <Plus className="w-3 h-3 stroke-[3]" />
              </div>
            </div>
          </div>

          {/* Help & Refresh circular buttons */}
          <div className="flex items-center gap-2 pr-0.5">
            <button
              onClick={() => {
                soundManager.playClick();
                onHelp?.();
              }}
              className="w-7 h-7 rounded-full bg-[#071740] border-2 border-amber-400 flex items-center justify-center text-amber-300 hover:text-white shadow-[0_0_8px_rgba(251,191,36,0.4)] active:scale-90 transition-all"
            >
              <HelpCircle className="w-4 h-4 stroke-[2.5]" />
            </button>
            <button
              onClick={handleRefresh}
              className={`w-7 h-7 rounded-full bg-[#071740] border-2 border-amber-400 flex items-center justify-center text-amber-300 hover:text-white shadow-[0_0_8px_rgba(251,191,36,0.4)] active:scale-90 transition-all ${
                isRefreshing ? 'animate-spin' : ''
              }`}
            >
              <RotateCw className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>
        </div>
      </div>

      {/* 3D Ludo Tournament Logo in center */}
      <div className="-mt-8">
        <TournamentLogoHeader />
      </div>

      {/* 3 Tournament Filter Tabs: Instant, Upcoming, Running */}
      <div className="grid grid-cols-3 gap-1.5 px-3 py-1.5 mt-1 select-none">
        <button
          onClick={() => {
            soundManager.playClick();
            setActiveTab('instant');
          }}
          className={`py-2 px-2 rounded-xl font-black text-xs sm:text-sm tracking-wide transition-all border ${
            activeTab === 'instant'
              ? 'bg-gradient-to-b from-amber-300 via-yellow-400 to-amber-500 text-slate-950 border-amber-200 shadow-[0_0_12px_rgba(251,191,36,0.7)] scale-[1.02]'
              : 'bg-[#06143c]/90 text-slate-300 border-blue-500/30 hover:bg-[#0a205a]'
          }`}
        >
          Instant
        </button>

        <button
          onClick={() => {
            soundManager.playClick();
            setActiveTab('upcoming');
          }}
          className={`py-2 px-2 rounded-xl font-black text-xs sm:text-sm tracking-wide transition-all border ${
            activeTab === 'upcoming'
              ? 'bg-gradient-to-b from-amber-300 via-yellow-400 to-amber-500 text-slate-950 border-amber-200 shadow-[0_0_12px_rgba(251,191,36,0.7)] scale-[1.02]'
              : 'bg-[#06143c]/90 text-slate-300 border-blue-500/30 hover:bg-[#0a205a]'
          }`}
        >
          Upcoming
        </button>

        <button
          onClick={() => {
            soundManager.playClick();
            setActiveTab('running');
          }}
          className={`py-2 px-2 rounded-xl font-black text-xs sm:text-sm tracking-wide transition-all border ${
            activeTab === 'running'
              ? 'bg-gradient-to-b from-amber-300 via-yellow-400 to-amber-500 text-slate-950 border-amber-200 shadow-[0_0_12px_rgba(251,191,36,0.7)] scale-[1.02]'
              : 'bg-[#06143c]/90 text-slate-300 border-blue-500/30 hover:bg-[#0a205a]'
          }`}
        >
          Running
        </button>
      </div>

      {/* 3 Quick Stakes Cards (Green 32K, Blue 64K, Purple 640K) */}
      <QuickStakesCards
        onSelectStake={(s) => {
          soundManager.playCoin();
          setSelectedRoom({
            id: s.id,
            name: `${s.winAmount} Fast Arena`,
            emblem: s.theme === 'green' ? 'raita_kings' : s.theme === 'blue' ? 'royal_brawlers' : 'legend_squad',
            winAmount: s.winAmount,
            capacity: '4/8',
            entryFee: s.entryFee,
          });
        }}
      />

      {/* 4 Tournament Rooms List with Emblems & JOIN buttons */}
      <TournamentRoomsList
        onJoinRoom={handleJoin}
        onLoadMore={() => {
          soundManager.playClick();
          handleRefresh();
        }}
      />

      {/* Join Room Confirmation Modal */}
      {selectedRoom && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="relative w-full max-w-sm rounded-2xl bg-gradient-to-b from-[#0b1d4d] via-[#051130] to-[#02091c] border-2 border-amber-400 p-5 shadow-[0_0_30px_rgba(251,191,36,0.4)] text-center">
            <h3 className="font-black text-lg text-amber-300 tracking-wide">
              JOIN TOURNAMENT
            </h3>
            <p className="text-xs text-slate-300 mt-1">
              Are you ready to enter <strong className="text-white">{selectedRoom.name}</strong>?
            </p>

            <div className="my-4 p-3 rounded-xl bg-[#040e2b] border border-blue-400/30 flex items-center justify-around">
              <div>
                <span className="text-[10px] text-slate-400 block">Entry Fee</span>
                <span className="text-sm font-black text-amber-300">{selectedRoom.entryFee}</span>
              </div>
              <div className="h-6 w-px bg-white/10" />
              <div>
                <span className="text-[10px] text-slate-400 block">Prize Pool</span>
                <span className="text-sm font-black text-emerald-400">{selectedRoom.winAmount}</span>
              </div>
              <div className="h-6 w-px bg-white/10" />
              <div>
                <span className="text-[10px] text-slate-400 block">Players</span>
                <span className="text-sm font-black text-cyan-300">{selectedRoom.capacity}</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setSelectedRoom(null)}
                className="flex-1 py-2 rounded-xl bg-slate-800 text-xs font-bold text-slate-300 hover:bg-slate-700"
              >
                Cancel
              </button>
              <button
                onClick={confirmJoin}
                className="flex-1 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 text-white font-black text-xs uppercase shadow-[0_0_12px_rgba(34,197,94,0.6)] hover:brightness-110 active:scale-95"
              >
                CONFIRM & PLAY
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Success Notification */}
      {joiningSuccess && (
        <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-50 px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-700 border-2 border-emerald-300 text-white text-xs font-black shadow-2xl animate-in fade-in duration-150">
          {joiningSuccess}
        </div>
      )}
    </div>
  );
};
