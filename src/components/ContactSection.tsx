import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Copy, Check, Sparkles, Send, Mail, MapPin, Phone } from 'lucide-react';
import { useCursor } from '../context/CursorContext';

const emailAddress = 'ayandamindesigns@gmail.com';

const socialLinks = [
  { name: 'Instagram', handle: '@ayandamini.studio', url: 'https://instagram.com' },
  { name: 'LinkedIn', handle: 'ayanda-mini', url: 'https://linkedin.com' },
];

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const { setCursorVariant: setContextCursorVariant } = useCursor();

  const setCursorVariant = (variant: string, label?: string) => {
    const cursorState = { variant } as any;
    if (label) (cursorState as any).label = label;
    setContextCursorVariant(cursorState);
  };

  const resetCursor = () => {
    setContextCursorVariant({ variant: 'default' } as any);
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#ff751f]/40">
      {/* Editorial Giant Statement */}
      <div className="mb-8 md:mb-10">
        <h2 className="serif text-4xl sm:text-6xl lg:text-8xl font-black text-[#111111] leading-[0.9] tracking-tight">
          Let's Make <br />
          <span className="text-[#ff751f] italic font-normal">Something</span> <br />
          <span className="text-[#ff5100] underline decoration-[#ff751f] decoration-solid decoration-2 underline-offset-8">
            Memorable.
          </span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="lg:col-span-5 lg:col-start-8 space-y-8">
          {/* Direct Email Card with Quick Copy */}
          <div className="p-6 bg-[#ff5100]/5 border border-[#ff751f] space-y-3">
            <span className="caps text-[10px] text-[#ff751f] font-bold block">
              Contact Me Directly:
            </span>
            <div className="flex items-center justify-between gap-3">
              <a
                href={`mailto:${emailAddress}`}
                className="serif text-xl sm:text-2xl font-bold text-[#111111] hover:text-[#ff5100] transition-colors truncate"
              >
                {emailAddress}
              </a>
              <button
                id="copy-email-btn"
                onClick={handleCopyEmail}
                onMouseEnter={() => setCursorVariant('button', 'COPY')}
                onMouseLeave={resetCursor}
                className="shrink-0 p-2.5 rounded-full border border-[#ff751f] text-[#111111] hover:bg-[#ff5100] hover:text-white transition-all active:scale-95"
                title="Copy Email Address"
              >
                {copied ? <Check className="w-4 h-4 text-[#ff751f]" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
            {copied && (
              <p className="caps text-[10px] text-[#ff751f] font-medium">
                ✓ Email copied to clipboard!
              </p>
            )}
          </div>

          {/* Social Channels List */}
          <div className="space-y-3 pt-4 border-t border-[#ff751f]/30">
            <span className="caps text-[10px] text-[#6F6F6F]">
              Social & Digital Channels:
            </span>
            <div className="divide-y divide-[#ff751f]/20">
              {socialLinks.map((social, sIdx) => (
                <a
                  key={sIdx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => setCursorVariant('link')}
                  onMouseLeave={resetCursor}
                  className="py-2.5 flex items-center justify-between text-xs sm:text-sm text-[#111111] hover:text-[#ff5100] group transition-colors"
                >
                  <span className="font-medium">{social.name}</span>
                  <span className="caps text-[10px] text-[#6F6F6F] group-hover:text-[#ff751f] flex items-center gap-1">
                    {social.handle} <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
