import React from 'react';
import { User, Target, GraduationCap, Languages, Sparkles, CheckCircle, Code, ShieldCheck, Cpu } from 'lucide-react';
import { personalDetails, educationList } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-sans mb-4">
          Architecting High-Intelligence Web Systems
        </h2>

        <p className="text-slate-400 text-sm sm:text-base max-w-3xl mb-12 font-sans">
          Combining standard full-stack web architectures with generative AI prompt engineering to build responsive, robust, and cognitive developer tools.
        </p>

        {/* 2x2 Grid of Key About Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: Personal Introduction */}
          <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800/90 hover:border-indigo-500/40 backdrop-blur-md transition-all shadow-[0_0_25px_rgba(0,0,0,0.3)] space-y-4">
            <div className="flex items-center gap-3 border-b border-slate-800 pb-3">
              <div className="p-2.5 rounded-lg bg-indigo-950 border border-indigo-500/40 text-cyan-400">
                <User className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold font-mono text-slate-100">Personal Introduction</h3>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              {personalDetails.shortIntro}
            </p>
            <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono">
              <span className="px-2.5 py-1 rounded bg-slate-950 border border-slate-800 text-cyan-300">
                📍 {personalDetails.location}
              </span>
              <span className="px-2.5 py-1 rounded bg-slate-950 border border-slate-800 text-indigo-300">
                ✉️ {personalDetails.email}
              </span>
            </div>
          </div>

          {/* Card 2: Career Objective */}
          <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800/90 hover:border-indigo-500/40 backdrop-blur-md transition-all shadow-[0_0_25px_rgba(0,0,0,0.3)] space-y-4">
            <div className="flex items-center gap-3 border-b border-slate-800 pb-3">
              <div className="p-2.5 rounded-lg bg-violet-950 border border-violet-500/40 text-violet-400">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold font-mono text-slate-100">Career Objective</h3>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              {personalDetails.careerObjective}
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs font-mono text-emerald-400">
              <CheckCircle className="w-4 h-4" />
              <span>Targeting Scalable AI & Full-Stack Engineering Roles</span>
            </div>
          </div>

          {/* Card 3: Education Overview */}
          <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800/90 hover:border-indigo-500/40 backdrop-blur-md transition-all shadow-[0_0_25px_rgba(0,0,0,0.3)] space-y-4">
            <div className="flex items-center gap-3 border-b border-slate-800 pb-3">
              <div className="p-2.5 rounded-lg bg-cyan-950 border border-cyan-500/40 text-cyan-400">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold font-mono text-slate-100">Education Summary</h3>
            </div>
            {educationList.map((edu) => (
              <div key={edu.id} className="space-y-1">
                <div className="text-slate-100 font-mono font-bold text-sm">{edu.degree}</div>
                <div className="text-cyan-400 text-xs font-mono">{edu.collegeName}</div>
                <div className="text-slate-400 text-xs">{edu.university} • {edu.graduationYear}</div>
                <div className="inline-block mt-2 px-2.5 py-0.5 rounded bg-indigo-950 text-indigo-300 font-mono text-xs border border-indigo-500/30">
                  Grade: {edu.score}
                </div>
              </div>
            ))}
          </div>

          {/* Card 4: Languages & Personal Details */}
          <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800/90 hover:border-indigo-500/40 backdrop-blur-md transition-all shadow-[0_0_25px_rgba(0,0,0,0.3)] space-y-4">
            <div className="flex items-center gap-3 border-b border-slate-800 pb-3">
              <div className="p-2.5 rounded-lg bg-emerald-950 border border-emerald-500/40 text-emerald-400">
                <Languages className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold font-mono text-slate-100">Languages & Additional Info</h3>
            </div>
            <div className="space-y-3">
              <div>
                <div className="text-xs font-mono text-slate-400 mb-1.5">LANGUAGES SPOKEN:</div>
                <div className="flex gap-2">
                  {personalDetails.languages.map((lang) => (
                    <span
                      key={lang}
                      className="px-3 py-1 rounded-lg bg-slate-950 border border-slate-800 text-cyan-300 font-mono text-xs font-semibold"
                    >
                      🗣️ {lang}
                    </span>
                  ))}
                </div>
              </div>

              {personalDetails.religion && (
                <div className="pt-2 border-t border-slate-800/60 flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-400">NATIONALITY / REGION:</span>
                  <span className="text-slate-200 font-bold">{personalDetails.religion}</span>
                </div>
              )}

              <div className="pt-2 border-t border-slate-800/60 flex items-center justify-between text-xs font-mono">
                <span className="text-slate-400">PHONE CONTACT:</span>
                <span className="text-cyan-300 font-bold">+91 {personalDetails.phone}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
