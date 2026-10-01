import React from 'react';

export type CountryCode = 'BD' | 'IN' | 'NP' | 'PK' | 'US' | 'BR';

interface CountryFlagProps {
  country: CountryCode | string;
  size?: 'sm' | 'md';
  className?: string;
}

export const CountryFlag: React.FC<CountryFlagProps> = ({ country, size = 'sm', className = '' }) => {
  const isMd = size === 'md';
  const width = isMd ? 24 : 20;
  const height = isMd ? 16 : 14;

  const code = country.toUpperCase();

  return (
    <div
      className={`relative shrink-0 rounded-xs overflow-hidden border border-white/20 shadow-xs flex items-center justify-center ${className}`}
      style={{ width, height }}
    >
      {code === 'BD' || code === 'BANGLADESH' ? (
        // Bangladesh: Deep bottle green with off-centered red circle
        <div className="w-full h-full bg-[#006a4e] relative flex items-center justify-center">
          <div className="w-2.5 h-2.5 rounded-full bg-[#f42a41] -translate-x-0.5" />
        </div>
      ) : code === 'IN' || code === 'INDIA' ? (
        // India: Saffron, white with navy wheel, green
        <div className="w-full h-full flex flex-col">
          <div className="flex-1 bg-[#FF9933]" />
          <div className="flex-1 bg-white relative flex items-center justify-center">
            <div className="w-1.5 h-1.5 rounded-full border border-[#000080] flex items-center justify-center">
              <div className="w-0.5 h-0.5 rounded-full bg-[#000080]" />
            </div>
          </div>
          <div className="flex-1 bg-[#138808]" />
        </div>
      ) : code === 'NP' || code === 'NEPAL' ? (
        // Nepal: Double pennant shape on blue background
        <div className="w-full h-full bg-[#003893] relative p-0.5 flex items-center justify-center">
          <div className="w-3 h-3 bg-[#DC143C] relative flex items-center justify-center">
            <span className="text-[7px] text-white font-bold leading-none">★</span>
          </div>
        </div>
      ) : code === 'PK' || code === 'PAKISTAN' ? (
        // Pakistan: White vertical stripe + dark green field with crescent & star
        <div className="w-full h-full flex">
          <div className="w-1/4 bg-white" />
          <div className="flex-1 bg-[#01411C] relative flex items-center justify-center">
            <span className="text-[8px] text-white leading-none">☪</span>
          </div>
        </div>
      ) : (
        // Default / Global
        <div className="w-full h-full bg-blue-700 flex items-center justify-center text-[8px] text-white font-bold">
          {code.slice(0, 2)}
        </div>
      )}
    </div>
  );
};
