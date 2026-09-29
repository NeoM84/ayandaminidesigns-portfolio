import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Award, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { aboutData } from '../data/about';
import { useCursor } from '../context/CursorContext';

export const AboutSection: React.FC = () => {
  const { setCursorVariant, resetCursor } = useCursor();

  return (
    <section id="about" className="py-20 md:py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#ff751f]/40">
      {/* Editorial Giant Statement */}
      <div className="mb-16 md:mb-24">
        <h2 className="serif text-3xl sm:text-5xl lg:text-6xl font-black text-[#111111] leading-[1.08] tracking-tight">
          "Giving ideas a{' '}
          <span className="text-[#ff751f] italic font-normal">visual</span> voice{' '}
          <span className="text-[#ff5100] underline decoration-[#ff751f] decoration-solid decoration-2 underline-offset-8">
            through design.
          </span>"
        </h2>
      </div>

      {/* Asymmetric 2-Column Composition */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Portrait & Quick Stats */}
        <div className="lg:col-span-5 space-y-8">
          {/* Portrait Frame with Graphic Border */}
          <div
            className="relative border border-[#ff751f] bg-white overflow-hidden group shadow-lg"
            onMouseEnter={() => setCursorVariant('project', 'AYANDA')}
            onMouseLeave={resetCursor}
          >
            <div className="aspect-[4/5] w-full overflow-hidden">
              <img
                src="assets/In Progress Picture.jpg"
                alt="In Progress Picture"
                className="w-full h-full object-cover filter grayscale-[15%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
              />
            </div>

            {/* Corner Badge */}
            <div className="absolute bottom-4 left-4 right-4 bg-white border border-[#ff751f] p-4 text-[#111111] shadow-md">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="serif text-lg font-bold">Ayanda Mini</h4>
                  <p className="caps text-[9px] text-[#ff5100] mt-0.5">Multimedia Designer</p>
                </div>
                <span className="caps text-[9px] text-[#ff751f]"> JHB</span>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-4 pt-6 border-t border-[#ff751f]/30">
            <div className="flex items-center justify-between">
              <h3 className="serif text-2xl font-bold text-[#111111]">EDUCATION</h3>
            </div>

            <div className="divide-y divide-[#ff751f]/20">
              {aboutData.education.map((edu, idx) => (
                <div
                  key={idx}
                  className="py-3 flex items-center justify-between text-xs sm:text-sm hover:bg-brand-accent/5 px-2 transition-colors"
                >
                  <span className="font-semibold text-brand-primary">{edu.degree}</span>
                  <div className="text-right caps text-[10px] text-brand-accent shrink-0">
                    {edu.institutionname} • {edu.year}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Narrative, Philosophy & Awards */}
        <div className="lg:col-span-7 space-y-12">
          {/* Biography Prose */}
          <div className="space-y-6 text-base sm:text-lg text-[#111111] font-normal leading-relaxed">
            <p className="serif text-xl sm:text-2xl text-[#ff5100] italic font-bold">
              {aboutData.bioLead}
            </p>
            {aboutData.bioExtended.map((paragraph, pIdx) => (
              <p key={pIdx} className="text-[#6F6F6F] text-sm sm:text-base leading-relaxed font-light">
                {paragraph}
              </p>
            ))}
          </div>
          {/* Work Experience */}
          <div className="space-y-4 pt-6 border-t border-[#ff751f]/30">
          <div className="flex items-center justify-between">
          <h3 className="serif text-2xl font-bold text-[#111111]">WORK EXPERIENCE</h3>
              </div>

            <div className="divide-y divide-[#ff751f]/20">
              {aboutData.workexperience.map((job, jIdx) => (
              <div
                 key={jIdx}
                 className="py-3 flex flex-col gap-1 text-xs sm:text-sm hover:bg-brand-accent/5 px-2 transition-colors"
                >
                 <span className="font-semibold text-brand-primary">{job.role}</span>
              <div className="caps text-[10px] text-brand-accent">
           {job.company} • {job.year}
      </div>
    </div>
        ))}
        </div>
      </div>
    </div>
  </div>
    </section>
  );
};
