import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { CertificationsAndEdu } from './components/CertificationsAndEdu';
import { Achievements } from './components/Achievements';
import { Services } from './components/Services';
import { TechnicalProficiency } from './components/TechnicalProficiency';
import { Testimonials } from './components/Testimonials';
import { Blog } from './components/Blog';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CommandPalette } from './components/CommandPalette';
import { ResumeModal } from './components/ResumeModal';
import { InteractiveTerminal } from './components/InteractiveTerminal';
import { ScrollToTop } from './components/ScrollToTop';
import { SectionReveal } from './components/SectionReveal';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'hero',
        'about',
        'skills',
        'experience',
        'projects',
        'services',
        'contact'
      ];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTerminal = () => {
    document.getElementById('terminal-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0A0E17] text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950 relative overflow-x-hidden">
      {/* Top Header Navbar */}
      <Header
        activeSection={activeSection}
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
        onOpenResumeModal={() => setIsResumeModalOpen(true)}
      />

      {/* Main Page Sections Container */}
      <main className="relative z-10 space-y-8">
        {/* 1. Hero Section */}
        <Hero
          onOpenResumeModal={() => setIsResumeModalOpen(true)}
          onOpenTerminal={scrollToTerminal}
        />

        {/* Interactive Terminal Shell */}
        <SectionReveal delay={0.1}>
          <div id="terminal-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <InteractiveTerminal />
          </div>
        </SectionReveal>

        {/* 2. About Me Section */}
        <SectionReveal>
          <About />
        </SectionReveal>

        {/* 3. Skills Matrix Section */}
        <SectionReveal>
          <Skills />
        </SectionReveal>

        {/* 4. Experience Section */}
        <SectionReveal>
          <Experience />
        </SectionReveal>

        {/* 5. Projects & Prompt Sandbox Section */}
        <SectionReveal>
          <Projects />
        </SectionReveal>

        {/* 6. Certifications & 7. Education Section */}
        <SectionReveal>
          <CertificationsAndEdu />
        </SectionReveal>

        {/* 8. Achievements Section */}
        <SectionReveal>
          <Achievements />
        </SectionReveal>

        {/* 9. Services Section */}
        <SectionReveal>
          <Services />
        </SectionReveal>

        {/* 10. Technical Proficiency Metrics Section */}
        <SectionReveal>
          <TechnicalProficiency />
        </SectionReveal>

        {/* 11. Testimonials Section */}
        <SectionReveal>
          <Testimonials />
        </SectionReveal>

        {/* 12. Blog & Articles Section */}
        <SectionReveal>
          <Blog />
        </SectionReveal>

        {/* 13. Contact & Communication Section */}
        <SectionReveal>
          <Contact />
        </SectionReveal>
      </main>

      {/* 14. Footer */}
      <Footer />

      {/* Interactive Overlays */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        onOpenResume={() => setIsResumeModalOpen(true)}
      />

      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />

      {/* Floating Scroll To Top Button */}
      <ScrollToTop />
    </div>
  );
}

