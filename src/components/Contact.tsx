import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Copy, Check, Github, Linkedin, Twitter, Sparkles, MessageSquare, Settings, CheckCircle2, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { personalDetails } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [toastMessage, setToastMessage] = useState<{ text: string; type: 'success' | 'error' | 'info' } | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  // EmailJS Configuration State
  const [serviceId, setServiceId] = useState(import.meta.env.VITE_EMAILJS_SERVICE_ID || '');
  const [templateId, setTemplateId] = useState(import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '');
  const [publicKey, setPublicKey] = useState(import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '');
  const [showConfig, setShowConfig] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setToastMessage({ text: 'Please fill in required fields: Name, Email, and Message.', type: 'error' });
      setTimeout(() => setToastMessage(null), 4000);
      return;
    }

    setLoading(true);
    setToastMessage({ text: 'Transmitting email via EmailJS engine...', type: 'info' });

    const activeServiceId = serviceId.trim();
    const activeTemplateId = templateId.trim();
    const activePublicKey = publicKey.trim();

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      reply_to: formData.email,
      subject: formData.subject || 'Portfolio Inquiry',
      message: formData.message,
      to_name: personalDetails.fullName,
      to_email: personalDetails.email,
    };

    let sentSuccessfully = false;

    // Try EmailJS first if keys are provided
    if (activePublicKey && activeServiceId && activeTemplateId) {
      try {
        await emailjs.send(activeServiceId, activeTemplateId, templateParams, activePublicKey);
        sentSuccessfully = true;
        setToastMessage({
          text: `Email delivered successfully via EmailJS! Bhavan has been notified at ${personalDetails.email}.`,
          type: 'success'
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } catch (err: any) {
        console.error('EmailJS direct send error:', err);
        setToastMessage({
          text: `EmailJS response: ${err?.text || 'Service connection issue'}. Routing message backup...`,
          type: 'error'
        });
      }
    }

    // Secondary dispatch to backend API route
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (!sentSuccessfully && !activePublicKey) {
        sentSuccessfully = true;
        setToastMessage({
          text: `Message transmitted and logged successfully! (Tip: Enter your EmailJS keys in the Config below for instant SMTP inbox delivery).`,
          type: 'success'
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      }
    } catch (err) {
      console.error('API contact endpoint error:', err);
    }

    // Fallback mailto client launch if EmailJS is unconfigured or failed
    if (!sentSuccessfully) {
      const emailSubject = encodeURIComponent(
        formData.subject ? `[Portfolio Inquiry] ${formData.subject}` : `[Portfolio Contact] Message from ${formData.name}`
      );
      const emailBody = encodeURIComponent(
        `Sender Name: ${formData.name}\nSender Email: ${formData.email}\nSubject: ${formData.subject || 'N/A'}\n\nMessage:\n${formData.message}`
      );
      const mailtoUrl = `mailto:${personalDetails.email}?subject=${emailSubject}&body=${emailBody}`;
      window.location.href = mailtoUrl;

      setToastMessage({
        text: 'Opening mail client to complete direct email transmission to Bhavan! Thank you.',
        type: 'info'
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    }

    setLoading(false);
    setTimeout(() => setToastMessage(null), 6000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalDetails.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personalDetails.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-sans mb-3">
              Initiate Contact & Collaboration
            </h2>
            <p className="text-slate-400 text-sm max-w-3xl font-sans">
              Reach out for full-time technical opportunities, AI prompt optimization contracts, or custom web development projects.
            </p>
          </div>

          <button
            onClick={() => setShowConfig(!showConfig)}
            className="inline-flex items-center gap-2 text-xs font-mono px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 transition-all self-start md:self-auto"
          >
            <Settings className="w-3.5 h-3.5 text-cyan-400" />
            <span>{showConfig ? 'HIDE EMAILJS CONFIG' : 'EMAILJS SERVICE SETTINGS'}</span>
          </button>
        </div>

        {/* EmailJS Configuration Panel */}
        {showConfig && (
          <div className="mb-8 p-5 rounded-2xl bg-slate-950 border border-cyan-500/30 text-xs font-mono space-y-4 animate-in fade-in">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <span className="text-cyan-400 font-bold flex items-center gap-2">
                <Sparkles className="w-4 h-4" /> EmailJS SMTP Service Credentials
              </span>
              <span className="text-slate-500 text-[11px]">Get keys at dashboard.emailjs.com</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-slate-400 mb-1">Service ID</label>
                <input
                  type="text"
                  value={serviceId}
                  onChange={(e) => setServiceId(e.target.value)}
                  placeholder="e.g. service_xxxxxx"
                  className="w-full p-2.5 bg-slate-900 border border-slate-800 rounded-lg text-slate-200 placeholder-slate-600 focus:border-cyan-400 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-slate-400 mb-1">Template ID</label>
                <input
                  type="text"
                  value={templateId}
                  onChange={(e) => setTemplateId(e.target.value)}
                  placeholder="e.g. template_xxxxxx"
                  className="w-full p-2.5 bg-slate-900 border border-slate-800 rounded-lg text-slate-200 placeholder-slate-600 focus:border-cyan-400 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-slate-400 mb-1">Public Key (User ID)</label>
                <input
                  type="text"
                  value={publicKey}
                  onChange={(e) => setPublicKey(e.target.value)}
                  placeholder="e.g. pub_key_xxxxxx"
                  className="w-full p-2.5 bg-slate-900 border border-slate-800 rounded-lg text-slate-200 placeholder-slate-600 focus:border-cyan-400 focus:outline-none"
                />
              </div>
            </div>
            <div className="text-[11px] text-slate-500 flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>
                Status: {publicKey && serviceId && templateId ? 'EmailJS configured & active!' : 'Awaiting credentials (will use server API & mailto fallback)'}
              </span>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Contact Details Box */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800/90 backdrop-blur-md shadow-[0_0_30px_rgba(0,0,0,0.3)] space-y-6">
              <h3 className="text-xl font-bold font-mono text-slate-100 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-cyan-400" />
                Direct Channels
              </h3>

              {/* Email Box */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2 font-mono">
                <div className="text-xs text-slate-500 flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <Mail className="w-4 h-4 text-cyan-400" /> EMAIL ADDRESS
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1 text-[11px]"
                  >
                    {copiedEmail ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedEmail ? 'COPIED' : 'COPY'}</span>
                  </button>
                </div>
                <div className="text-sm font-bold text-slate-100 break-all">{personalDetails.email}</div>
              </div>

              {/* Phone Box */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2 font-mono">
                <div className="text-xs text-slate-500 flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <Phone className="w-4 h-4 text-indigo-400" /> PHONE NUMBER
                  </span>
                  <button
                    onClick={handleCopyPhone}
                    className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1 text-[11px]"
                  >
                    {copiedPhone ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedPhone ? 'COPIED' : 'COPY'}</span>
                  </button>
                </div>
                <div className="text-sm font-bold text-slate-100">+91 {personalDetails.phone}</div>
              </div>

              {/* Location Box */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2 font-mono">
                <div className="text-xs text-slate-500 flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-violet-400" /> LOCATION
                </div>
                <div className="text-sm font-bold text-slate-100">{personalDetails.location}</div>
              </div>

              {/* Social Channels */}
              <div className="pt-2">
                <div className="text-xs font-mono text-slate-400 mb-3">SOCIAL MEDIA PLATFORMS:</div>
                <div className="flex items-center gap-3">
                  <a
                    href={personalDetails.socials.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 transition-all flex items-center gap-2 font-mono text-xs"
                  >
                    <Github className="w-4 h-4" /> GitHub
                  </a>
                  <a
                    href={personalDetails.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 transition-all flex items-center gap-2 font-mono text-xs"
                  >
                    <Linkedin className="w-4 h-4" /> LinkedIn
                  </a>
                  <a
                    href={personalDetails.socials.twitter}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 transition-all flex items-center gap-2 font-mono text-xs"
                  >
                    <Twitter className="w-4 h-4" /> Twitter
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Interactive Form Box */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-indigo-500/30 backdrop-blur-md shadow-[0_0_35px_rgba(99,102,241,0.15)] space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold font-mono text-slate-100">Send Direct Message</h3>
                <span className="text-[11px] font-mono text-cyan-400 bg-cyan-950/60 border border-cyan-800 px-2.5 py-1 rounded-full flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-cyan-400" /> EmailJS Integration Active
                </span>
              </div>

              {toastMessage && (
                <div
                  className={`p-3.5 rounded-xl border text-xs font-mono flex items-center gap-2 animate-in fade-in ${
                    toastMessage.type === 'success'
                      ? 'bg-emerald-950/80 border-emerald-500/40 text-emerald-300'
                      : toastMessage.type === 'error'
                      ? 'bg-rose-950/80 border-rose-500/40 text-rose-300'
                      : 'bg-cyan-950/80 border-cyan-500/40 text-cyan-300'
                  }`}
                >
                  {toastMessage.type === 'success' ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  ) : toastMessage.type === 'error' ? (
                    <AlertCircle className="w-4 h-4 text-rose-400 flex-shrink-0" />
                  ) : (
                    <Sparkles className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  )}
                  <span>{toastMessage.text}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-400 mb-1.5">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Rivera"
                      className="w-full p-3 bg-slate-950 border border-slate-800 rounded-xl text-slate-100 placeholder-slate-600 focus:border-cyan-400 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-400 mb-1.5">Your Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@company.com"
                      className="w-full p-3 bg-slate-950 border border-slate-800 rounded-xl text-slate-100 placeholder-slate-600 focus:border-cyan-400 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-400 mb-1.5">Subject / Topic</label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Full Stack Engineering Role / Project Inquiry"
                    className="w-full p-3 bg-slate-950 border border-slate-800 rounded-xl text-slate-100 placeholder-slate-600 focus:border-cyan-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-slate-400 mb-1.5">Message Details *</label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Share project details, job scope, or questions..."
                    className="w-full p-3 bg-slate-950 border border-slate-800 rounded-xl text-slate-100 placeholder-slate-600 focus:border-cyan-400 focus:outline-none font-sans text-sm"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 via-violet-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white font-mono text-sm font-bold flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(99,102,241,0.4)] disabled:opacity-50 transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>{loading ? 'TRANSMITTING_VIA_EMAILJS...' : 'TRANSMIT_MESSAGE'}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

