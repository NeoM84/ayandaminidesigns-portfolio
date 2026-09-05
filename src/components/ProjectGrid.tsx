import React from 'react';
import { motion } from 'motion/react';
import { Play } from 'lucide-react';
import { selectedWorkSections, videoShowcaseData } from '../data/selectedWork';
import { useCursor } from '../context/CursorContext';

export const ProjectGrid: React.FC = () => {
  const { setCursorVariant, resetCursor } = useCursor();

  return (
    <section id="work" className="py-16 md:py-28 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="border-b border-[#ff751f] pb-6 mb-10">
        <div className="caps flex items-center gap-2 text-[#ff5100] mb-2">
          <span className="w-2 h-2 rounded-full bg-[#ff5100]" />
          <span>Portfolio</span>
        </div>
        <h2 className="serif text-4xl sm:text-5xl lg:text-6xl font-black italic text-[#111111] tracking-tight">
          Selected Work
        </h2>
      </div>

      {/* Editorial View: Sections with item grids */}
      <motion.div
        key="editorial-sections"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="space-y-20 md:space-y-28"
      >
          {selectedWorkSections.map((section) => (
            <div key={section.id}>
              <div className="flex items-baseline gap-4 mb-8 pb-4 border-b border-[#ff751f]/20">
                <span className="serif text-xl font-bold text-[#ff751f]">
                  {section.sectionNumber}
                </span>
                <div>
                  <h3 className="serif text-2xl sm:text-3xl font-bold text-[#111111] tracking-tight">
                    {section.heading}
                  </h3>
                  {section.tagline && (
                    <p className="text-xs sm:text-sm text-[#6F6F6F] font-light mt-1">
                      {section.tagline}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {section.items.map((item) => (
                  <div
                    key={item.id}
                    onMouseEnter={() => setCursorVariant('project', 'VIEW')}
                    onMouseLeave={resetCursor}
                    className="group"
                  >
                    <div
                      className={`relative overflow-hidden border border-[#ff751f]/30 ${
                        item.aspectRatio === 'square'
                          ? 'aspect-square'
                          : item.aspectRatio === 'landscape'
                          ? 'aspect-[4/3]'
                          : item.aspectRatio === 'tall'
                          ? 'aspect-[3/5]'
                          : item.aspectRatio === 'banner'
                          ? 'aspect-[16/5]'
                          : item.aspectRatio === 'widescreen'
                          ? 'aspect-video'
                          : 'aspect-[4/5]'

                      }`}
                    >
                      <img
                        src={item.imageUrl}
                        alt={item.altText}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <div className="mt-3">
                      <h4 className="serif text-lg font-bold text-[#111111] group-hover:text-[#ff5100] transition-colors">
                        {item.title}
                      </h4>
                      {item.meta && (
                        <p className="caps text-[9px] text-[#ff5100] font-semibold mt-1">
                          {item.meta}
                        </p>
                      )}
                      <p className="text-xs text-[#6F6F6F] font-light mt-1.5 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
      </motion.div>

      {/* Video Showcase Reel */}
      <div className="mt-20 md:mt-28 pt-12 border-t border-[#ff751f]/30">
        <a
          href={videoShowcaseData.videoUrl}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setCursorVariant('project', 'PLAY')}
          onMouseLeave={resetCursor}
          className="relative overflow-hidden border border-[#ff751f] aspect-video group block"
        >
          <img
            src={videoShowcaseData.thumbnailUrl}
            alt={videoShowcaseData.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/80 via-[#111111]/20 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center group-hover:bg-[#ff5100] group-hover:scale-110 transition-all">
              <Play className="w-6 h-6 text-[#111111] group-hover:text-white ml-0.5" fill="currentColor" />
            </div>
          </div>
          <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 text-white">
            <p className="caps text-[10px] text-white/80 mb-1">
              {videoShowcaseData.format} · {videoShowcaseData.duration}
            </p>
            <h3 className="font-display text-2xl md:text-3xl">{videoShowcaseData.title}</h3>
            <p className="text-xs md:text-sm text-white/70 mt-1 max-w-lg font-light">
              {videoShowcaseData.description}
            </p>
          </div>
        </a>
      </div>
    </section>
  );
};
