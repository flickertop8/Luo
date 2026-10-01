import React from 'react';
import { Pawn3D } from '../3d/Pawn3D';
import { soundManager } from '../../utils/sound';

interface LudoBoardProps {
  onPawnClick?: (color: 'red' | 'green' | 'blue' | 'yellow', index: number) => void;
}

export const LudoBoard: React.FC<LudoBoardProps> = ({ onPawnClick }) => {
  const renderHomePedestal = (color: 'red' | 'green' | 'blue' | 'yellow', index: number) => {
    const isRed = color === 'red';
    const isGreen = color === 'green';
    const isBlue = color === 'blue';

    return (
      <div
        key={`${color}_${index}`}
        onClick={() => {
          soundManager.playClick();
          onPawnClick?.(color, index);
        }}
        className="cursor-pointer group relative w-9 h-9 sm:w-11 sm:h-11 md:w-13 md:h-13 flex items-center justify-center transition-transform hover:scale-105 active:scale-95"
      >
        {/* Silver Chrome Outer Ring with 3D Bevel */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-b from-[#ffffff] via-[#cbd5e1] to-[#64748b] p-0.5 sm:p-1 shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
          {/* Inner dark groove */}
          <div className="w-full h-full rounded-full bg-gradient-to-b from-slate-900 to-slate-800 p-0.5">
            {/* Colored center well */}
            <div
              className={`w-full h-full rounded-full flex items-center justify-center shadow-inner ${
                isRed
                  ? 'bg-gradient-to-b from-[#e11d48] to-[#881337]'
                  : isGreen
                  ? 'bg-gradient-to-b from-[#16a34a] to-[#064e3b]'
                  : isBlue
                  ? 'bg-gradient-to-b from-[#2563eb] to-[#1e3a8a]'
                  : 'bg-gradient-to-b from-[#eab308] to-[#713f12]'
              }`}
            />
          </div>
        </div>

        {/* 3D Glossy Pawn standing on pedestal */}
        <div className="relative z-10 -translate-y-1 sm:-translate-y-1.5 filter drop-shadow-[0_2px_3px_rgba(0,0,0,0.6)]">
          <Pawn3D color={color} size={22} />
        </div>
      </div>
    );
  };

  return (
    <div className="relative w-[min(94vw,42vh,370px)] aspect-square rounded-xl sm:rounded-2xl bg-white shadow-[0_8px_30px_rgba(0,0,0,0.85)] p-0.5 select-none overflow-hidden mx-auto border-2 sm:border-4 border-slate-700/80 shrink-0">
      {/* 15x15 Grid Layout */}
      <div className="relative w-full h-full grid grid-cols-15 grid-rows-15 bg-white">

        {/* ================= 1. RED HOME BASE (TOP-LEFT 6x6) ================= */}
        <div className="col-span-6 row-span-6 bg-[#E11D48] p-1.5 sm:p-2.5 flex items-center justify-center border-r border-b sm:border-r-2 sm:border-b-2 border-slate-400">
          <div className="w-full h-full rounded-lg sm:rounded-xl bg-white shadow-inner p-1 grid grid-cols-2 grid-rows-2 items-center justify-items-center">
            {[0, 1, 2, 3].map((i) => renderHomePedestal('red', i))}
          </div>
        </div>

        {/* ================= 2. TOP VERTICAL TRACK (COLS 7-9, ROWS 1-6) ================= */}
        <div className="col-span-3 row-span-6 grid grid-cols-3 grid-rows-6 border-b sm:border-b-2 border-slate-400">
          {/* Row 0 */}
          <div className="border border-slate-300 bg-white" />
          <div className="border border-slate-300 bg-white flex items-center justify-center font-black text-emerald-600 text-xs sm:text-sm leading-none">
            ↓
          </div>
          <div className="border border-slate-300 bg-white" />

          {/* Row 1 */}
          <div className="border border-slate-300 bg-white" />
          <div className="border border-slate-300 bg-[#16A34A]" />
          <div className="border border-slate-300 bg-[#16A34A]" />

          {/* Row 2 (Safe Star on Left Col) */}
          <div className="border border-slate-300 bg-white flex items-center justify-center text-slate-400 font-black text-xs sm:text-sm leading-none">
            ★
          </div>
          <div className="border border-slate-300 bg-[#16A34A]" />
          <div className="border border-slate-300 bg-white" />

          {/* Row 3 */}
          <div className="border border-slate-300 bg-white" />
          <div className="border border-slate-300 bg-[#16A34A]" />
          <div className="border border-slate-300 bg-white" />

          {/* Row 4 */}
          <div className="border border-slate-300 bg-white" />
          <div className="border border-slate-300 bg-[#16A34A]" />
          <div className="border border-slate-300 bg-white" />

          {/* Row 5 */}
          <div className="border border-slate-300 bg-white" />
          <div className="border border-slate-300 bg-[#16A34A]" />
          <div className="border border-slate-300 bg-white" />
        </div>

        {/* ================= 3. GREEN HOME BASE (TOP-RIGHT 6x6) ================= */}
        <div className="col-span-6 row-span-6 bg-[#16A34A] p-1.5 sm:p-2.5 flex items-center justify-center border-l border-b sm:border-l-2 sm:border-b-2 border-slate-400">
          <div className="w-full h-full rounded-lg sm:rounded-xl bg-white shadow-inner p-1 grid grid-cols-2 grid-rows-2 items-center justify-items-center">
            {[0, 1, 2, 3].map((i) => renderHomePedestal('green', i))}
          </div>
        </div>

        {/* ================= 4. LEFT HORIZONTAL TRACK (COLS 1-6, ROWS 7-9) ================= */}
        <div className="col-span-6 row-span-3 grid grid-cols-6 grid-rows-3 border-r sm:border-r-2 border-slate-400">
          {/* Row 0 */}
          <div className="border border-slate-300 bg-white flex items-center justify-center font-black text-rose-600 text-xs sm:text-sm leading-none">
            →
          </div>
          <div className="border border-slate-300 bg-[#E11D48]" />
          <div className="border border-slate-300 bg-white" />
          <div className="border border-slate-300 bg-white" />
          <div className="border border-slate-300 bg-white" />
          <div className="border border-slate-300 bg-white" />

          {/* Row 1 */}
          <div className="border border-slate-300 bg-[#E11D48]" />
          <div className="border border-slate-300 bg-[#E11D48]" />
          <div className="border border-slate-300 bg-[#E11D48]" />
          <div className="border border-slate-300 bg-[#E11D48]" />
          <div className="border border-slate-300 bg-[#E11D48]" />
          <div className="border border-slate-300 bg-[#E11D48]" />

          {/* Row 2 */}
          <div className="border border-slate-300 bg-white" />
          <div className="border border-slate-300 bg-white" />
          <div className="border border-slate-300 bg-white flex items-center justify-center text-slate-400 font-black text-xs sm:text-sm leading-none">
            ★
          </div>
          <div className="border border-slate-300 bg-white" />
          <div className="border border-slate-300 bg-white" />
          <div className="border border-slate-300 bg-white" />
        </div>

        {/* ================= 5. CENTER HOME TRIANGLES (COLS 7-9, ROWS 7-9) ================= */}
        <div className="col-span-3 row-span-3 relative overflow-hidden bg-slate-900 border border-slate-400">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <polygon points="0,0 100,0 50,50" fill="#16A34A" />
            <polygon points="100,0 100,100 50,50" fill="#EAB308" />
            <polygon points="100,100 0,100 50,50" fill="#2563EB" />
            <polygon points="0,100 0,0 50,50" fill="#E11D48" />
            <line x1="0" y1="0" x2="100" y2="100" stroke="#FFFFFF" strokeWidth="1.2" />
            <line x1="100" y1="0" x2="0" y2="100" stroke="#FFFFFF" strokeWidth="1.2" />
          </svg>
        </div>

        {/* ================= 6. RIGHT HORIZONTAL TRACK (COLS 10-15, ROWS 7-9) ================= */}
        <div className="col-span-6 row-span-3 grid grid-cols-6 grid-rows-3 border-l sm:border-l-2 border-slate-400">
          {/* Row 0 */}
          <div className="border border-slate-300 bg-white" />
          <div className="border border-slate-300 bg-white" />
          <div className="border border-slate-300 bg-white" />
          <div className="border border-slate-300 bg-white flex items-center justify-center text-slate-400 font-black text-xs sm:text-sm leading-none">
            ★
          </div>
          <div className="border border-slate-300 bg-white" />
          <div className="border border-slate-300 bg-white" />

          {/* Row 1 */}
          <div className="border border-slate-300 bg-[#EAB308]" />
          <div className="border border-slate-300 bg-[#EAB308]" />
          <div className="border border-slate-300 bg-[#EAB308]" />
          <div className="border border-slate-300 bg-[#EAB308]" />
          <div className="border border-slate-300 bg-[#EAB308]" />
          <div className="border border-slate-300 bg-white flex items-center justify-center font-black text-amber-500 text-xs sm:text-sm leading-none">
            ←
          </div>

          {/* Row 2 */}
          <div className="border border-slate-300 bg-white" />
          <div className="border border-slate-300 bg-white" />
          <div className="border border-slate-300 bg-white" />
          <div className="border border-slate-300 bg-white" />
          <div className="border border-slate-300 bg-[#EAB308]" />
          <div className="border border-slate-300 bg-white" />
        </div>

        {/* ================= 7. BLUE HOME BASE (BOTTOM-LEFT 6x6) ================= */}
        <div className="col-span-6 row-span-6 bg-[#2563EB] p-1.5 sm:p-2.5 flex items-center justify-center border-r border-t sm:border-r-2 sm:border-t-2 border-slate-400">
          <div className="w-full h-full rounded-lg sm:rounded-xl bg-white shadow-inner p-1 grid grid-cols-2 grid-rows-2 items-center justify-items-center">
            {[0, 1, 2, 3].map((i) => renderHomePedestal('blue', i))}
          </div>
        </div>

        {/* ================= 8. BOTTOM VERTICAL TRACK (COLS 7-9, ROWS 10-15) ================= */}
        <div className="col-span-3 row-span-6 grid grid-cols-3 grid-rows-6 border-t sm:border-t-2 border-slate-400">
          {/* Row 0 */}
          <div className="border border-slate-300 bg-white" />
          <div className="border border-slate-300 bg-[#2563EB]" />
          <div className="border border-slate-300 bg-white" />

          {/* Row 1 */}
          <div className="border border-slate-300 bg-white" />
          <div className="border border-slate-300 bg-[#2563EB]" />
          <div className="border border-slate-300 bg-white" />

          {/* Row 2 */}
          <div className="border border-slate-300 bg-white" />
          <div className="border border-slate-300 bg-[#2563EB]" />
          <div className="border border-slate-300 bg-white" />

          {/* Row 3 */}
          <div className="border border-slate-300 bg-white" />
          <div className="border border-slate-300 bg-[#2563EB]" />
          <div className="border border-slate-300 bg-white flex items-center justify-center text-slate-400 font-black text-xs sm:text-sm leading-none">
            ★
          </div>

          {/* Row 4 */}
          <div className="border border-slate-300 bg-[#2563EB]" />
          <div className="border border-slate-300 bg-[#2563EB]" />
          <div className="border border-slate-300 bg-white" />

          {/* Row 5 */}
          <div className="border border-slate-300 bg-white" />
          <div className="border border-slate-300 bg-white flex items-center justify-center font-black text-blue-600 text-xs sm:text-sm leading-none">
            ↑
          </div>
          <div className="border border-slate-300 bg-white" />
        </div>

        {/* ================= 9. YELLOW HOME BASE (BOTTOM-RIGHT 6x6) ================= */}
        <div className="col-span-6 row-span-6 bg-[#EAB308] p-1.5 sm:p-2.5 flex items-center justify-center border-l border-t sm:border-l-2 sm:border-t-2 border-slate-400">
          <div className="w-full h-full rounded-lg sm:rounded-xl bg-white shadow-inner p-1 grid grid-cols-2 grid-rows-2 items-center justify-items-center">
            {[0, 1, 2, 3].map((i) => renderHomePedestal('yellow', i))}
          </div>
        </div>

      </div>
    </div>
  );
};
