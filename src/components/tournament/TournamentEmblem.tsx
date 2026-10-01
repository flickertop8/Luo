import React from 'react';

export type EmblemType = 'royal_brawlers' | 'raita_kings' | 'pro_players' | 'legend_squad';

interface TournamentEmblemProps {
  type: EmblemType;
  size?: number;
}

export const TournamentEmblem: React.FC<TournamentEmblemProps> = ({ type, size = 68 }) => {
  return (
    <div className="relative inline-flex items-center justify-center shrink-0 select-none" style={{ width: size, height: size }}>
      {type === 'royal_brawlers' && (
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_8px_rgba(251,191,36,0.6)]">
          <defs>
            <linearGradient id="goldHelm" x1="0" y1="0" x2="100" y2="100">
              <stop offset="0%" stopColor="#FFFBEB" />
              <stop offset="35%" stopColor="#FDE047" />
              <stop offset="70%" stopColor="#D97706" />
              <stop offset="100%" stopColor="#78350F" />
            </linearGradient>
          </defs>
          {/* Circular outer rim */}
          <circle cx="50" cy="46" r="38" fill="#171206" stroke="url(#goldHelm)" strokeWidth="3" />
          <circle cx="50" cy="46" r="34" fill="#0A0802" />
          
          {/* Gladiator / Knight Helmet */}
          {/* Helmet Crest */}
          <path d="M47 18L50 12L53 18V28H47V18Z" fill="url(#goldHelm)" />
          {/* Helmet Mask */}
          <path d="M30 32C30 24 40 22 50 22C60 22 70 24 70 32C70 42 66 58 50 64C34 58 30 42 30 32Z" fill="url(#goldHelm)" />
          {/* Visor Slots */}
          <ellipse cx="42" cy="38" rx="4" ry="2" fill="#000" />
          <ellipse cx="58" cy="38" rx="4" ry="2" fill="#000" />
          {/* Nose bridge & Mouth grille */}
          <line x1="50" y1="38" x2="50" y2="52" stroke="#451A03" strokeWidth="2" />
          <line x1="42" y1="46" x2="58" y2="46" stroke="#451A03" strokeWidth="1.5" />
          <line x1="44" y1="50" x2="56" y2="50" stroke="#451A03" strokeWidth="1.5" />
          <line x1="46" y1="54" x2="54" y2="54" stroke="#451A03" strokeWidth="1.5" />

          {/* Banner at bottom */}
          <path d="M12 68H88L82 86H18L12 68Z" fill="#0F172A" stroke="url(#goldHelm)" strokeWidth="1.5" />
          <text x="50" y="76" fill="#FFF" fontSize="6.5" fontWeight="900" textAnchor="middle" letterSpacing="0.5">ROYAL</text>
          <text x="50" y="83" fill="#FDE047" fontSize="6" fontWeight="900" textAnchor="middle" letterSpacing="0.5">BRAWLERS</text>
        </svg>
      )}

      {type === 'raita_kings' && (
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_8px_rgba(168,85,247,0.7)]">
          <defs>
            <linearGradient id="purpleRing" x1="0" y1="0" x2="100" y2="100">
              <stop offset="0%" stopColor="#E9D5FF" />
              <stop offset="50%" stopColor="#A855F7" />
              <stop offset="100%" stopColor="#581C87" />
            </linearGradient>
            <linearGradient id="kingCrownGrad" x1="0" y1="0" x2="0" y2="50">
              <stop offset="0%" stopColor="#FEF08A" />
              <stop offset="50%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#B45309" />
            </linearGradient>
          </defs>
          <circle cx="50" cy="46" r="38" fill="#130424" stroke="url(#purpleRing)" strokeWidth="3" />
          <circle cx="50" cy="46" r="34" fill="#090212" />

          {/* Purple Wings behind */}
          <path d="M22 45C14 38 10 40 8 45C10 52 18 56 26 56M78 45C86 38 90 40 92 45C90 52 82 56 74 56" stroke="#C084FC" strokeWidth="3" fill="none" />

          {/* Royal Crown */}
          <path d="M28 50L30 30L40 38L50 24L60 38L70 30L72 50Z" fill="url(#kingCrownGrad)" stroke="#FEF08A" strokeWidth="1" />
          <circle cx="50" cy="26" r="2" fill="#EF4444" />
          <circle cx="30" cy="32" r="1.5" fill="#3B82F6" />
          <circle cx="70" cy="32" r="1.5" fill="#3B82F6" />
          <circle cx="50" cy="44" r="2.5" fill="#EF4444" />

          {/* Banner */}
          <path d="M12 68H88L82 86H18L12 68Z" fill="#1E0738" stroke="url(#purpleRing)" strokeWidth="1.5" />
          <text x="50" y="80" fill="#F3E8FF" fontSize="7" fontWeight="900" textAnchor="middle" letterSpacing="0.8">RAITA KINGS</text>
        </svg>
      )}

      {type === 'pro_players' && (
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_8px_rgba(245,158,11,0.7)]">
          <defs>
            <linearGradient id="proGold" x1="0" y1="0" x2="100" y2="100">
              <stop offset="0%" stopColor="#FFFBEB" />
              <stop offset="40%" stopColor="#FBBF24" />
              <stop offset="100%" stopColor="#78350F" />
            </linearGradient>
          </defs>
          <circle cx="50" cy="46" r="38" fill="#1C1304" stroke="url(#proGold)" strokeWidth="3" />
          <circle cx="50" cy="46" r="34" fill="#0C0802" />

          {/* Eagle Wings */}
          <path d="M24 44C16 35 12 37 8 40C8 46 16 52 26 52M76 44C84 35 88 37 92 40C92 46 84 52 74 52" stroke="#FBBF24" strokeWidth="3.5" fill="none" />

          {/* Trophy Cup */}
          <path d="M36 28H64V42C64 48 58 54 50 54C42 54 36 48 36 42V28Z" fill="url(#proGold)" stroke="#FEF08A" strokeWidth="0.8" />
          <path d="M36 32C30 32 30 40 36 42M64 32C70 32 70 40 64 42" stroke="url(#proGold)" strokeWidth="2" fill="none" />
          <path d="M46 54H54V60H46V54Z" fill="url(#proGold)" />
          <path d="M40 60H60L62 64H38L40 60Z" fill="url(#proGold)" />
          <path d="M50 34L51.5 38H55.5L52.5 40L53.5 44L50 42L46.5 44L47.5 40L44.5 38H48.5L50 34Z" fill="#FFF" />

          {/* Banner */}
          <path d="M12 68H88L82 86H18L12 68Z" fill="#0F172A" stroke="url(#proGold)" strokeWidth="1.5" />
          <text x="50" y="80" fill="#FEF08A" fontSize="7" fontWeight="900" textAnchor="middle" letterSpacing="0.8">PRO PLAYERS</text>
        </svg>
      )}

      {type === 'legend_squad' && (
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_10px_rgba(56,189,248,0.8)]">
          <defs>
            <linearGradient id="iceCyan" x1="0" y1="0" x2="100" y2="100">
              <stop offset="0%" stopColor="#E0F2FE" />
              <stop offset="40%" stopColor="#38BDF8" />
              <stop offset="100%" stopColor="#0369A1" />
            </linearGradient>
          </defs>
          <circle cx="50" cy="46" r="38" fill="#041529" stroke="url(#iceCyan)" strokeWidth="3" />
          <circle cx="50" cy="46" r="34" fill="#020B17" />

          {/* Ice Crystal arrows / energy */}
          <path d="M20 38L12 32M22 48L10 48M24 58L14 62M80 38L88 32M78 48L90 48M76 58L86 62" stroke="#7DD3FC" strokeWidth="2.5" strokeLinecap="round" />

          {/* Crystal Trophy Cup */}
          <path d="M36 28H64V42C64 48 58 54 50 54C42 54 36 48 36 42V28Z" fill="url(#iceCyan)" stroke="#BAE6FD" strokeWidth="1" />
          <path d="M36 32C28 32 28 42 36 44M64 32C72 32 72 42 64 44" stroke="url(#iceCyan)" strokeWidth="2.5" fill="none" />
          <path d="M46 54H54V60H46V54Z" fill="url(#iceCyan)" />
          <path d="M40 60H60L62 64H38L40 60Z" fill="url(#iceCyan)" />
          <polygon points="50,32 52,37 57,37 53,40 55,45 50,42 45,45 47,40 43,37 48,37" fill="#FFF" />

          {/* Banner */}
          <path d="M12 68H88L82 86H18L12 68Z" fill="#031633" stroke="url(#iceCyan)" strokeWidth="1.5" />
          <text x="50" y="76" fill="#BAE6FD" fontSize="6.5" fontWeight="900" textAnchor="middle" letterSpacing="0.5">LEGEND</text>
          <text x="50" y="83" fill="#38BDF8" fontSize="6" fontWeight="900" textAnchor="middle" letterSpacing="0.5">SQUAD</text>
        </svg>
      )}
    </div>
  );
};
