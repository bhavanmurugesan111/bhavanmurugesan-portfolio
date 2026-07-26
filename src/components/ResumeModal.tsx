import React from 'react';
import { X, Download, Printer, FileText, CheckCircle2, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import { personalDetails, skillsList, experiencesList, projectsList, educationList } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadTxt = () => {
    const textContent = `
BHAVAN MURUGESAN
Full Stack Developer & AI Prompt Engineer
Phone: +91 ${personalDetails.phone}
Email: ${personalDetails.email}
Location: ${personalDetails.location}

SUMMARY
${personalDetails.shortIntro}

SKILLS
Frontend: HTML5, CSS3, JavaScript (ES6+), React.js, Tailwind CSS
Backend: Node.js, Express.js, Python, RESTful APIs
AI & Prompt Engineering: LLM Integration (OpenAI, Claude, Gemini), RAG Pipelines, LangChain, Few-Shot & Chain-of-Thought Prompting
Databases: MongoDB, PostgreSQL
DevOps & Tools: Git, GitHub, Docker, Vercel

EXPERIENCE
${experiencesList
  .map(
    (e) => `
${e.jobTitle} - ${e.companyName} (${e.duration})
Responsibilities:
${e.responsibilities.map((r) => `- ${r}`).join('\n')}
Achievements:
${e.achievements.map((a) => `- ${a}`).join('\n')}
`
  )
  .join('\n')}

PROJECTS
${projectsList
  .map(
    (p) => `
${p.projectTitle} [${p.role}] (${p.duration})
${p.shortDescription}
Tech: ${p.technologiesUsed.join(', ')}
`
  )
  .join('\n')}

EDUCATION
${educationList
  .map((edu) => `${edu.degree} - ${edu.collegeName} (${edu.university}) | Year: ${edu.graduationYear} | CGPA: ${edu.score}`)
  .join('\n')}
`;

    const blob = new Blob([textContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Bhavan_Murugesan_Resume.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md animate-in fade-in duration-200">
      <div className="w-full max-w-4xl max-h-[92vh] bg-slate-900 border border-indigo-500/40 rounded-2xl p-6 sm:p-8 shadow-[0_0_60px_rgba(99,102,241,0.3)] overflow-y-auto space-y-6">
        {/* Modal Controls Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4 print:hidden">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-cyan-400" />
            <span className="font-mono text-sm font-bold text-white">
              BHAVAN_MURUGESAN_RESUME.PDF
            </span>
          </div>

          <div className="flex items-center gap-3 font-mono text-xs">
            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 flex items-center gap-1.5 transition-colors"
            >
              <Printer className="w-4 h-4" />
              <span>PRINT</span>
            </button>

            <button
              onClick={handleDownloadTxt}
              className="px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-indigo-600 to-cyan-500 text-white font-bold flex items-center gap-1.5 shadow-[0_0_15px_rgba(99,102,241,0.3)] hover:brightness-110 transition-all"
            >
              <Download className="w-4 h-4" />
              <span>EXPORT_TXT</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Print-Ready CV Body */}
        <div className="bg-slate-950 p-6 sm:p-8 rounded-xl border border-slate-800 space-y-6 text-slate-200 font-sans print:bg-white print:text-slate-900 print:p-0">
          {/* Header */}
          <div className="border-b border-slate-800 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {personalDetails.fullName}
              </h1>
              <div className="text-cyan-400 font-mono text-sm font-semibold mt-1">
                {personalDetails.professionalTitle}
              </div>
            </div>

            <div className="text-xs font-mono text-slate-400 space-y-1 sm:text-right">
              <div>Phone: +91 {personalDetails.phone}</div>
              <div>Email: {personalDetails.email}</div>
              <div>Location: {personalDetails.location}</div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider border-b border-slate-800 pb-1">
              TECHNICAL SKILLS
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-sans text-slate-300">
              <div>
                <strong className="text-slate-100">Frontend:</strong> HTML5, CSS3, JavaScript (ES6+), React.js, Tailwind CSS
              </div>
              <div>
                <strong className="text-slate-100">Backend:</strong> Node.js, Express.js, Python, RESTful APIs
              </div>
              <div>
                <strong className="text-slate-100">AI & Prompt Engineering:</strong> LLM Integration (OpenAI, Claude, Gemini), RAG Pipelines, LangChain, Few-Shot & CoT Prompting
              </div>
              <div>
                <strong className="text-slate-100">DevOps & Databases:</strong> Git, GitHub, Docker, Vercel, MongoDB, PostgreSQL
              </div>
            </div>
          </div>

          {/* Work Experience */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider border-b border-slate-800 pb-1">
              WORK EXPERIENCE
            </h2>
            {experiencesList.map((exp) => (
              <div key={exp.id} className="space-y-1.5 text-xs">
                <div className="flex justify-between font-bold text-slate-100">
                  <span>{exp.jobTitle} — <span className="text-cyan-300">{exp.companyName}</span></span>
                  <span className="font-mono text-slate-400">{exp.duration}</span>
                </div>
                <ul className="list-disc pl-4 space-y-1 text-slate-300">
                  {exp.responsibilities.map((r, idx) => (
                    <li key={idx}>{r}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Featured Projects */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider border-b border-slate-800 pb-1">
              FEATURED PROJECTS
            </h2>
            {projectsList.map((proj) => (
              <div key={proj.id} className="space-y-1 text-xs">
                <div className="flex justify-between font-bold text-slate-100">
                  <span>{proj.projectTitle} <span className="text-slate-400 font-normal">({proj.role})</span></span>
                  <span className="font-mono text-slate-400">{proj.duration}</span>
                </div>
                <p className="text-slate-300">{proj.fullDescription}</p>
                <div className="text-[11px] font-mono text-indigo-300">
                  Tech: {proj.technologiesUsed.join(', ')}
                </div>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider border-b border-slate-800 pb-1">
              EDUCATION
            </h2>
            {educationList.map((edu) => (
              <div key={edu.id} className="flex justify-between text-xs text-slate-300 font-sans">
                <div>
                  <strong className="text-slate-100">{edu.degree}</strong> — {edu.collegeName} ({edu.university})
                </div>
                <div className="font-mono text-slate-400">CGPA: {edu.score} | Pass: {edu.graduationYear}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex justify-end pt-2 border-t border-slate-800 print:hidden">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-indigo-600 text-white font-mono text-xs font-bold"
          >
            CLOSE_PREVIEW
          </button>
        </div>
      </div>
    </div>
  );
};
