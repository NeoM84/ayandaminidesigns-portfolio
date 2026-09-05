import React from 'react';
import { ArrowUp, Sparkles, Heart } from 'lucide-react';
import { useCursor } from '../context/CursorContext';

export const Footer: React.FC = () => {
  const { setCursorVariant, resetCursor } = useCursor();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-[#ff751f] text-[#111111] pt-16 pb-12 px-6 md:px-12 max-w-7xl mx-auto">
    
        <div className="md:col-span-3 flex flex-col items-start md:items-end justify-between">
          <span className="caps text-[9px] text-[#ff5100] font-bold block">
            Navigation
          </span>
          <button
            id="footer-back-to-top-btn"
            onClick={scrollToTop}
            onMouseEnter={() => setCursorVariant('button', 'TOP')}
            onMouseLeave={resetCursor}
            className="group inline-flex items-center gap-2 caps text-[10px] text-[#111111] hover:text-[#ff5100] py-2 px-4 border border-[#ff751f] bg-white transition-colors mt-4 md:mt-0 active:scale-95"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

      {/* Bottom Legal / Editorial Strip */}
      <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 caps text-[9px] text-[#6F6F6F]">
        <div className="flex items-center gap-2">
          <span>© {new Date().getFullYear()} Ayanda Mini Designs. All Rights Reserved.</span>
        </div>
      </div>
    </footer>
  );
};
