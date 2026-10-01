import React, { useState } from 'react';
import { Smartphone, Monitor, Volume2, VolumeX, Share2, Check } from 'lucide-react';
import { PlayerProfile, PlayerStats, GameModeStat, TournamentRecord } from './types';
import { Header } from './components/Header';
import { PlayerProfileCard } from './components/PlayerProfileCard';
import { StatsOverview } from './components/StatsOverview';
import { LeaderboardSection } from './components/LeaderboardSection';
import { CurrentSeasonBanner } from './components/CurrentSeasonBanner';
import { FavoriteGameModes } from './components/FavoriteGameModes';
import { RecentTournaments } from './components/RecentTournaments';
import { TournamentLeaderboard } from './components/leaderboard/TournamentLeaderboard';
import { TournamentLobby } from './components/tournament/TournamentLobby';
import { LiveGameScreen } from './components/game/LiveGameScreen';
import { ChatScreen } from './components/chat/ChatScreen';
import { BottomNavBar, NavTab } from './components/navigation/BottomNavBar';
import { EditProfileModal } from './components/modals/EditProfileModal';
import { LeaderboardModal } from './components/modals/LeaderboardModal';
import { AchievementsModal } from './components/modals/AchievementsModal';
import { GameModesModal } from './components/modals/GameModesModal';
import { TournamentsModal } from './components/modals/TournamentsModal';
import { SettingsModal } from './components/modals/SettingsModal';
import { SeasonPassModal } from './components/modals/SeasonPassModal';
import { TournamentRulesModal } from './components/modals/TournamentRulesModal';
import { soundManager } from './utils/sound';

const INITIAL_PROFILE: PlayerProfile = {
  name: 'Zahid Gaming',
  isVerified: true,
  playerId: '987654321',
  country: 'Bangladesh',
  age: '23 Years',
  bio: "Ludo is not just a game, it's my passion",
  level: 78,
  currentXp: 12450,
  maxXp: 15000,
  popularity: '1.2M',
  avatarUrl: '',
  rankTitle: 'Grand Master',
  rankTier: 'Top 1% Players',
};

const INITIAL_STATS: PlayerStats = {
  tournaments: 124,
  matches: 318,
  wins: 268,
  losses: 50,
  totalPoints: 1240,
  globalRank: 58,
  countryRank: 3,
  seasonNumber: 12,
  seasonRankTier: 'Top 100',
};

const INITIAL_MODES: GameModeStat[] = [
  { id: 'classic', title: 'Classic Mode', matches: 420, winRate: 68, iconType: 'classic' },
  { id: 'teamup', title: 'Team Up', matches: 320, winRate: 72, iconType: 'teamup' },
  { id: 'privateroom', title: 'Private Room', matches: 150, winRate: 60, iconType: 'privateroom' },
  { id: 'quickmatch', title: 'Quick Match', matches: 180, winRate: 65, iconType: 'quickmatch' },
];

const INITIAL_TOURNAMENTS: TournamentRecord[] = [
  { id: 't1', position: '1st', name: 'Royal Brawlers', winnings: '64,000', entryFee: '10,000', date: '20 Sep 2026' },
  { id: 't2', position: '2nd', name: 'Raita Kings', winnings: '32,000', entryFee: '5,000', date: '15 Sep 2026' },
  { id: 't3', position: '3rd', name: 'Ludo Masters', winnings: '1,20,000', entryFee: '20,000', date: '10 Sep 2026' },
];

