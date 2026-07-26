import React, { useState, useEffect } from 'react';
import {
  FileText,
  Send,
  Github,
  Linkedin,
  Twitter,
  Mail,
  Sparkles,
  Terminal,
  Code2,
  Cpu,
  ArrowDown,
  CheckCircle2,
  Download,
  User
} from 'lucide-react';
import { personalDetails } from '../data/portfolioData';

interface HeroProps {
  onOpenResumeModal: () => void;
  onOpenTerminal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResumeModal, onOpenTerminal }) => {
  const [typedTitle, setTypedTitle] = useState('');
  const [titleIndex, setTitleIndex] = useState(0);
  const titles = [
    'AI Prompt Engineer',
    'Full Stack Web Developer',
    'RAG Pipeline Architect',
    'LLM Integration Specialist'
  ];

  useEffect(() => {
    let currentText = titles[titleIndex];
    let charIdx = 0;
    const interval = setInterval(() => {
      setTypedTitle(currentText.substring(0, charIdx));
      charIdx++;
      if (charIdx > currentText.length) {
        clearInterval(interval);
        setTimeout(() => {
          setTitleIndex((prev) => (prev + 1) % titles.length);
        }, 1800);
      }
    }, 80);
    return () => clearInterval(interval);
  }, [titleIndex]);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 flex flex-col justify-center overflow-hidden">
      {/* Background Grid & Gradient Orbs */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293712_1px,transparent_1px),linear-gradient(to_bottom,#1f293712_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-indigo-600/15 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Location & Status Marker */}
        <div className="flex items-center gap-2 font-mono text-xs text-indigo-400 mb-6">
          <span className="px-2.5 py-1 rounded bg-indigo-950/80 border border-indigo-500/30 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            LOCATION: TAMIL NADU, INDIA
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Main Info Box */}
          <div className="lg:col-span-7 space-y-6">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-indigo-500/30 text-xs font-mono text-cyan-300 backdrop-blur-md shadow-[0_0_15px_rgba(99,102,241,0.2)]">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-spin" />
              <span>{personalDetails.availability}</span>
            </div>

            {/* Main Headline Name & Title */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-white font-sans">
                {personalDetails.fullName}
              </h1>

              <div className="h-10 sm:h-12 flex items-center font-mono text-xl sm:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-300 to-violet-400 font-bold">
                <span>{typedTitle}</span>
                <span className="animate-pulse ml-0.5 text-cyan-400">|</span>
              </div>
            </div>

            {/* Short Intro */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl font-sans">
              {personalDetails.shortIntro}
            </p>

            {/* Quick Tech Tag Badges */}
            <div className="flex flex-wrap gap-2 pt-1 font-mono text-xs">
              {['React.js', 'Node.js', 'Express.js', 'Gemini API', 'LangChain', 'RAG Pipelines', 'Docker', 'MongoDB'].map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md bg-slate-900/80 border border-slate-800 text-slate-300 hover:border-indigo-500/50 hover:text-cyan-300 transition-all"
                >
                  #{tech}
                </span>
              ))}
            </div>

            {/* Action Buttons: Resume Download & Contact */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <button
                onClick={scrollToContact}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 via-violet-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white font-mono text-sm font-bold flex items-center gap-2 shadow-[0_0_25px_rgba(99,102,241,0.4)] transition-all transform hover:-translate-y-0.5"
              >
                <Send className="w-4 h-4" />
                <span>CONTACT BHAVAN</span>
              </button>

              <button
                onClick={onOpenResumeModal}
                className="px-6 py-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-indigo-500/40 hover:border-cyan-400 text-cyan-300 font-mono text-sm font-semibold flex items-center gap-2 transition-all shadow-[0_0_15px_rgba(99,102,241,0.2)]"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>DOWNLOAD RESUME</span>
              </button>

              <button
                onClick={onOpenTerminal}
                className="px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-400 hover:text-cyan-300 hover:border-slate-700 font-mono text-xs flex items-center gap-2 transition-all"
                title="Launch Interactive Terminal"
              >
                <Terminal className="w-4 h-4 text-indigo-400" />
                <span>CLI_MODE</span>
              </button>
            </div>

            {/* Social Media Links */}
            <div className="flex items-center gap-4 pt-4 border-t border-slate-800/80">
              <span className="font-mono text-xs text-slate-500 uppercase tracking-wider">CONNECT:</span>
              <div className="flex items-center gap-2">
                <a
                  href={personalDetails.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-all"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={personalDetails.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={personalDetails.socials.twitter}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-all"
                  aria-label="Twitter/X Profile"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href={personalDetails.socials.mail}
                  className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-all"
                  aria-label="Send Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Visual Card / Avatar Frame */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Glowing Outer Card Frame */}
              <div className="relative bg-slate-900/80 border border-indigo-500/30 rounded-2xl p-6 backdrop-blur-xl shadow-[0_0_40px_rgba(99,102,241,0.2)] space-y-5 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

                {/* Card Header Tag */}
                <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
                  <div className="flex items-center gap-2">
                    <Code2 className="w-4 h-4 text-cyan-400" />
                    <span className="font-mono text-xs font-bold text-slate-200">IDENTITY_CARD.JSON</span>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-emerald-950/80 border border-emerald-500/40 text-[10px] font-mono text-emerald-400">
                    VERIFIED
                  </span>
                </div>

                {/* Avatar Image + Info */}
                <div className="flex items-center gap-4">
                  <div className="relative w-20 h-20 rounded-xl overflow-hidden border-2 border-indigo-500/50 shadow-[0_0_20px_rgba(99,102,241,0.3)] flex-shrink-0 bg-slate-950">
                    <img
                      src={personalDetails.avatarUrl}
                      alt={personalDetails.fullName}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>

                  <div className="space-y-1 font-mono">
                    <div className="text-base font-bold text-slate-100">{personalDetails.fullName}</div>
                    <div className="text-xs text-indigo-400">{personalDetails.professionalTitle}</div>
                    <div className="text-[11px] text-slate-400 flex items-center gap-1 pt-1">
                      <span className="text-cyan-400">⚡</span> Specializing in Gemini & RAG
                    </div>
                  </div>
                </div>

                {/* Key Metrics / Highlights */}
                <div className="grid grid-cols-2 gap-3 pt-2 font-mono text-xs">
                  <div className="p-3 rounded-lg bg-slate-950/70 border border-slate-800 space-y-1">
                    <div className="text-slate-500 text-[10px]">ROLE EXPERIENCE</div>
                    <div className="text-cyan-300 font-bold text-sm">Full Stack + AI</div>
                  </div>

                  <div className="p-3 rounded-lg bg-slate-950/70 border border-slate-800 space-y-1">
                    <div className="text-slate-500 text-[10px]">ACADEMIC CRED</div>
                    <div className="text-indigo-300 font-bold text-sm">BCA (7.8 CGPA)</div>
                  </div>

                  <div className="p-3 rounded-lg bg-slate-950/70 border border-slate-800 space-y-1">
                    <div className="text-slate-500 text-[10px]">TOP FEATURED APP</div>
                    <div className="text-violet-300 font-bold text-sm">GenAssist RAG</div>
                  </div>

                  <div className="p-3 rounded-lg bg-slate-950/70 border border-slate-800 space-y-1">
                    <div className="text-slate-500 text-[10px]">PROMPT ACCURACY</div>
                    <div className="text-emerald-400 font-bold text-sm">98.4% Compliant</div>
                  </div>
                </div>

                {/* Code Snippet Footer */}
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 font-mono text-[11px] text-slate-400 space-y-1">
                  <div className="text-indigo-400">// System Prompt Engine</div>
                  <div>
                    <span className="text-rose-400">const</span> architect = <span className="text-amber-300">new</span> AI_Engineer({`{`}
                  </div>
                  <div className="pl-4 text-cyan-300">name: &quot;Bhavan Murugesan&quot;,</div>
                  <div className="pl-4 text-cyan-300">stack: [&quot;React&quot;, &quot;Node&quot;, &quot;Gemini&quot;, &quot;LangChain&quot;]</div>
                  <div>{`}`});</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="pt-16 flex justify-center">
          <button
            onClick={scrollToAbout}
            className="flex flex-col items-center gap-2 font-mono text-xs text-slate-500 hover:text-cyan-400 transition-colors group"
          >
            <span>SCROLL_DOWN</span>
            <ArrowDown className="w-4 h-4 animate-bounce text-indigo-400 group-hover:text-cyan-400" />
          </button>
        </div>
      </div>
    </section>
  );
};
