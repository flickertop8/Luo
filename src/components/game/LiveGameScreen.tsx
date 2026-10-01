import React, { useState } from 'react';
import { GameTopBar } from './GameTopBar';
import { PlayerHud, GamePlayerInfo } from './PlayerHud';
import { LudoBoard } from './LudoBoard';
import { GameBottomBar } from './GameBottomBar';
import { ChatModal } from './ChatModal';
import { GiftModal } from './GiftModal';
import { soundManager } from '../../utils/sound';

interface LiveGameScreenProps {
  onBackToLobby?: () => void;
  onOpenSettings?: () => void;
  onOpenFullChat?: () => void;
  coins?: number;
  onAddCoins?: () => void;
}

const INITIAL_PLAYERS: Record<'p1' | 'p2' | 'p3' | 'p4', GamePlayerInfo> = {
  p2: {
    id: 'p2',
    name: 'Player 2',
    color: 'red',
    points: 5230,
    diceValue: 5,
    isActiveTurn: false,
    hasCrown: true,
  },
  p3: {
    id: 'p3',
    name: 'Player 3',
    color: 'green',
    points: 4810,
    diceValue: 1,
    isActiveTurn: false,
  },
  p1: {
    id: 'p1',
    name: 'Player 1',
    color: 'blue',
    points: 6120,
    diceValue: 6,
    isActiveTurn: true,
  },
  p4: {
    id: 'p4',
    name: 'Player 4',
    color: 'yellow',
    points: 3980,
    diceValue: 2,
    isActiveTurn: false,
    isTimerActive: true,
  },
};

