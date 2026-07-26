import React, { useState } from 'react';
import { BookOpen, Clock, Tag, ArrowRight, X, Sparkles } from 'lucide-react';
import { blogPostsList } from '../data/portfolioData';
import { BlogPost } from '../types';

export const Blog: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <section id="blog" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-sans mb-4">
          Insights & AI Engineering Articles
        </h2>

        <p className="text-slate-400 text-sm max-w-3xl mb-12 font-sans">
          Technical posts covering prompt optimization, system prompts, RAG architectures, and full-stack React integrations.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPostsList.map((post) => (
            <div
              key={post.id}
              className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800/90 hover:border-indigo-500/40 backdrop-blur-md transition-all shadow-[0_0_25px_rgba(0,0,0,0.3)] space-y-4 flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between font-mono text-xs text-slate-400 border-b border-slate-800 pb-3">
                  <span className="px-2.5 py-0.5 rounded bg-indigo-950 text-cyan-300 border border-indigo-500/30">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1 text-slate-400">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readTime} • {post.publishDate}
                  </span>
                </div>

                <h3 className="text-xl font-bold font-sans text-white group-hover:text-cyan-300 transition-colors">
                  {post.articleTitle}
                </h3>

                <p className="text-slate-300 text-sm font-sans leading-relaxed">
                  {post.summary}
                </p>

                <div className="flex flex-wrap gap-1.5 font-mono text-[11px] pt-1">
                  {post.tags.map((tag) => (
                    <span key={tag} className="px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-slate-400">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800">
                <button
                  onClick={() => setSelectedPost(post)}
                  className="font-mono text-xs font-bold text-cyan-400 group-hover:text-cyan-300 flex items-center gap-1.5"
                >
                  <span>READ_ARTICLE</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Article Reader Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="w-full max-w-3xl max-h-[90vh] bg-slate-900 border border-indigo-500/40 rounded-2xl p-6 sm:p-8 shadow-[0_0_50px_rgba(99,102,241,0.3)] overflow-y-auto space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <span className="px-2.5 py-1 rounded bg-indigo-950 text-cyan-300 font-mono text-xs border border-indigo-500/30">
                {selectedPost.category}
              </span>
              <button
                onClick={() => setSelectedPost(null)}
                className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <h2 className="text-2xl font-bold text-white font-sans">{selectedPost.articleTitle}</h2>

            <div className="text-slate-300 text-sm leading-relaxed whitespace-pre-wrap font-sans bg-slate-950/60 p-5 rounded-xl border border-slate-800">
              {selectedPost.contentMarkdown}
            </div>

            <div className="flex justify-end pt-4 border-t border-slate-800">
              <button
                onClick={() => setSelectedPost(null)}
                className="px-5 py-2 rounded-xl bg-indigo-600 text-white font-mono text-xs font-bold"
              >
                CLOSE_ARTICLE
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
