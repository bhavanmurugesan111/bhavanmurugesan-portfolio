import React from 'react';
import { Code2, Cpu, DatabaseZap, Layout, CheckCircle, ArrowRight, Layers, Sparkles } from 'lucide-react';
import { servicesList } from '../data/portfolioData';

export const Services: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    Code2: <Code2 className="w-6 h-6 text-cyan-400" />,
    Cpu: <Cpu className="w-6 h-6 text-indigo-400" />,
    DatabaseZap: <DatabaseZap className="w-6 h-6 text-violet-400" />,
    Layout: <Layout className="w-6 h-6 text-emerald-400" />
  };

  return (
    <section id="services" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-sans mb-4">
          Services & Technical Offerings
        </h2>

        <p className="text-slate-400 text-sm max-w-3xl mb-12 font-sans">
          Specialized web engineering solutions bridging full-stack software development and generative AI model orchestration.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesList.map((srv) => (
            <div
              key={srv.id}
              className="p-8 rounded-2xl bg-slate-900/80 border border-slate-800/90 hover:border-indigo-500/50 backdrop-blur-md transition-all shadow-[0_0_30px_rgba(0,0,0,0.3)] space-y-6 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <div className="p-3 rounded-xl bg-slate-950 border border-indigo-500/30 group-hover:border-cyan-400 transition-colors">
                    {iconMap[srv.iconName] || <Code2 className="w-6 h-6 text-cyan-400" />}
                  </div>
                  <span className="font-mono text-xs text-indigo-400 font-bold">// SERVICE</span>
                </div>

                <h3 className="text-xl font-bold font-sans text-white group-hover:text-cyan-300 transition-colors">
                  {srv.title}
                </h3>

                <p className="text-slate-300 text-sm font-sans leading-relaxed">
                  {srv.description}
                </p>

                <div className="space-y-2 pt-2">
                  <div className="text-xs font-mono text-slate-400 font-bold uppercase">
                    KEY DELIVERABLES:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-sans text-slate-300">
                    {srv.deliverables.map((del, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-1.5">
                        <span className="text-cyan-400 font-bold">✓</span>
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Tech Stack Footer */}
              <div className="pt-4 border-t border-slate-800 flex flex-wrap gap-1.5 font-mono text-[11px]">
                {srv.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded bg-slate-950 border border-slate-800 text-indigo-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
