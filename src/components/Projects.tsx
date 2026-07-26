import React, { useState } from 'react';
import { Sparkles, ExternalLink, Github, Code2, Layers, CheckCircle2, Play, Terminal, ArrowRight, X } from 'lucide-react';
import { projectsList } from '../data/portfolioData';
import { ProjectItem } from '../types';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);
  const [promptInput, setPromptInput] = useState('');
  const [simulatedOutput, setSimulatedOutput] = useState<string | null>(null);
  const [simulating, setSimulating] = useState(false);

  const categories = ['All', 'AI & Prompt Eng', 'Full Stack'];

  const filteredProjects = projectsList.filter(
    (p) => selectedCategory === 'All' || p.category === selectedCategory
  );

  const handleSimulatePrompt = async (project: ProjectItem) => {
    if (!project.promptPlayground) return;
    setSimulating(true);
    setSimulatedOutput(null);

    try {
      const res = await fetch('/api/ask-ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          question: `Act as GenAssist RAG Developer Assistant. Analyze this snippet and provide a brief refactored output with chain-of-thought: "${promptInput || project.promptPlayground.sampleUserPrompt}"`
        })
      });
      const data = await res.json();
      setSimulatedOutput(data.answer || project.promptPlayground.outputSample);
    } catch (e) {
      setSimulatedOutput(project.promptPlayground.outputSample);
    } finally {
      setSimulating(false);
    }
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-sans">
              High-Impact AI & Web Applications
            </h2>
            <p className="text-slate-400 text-sm mt-1 font-sans">
              Production-ready applications featuring RAG documentation pipelines, Chain-of-Thought AI, and full-stack marketplaces.
            </p>
          </div>

          {/* Filter Categories */}
          <div className="flex items-center gap-2 font-mono text-xs">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg border transition-all ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 border-cyan-400 text-white font-bold shadow-[0_0_15px_rgba(34,211,238,0.3)]'
                    : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800/90 hover:border-indigo-500/50 backdrop-blur-md transition-all group hover:shadow-[0_0_30px_rgba(99,102,241,0.2)] flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Header Tag & Category */}
                <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
                  <span className="px-2.5 py-1 rounded bg-indigo-950 text-cyan-300 font-mono text-xs border border-indigo-500/30 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                    {project.category}
                  </span>

                  <span className="font-mono text-xs text-slate-400">
                    {project.duration} • {project.teamSize}
                  </span>
                </div>

                {/* Title & Role */}
                <div>
                  <h3 className="text-xl font-bold font-sans text-white group-hover:text-cyan-300 transition-colors">
                    {project.projectTitle}
                  </h3>
                  <div className="text-xs font-mono text-indigo-400 font-semibold mt-0.5">
                    Role: {project.role}
                  </div>
                </div>

                {/* Short Description */}
                <p className="text-slate-300 text-sm font-sans leading-relaxed">
                  {project.shortDescription}
                </p>

                {/* Key Features List */}
                <div className="space-y-1.5 font-sans text-xs text-slate-300 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800/80">
                  <div className="text-[11px] font-mono text-slate-400 font-bold mb-1 uppercase">
                    FEATURE HIGHLIGHTS:
                  </div>
                  {project.features.slice(0, 3).map((f, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2">
                      <span className="text-cyan-400">✓</span>
                      <span>{f}</span>
                    </div>
                  ))}
                </div>

                {/* Interactive RAG / Prompt Simulator Preview (for GenAssist) */}
                {project.promptPlayground && (
                  <div className="p-3.5 rounded-xl bg-indigo-950/30 border border-indigo-500/30 font-mono text-xs space-y-2">
                    <div className="flex items-center justify-between text-cyan-300 font-bold">
                      <span className="flex items-center gap-1.5">
                        <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                        PROMPT SIMULATOR (Chain-of-Thought RAG)
                      </span>
                      <span className="text-[10px] text-slate-400">LIVE DEMO</span>
                    </div>
                    <div className="text-slate-400 text-[11px] truncate">
                      System: {project.promptPlayground.sampleSystemPrompt.substring(0, 70)}...
                    </div>
                  </div>
                )}

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-1.5 font-mono text-[11px] pt-2">
                  {project.technologiesUsed.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Links */}
              <div className="pt-6 mt-4 border-t border-slate-800/80 flex items-center justify-between font-mono text-xs">
                <button
                  onClick={() => {
                    setActiveModalProject(project);
                    setPromptInput(project.promptPlayground?.sampleUserPrompt || '');
                    setSimulatedOutput(null);
                  }}
                  className="px-3 py-1.5 rounded-lg bg-indigo-950 hover:bg-indigo-900 border border-indigo-500/40 text-cyan-300 font-semibold flex items-center gap-1.5 transition-all"
                >
                  <Code2 className="w-3.5 h-3.5" />
                  <span>VIEW_SPECS</span>
                </button>

                <div className="flex items-center gap-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg bg-slate-950 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-cyan-400 transition-colors"
                    title="View Source on GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </a>

                  <a
                    href={project.liveDemoUrl}
                    onClick={(e) => {
                      if (project.liveDemoUrl.startsWith('#')) {
                        e.preventDefault();
                        setActiveModalProject(project);
                      }
                    }}
                    className="px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-indigo-600 to-cyan-500 text-white font-bold flex items-center gap-1.5 shadow-[0_0_15px_rgba(99,102,241,0.3)] hover:brightness-110 transition-all"
                  >
                    <span>LIVE_DEMO</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail & Prompt Playground Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="w-full max-w-3xl max-h-[90vh] bg-slate-900 border border-indigo-500/40 rounded-2xl p-6 shadow-[0_0_50px_rgba(99,102,241,0.3)] overflow-y-auto space-y-6">
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                  PROJECT SPECIFICATIONS
                </span>
                <h3 className="text-2xl font-bold text-white font-sans mt-0.5">
                  {activeModalProject.projectTitle}
                </h3>
              </div>
              <button
                onClick={() => setActiveModalProject(null)}
                className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Description */}
            <p className="text-slate-300 text-sm leading-relaxed font-sans">
              {activeModalProject.fullDescription}
            </p>

            {/* Full Features */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono text-slate-400 uppercase font-bold">ALL FEATURES & ARCHITECTURE:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {activeModalProject.features.map((feat, idx) => (
                  <div key={idx} className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-300 flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Prompt Playground Simulator (for GenAssist / AI projects) */}
            {activeModalProject.promptPlayground && (
              <div className="p-4 rounded-xl bg-slate-950 border border-indigo-500/30 space-y-3 font-mono text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-cyan-300 font-bold flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-cyan-400" />
                    Interactive GenAssist RAG Simulator
                  </span>
                  <span className="text-[10px] text-slate-500">Chain-of-Thought Engine</span>
                </div>

                <div>
                  <label className="text-[11px] text-slate-400 block mb-1">Code Snippet to Review / Audit:</label>
                  <textarea
                    rows={4}
                    value={promptInput}
                    onChange={(e) => setPromptInput(e.target.value)}
                    className="w-full p-3 bg-slate-900 border border-slate-800 rounded-lg text-slate-200 font-mono text-xs focus:border-cyan-400 focus:outline-none"
                  />
                </div>

                <div className="flex justify-end">
                  <button
                    onClick={() => handleSimulatePrompt(activeModalProject)}
                    disabled={simulating}
                    className="px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-600 to-cyan-500 text-white font-bold flex items-center gap-2 hover:brightness-110 disabled:opacity-50"
                  >
                    <Play className="w-3.5 h-3.5" />
                    <span>{simulating ? 'Running Reasoning Pipeline...' : 'EXECUTE_PROMPT'}</span>
                  </button>
                </div>

                {(simulatedOutput || activeModalProject.promptPlayground.outputSample) && (
                  <div className="pt-2">
                    <div className="text-indigo-400 font-bold text-[11px] mb-1">PROMPT REASONING & OUTPUT:</div>
                    <pre className="p-3 bg-slate-900 rounded-lg border border-slate-800 text-cyan-200 text-xs overflow-x-auto whitespace-pre-wrap">
                      {simulatedOutput || activeModalProject.promptPlayground.outputSample}
                    </pre>
                  </div>
                )}
              </div>
            )}

            {/* Modal Actions */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-800 font-mono text-xs">
              <a
                href={activeModalProject.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 hover:text-cyan-400 flex items-center gap-2"
              >
                <Github className="w-4 h-4" />
                <span>View Source Code</span>
              </a>

              <button
                onClick={() => setActiveModalProject(null)}
                className="px-5 py-2 rounded-xl bg-indigo-600 text-white font-bold"
              >
                CLOSE
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
