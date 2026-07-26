import React from 'react';
import { Trophy, Award, Star, Flame, Sparkles } from 'lucide-react';
import { achievementsList } from '../data/portfolioData';

export const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-sans mb-8">
          Hackathons, Competitions & Academic Honors
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievementsList.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800/90 hover:border-amber-500/40 backdrop-blur-md transition-all shadow-[0_0_25px_rgba(0,0,0,0.3)] space-y-4"
            >
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-xl bg-amber-950/80 border border-amber-500/40 text-amber-400">
                  <Trophy className="w-5 h-5" />
                </div>
                <span className="px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 font-mono text-xs font-bold">
                  {item.badgeText}
                </span>
              </div>

              <div>
                <span className="text-[10px] font-mono text-indigo-400 uppercase tracking-wider block">
                  {item.category} • {item.date}
                </span>
                <h3 className="text-lg font-bold font-sans text-white mt-1">
                  {item.title}
                </h3>
                <div className="text-xs font-mono text-slate-400 mt-0.5">
                  {item.organization}
                </div>
              </div>

              <p className="text-slate-300 text-xs font-sans leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
