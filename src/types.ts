export interface PlayerProfile {
  name: string;
  isVerified: boolean;
  playerId: string;
  country: string;
  age: string;
  bio: string;
  level: number;
  currentXp: number;
  maxXp: number;
  popularity: string;
  avatarUrl: string;
  rankTitle: string;
  rankTier: string;
}

export interface PlayerStats {
  tournaments: number;
  matches: number;
  wins: number;
  losses: number;
  totalPoints: number;
  globalRank: number;
  countryRank: number;
  seasonNumber: number;
  seasonRankTier: string;
}

export interface AchievementCard {
  id: string;
  title: string;
  rankBadge: string;
  subtitle: string;
  iconType: 'global' | 'country' | 'trophy' | 'grandmaster';
  highlightColor?: string;
}

export interface GameModeStat {
  id: string;
  title: string;
  matches: number;
  winRate: number;
  iconType: 'classic' | 'teamup' | 'privateroom' | 'quickmatch';
}

export interface TournamentRecord {
  id: string;
  position: '1st' | '2nd' | '3rd';
  name: string;
  winnings: string;
  entryFee: string;
  date: string;
}
