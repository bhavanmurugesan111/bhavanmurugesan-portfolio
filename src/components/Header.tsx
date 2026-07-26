import React, { useState, useEffect } from 'react';
import { Terminal, Command, FileText, Send, Menu, X, Sparkles, Code2 } from 'lucide-react';
import { personalDetails } from '../data/portfolioData';

interface HeaderProps {
  onOpenCommandPalette: () => void;
  onOpenResumeModal: () => void;
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenCommandPalette,
  onOpenResumeModal,
  activeSection
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'hero', label: 'HERO' },
    { id: 'about', label: 'ABOUT' },
    { id: 'skills', label: 'SKILLS' },
    { id: 'experience', label: 'EXPERIENCE' },
    { id: 'projects', label: 'PROJECTS' },
    { id: 'services', label: 'SERVICES' },
    { id: 'contact', label: 'CONTACT' }
  ];

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/85 backdrop-blur-md border-b border-indigo-900/30 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo / Terminal Tag */}
        <div
          onClick={() => scrollToSection('hero')}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="relative flex items-center justify-center w-10 h-10 rounded-lg bg-slate-900 border border-indigo-500/40 text-cyan-400 font-mono font-bold text-lg shadow-[0_0_15px_rgba(99,102,241,0.2)] group-hover:border-cyan-400 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-300 to-violet-400">
              BM
            </span>
            <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-cyan-400 rounded-full animate-ping" />
            <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-cyan-400 rounded-full" />
          </div>

          <div className="flex flex-col">
            <span className="font-mono text-sm font-bold text-slate-100 flex items-center gap-1.5 group-hover:text-cyan-300 transition-colors">
              BHAVAN.AI <span className="text-xs text-indigo-400 font-mono">// DEV</span>
            </span>
            <span className="text-[10px] font-mono text-slate-400 flex items-center gap-1">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              SYS_ONLINE
            </span>
          </div>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden xl:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-sm">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`px-3 py-1.5 rounded-full font-mono text-xs transition-all ${
                  isActive
                    ? 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold shadow-[0_0_12px_rgba(99,102,241,0.5)]'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Quick Command Palette Button */}
          <button
            onClick={onOpenCommandPalette}
            className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 border border-slate-800 text-xs text-slate-400 hover:text-cyan-300 transition-all font-mono group"
            title="Open Command Palette (Ctrl+K)"
          >
            <Command className="w-3.5 h-3.5 text-indigo-400 group-hover:text-cyan-400" />
            <span>CMD</span>
            <kbd className="px-1.5 py-0.5 text-[10px] bg-slate-950 text-slate-400 rounded border border-slate-800">
              Ctrl+K
            </kbd>
          </button>

          {/* View / Download Resume */}
          <button
            onClick={onOpenResumeModal}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-indigo-950/60 text-cyan-400 border border-indigo-500/40 hover:border-cyan-400 text-xs font-mono font-medium transition-all shadow-[0_0_15px_rgba(99,102,241,0.2)]"
          >
            <FileText className="w-3.5 h-3.5 text-cyan-400" />
            <span>RESUME</span>
          </button>

          {/* Hire Me CTA */}
          <button
            onClick={() => scrollToSection('contact')}
            className="hidden md:flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-indigo-500 via-violet-600 to-cyan-500 hover:from-indigo-600 hover:to-cyan-600 text-white text-xs font-mono font-semibold transition-all shadow-[0_0_20px_rgba(99,102,241,0.4)]"
          >
            <Send className="w-3.5 h-3.5" />
            <span>HIRE_ME</span>
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-slate-950/95 backdrop-blur-xl border-b border-indigo-900/40 px-4 pt-4 pb-6 mt-2 space-y-2 animate-in fade-in slide-in-from-top-4">
          <div className="grid grid-cols-2 gap-2 mb-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`px-3 py-2 rounded-lg font-mono text-xs text-left transition-all ${
                  activeSection === link.id
                    ? 'bg-indigo-600 text-white font-bold'
                    : 'bg-slate-900/80 text-slate-300 hover:bg-slate-800'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-2 pt-2 border-t border-slate-800">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCommandPalette();
              }}
              className="flex items-center justify-between px-3 py-2 rounded-lg bg-slate-900 text-slate-300 text-xs font-mono"
            >
              <span className="flex items-center gap-2">
                <Command className="w-4 h-4 text-cyan-400" /> Command Palette
              </span>
              <kbd className="px-1.5 py-0.5 text-[10px] bg-slate-950 text-slate-400 rounded">Ctrl+K</kbd>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                scrollToSection('contact');
              }}
              className="w-full py-2.5 rounded-lg bg-gradient-to-r from-indigo-500 to-cyan-500 text-white font-mono text-xs font-bold flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" /> CONTACT BHAVAN
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
