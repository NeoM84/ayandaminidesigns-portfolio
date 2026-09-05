import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [stage, setStage] = useState<'initial' | 'expand' | 'exit'>('initial');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Fast simulated editorial loader
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const increment = Math.floor(Math.random() * 20) + 12;
        return Math.min(100, prev + increment);
      });
    }, 90);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      const timer1 = setTimeout(() => setStage('expand'), 300);
      const timer2 = setTimeout(() => {
        setStage('exit');
        setTimeout(onLoadingComplete, 600);
      }, 900);

      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
      };
    }
  }, [progress, onLoadingComplete]);

  return (
    <AnimatePresence>
      {stage !== 'exit' && (
        <motion.div
          id="editorial-loader"
          initial={{ opacity: 1 }}
          exit={{ y: '-100%', transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-[10000] flex flex-col justify-between bg-white px-6 py-8 md:px-16 md:py-12 select-none border-b-4 border-[#ff751f]"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between text-xs tracking-widest uppercase text-[#ff5100] font-medium border-b border-[#ff751f]/20 pb-4">
            <span className="flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-[#ff751f] animate-ping" />
              AYANDA MINI DESIGNS
            </span>
            <span className="font-mono text-[#111111]">
              PORTFOLIO EDITION '26 — {progress}%
            </span>
          </div>

          {/* Center Graphic Typography */}
          <div className="my-auto text-center overflow-hidden py-10">
            <motion.div
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-2"
            >
              <div className="text-[12vw] md:text-[8vw] leading-[0.9] font-display text-[#111111] tracking-tighter">
                AYANDA
              </div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-xs md:text-sm uppercase tracking-[0.3em] text-[#ff5100] font-semibold"
              >
                Creative Direction & Visual Design
              </motion.div>
            </motion.div>

            {/* Graphic Loader Bar */}
            <div className="max-w-md mx-auto mt-8 h-[3px] bg-[#ff751f]/20 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-[#ff751f] to-[#ff5100]"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'easeOut' }}
              />
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex items-center justify-between text-xs text-[#6F6F6F] border-t border-[#ff751f]/20 pt-4">
            <span>JOHANNESBURG</span>
            <span className="uppercase tracking-widest text-[#ff751f] font-semibold">
              Curated Works
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