export const LiveGameScreen: React.FC<LiveGameScreenProps> = ({
  onBackToLobby,
  onOpenSettings,
  onOpenFullChat,
  coins = 12450,
  onAddCoins,
}) => {
  const [players, setPlayers] = useState(INITIAL_PLAYERS);
  const [isRolling, setIsRolling] = useState(false);
  const [isVoiceActive, setIsVoiceActive] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [selectedGiftTarget, setSelectedGiftTarget] = useState<GamePlayerInfo | null>(null);

  // Floating notifications / reactions
  const [floatingReaction, setFloatingReaction] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleRollDice = () => {
    if (isRolling) return;
    setIsRolling(true);
    soundManager.playRoll();

    let count = 0;
    const interval = setInterval(() => {
      const tempVal = Math.floor(Math.random() * 6) + 1;
      setPlayers((prev) => ({
        ...prev,
        p1: { ...prev.p1, diceValue: tempVal },
      }));
      count++;
      if (count >= 6) {
        clearInterval(interval);
        const finalVal = Math.floor(Math.random() * 6) + 1;
        setPlayers((prev) => ({
          ...prev,
          p1: { ...prev.p1, diceValue: finalVal },
        }));
        setIsRolling(false);
        soundManager.playBadge();

        if (finalVal === 6) {
          setToastMessage('🎉 Rolled a 6! You get another turn!');
          setTimeout(() => setToastMessage(null), 2500);
        }
      }
    }, 60);
  };

  const handleSendReaction = (emoji: string) => {
    setFloatingReaction(emoji);
    setTimeout(() => setFloatingReaction(null), 2200);
  };

  const handleSendMessage = (msg: string) => {
    setToastMessage(`Player 1: "${msg}"`);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleGiftConfirmed = (giftName: string) => {
    if (!selectedGiftTarget) return;
    setToastMessage(`🎁 Sent ${giftName} to ${selectedGiftTarget.name}!`);
    setTimeout(() => setToastMessage(null), 3000);
  };

  return (
    <div className="relative flex flex-col items-center justify-between w-full h-full min-h-0 bg-[#072464] text-white select-none overflow-hidden pb-1">
      {/* Background with tilted blue 3D dice tiles pattern matching screenshot */}
      <div className="absolute inset-0 pointer-events-none opacity-25">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="tiltedDicePattern" width="120" height="120" patternUnits="userSpaceOnUse" patternTransform="rotate(35)">
              <rect x="10" y="10" width="45" height="45" rx="8" fill="#1E40AF" stroke="#3B82F6" strokeWidth="1.5" />
              <circle cx="22" cy="22" r="3.5" fill="#0F172A" />
              <circle cx="43" cy="22" r="3.5" fill="#0F172A" />
              <circle cx="32" cy="32" r="3.5" fill="#0F172A" />
              <circle cx="22" cy="43" r="3.5" fill="#0F172A" />
              <circle cx="43" cy="43" r="3.5" fill="#0F172A" />

              <rect x="70" y="65" width="40" height="40" rx="8" fill="#1D4ED8" stroke="#60A5FA" strokeWidth="1.5" />
              <circle cx="80" cy="75" r="3" fill="#0F172A" />
              <circle cx="100" cy="95" r="3" fill="#0F172A" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#tiltedDicePattern)" />
        </svg>
      </div>

      {/* Vignette Rim Shadow */}
      <div className="absolute inset-0 pointer-events-none bg-radial from-transparent via-[#051947]/30 to-[#020b22]/90" />

      {/* 1. Game Top Bar (Menu, Classic 4 Players, Coins, Settings, Room ID) */}
      <div className="w-full shrink-0">
        <GameTopBar
          coins={coins}
          roomId="786532"
          onOpenMenu={onBackToLobby}
          onOpenSettings={onOpenSettings}
          onAddCoins={onAddCoins}
        />
      </div>

      {/* 2. Upper Player HUDs Row (Player 2 Red | Player 3 Green) */}
      <div className="relative z-10 w-full px-2 sm:px-3 pt-0.5 pb-0.5 flex items-start justify-between shrink-0">
        <PlayerHud
          player={players.p2}
          onSendGift={(p) => setSelectedGiftTarget(p)}
        />
        <PlayerHud
          player={players.p3}
          onSendGift={(p) => setSelectedGiftTarget(p)}
        />
      </div>

      {/* 3. The Center Ludo Board */}
      <div className="relative z-10 w-full px-1 sm:px-2 py-0.5 flex items-center justify-center my-auto shrink-0">
        <LudoBoard
          onPawnClick={(color, idx) => {
            soundManager.playCoin();
            setToastMessage(`Selected ${color.toUpperCase()} pawn #${idx + 1}`);
            setTimeout(() => setToastMessage(null), 1800);
          }}
        />

        {/* Floating animated emoji reactions */}
        {floatingReaction && (
          <div className="absolute z-40 text-6xl sm:text-7xl animate-bounce drop-shadow-[0_0_20px_rgba(251,191,36,0.9)] pointer-events-none">
            {floatingReaction}
          </div>
        )}
      </div>

      {/* 4. Lower Player HUDs Row (Player 1 Blue | Player 4 Yellow) */}
      <div className="relative z-10 w-full px-2 sm:px-3 pt-0.5 pb-0.5 flex items-end justify-between shrink-0">
        <PlayerHud
          player={players.p1}
          onRollDice={handleRollDice}
          onSendGift={(p) => setSelectedGiftTarget(p)}
        />
        <PlayerHud
          player={players.p4}
          onSendGift={(p) => setSelectedGiftTarget(p)}
        />
      </div>

      {/* In-Game Floating Toast */}
      {toastMessage && (
        <div className="absolute bottom-20 z-50 px-4 py-1.5 rounded-full bg-slate-900/95 border-2 border-amber-400 text-amber-200 text-xs font-black shadow-2xl animate-in fade-in zoom-in-95 duration-150">
          {toastMessage}
        </div>
      )}

      {/* 5. Game Bottom Bar (Chat, Voice, Emoji, Invite) */}
      <div className="relative z-20 w-full shrink-0">
        <GameBottomBar
          onOpenChat={() => {
            if (onOpenFullChat) {
              onOpenFullChat();
            } else {
              setIsChatOpen(true);
            }
          }}
          onOpenEmoji={() => setIsChatOpen(true)}
          onOpenInvite={() => {
            soundManager.playCoin();
            navigator.clipboard?.writeText('https://ludoking.game/room/786532');
            setToastMessage('Room ID 786532 link copied!');
            setTimeout(() => setToastMessage(null), 3000);
          }}
          isVoiceActive={isVoiceActive}
          onToggleVoice={() => {
            soundManager.playClick();
            setIsVoiceActive(!isVoiceActive);
          }}
        />
      </div>

      {/* Interactive Quick Chat Drawer */}
      <ChatModal
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
        onSendEmoji={handleSendReaction}
        onSendMessage={handleSendMessage}
      />

      <GiftModal
        isOpen={!!selectedGiftTarget}
        targetPlayer={selectedGiftTarget}
        onClose={() => setSelectedGiftTarget(null)}
        onSendGift={handleGiftConfirmed}
      />
    </div>
  );
};
