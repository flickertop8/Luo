import React from 'react';
import { Users, ChevronDown, Flame } from 'lucide-react';
import { TournamentEmblem, EmblemType } from './TournamentEmblem';
import { GoldCoins } from '../3d/GoldCoins';
import { soundManager } from '../../utils/sound';

export interface TournamentRoom {
  id: string;
  name: string;
  emblem: EmblemType;
  winAmount: string;
  capacity: string;
  entryFee: string;
  isHot?: boolean;
}

const DEFAULT_ROOMS: TournamentRoom[] = [
  {
    id: 'room_royal_brawlers',
    name: 'Royal Brawlers',
    emblem: 'royal_brawlers',
    winAmount: '64,000',
    capacity: '5/8',
    entryFee: '10,000',
    isHot: true,
  },
  {
    id: 'room_raita_kings',
    name: 'Raita Kings',
    emblem: 'raita_kings',
    winAmount: '32,000',
    capacity: '2/8',
    entryFee: '5,000',
  },
  {
    id: 'room_pro_players',
    name: 'Pro Players',
    emblem: 'pro_players',
    winAmount: '128,000',
    capacity: '7/8',
    entryFee: '20,000',
  },
  {
    id: 'room_legend_squad',
    name: 'Legend Squad',
    emblem: 'legend_squad',
    winAmount: '640,000',
    capacity: '3/8',
    entryFee: '100,000',
  },
];

interface TournamentRoomsListProps {
  rooms?: TournamentRoom[];
  onJoinRoom?: (room: TournamentRoom) => void;
  onLoadMore?: () => void;
}

export const TournamentRoomsList: React.FC<TournamentRoomsListProps> = ({
  rooms = DEFAULT_ROOMS,
  onJoinRoom,
  onLoadMore,
}) => {
  return (
    <div className="flex flex-col gap-2.5 px-2 py-2 select-none">
      {rooms.map((room) => (
        <div
          key={room.id}
          className="relative rounded-2xl p-0.5 bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 shadow-[0_4px_16px_rgba(0,0,0,0.7)]"
        >
          {/* Card Inner */}
          <div className="rounded-[14px] bg-gradient-to-r from-[#031338] via-[#051c54] to-[#031338] p-2 sm:p-2.5 flex items-center justify-between gap-2">
            {/* Left Emblem */}
            <TournamentEmblem type={room.emblem} size={64} />

            {/* Middle Info Column */}
            <div className="flex-1 min-w-0 flex flex-col justify-center gap-1.5 pl-1">
              {/* Title & HOT Badge */}
              <div className="flex items-center justify-between gap-1">
                <h3 className="font-extrabold text-sm sm:text-base text-white truncate drop-shadow-sm">
                  {room.name}
                </h3>
                {room.isHot && (
                  <div className="flex items-center gap-0.5 px-2 py-0.5 rounded-full bg-gradient-to-r from-red-600 to-rose-500 text-white font-black text-[10px] shadow-sm uppercase shrink-0">
                    <Flame className="w-3 h-3 text-amber-300 fill-amber-300" />
                    <span>HOT</span>
                  </div>
                )}
              </div>

              {/* Purple WIN pill + Player Capacity */}
              <div className="flex items-center gap-2 flex-wrap">
                {/* Purple WIN Pill */}
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-gradient-to-r from-purple-900/90 via-indigo-900/90 to-purple-900/90 border border-purple-400/40 shadow-xs">
                  <span className="font-black text-[10px] text-amber-400 uppercase tracking-tight">
                    WIN
                  </span>
                  <GoldCoins size={14} />
                  <span className="font-black text-xs sm:text-sm text-white tracking-tight">
                    {room.winAmount}
                  </span>
                </div>

                {/* Capacity Badge */}
                <div className="flex items-center gap-1 font-black text-xs text-cyan-300">
                  <Users className="w-4 h-4 text-cyan-400 fill-cyan-400" />
                  <span>{room.capacity}</span>
                </div>
              </div>
            </div>

            {/* Right Action Column: Entry Fee + JOIN Button */}
            <div className="flex flex-col items-end justify-center gap-1.5 shrink-0 pl-1">
              <div className="flex items-center gap-1 text-[11px] font-black text-white">
                <span>Entry: {room.entryFee}</span>
                <div className="w-3.5 h-3.5 rounded-full bg-gradient-to-tr from-amber-500 to-yellow-300 border border-amber-200" />
              </div>

              {/* Big Vibrant Green JOIN Button */}
              <button
                onClick={() => {
                  soundManager.playRoll();
                  onJoinRoom?.(room);
                }}
                className="w-24 sm:w-28 py-1.5 rounded-xl bg-gradient-to-b from-[#22c55e] via-[#16a34a] to-[#15803d] border-2 border-emerald-300 text-white font-black text-xs tracking-wider uppercase shadow-[0_0_12px_rgba(34,197,94,0.6)] hover:brightness-110 active:scale-95 transition-all text-center"
              >
                JOIN
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Bottom Load More Button */}
      <div className="flex justify-center pt-2 pb-1">
        <button
          onClick={() => {
            soundManager.playClick();
            onLoadMore?.();
          }}
          className="px-6 py-1.5 rounded-full bg-gradient-to-b from-[#0e3b94] via-[#0b2d75] to-[#061c4d] border-2 border-amber-400/90 text-white font-black text-xs flex items-center gap-1.5 shadow-[0_0_12px_rgba(251,191,36,0.4)] hover:brightness-110 active:scale-95 transition-all"
        >
          <span>Load More</span>
          <ChevronDown className="w-4 h-4 text-amber-300 stroke-[3]" />
        </button>
      </div>
    </div>
  );
};
