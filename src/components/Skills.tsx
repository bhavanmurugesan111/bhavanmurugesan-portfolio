import React, { useState } from 'react';
import { Search, Code2, Cpu, Database, Wrench, Sparkles, Terminal } from 'lucide-react';
import { skillsList } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'ALL SKILLS' },
    { id: 'frontend', label: 'FRONTEND' },
    { id: 'backend', label: 'BACKEND' },
    { id: 'ai_prompting', label: 'AI & PROMPTING' },
    { id: 'databases', label: 'DATABASES' },
    { id: 'tools_devopp', label: 'TOOLS & DEVOPS' }
  ];

  const filteredSkills = skillsList.filter((skill) => {
    const matchesCat = activeCategory === 'all' || skill.category === activeCategory;
    const matchesSearch =
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.description?.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-sans">
              Technical Core Competencies
            </h2>
            <p className="text-slate-400 text-sm mt-1 font-sans">
              Comprehensive breakdown across full-stack development, prompt engineering, and database management.
            </p>
          </div>

          {/* Search Filter */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter skill name..."
              className="w-full pl-9 pr-3 py-2 bg-slate-900 border border-slate-800 focus:border-cyan-400 rounded-xl text-xs font-mono text-slate-200 focus:outline-none transition-colors"
            />
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 font-mono text-xs">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl border transition-all flex-shrink-0 ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-indigo-600 to-violet-600 border-indigo-400 text-white font-bold shadow-[0_0_15px_rgba(99,102,241,0.4)]'
                  : 'bg-slate-900/80 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="p-5 rounded-xl bg-slate-900/80 border border-slate-800/90 hover:border-indigo-500/40 backdrop-blur-md transition-all group hover:shadow-[0_0_20px_rgba(99,102,241,0.15)] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-sm font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
                    {skill.name}
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-indigo-950 text-cyan-300 border border-indigo-500/30">
                    {skill.badge}
                  </span>
                </div>

                {skill.description && (
                  <p className="text-slate-400 text-xs mb-4 min-h-[36px] font-sans">
                    {skill.description}
                  </p>
                )}
              </div>

              {/* Progress Bar */}
              <div className="space-y-1.5 pt-2 border-t border-slate-800/60 font-mono">
                <div className="flex justify-between text-[11px]">
                  <span className="text-slate-500 uppercase">{skill.category.replace('_', ' ')}</span>
                  <span className="text-cyan-400 font-bold">{skill.level}%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-950 overflow-hidden p-0.5 border border-slate-800">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-400 transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
