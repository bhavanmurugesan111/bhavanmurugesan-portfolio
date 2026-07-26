import React, { useState, useEffect } from 'react';
import { ArrowUp, Github, Linkedin, Twitter, Mail, Sparkles, Terminal, Code2 } from 'lucide-react';
import { personalDetails } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const [uptimeSeconds, setUptimeSeconds] = useState(14820);

  useEffect(() => {
    const timer = setInterval(() => {
      setUptimeSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatUptime = (totalSeconds: number) => {
    const hrs = Math.floor(totalSeconds / 3600);
    const mins = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;
    return `${hrs}h ${mins}m ${secs}s`;
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-indigo-900/30 pt-12 pb-8 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-slate-800 pb-8">
          {/* Brand & Tag */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 font-mono text-sm font-bold text-white">
              <span className="p-1.5 rounded bg-slate-900 border border-indigo-500/40 text-cyan-400">
                BM
              </span>
              <span>{personalDetails.fullName}</span>
              <span className="text-xs text-indigo-400 font-normal">// PORTFOLIO OS</span>
            </div>

            <p className="text-slate-400 text-xs font-sans max-w-md">
              {personalDetails.tagline}
            </p>
          </div>

          {/* Uptime & Status Counter */}
          <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 font-mono text-xs flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-slate-300">SYS_STATUS: ONLINE</span>
            </div>
            <div className="text-slate-500">|</div>
            <div className="text-cyan-400">UPTIME: {formatUptime(uptimeSeconds)}</div>
          </div>
        </div>

        {/* Social Links & Connect */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-xs border-b border-slate-800 pb-6">
          <div className="space-y-1">
            <div className="text-slate-400 font-bold uppercase tracking-wider">CONNECT</div>
            <div className="text-slate-500 text-xs">
              {personalDetails.email}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={personalDetails.socials.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-2"
            >
              <Github className="w-4 h-4" />
              <span className="hidden sm:inline text-xs">GitHub</span>
            </a>
            <a
              href={personalDetails.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-2"
            >
              <Linkedin className="w-4 h-4" />
              <span className="hidden sm:inline text-xs">LinkedIn</span>
            </a>
            <a
              href={personalDetails.socials.twitter}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-2"
            >
              <Twitter className="w-4 h-4" />
              <span className="hidden sm:inline text-xs">Twitter</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar & Back To Top */}
        <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © {new Date().getFullYear()} Bhavan Murugesan. {personalDetails.professionalTitle}. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-cyan-300 transition-all"
          >
            <span>BACK_TO_TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