export default function App() {
  const [profile, setProfile] = useState<PlayerProfile>(INITIAL_PROFILE);
  const [stats] = useState<PlayerStats>(INITIAL_STATS);
  const [modes] = useState<GameModeStat[]>(INITIAL_MODES);
  const [tournaments] = useState<TournamentRecord[]>(INITIAL_TOURNAMENTS);

  // Global Coins & Gems
  const [coins, setCoins] = useState(12450);
  const [gems, setGems] = useState(144);

  // Active Navigation Tab: Defaults to 'chat' or 'game'
  const [currentNavTab, setCurrentNavTab] = useState<NavTab>('chat');

  // Modals state
  const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);
  const [isLeaderboardModalOpen, setIsLeaderboardModalOpen] = useState(false);
  const [leaderboardModalTab, setLeaderboardModalTab] = useState<'global' | 'country'>('global');
  const [isAchievementsOpen, setIsAchievementsOpen] = useState(false);
  const [isGameModesOpen, setIsGameModesOpen] = useState(false);
  const [isTournamentsOpen, setIsTournamentsOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isSeasonPassOpen, setIsSeasonPassOpen] = useState(false);
  const [isRulesModalOpen, setIsRulesModalOpen] = useState(false);
  const [isSoundOn, setIsSoundOn] = useState(true);
  const [sharedToast, setSharedToast] = useState(false);

  // View mode: 'mobile' (fits mobile screen) or 'wide'
  const [viewMode, setViewMode] = useState<'mobile' | 'wide'>('mobile');

  const toggleSound = () => {
    const nextState = !isSoundOn;
    setIsSoundOn(nextState);
    soundManager.soundEnabled = nextState;
  };

  const handleShare = () => {
    soundManager.playCoin();
    navigator.clipboard?.writeText(window.location.href);
    setSharedToast(true);
    setTimeout(() => setSharedToast(false), 2200);
  };

  return (
    <div className="h-[100dvh] max-h-[100dvh] w-full bg-[#020617] text-white flex flex-col items-center justify-start overflow-hidden select-none relative selection:bg-amber-400 selection:text-black">
      {/* Background Ambient Lighting FX */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-b from-blue-700/15 via-indigo-900/10 to-transparent blur-3xl rounded-full" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-700/10 blur-3xl rounded-full" />
      </div>

      {/* Floating Viewport & Utility Toolbar (Hidden on actual mobile screens, shown on sm+) */}
      <div className="hidden sm:flex relative z-40 my-2 items-center justify-between w-full max-w-[430px] px-3 py-1.5 rounded-full bg-slate-900/90 border border-blue-500/30 backdrop-blur-md shadow-lg shrink-0">
        <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-full border border-blue-500/20">
          <button
            onClick={() => {
              soundManager.playClick();
              setViewMode('mobile');
            }}
            className={`px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1.5 transition-all ${
              viewMode === 'mobile'
                ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>Mobile 9:16</span>
          </button>
          <button
            onClick={() => {
              soundManager.playClick();
              setViewMode('wide');
            }}
            className={`px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1.5 transition-all ${
              viewMode === 'wide'
                ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Monitor className="w-3.5 h-3.5" />
            <span>Expanded</span>
          </button>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleSound}
            className="p-1.5 rounded-full bg-slate-800 hover:bg-slate-700 text-cyan-300 transition-colors"
            title={isSoundOn ? 'Mute' : 'Unmute'}
          >
            {isSoundOn ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4 text-slate-500" />}
          </button>

          <button
            onClick={handleShare}
            className="px-2.5 py-1 rounded-full bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-400/40 text-xs font-bold flex items-center gap-1 transition-all"
          >
            {sharedToast ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400">Copied!</span>
              </>
            ) : (
              <>
                <Share2 className="w-3.5 h-3.5" />
                <span>Share</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Main Container - 100% full screen on mobile, styled mockup on sm+ */}
      <div
        className={`relative z-10 w-full h-full flex flex-col justify-between overflow-hidden transition-all duration-300 ${
          viewMode === 'mobile'
            ? 'sm:max-w-[430px] sm:h-[calc(100dvh-55px)] sm:rounded-[36px] sm:border-[6px] sm:border-slate-800/90 sm:shadow-[0_0_50px_rgba(30,58,138,0.4)] bg-[#072464]'
            : 'sm:max-w-4xl sm:h-[calc(100dvh-55px)] sm:rounded-3xl sm:border sm:border-blue-500/30 sm:bg-[#072464]/95 sm:shadow-2xl sm:p-2 bg-[#072464]'
        }`}
      >
        {/* Device Notch Bar for Desktop Preview */}
        {viewMode === 'mobile' && (
          <div className="hidden sm:flex h-3.5 w-full bg-[#020719] items-center justify-center shrink-0">
            <div className="w-20 h-1 rounded-full bg-slate-800" />
          </div>
        )}

        {/* Content Body Based on Current Nav Tab */}
        <div className="flex-1 w-full min-h-0 overflow-y-auto overflow-x-hidden">
          {currentNavTab === 'chat' ? (
            /* ================= SCREEN 5: DEDICATED LUDO CHAT SCREEN ================= */
            <ChatScreen
              onBack={() => setCurrentNavTab('game')}
              roomId="786532"
            />
          ) : currentNavTab === 'game' ? (
            /* ================= SCREEN 4: IN-GAME LUDO MATCH BOARD ================= */
            <LiveGameScreen
              coins={coins}
              onBackToLobby={() => setCurrentNavTab('tournaments')}
              onOpenSettings={() => setIsSettingsOpen(true)}
              onOpenFullChat={() => setCurrentNavTab('chat')}
              onAddCoins={() => {
                soundManager.playCoin();
                setCoins((c) => c + 1000);
              }}
            />
          ) : currentNavTab === 'tournaments' ? (
            /* ================= SCREEN 3: TOURNAMENT LOBBY & ARENA ================= */
            <TournamentLobby
              coins={coins}
              gems={gems}
              onBack={() => setCurrentNavTab('leaderboard')}
              onHelp={() => setIsRulesModalOpen(true)}
              onUpdateCoins={(delta) => setCoins((prev) => Math.max(0, prev + delta))}
            />
          ) : currentNavTab === 'leaderboard' ? (
            /* ================= SCREEN 2: TOURNAMENT LEADERBOARD ================= */
            <TournamentLeaderboard
              onBack={() => setCurrentNavTab('profile')}
              onHelp={() => setIsRulesModalOpen(true)}
            />
          ) : (
            /* ================= SCREEN 1: PLAYER PROFILE ================= */
            <div className="flex flex-col gap-3 p-2 sm:p-3 pb-4">
              <Header
                onBack={() => {
                  soundManager.playClick();
                  setCurrentNavTab('game');
                }}
                onOpenSettings={() => {
                  soundManager.playClick();
                  setIsSettingsOpen(true);
                }}
              />

              <PlayerProfileCard
                profile={profile}
                onEditProfile={() => setIsEditProfileOpen(true)}
                onEditBio={() => setIsEditProfileOpen(true)}
                onChangePhoto={() => setIsEditProfileOpen(true)}
              />

              <StatsOverview
                profile={profile}
                stats={stats}
                onOpenRankDetails={() => setIsSeasonPassOpen(true)}
              />

              <LeaderboardSection
                onViewAll={() => setCurrentNavTab('leaderboard')}
                onOpenCard={(cardId) => {
                  if (cardId === 'global' || cardId === 'country') {
                    setCurrentNavTab('leaderboard');
                  } else if (cardId === 'tournament') {
                    setCurrentNavTab('tournaments');
                  } else if (cardId === 'grandmaster') {
                    setIsSeasonPassOpen(true);
                  }
                }}
              />

              <CurrentSeasonBanner
                stats={stats}
                onOpenSeasonPass={() => setIsSeasonPassOpen(true)}
              />

              <FavoriteGameModes
                modes={modes}
                onSeeAll={() => setIsGameModesOpen(true)}
                onSelectMode={() => setCurrentNavTab('game')}
              />

              <RecentTournaments
                tournaments={tournaments}
                onSeeAll={() => setIsTournamentsOpen(true)}
                onSelectTournament={() => setCurrentNavTab('tournaments')}
              />
            </div>
          )}
        </div>

        {/* ================= BOTTOM NAVIGATION BAR ================= */}
        <div className="w-full shrink-0">
          <BottomNavBar
            currentTab={currentNavTab}
            onChangeTab={(tab) => {
              setCurrentNavTab(tab);
            }}
          />
        </div>
      </div>

      {/* Interactive Modals */}
      <EditProfileModal
        isOpen={isEditProfileOpen}
        onClose={() => setIsEditProfileOpen(false)}
        profile={profile}
        onSave={(updated) => setProfile(updated)}
      />

      <LeaderboardModal
        isOpen={isLeaderboardModalOpen}
        onClose={() => setIsLeaderboardModalOpen(false)}
        defaultTab={leaderboardModalTab}
      />

      <AchievementsModal
        isOpen={isAchievementsOpen}
        onClose={() => setIsAchievementsOpen(false)}
      />

      <GameModesModal
        isOpen={isGameModesOpen}
        onClose={() => setIsGameModesOpen(false)}
        modes={modes}
      />

      <TournamentsModal
        isOpen={isTournamentsOpen}
        onClose={() => setIsTournamentsOpen(false)}
        tournaments={tournaments}
      />

      <SettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        isSoundOn={isSoundOn}
        onToggleSound={toggleSound}
      />

      <SeasonPassModal
        isOpen={isSeasonPassOpen}
        onClose={() => setIsSeasonPassOpen(false)}
      />

      <TournamentRulesModal
        isOpen={isRulesModalOpen}
        onClose={() => setIsRulesModalOpen(false)}
      />
    </div>
  );
}
