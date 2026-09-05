import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CursorProvider } from './context/CursorContext';
import { CustomCursor } from './components/CustomCursor';
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectGrid } from './components/ProjectGrid';
import { SkillsSection } from './components/SkillsSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('hero');

  // Track active section for navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'work', 'skills', 'about', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <CursorProvider>
      <div className="min-h-screen bg-white text-[#111111] selection:bg-[#ff5100] selection:text-white font-sans antialiased relative">
        {/* Custom Desktop Follower Cursor */}
        <CustomCursor />

        {/* Initial Loading Screen Sequence */}
        {isLoading && (
          <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />
        )}

        {/* Global Minimal Navigation */}
        <Navbar
          activeSection={activeSection}
          onNavigate={handleNavigate}
        />

        {/* Main Content Area */}
        <main className="w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key="main-portfolio-content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              {/* 1. Hero Section */}
              <Hero onExploreClick={() => handleNavigate('work')} />

              {/* 2. Featured Projects / Work Section */}
              <ProjectGrid />

              {/* 3. Skills & Tools Section */}
              <SkillsSection />

              {/* 4. About & Ethos Section */}
              <AboutSection />

              {/* 5. Contact Section */}
              <ContactSection />
            </motion.div>
          </AnimatePresence>
        </main>

        {/* Editorial Footer */}
        <Footer />
      </div>
    </CursorProvider>
  );
}
