import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, ArrowDown, Sparkles } from 'lucide-react';
import { useCursor } from '../context/CursorContext';
import { selectedWorkSections } from '../data/selectedWork';


interface HeroProps {
  onExploreClick: () => void;
  onSelectFeatured?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick }) => {
  const { setCursorVariant, resetCursor } = useCursor();
  const [time, setTime] = useState<string>('');
  const featured = selectedWorkSections[0]; // Ethereal Bloom / featured project

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Africa/Johannesburg',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      };
      setTime(new Intl.DateTimeFormat('en-GB', options).format(now));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] md:min-h-screen flex flex-col justify-between pt-28 md:pt-36 pb-12 px-6 md:px-12 max-w-7xl mx-auto"
    >
      {/* Top Editorial Status & Metadata Row */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="flex flex-wrap items-center justify-between gap-4 border-b border-[#ff751f]/40 pb-4 text-xs tracking-wider uppercase"
      >
        <div className="flex items-center gap-3">
          <span className="caps flex items-center gap-2 text-[#111111] text-[10px] sm:text-xs">
            <span className="w-2 h-2 rounded-full bg-[#ff5100] animate-pulse"></span>
            Ayanda Mini Designs
          </span>
          <span className="hidden sm:inline-block text-[#6F6F6F] text-[11px] font-mono">
            / Johannesburg
          </span>
        </div>
      </motion.div>

      {/* Main Grid Composition (12-column layout matching Editorial Aesthetic) */}
      <div className="flex-grow grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center py-10 md:py-16 relative">
        {/* Left Column: Monumental Headline, Subtitle, & Actions */}
        <div className="lg:col-span-8 relative z-10 space-y-6 md:space-y-8">
          <h1 className="serif reveal-text text-[14vw] sm:text-[11vw] lg:text-[98px] xl:text-[118px] font-bold italic mb-4 leading-[0.88] text-[#111111] tracking-[0.06em]">
            Creativity <br />
            <span className="text-[#ff5100] not-italic font-bold block mt-1 tracking-[0.08em]">
              Mastering
            </span>
          </h1>

          <p className="max-w-xl text-base sm:text-lg md:text-xl leading-relaxed text-[#6F6F6F] font-light">
          I'm Ayanda, based in Johannesburg, I'm a multimedia designer working across video, photography, UX/UI, and graphic design, helping brands say more without saying more.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-6">
            <button
              id="hero-explore-portfolio-btn"
              onClick={onExploreClick}
              onMouseEnter={() => setCursorVariant('button', 'EXPLORE')}
              onMouseLeave={resetCursor}
              className="accent-pill caps cursor-pointer hover:bg-[#111111] active:scale-95 shadow-xs"
            >
              Explore Portfolio
            </button>
          </div>
        </div>

        {/* Right Column: Featured Showcase */}
        <div className="lg:col-span-4 relative mt-6 lg:mt-0">
          {/* Featured Card Wrapper */}
          <div className="relative z-10 p-4 bg-white border border-[#ff751f]/40 shadow-xl group">
            {/* Image Container with Editorial Aspect Ratio */}
            <div
              className="project-img w-full shadow-md relative overflow-hidden cursor-pointer"
              onClick={onExploreClick}
              onMouseEnter={() => setCursorVariant('project', 'VIEW')}
              onMouseLeave={resetCursor}
            >
              <img
                src="assets/CustomAwardDesignMain.jpg"
                alt="Custom Award Design Main"
                className="w-full h-full object-cover object-center filter grayscale-[15%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
                <span className="bg-white text-black caps px-5 py-3 rounded-full shadow-lg">
                  View Work
                </span>
              </div>
            </div>

            {/* Project Title and Circular Arrow Badge */}
            <div className="mt-5 flex justify-between items-start gap-4">
              <div>
                <h3 className="serif text-2xl md:text-3xl font-bold italic text-[#111111] group-hover:text-[#ff5100] transition-colors leading-tight">
                  Custom Award Design
                </h3>
              </div>

              <button
                onClick={onExploreClick}
                aria-label="View featured project"
                className="w-12 h-12 shrink-0 rounded-full border border-[#ff751f] flex items-center justify-center group-hover:bg-[#ff5100] group-hover:border-[#ff5100] group-hover:text-white transition-all text-[#ff751f]"
              >
                <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer / Bottom Strip */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="pt-6 border-t border-[#ff751f]/40 flex flex-col md:flex-row justify-between items-start md:items-end gap-6"
      >
        <div className="flex flex-wrap gap-8 md:gap-16">
          <div>
            <a
              href="mailto:ayandaminidesigns@gmail.com"
              className="serif text-base sm:text-lg font-bold text-[#111111] hover:text-[#ff5100] transition-colors"
            >
              ayandaminidesigns@gmail.com
            </a>
          </div>

          <div>
            <p className="serif text-base sm:text-lg font-bold text-[#111111]">
              Johannesburg
            </p>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <button
            onClick={onExploreClick}
            className="inline-flex items-center gap-2 caps text-[10px] text-[#ff5100] font-bold hover:text-[#111111] transition-colors"
          >
            <span>Scroll to Index</span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
          </button>
        </div>
      </motion.div>
    </section>
  );
};

