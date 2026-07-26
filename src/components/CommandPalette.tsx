import React, { useState, useEffect } from 'react';
import { Search, Command, ArrowRight, FileText, Code2, User, Briefcase, Mail, Sparkles, Terminal, X } from 'lucide-react';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenResume: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onOpenResume
}) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          // Open handled by parent or toggle
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const actions = [
    {
      id: 'resume',
      title: 'View & Download Resume',
      subtitle: 'Print or export Bhavan Murugesan PDF CV',
      icon: FileText,
      category: 'Document',
      action: () => {
        onClose();
        onOpenResume();
      }
    },
    {
      id: 'section-hero',
      title: 'Jump to Hero Section',
      subtitle: 'Header, short introduction & quick links',
      icon: User,
      category: 'Navigation',
      action: () => {
        onClose();
        document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });
      }
    },
    {
      id: 'section-skills',
      title: 'View Skills Matrix',
      subtitle: 'Frontend, Backend, AI Prompting & Databases',
      icon: Code2,
      category: 'Navigation',
      action: () => {
        onClose();
        document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
      }
    },
    {
      id: 'section-exp',
      title: 'View Work Experience',
      subtitle: 'Novitech R&D & Review Growth Partner roles',
      icon: Briefcase,
      category: 'Navigation',
      action: () => {
        onClose();
        document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
      }
    },
    {
      id: 'section-projects',
      title: 'Explore Projects & GenAssist',
      subtitle: 'AI Assistant, Kyson Mobile & Prompt Sandbox',
      icon: Sparkles,
      category: 'Navigation',
      action: () => {
        onClose();
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
      }
    },
    {
      id: 'section-terminal',
      title: 'Launch Cyber Terminal',
      subtitle: 'Interactive CLI container for AI queries',
      icon: Terminal,
      category: 'Interactive',
      action: () => {
        onClose();
        document.getElementById('terminal-section')?.scrollIntoView({ behavior: 'smooth' });
      }
    },
    {
      id: 'section-contact',
      title: 'Get In Touch / Contact',
      subtitle: 'Direct email & contact form',
      icon: Mail,
      category: 'Action',
      action: () => {
        onClose();
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  ];

  const filteredActions = actions.filter(
    (item) =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.subtitle.toLowerCase().includes(query.toLowerCase()) ||
      item.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="w-full max-w-xl bg-slate-900 border border-indigo-500/30 rounded-xl shadow-[0_0_50px_rgba(99,102,241,0.25)] overflow-hidden">
        {/* Search Bar */}
        <div className="flex items-center px-4 py-3 border-b border-slate-800 bg-slate-950/60">
          <Search className="w-5 h-5 text-indigo-400 mr-3" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command, search section, or action..."
            className="w-full bg-transparent text-slate-100 placeholder-slate-500 font-mono text-sm focus:outline-none"
            autoFocus
          />
          <button
            onClick={onClose}
            className="p-1 rounded bg-slate-800 text-slate-400 hover:text-white text-xs font-mono"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Action List */}
        <div className="max-h-80 overflow-y-auto p-2 space-y-1">
          {filteredActions.length === 0 ? (
            <div className="p-8 text-center text-slate-500 font-mono text-sm">
              No matching commands found.
            </div>
          ) : (
            filteredActions.map((action) => {
              const Icon = action.icon;
              return (
                <button
                  key={action.id}
                  onClick={action.action}
                  className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-slate-800/80 border border-transparent hover:border-indigo-500/30 text-left transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-md bg-slate-950 border border-slate-800 text-cyan-400 group-hover:border-indigo-500/50">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-mono text-xs font-bold text-slate-200 group-hover:text-cyan-300">
                        {action.title}
                      </div>
                      <div className="text-[11px] text-slate-400">{action.subtitle}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950 text-slate-400 border border-slate-800">
                      {action.category}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400 transition-transform group-hover:translate-x-1" />
                  </div>
                </button>
              );
            })
          )}
        </div>

        {/* Footer info */}
        <div className="px-4 py-2 border-t border-slate-800 bg-slate-950/80 flex items-center justify-between text-[11px] font-mono text-slate-500">
          <span>Navigate with mouse or click</span>
          <span className="flex items-center gap-1">
            Press <kbd className="px-1 bg-slate-800 text-slate-300 rounded">Esc</kbd> to close
          </span>
        </div>
      </div>
    </div>
  );
};
