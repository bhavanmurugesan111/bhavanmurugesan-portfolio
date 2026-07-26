import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, Award, Sparkles } from 'lucide-react';
import { experiencesList } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-sans mb-4">
          Professional Experience & Key Roles
        </h2>

        <p className="text-slate-400 text-sm max-w-3xl mb-12 font-sans">
          Proven track record in AI prompt optimization, custom LLM integration, and full-stack web development.
        </p>

        {/* Timeline List */}
        <div className="space-y-8 relative before:absolute before:inset-0 before:left-4 sm:before:left-1/2 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-indigo-500 before:via-violet-500 before:to-cyan-500 before:opacity-30">
          {experiencesList.map((exp, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={exp.id}
                className="relative flex flex-col sm:flex-row items-start group"
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-slate-950 border-2 border-indigo-500/60 shadow-[0_0_15px_rgba(99,102,241,0.5)] flex items-center justify-center z-10 group-hover:border-cyan-400 transition-colors">
                  <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                </div>

                {/* Content Box Container */}
                <div
                  className={`w-full sm:w-[calc(50%-2rem)] pl-12 sm:pl-0 ${
                    isEven ? 'sm:mr-auto sm:pr-8' : 'sm:ml-auto sm:pl-8'
                  }`}
                >
                  <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800/90 hover:border-indigo-500/40 backdrop-blur-md transition-all shadow-[0_0_30px_rgba(0,0,0,0.3)] space-y-4">
                    {/* Header Details */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
                      <div>
                        <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider block">
                          {exp.type}
                        </span>
                        <h3 className="text-xl font-bold font-sans text-white mt-0.5">
                          {exp.jobTitle}
                        </h3>
                        <div className="text-indigo-400 font-mono text-sm font-semibold">
                          {exp.companyName}
                        </div>
                      </div>

                      <div className="flex flex-col text-right font-mono text-xs text-slate-400">
                        <span className="flex items-center gap-1 sm:justify-end text-cyan-300">
                          <Calendar className="w-3.5 h-3.5" />
                          {exp.duration}
                        </span>
                        <span className="flex items-center gap-1 sm:justify-end text-slate-500">
                          <MapPin className="w-3.5 h-3.5" />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    {/* Responsibilities */}
                    <div className="space-y-2">
                      <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                        CORE RESPONSIBILITIES:
                      </div>
                      <ul className="space-y-2 font-sans text-xs sm:text-sm text-slate-300">
                        {exp.responsibilities.map((resp, rIdx) => (
                          <li key={rIdx} className="flex items-start gap-2">
                            <span className="text-cyan-400 font-bold mt-1">›</span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Key Achievements */}
                    {exp.achievements.length > 0 && (
                      <div className="p-3 rounded-xl bg-slate-950/80 border border-indigo-500/20 space-y-1.5 font-mono text-xs">
                        <div className="text-amber-400 font-bold flex items-center gap-1.5">
                          <Award className="w-3.5 h-3.5 text-amber-400" />
                          <span>KEY MILESTONES & ACHIEVEMENTS</span>
                        </div>
                        {exp.achievements.map((ach, aIdx) => (
                          <div key={aIdx} className="text-slate-300 flex items-center gap-1.5">
                            <span className="text-emerald-400">✓</span> {ach}
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Tech Badges */}
                    <div className="pt-2 flex flex-wrap gap-1.5 font-mono text-[11px]">
                      {exp.technologiesUsed.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-indigo-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
