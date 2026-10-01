import React from 'react';

export type PlayerId = 'p1' | 'p2' | 'p3' | 'p4';

interface RealisticAvatarProps {
  playerId: PlayerId;
  size?: number;
  className?: string;
  customUrl?: string;
}

export const RealisticAvatar: React.FC<RealisticAvatarProps> = ({
  playerId,
  size = 56,
  className = '',
  customUrl,
}) => {
  if (customUrl) {
    return (
      <div className={`rounded-full overflow-hidden shrink-0 ${className}`} style={{ width: size, height: size }}>
        <img src={customUrl} alt="Avatar" className="w-full h-full object-cover object-center" />
      </div>
    );
  }

  return (
    <div
      className={`relative rounded-full overflow-hidden shrink-0 select-none shadow-md ${className}`}
      style={{ width: size, height: size }}
    >
      {playerId === 'p2' && (
        /* Player 2: Stylish South Asian man with sunglasses, sharp beard, black jacket/shirt */
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <defs>
            <radialGradient id="p2bg" cx="50%" cy="40%" r="60%">
              <stop offset="0%" stopColor="#4A4E69" />
              <stop offset="100%" stopColor="#1C1D24" />
            </radialGradient>
            <linearGradient id="p2skin" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#D89E78" />
              <stop offset="45%" stopColor="#C4845C" />
              <stop offset="100%" stopColor="#A86842" />
            </linearGradient>
            <linearGradient id="p2hair" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2A2B32" />
              <stop offset="100%" stopColor="#0F1015" />
            </linearGradient>
          </defs>
          <rect width="100" height="100" fill="url(#p2bg)" />
          {/* Shoulders / Black Jacket */}
          <path d="M10 100C10 78 28 72 50 72C72 72 90 78 90 100Z" fill="#14151B" />
          <path d="M40 72L50 86L60 72" stroke="#2D303E" strokeWidth="2" fill="none" />
          {/* Neck */}
          <rect x="42" y="58" width="16" height="18" fill="url(#p2skin)" />
          {/* Face */}
          <ellipse cx="50" cy="46" rx="20" ry="23" fill="url(#p2skin)" />
          {/* Dense Styled Hair with Volume */}
          <path
            d="M26 42C26 22 34 14 50 14C66 14 74 22 74 42C68 36 60 28 50 28C40 28 32 36 26 42Z"
            fill="url(#p2hair)"
          />
          {/* Side hair & ears */}
          <ellipse cx="29" cy="46" rx="3" ry="5" fill="url(#p2skin)" />
          <ellipse cx="71" cy="46" rx="3" ry="5" fill="url(#p2skin)" />
          {/* Trimmed Full Beard */}
          <path
            d="M34 48C34 65 44 71 50 71C56 71 66 65 66 48C62 55 56 58 50 58C44 58 38 55 34 48Z"
            fill="#121318"
            opacity="0.95"
          />
          {/* Mustache */}
          <path d="M42 54C46 52 50 53 50 55C50 53 54 52 58 54C55 57 45 57 42 54Z" fill="#121318" />
          {/* Sunglasses */}
          <path
            d="M32 40H47C47 40 47 48 40 48C33 48 32 40 32 40Z"
            fill="#090A0E"
            stroke="#1E293B"
            strokeWidth="0.8"
          />
          <path
            d="M53 40H68C68 40 67 48 60 48C53 48 53 40 53 40Z"
            fill="#090A0E"
            stroke="#1E293B"
            strokeWidth="0.8"
          />
          <line x1="47" y1="41" x2="53" y2="41" stroke="#090A0E" strokeWidth="2.5" />
          {/* Lens Specular reflection */}
          <line x1="35" y1="41" x2="42" y2="47" stroke="#FFF" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
          <line x1="56" y1="41" x2="63" y2="47" stroke="#FFF" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
        </svg>
      )}

      {playerId === 'p3' && (
        /* Player 3: Smiling young Indian/Bengali woman in pink/lilac dress with long open hair */
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <defs>
            <radialGradient id="p3bg" cx="50%" cy="40%" r="60%">
              <stop offset="0%" stopColor="#7E5265" />
              <stop offset="100%" stopColor="#2E1724" />
            </radialGradient>
            <linearGradient id="p3skin" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#F5C2A3" />
              <stop offset="60%" stopColor="#E5A682" />
              <stop offset="100%" stopColor="#CF8962" />
            </linearGradient>
            <linearGradient id="p3dress" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#E879F9" />
              <stop offset="50%" stopColor="#C026D3" />
              <stop offset="100%" stopColor="#86198F" />
            </linearGradient>
          </defs>
          <rect width="100" height="100" fill="url(#p3bg)" />
          {/* Long dark wavy hair behind shoulders */}
          <path d="M22 35C22 15 32 10 50 10C68 10 78 15 78 35V85C78 85 74 95 65 95C55 95 45 95 35 95C26 95 22 85 22 85Z" fill="#140D17" />
          {/* Pink/Lilac Traditional Saree / Top */}
          <path d="M15 100C15 78 30 72 50 72C70 72 85 78 85 100Z" fill="url(#p3dress)" />
          {/* Neck with delicate collarbone */}
          <rect x="44" y="56" width="12" height="18" fill="url(#p3skin)" />
          {/* Soft oval face */}
          <ellipse cx="50" cy="46" rx="18" ry="21" fill="url(#p3skin)" />
          {/* Front hair framing face */}
          <path d="M26 36C34 20 45 22 50 26C55 22 66 20 74 36C76 48 74 65 72 75C68 55 64 42 60 40C52 35 48 35 40 40C36 42 32 55 28 75C26 65 24 48 26 36Z" fill="#1A111E" />
          {/* Eyes & Eyebrows */}
          <path d="M37 39Q42 37 46 40" stroke="#120B15" strokeWidth="1.2" fill="none" />
          <path d="M54 40Q58 37 63 39" stroke="#120B15" strokeWidth="1.2" fill="none" />
          <ellipse cx="42" cy="43" rx="3.5" ry="2.2" fill="#2E1065" />
          <ellipse cx="58" cy="43" rx="3.5" ry="2.2" fill="#2E1065" />
          <circle cx="43" cy="42.5" r="0.9" fill="#FFF" />
          <circle cx="59" cy="42.5" r="0.9" fill="#FFF" />
          {/* Cute Bindi */}
          <circle cx="50" cy="38" r="1" fill="#991B1B" />
          {/* Smiling Lips */}
          <path d="M44 54C47 57 53 57 56 54" stroke="#BE123C" strokeWidth="2" strokeLinecap="round" fill="none" />
          <path d="M46 55H54" stroke="#FFF" strokeWidth="1" strokeLinecap="round" />
        </svg>
      )}

      {playerId === 'p1' && (
        /* Player 1: Handsome young South Asian man in light blue collared shirt with sunglasses */
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <defs>
            <radialGradient id="p1bg" cx="50%" cy="40%" r="60%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#0B1C4D" />
            </radialGradient>
            <linearGradient id="p1skin" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#DF9F79" />
              <stop offset="50%" stopColor="#C68159" />
              <stop offset="100%" stopColor="#A8623B" />
            </linearGradient>
            <linearGradient id="p1shirt" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#BAE6FD" />
              <stop offset="50%" stopColor="#7DD3FC" />
              <stop offset="100%" stopColor="#38BDF8" />
            </linearGradient>
          </defs>
          <rect width="100" height="100" fill="url(#p1bg)" />
          {/* Light Blue Button Shirt with Collar */}
          <path d="M12 100C12 76 28 70 50 70C72 70 88 76 88 100Z" fill="url(#p1shirt)" />
          {/* Open Shirt V-neck & Collar */}
          <path d="M40 70L50 82L60 70" stroke="#0284C7" strokeWidth="1.5" fill="#FFF" />
          {/* Neck */}
          <rect x="42" y="56" width="16" height="18" fill="url(#p1skin)" />
          {/* Face */}
          <ellipse cx="50" cy="45" rx="19" ry="22" fill="url(#p1skin)" />
          {/* Voluminous Styled Modern Haircut */}
          <path
            d="M26 40C26 22 34 14 50 14C66 14 74 22 74 40C68 34 60 28 50 28C40 28 32 34 26 40Z"
            fill="#1E1F26"
          />
          {/* Subtle light stubble */}
          <path d="M35 50C35 64 45 68 50 68C55 68 65 64 65 50C62 56 56 58 50 58C44 58 38 56 35 50Z" fill="#111827" opacity="0.4" />
          {/* Stylish Sunglasses */}
          <path
            d="M32 39H47C47 39 47 47 40 47C33 47 32 39 32 39Z"
            fill="#090B10"
            stroke="#38BDF8"
            strokeWidth="0.8"
          />
          <path
            d="M53 39H68C68 39 67 47 60 47C53 47 53 39 53 39Z"
            fill="#090B10"
            stroke="#38BDF8"
            strokeWidth="0.8"
          />
          <line x1="47" y1="40" x2="53" y2="40" stroke="#090B10" strokeWidth="2.5" />
          <line x1="35" y1="40" x2="43" y2="46" stroke="#FFF" strokeWidth="1" strokeLinecap="round" opacity="0.7" />
          <line x1="56" y1="40" x2="64" y2="46" stroke="#FFF" strokeWidth="1" strokeLinecap="round" opacity="0.7" />
          {/* Confident Smile */}
          <path d="M46 54C48 56 52 56 54 54" stroke="#7C2D12" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      )}

      {playerId === 'p4' && (
        /* Player 4: Smiling young Indian/Bengali woman with dark hair in yellow traditional outfit */
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <defs>
            <radialGradient id="p4bg" cx="50%" cy="40%" r="60%">
              <stop offset="0%" stopColor="#715222" />
              <stop offset="100%" stopColor="#241908" />
            </radialGradient>
            <linearGradient id="p4skin" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#F5C4A6" />
              <stop offset="60%" stopColor="#E5A885" />
              <stop offset="100%" stopColor="#CF8B65" />
            </linearGradient>
            <linearGradient id="p4dress" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FDE047" />
              <stop offset="60%" stopColor="#EAB308" />
              <stop offset="100%" stopColor="#A16207" />
            </linearGradient>
          </defs>
          <rect width="100" height="100" fill="url(#p4bg)" />
          {/* Dark hair behind */}
          <path d="M22 35C22 15 32 10 50 10C68 10 78 15 78 35V85C78 85 74 95 65 95C55 95 45 95 35 95C26 95 22 85 22 85Z" fill="#140F0A" />
          {/* Yellow Dress / Saree */}
          <path d="M15 100C15 78 30 72 50 72C70 72 85 78 85 100Z" fill="url(#p4dress)" />
          <path d="M38 72L50 84L62 72" stroke="#CA8A04" strokeWidth="1.5" fill="none" />
          {/* Neck */}
          <rect x="44" y="56" width="12" height="18" fill="url(#p4skin)" />
          {/* Face */}
          <ellipse cx="50" cy="46" rx="18" ry="21" fill="url(#p4skin)" />
          {/* Front hair framing */}
          <path d="M26 36C34 20 45 22 50 26C55 22 66 20 74 36C76 48 74 65 72 75C68 55 64 42 60 40C52 35 48 35 40 40C36 42 32 55 28 75C26 65 24 48 26 36Z" fill="#1C150F" />
          {/* Eyes & Smile */}
          <path d="M37 39Q42 37 46 40" stroke="#120B15" strokeWidth="1.2" fill="none" />
          <path d="M54 40Q58 37 63 39" stroke="#120B15" strokeWidth="1.2" fill="none" />
          <ellipse cx="42" cy="43" rx="3.5" ry="2.2" fill="#2E1065" />
          <ellipse cx="58" cy="43" rx="3.5" ry="2.2" fill="#2E1065" />
          <circle cx="43" cy="42.5" r="0.9" fill="#FFF" />
          <circle cx="59" cy="42.5" r="0.9" fill="#FFF" />
          <circle cx="50" cy="38" r="1" fill="#991B1B" />
          <path d="M44 54C47 57 53 57 56 54" stroke="#BE123C" strokeWidth="2" strokeLinecap="round" fill="none" />
          <path d="M46 55H54" stroke="#FFF" strokeWidth="1" strokeLinecap="round" />
        </svg>
      )}
    </div>
  );
};
