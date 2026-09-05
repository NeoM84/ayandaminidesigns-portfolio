import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'motion/react';
import { useCursor } from '../context/CursorContext';

export const CustomCursor: React.FC = () => {
  const { cursorVariant, cursorText } = useCursor();
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth springs for cursor positioning
  const springConfig = { damping: 25, stiffness: 250, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Detect touch device
    const checkTouch = () => {
      setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };
    checkTouch();

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible, mouseX, mouseY]);

  if (isTouchDevice || !isVisible || cursorVariant === 'hidden') {
    return null;
  }

  // Variant configurations
  const isProject = cursorVariant === 'project';
  const isButton = cursorVariant === 'button';
  const isLink = cursorVariant === 'link';
  const isText = cursorVariant === 'text';

  const size = isProject ? 64 : isButton ? 26 : isLink ? 20 : isText ? 14 : 10;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Outer Spring Follower */}
      <motion.div
        id="custom-cursor-follower"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: size,
          height: size,
          backgroundColor: isProject 
            ? '#ff5100' 
            : isButton 
            ? 'rgba(255, 117, 31, 0.15)' 
            : isLink 
            ? 'rgba(255, 81, 0, 0.15)' 
            : 'transparent',
          borderColor: isProject ? '#ff751f' : '#ff751f',
          borderWidth: isProject ? '1.5px' : isButton ? '1px' : isLink ? '1px' : '1px',
          scale: 1,
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 300 }}
        className="rounded-full flex items-center justify-center text-center backdrop-blur-[1px] shadow-sm select-none"
      >
        <AnimatePresence>
          {isProject && (
            <motion.span
              key="cursor-text"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="text-white text-[8px] font-bold tracking-wider uppercase px-1 leading-tight select-none font-sans"
            >
              {cursorText || 'VIEW'}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Center Precise Dot (only for default / non-project) */}
      {!isProject && (
        <motion.div
          id="custom-cursor-dot"
          style={{
            x: mouseX,
            y: mouseY,
            translateX: '-50%',
            translateY: '-50%',
          }}
          className="w-1 h-1 rounded-full bg-[#ff5100] fixed pointer-events-none"
        />
      )}
    </div>
  );
};
