import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Wrench, CheckCircle2, Terminal, ArrowUpRight } from 'lucide-react';
import { skillsList, toolsList } from '../data/skills';
import { useCursor } from '../context/CursorContext';

export const SkillsSection: React.FC = () => {
  const { setCursorVariant, resetCursor } = useCursor();

  return (
    <section
      id="skills"
      className="py-20 md:py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#ff751f]/40"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 md:pb-16">
        <div className="space-y-2">
          <h2 className="serif text-4xl sm:text-5xl lg:text-6xl font-black italic text-[#111111] tracking-tight">
            Skills & Tools
          </h2>
        </div>
        <p className="text-xs md:text-sm text-[#6F6F6F] max-w-md font-light leading-relaxed">
          A balanced synthesis of strategic design methodologies, storytelling disciplines, and industry-standard creative software.
        </p>
      </div>

      {/* Two Blocks Grid: Skills Block & Tools Block */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
        
        {/* Block 1: Skills */}
        <motion.div
          id="skills-block"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white border border-[#ff751f]/40 p-6 sm:p-8 md:p-10 flex flex-col justify-between relative group hover:border-[#ff5100] transition-colors duration-300 shadow-sm"
        >
          {/* Top Label & Block Header */}
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-[#ff751f]/30">
              <div className="flex items-center gap-3">
                <span className="serif text-xl font-bold text-[#ff751f]">01</span>
                <h3 className="serif text-2xl sm:text-3xl font-bold text-[#111111] tracking-tight">
                  Skills
                </h3>
              </div>
              <span className="caps text-[9px] text-[#ff5100] font-bold px-2.5 py-1 bg-[#ff5100]/10 border border-[#ff751f]/30">
                10 Competencies
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#6F6F6F] font-light mt-4 mb-6 leading-relaxed">
              Strategic capabilities honed across multidisciplinary visual design, interface prototyping, narrative development, and collaborative production.
            </p>

            {/* Skills Items Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {skillsList.map((skill, index) => (
                <div
                  key={index}
                  id={`skill-item-${index}`}
                  onMouseEnter={() => setCursorVariant('button')}
                  onMouseLeave={resetCursor}
                  className="flex items-center gap-3 p-3 bg-[#ff5100]/[0.03] border border-[#ff751f]/20 hover:border-[#ff5100] hover:bg-white transition-all duration-200 group/item cursor-default"
                >
                  <span className="text-[10px] font-mono text-[#ff751f] font-semibold">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="flex items-center justify-between w-full gap-2">
                    <span className="text-xs sm:text-sm text-[#111111] font-medium group-hover/item:text-[#ff5100] transition-colors">
                      {skill}
                    </span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#ff751f] opacity-40 group-hover/item:opacity-100 group-hover/item:text-[#ff5100] transition-all shrink-0" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Accent Note */}
          <div className="mt-8 pt-4 border-t border-[#ff751f]/20 flex items-center justify-between text-[10px] text-[#6F6F6F]">
            <span className="caps font-semibold text-[#111111]">Applied Across Digital & Print</span>
          </div>
        </motion.div>

        {/* Block 2: Tools */}
        <motion.div
          id="tools-block"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white border border-[#ff751f]/40 p-6 sm:p-8 md:p-10 flex flex-col justify-between relative group hover:border-[#ff5100] transition-colors duration-300 shadow-sm"
        >
          {/* Top Label & Block Header */}
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-[#ff751f]/30">
              <div className="flex items-center gap-3">
                <span className="serif text-xl font-bold text-[#ff751f]">02</span>
                <h3 className="serif text-2xl sm:text-3xl font-bold text-[#111111] tracking-tight">
                  Tools
                </h3>
              </div>
              <span className="caps text-[9px] text-[#ff5100] font-bold px-2.5 py-1 bg-[#ff5100]/10 border border-[#ff751f]/30">
                10 Applications
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#6F6F6F] font-light mt-4 mb-6 leading-relaxed">
              Proficient software ecosystem utilized for motion editing, vector drafting, UI/UX prototyping, publication layouts, and dynamic presentations.
            </p>

            {/* Tools Items Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {toolsList.map((tool, index) => (
                <div
                  key={index}
                  id={`tool-item-${index}`}
                  onMouseEnter={() => setCursorVariant('button')}
                  onMouseLeave={resetCursor}
                  className="flex items-center gap-3 p-3 bg-[#ff5100]/[0.03] border border-[#ff751f]/20 hover:border-[#ff5100] hover:bg-white transition-all duration-200 group/item cursor-default"
                >
                  <span className="text-[10px] font-mono text-[#ff751f] font-semibold">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="flex items-center justify-between w-full gap-2">
                    <span className="text-xs sm:text-sm text-[#111111] font-medium group-hover/item:text-[#ff5100] transition-colors">
                      {tool}
                    </span>
                    <Wrench className="w-3.5 h-3.5 text-[#ff751f] opacity-40 group-hover/item:opacity-100 group-hover/item:text-[#ff5100] transition-all shrink-0" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Accent Note */}
          <div className="mt-8 pt-4 border-t border-[#ff751f]/20 flex items-center justify-between text-[10px] text-[#6F6F6F]">
            <span className="caps font-semibold text-[#111111]">Daily Creative Workflow</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
