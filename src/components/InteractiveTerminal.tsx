import React, { useState, useRef, useEffect } from 'react';
import { Terminal, Send, Sparkles, CornerDownLeft, RefreshCw, Copy, Check } from 'lucide-react';
import { personalDetails, skillsList, experiencesList, projectsList } from '../data/portfolioData';

export const InteractiveTerminal: React.FC = () => {
  const [input, setInput] = useState('');
  const [logs, setLogs] = useState<
    Array<{ type: 'input' | 'output' | 'ai' | 'system'; content: string; timestamp: string }>
  >([
    {
      type: 'system',
      content:
        'BHAVAN_OS v2.6.0 [AI & Full Stack Matrix Shell]\nType "help" to see available terminal commands or "ask <question>" to query the AI.',
      timestamp: new Date().toLocaleTimeString()
    }
  ]);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs, loading]);

  const handleCommand = async (cmdString: string) => {
    const trimmed = cmdString.trim();
    if (!trimmed) return;

    const time = new Date().toLocaleTimeString();
    setLogs((prev) => [...prev, { type: 'input', content: `$ ${trimmed}`, timestamp: time }]);
    setInput('');

    const lower = trimmed.toLowerCase();

    if (lower === 'clear') {
      setLogs([]);
      return;
    }

    if (lower === 'help') {
      const helpOutput = `
Available Commands:
  - help            : List all terminal commands
  - skills          : Show technical skills matrix & proficiency
  - projects        : List featured projects (GenAssist, Kyson, etc.)
  - exp / experience: Show work history (Novitech R&D, Review Growth Partner)
  - contact         : Show Bhavan's direct contact details
  - bio             : Show personal introduction & background
  - ask <question>  : Query the live AI assistant regarding Bhavan's experience
  - clear           : Clear terminal screen
`;
      setLogs((prev) => [...prev, { type: 'output', content: helpOutput, timestamp: time }]);
      return;
    }

    if (lower === 'skills') {
      const skillsOutput = skillsList
        .map((s) => `• ${s.name} [${s.category.toUpperCase()}] -> ${s.level}% proficiency (${s.badge})`)
        .join('\n');
      setLogs((prev) => [...prev, { type: 'output', content: `TECHNICAL SKILLS MATRIX:\n${skillsOutput}`, timestamp: time }]);
      return;
    }

    if (lower === 'projects') {
      const projOutput = projectsList
        .map((p) => `• ${p.projectTitle} [${p.category}]\n  Role: ${p.role}\n  Tech: ${p.technologiesUsed.join(', ')}\n  Desc: ${p.shortDescription}`)
        .join('\n\n');
      setLogs((prev) => [...prev, { type: 'output', content: `FEATURED PROJECTS:\n${projOutput}`, timestamp: time }]);
      return;
    }

    if (lower === 'exp' || lower === 'experience') {
      const expOutput = experiencesList
        .map((e) => `• ${e.jobTitle} @ ${e.companyName} (${e.duration})\n  Role Specs: ${e.responsibilities[0]}`)
        .join('\n\n');
      setLogs((prev) => [...prev, { type: 'output', content: `WORK EXPERIENCE:\n${expOutput}`, timestamp: time }]);
      return;
    }

    if (lower === 'contact') {
      const contactOutput = `
CONTACT DETAILS:
  • Name    : ${personalDetails.fullName}
  • Title   : ${personalDetails.professionalTitle}
  • Email   : ${personalDetails.email}
  • Phone   : ${personalDetails.phone}
  • Location: ${personalDetails.location}
  • Status  : ${personalDetails.availability}
`;
      setLogs((prev) => [...prev, { type: 'output', content: contactOutput, timestamp: time }]);
      return;
    }

    if (lower === 'bio') {
      setLogs((prev) => [
        ...prev,
        {
          type: 'output',
          content: `${personalDetails.fullName} - ${personalDetails.professionalTitle}\n${personalDetails.shortIntro}\n\nCareer Objective:\n${personalDetails.careerObjective}`,
          timestamp: time
        }
      ]);
      return;
    }

    // Default to asking AI or 'ask <question>' command
    let questionText = trimmed;
    if (lower.startsWith('ask ')) {
      questionText = trimmed.substring(4);
    }

    setLoading(true);
    try {
      const res = await fetch('/api/ask-ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: questionText })
      });
      const data = await res.json();
      setLogs((prev) => [
        ...prev,
        {
          type: 'ai',
          content: data.answer || 'Response generated successfully.',
          timestamp: new Date().toLocaleTimeString()
        }
      ]);
    } catch (err) {
      setLogs((prev) => [
        ...prev,
        {
          type: 'output',
          content: `Bhavan is expert in AI Prompt Engineering, React, Node.js, and RAG Pipelines. Reach him at ${personalDetails.email}.`,
          timestamp: new Date().toLocaleTimeString()
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handlePresetClick = (cmd: string) => {
    handleCommand(cmd);
  };

  const handleCopyLogs = () => {
    const text = logs.map((l) => l.content).join('\n---\n');
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div id="terminal-section" className="w-full my-8">
      <div className="bg-slate-950 border border-indigo-500/30 rounded-xl overflow-hidden shadow-[0_0_30px_rgba(99,102,241,0.15)]">
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
            </div>
            <span className="ml-2 font-mono text-xs text-slate-400 flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-cyan-400" />
              bhavan_terminal ~ bash
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyLogs}
              className="px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 text-[11px] font-mono flex items-center gap-1 transition-colors"
              title="Copy session logs"
            >
              {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
              <span>{copied ? 'COPIED' : 'COPY'}</span>
            </button>

            <button
              onClick={() => setLogs([])}
              className="px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 text-[11px] font-mono flex items-center gap-1 transition-colors"
              title="Clear terminal"
            >
              <RefreshCw className="w-3 h-3" />
              <span>CLEAR</span>
            </button>
          </div>
        </div>

        {/* Output Body */}
        <div className="p-4 sm:p-5 font-mono text-xs sm:text-sm text-slate-300 min-h-[220px] max-h-[360px] overflow-y-auto space-y-3 leading-relaxed">
          {logs.map((log, index) => (
            <div key={index} className="space-y-1">
              {log.type === 'input' && (
                <div className="text-cyan-400 font-bold flex items-start gap-2">
                  <span className="text-indigo-400">$</span>
                  <span>{log.content.replace(/^\$\s*/, '')}</span>
                  <span className="ml-auto text-[10px] text-slate-600 font-normal">{log.timestamp}</span>
                </div>
              )}
              {log.type === 'output' && (
                <div className="text-slate-300 bg-slate-900/50 p-2.5 rounded border border-slate-800 whitespace-pre-wrap">
                  {log.content}
                </div>
              )}
              {log.type === 'ai' && (
                <div className="text-cyan-200 bg-indigo-950/40 p-3 rounded border border-indigo-500/30 whitespace-pre-wrap relative">
                  <div className="flex items-center gap-1.5 text-xs text-indigo-400 font-bold mb-1">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-400" /> GEMINI AI RESPONSE:
                  </div>
                  {log.content}
                </div>
              )}
              {log.type === 'system' && (
                <div className="text-slate-400 italic bg-slate-900/30 p-2 rounded border border-slate-800/60 whitespace-pre-wrap">
                  {log.content}
                </div>
              )}
            </div>
          ))}

          {loading && (
            <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs py-2 animate-pulse">
              <Sparkles className="w-4 h-4 animate-spin text-indigo-400" />
              <span>Querying Gemini LLM Matrix... processing reasoning graph</span>
            </div>
          )}

          <div ref={endRef} />
        </div>

        {/* Terminal Quick Command Chips */}
        <div className="px-4 py-2 bg-slate-900/80 border-t border-slate-800/80 flex items-center gap-1.5 overflow-x-auto text-[11px] font-mono">
          <span className="text-slate-500 mr-1 flex-shrink-0">Quick Cmds:</span>
          {['help', 'skills', 'projects', 'exp', 'contact', 'ask What is Bhavan best at?'].map((preset) => (
            <button
              key={preset}
              onClick={() => handlePresetClick(preset)}
              className="px-2 py-0.5 rounded bg-slate-800 hover:bg-indigo-900/60 text-slate-300 hover:text-cyan-300 border border-slate-700/60 transition-all flex-shrink-0"
            >
              {preset}
            </button>
          ))}
        </div>

        {/* Terminal Input Line */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleCommand(input);
          }}
          className="flex items-center px-4 py-3 bg-slate-950 border-t border-indigo-900/30"
        >
          <span className="text-cyan-400 font-mono text-sm font-bold mr-2 flex items-center gap-1">
            <span className="text-indigo-400">bhavan@ai-studio:~$</span>
          </span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type command or question for AI (e.g., 'skills' or 'What is Bhavan\'s RAG experience?')..."
            className="w-full bg-transparent text-slate-100 placeholder-slate-600 font-mono text-xs sm:text-sm focus:outline-none"
          />
          <button
            type="submit"
            disabled={!input.trim()}
            className="ml-2 p-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 disabled:opacity-40 text-white transition-colors"
            title="Execute command"
          >
            <Send className="w-3.5 h-3.5" />
          </button>
        </form>
      </div>
    </div>
  );
};
