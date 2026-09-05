import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { useCursor } from '../context/CursorContext';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenProject?: (projectId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  const { setCursorVariant, resetCursor } = useCursor();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'work', label: 'Selected Work' },
    { id: 'skills', label: 'Skills' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <>
      <header
        id="main-navigation"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-md border-b border-[#ff751f]/30 py-3.5 shadow-sm'
            : 'bg-transparent py-6 md:py-8'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo & Brand Name */}
          <button
            id="brand-logo-btn"
            onClick={() => handleNavClick('hero')}
            onMouseEnter={() => setCursorVariant('button', 'HOME')}
            onMouseLeave={resetCursor}
            className="group text-left focus:outline-none flex items-center gap-3"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5100] group-hover:scale-125 transition-transform"></span>
            <div>
              <span className="serif text-xl md:text-2xl font-bold tracking-tight text-[#111111] group-hover:text-[#ff5100] transition-colors block">
                Ayanda Mini
              </span>
              <span className="caps text-[9px] text-[#ff751f] block font-semibold">
                Multimedia Designer
              </span>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  id={`nav-link-${link.id}`}
                  onClick={() => handleNavClick(link.id)}
                  onMouseEnter={() => setCursorVariant('link')}
                  onMouseLeave={resetCursor}
                  className={`caps transition-colors relative py-1 focus:outline-none ${
                    isActive ? 'text-[#ff5100] font-bold' : 'text-[#111111] hover:text-[#ff5100]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#ff751f]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}

            {/* Let's Talk CTA */}
            <button
              id="nav-cta-btn"
              onClick={() => handleNavClick('contact')}
              onMouseEnter={() => setCursorVariant('button', 'START')}
              onMouseLeave={resetCursor}
              className="ml-2 accent-pill caps cursor-pointer hover:bg-[#111111] active:scale-95 shadow-xs"
            >
              <span>Get in Touch</span>
            </button>
          </nav>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-3 md:hidden">
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-full border border-[#ff751f] text-[#111111] hover:bg-[#ff751f] hover:text-white transition-colors focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Fullscreen Animated Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-nav-drawer"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white flex flex-col justify-between p-8 pt-28 md:hidden border-b-4 border-[#ff751f]"
          >
            <div className="space-y-6">
              <div className="text-xs uppercase tracking-widest text-[#ff751f] font-semibold pb-2 border-b border-[#ff751f]/20 flex items-center justify-between">
                <span>Navigation Index</span>
                <span className="flex items-center gap-1.5 text-[#ff5100]">
                  <Sparkles className="w-3 h-3" /> Ayanda Mini
                </span>
              </div>

              <div className="flex flex-col gap-5">
                {navLinks.map((link, idx) => (
                  <motion.button
                    key={link.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.08 }}
                    onClick={() => handleNavClick(link.id)}
                    className="text-left font-display text-4xl text-[#111111] hover:text-[#ff5100] active:text-[#ff751f] transition-colors flex items-center justify-between group"
                  >
                    <span>{link.label}</span>
                    <span className="text-sm font-sans text-[#ff751f] group-hover:translate-x-1 transition-transform">
                      0{idx + 1} ↗
                    </span>
                  </motion.button>
                ))}
              </div>
            </div>

            <div className="space-y-4 pt-6 border-t border-[#ff751f]/20">
              <div className="flex items-center gap-2 text-xs text-[#ff5100]">
                <span className="w-2 h-2 rounded-full bg-[#ff751f] animate-ping" />
                <span>Currently taking on brand identities & digital directions</span>
              </div>
              <button
                onClick={() => handleNavClick('contact')}
                className="w-full bg-[#ff5100] text-white py-4 rounded-full font-medium tracking-wider uppercase text-sm border border-[#ff751f] flex items-center justify-center gap-2 shadow-md active:scale-98 hover:bg-[#111111] transition-colors"
              >
                <span>Initiate Project Inquiry</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
