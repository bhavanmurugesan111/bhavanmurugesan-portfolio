import React from 'react';
import { Quote, Star, ShieldCheck, UserCheck } from 'lucide-react';
import { testimonialsList } from '../data/portfolioData';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-sans mb-4">
          Client & Faculty Endorsements
        </h2>

        <p className="text-slate-400 text-sm max-w-3xl mb-12 font-sans">
          Feedback from technical leads, managers, and academic faculty on engineering performance and collaboration.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonialsList.map((test) => (
            <div
              key={test.id}
              className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800/90 hover:border-indigo-500/40 backdrop-blur-md transition-all shadow-[0_0_25px_rgba(0,0,0,0.3)] space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <Quote className="w-6 h-6 text-indigo-400" />
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                </div>

                <p className="text-slate-300 text-xs sm:text-sm font-sans italic leading-relaxed">
                  &quot;{test.feedback}&quot;
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800 space-y-1 font-mono">
                <div className="text-sm font-bold text-slate-100 flex items-center justify-between">
                  <span>{test.name}</span>
                  <span className="px-2 py-0.5 rounded bg-emerald-950 border border-emerald-500/40 text-[10px] text-emerald-400">
                    VERIFIED
                  </span>
                </div>
                <div className="text-xs text-cyan-400">{test.designation}</div>
                <div className="text-[11px] text-slate-400">{test.organization}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
