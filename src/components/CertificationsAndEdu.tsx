import React from 'react';
import { Award, GraduationCap, ExternalLink, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { certificationsList, educationList } from '../data/portfolioData';

export const CertificationsAndEdu: React.FC = () => {
  return (
    <section id="certifications" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Certifications Block */}
        <div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-sans mb-8">
            Verified Certifications & Credentials
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certificationsList.map((cert) => (
              <div
                key={cert.id}
                className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800/90 hover:border-indigo-500/40 backdrop-blur-md transition-all shadow-[0_0_25px_rgba(0,0,0,0.3)] space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="p-2.5 rounded-xl bg-indigo-950 border border-indigo-500/40 text-cyan-400">
                      <Award className="w-5 h-5" />
                    </div>
                    <span className="px-2 py-0.5 rounded bg-emerald-950 border border-emerald-500/40 text-[10px] font-mono text-emerald-400 font-bold">
                      VERIFIED
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base font-bold font-sans text-white">
                      {cert.certificateName}
                    </h3>
                    <div className="text-xs font-mono text-indigo-400 font-semibold mt-0.5">
                      {cert.organization}
                    </div>
                  </div>

                  <div className="text-xs font-mono text-slate-400">
                    Issued: {cert.date} • ID: {cert.credentialId}
                  </div>

                  <div className="flex flex-wrap gap-1 pt-2 font-mono text-[10px]">
                    {cert.skillsCovered.map((skill) => (
                      <span key={skill} className="px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-slate-300">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800">
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-300 hover:text-cyan-200"
                  >
                    <span>VERIFY_CREDENTIAL</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Block */}
        <div id="education">

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-sans mb-8">
            Academic Foundation
          </h2>

          <div className="p-8 rounded-2xl bg-slate-900/80 border border-indigo-500/30 backdrop-blur-md shadow-[0_0_35px_rgba(99,102,241,0.15)] space-y-6">
            {educationList.map((edu) => (
              <div key={edu.id} className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                <div className="lg:col-span-8 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-violet-950 border border-violet-500/40 text-violet-300">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold font-sans text-white">{edu.degree}</h3>
                      <div className="text-cyan-400 font-mono text-sm font-semibold">{edu.collegeName}</div>
                      <div className="text-slate-400 text-xs font-mono">{edu.university}</div>
                    </div>
                  </div>

                  <div className="space-y-1.5 font-sans text-xs text-slate-300 pt-2">
                    {edu.highlights.map((hl, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2">
                        <span className="text-indigo-400 font-bold">›</span>
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center p-6 bg-slate-950/80 rounded-xl border border-slate-800 space-y-2 font-mono">
                  <span className="text-slate-500 text-xs">GRADUATION YEAR</span>
                  <span className="text-white font-bold text-lg">{edu.graduationYear}</span>
                  <span className="px-3 py-1 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-bold text-xs mt-2 shadow-[0_0_15px_rgba(99,102,241,0.3)]">
                    CUMULATIVE CGPA: {edu.score}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
