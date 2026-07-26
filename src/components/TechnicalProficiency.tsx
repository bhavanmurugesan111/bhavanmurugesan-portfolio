import React, { useState } from 'react';
import { Cpu, Code2, Database, Cloud, Wrench, BarChart2 } from 'lucide-react';
import { technicalProficiencyData } from '../data/portfolioData';

export const TechnicalProficiency: React.FC = () => {
  const [selectedCatIdx, setSelectedCatIdx] = useState<number>(0);

  return (
    <section id="proficiency" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-sans mb-4">
          Technical Domain Breakdown
        </h2>

        <p className="text-slate-400 text-sm max-w-3xl mb-8 font-sans">
          Detailed metrics evaluating skill depth, hands-on production experience, and core technology stack mastery.
        </p>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 font-mono text-xs">
          {technicalProficiencyData.map((cat, idx) => (
            <button
              key={cat.category}
              onClick={() => setSelectedCatIdx(idx)}
              className={`px-4 py-2 rounded-xl border transition-all flex-shrink-0 ${
                selectedCatIdx === idx
                  ? 'bg-gradient-to-r from-indigo-600 to-violet-600 border-cyan-400 text-white font-bold shadow-[0_0_15px_rgba(99,102,241,0.3)]'
                  : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
              }`}
            >
              {cat.category}
            </button>
          ))}
        </div>

        {/* Selected Category Metric Cards */}
        <div className="bg-slate-900/80 border border-slate-800/90 rounded-2xl p-6 sm:p-8 backdrop-blur-md shadow-[0_0_30px_rgba(0,0,0,0.3)] space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4 font-mono">
            <h3 className="text-lg font-bold text-slate-100 flex items-center gap-2">
              <BarChart2 className="w-5 h-5 text-cyan-400" />
              {technicalProficiencyData[selectedCatIdx].category} Mastery
            </h3>
            <span className="text-xs text-slate-400">
              {technicalProficiencyData[selectedCatIdx].items.length} Tech Items Tracked
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {technicalProficiencyData[selectedCatIdx].items.map((item) => (
              <div
                key={item.name}
                className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2 font-mono"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-slate-100">{item.name}</span>
                  <span className="text-sm font-bold text-cyan-400">{item.proficiency}%</span>
                </div>

                <div className="w-full h-2.5 rounded-full bg-slate-900 overflow-hidden p-0.5 border border-slate-800">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-400 transition-all duration-1000"
                    style={{ width: `${item.proficiency}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
