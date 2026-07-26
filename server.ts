import express from 'express';
import path from 'path';
import { GoogleGenAI } from '@google/genai';

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Routes
  app.get('/api/health', (_req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
  });

  // Contact form submission
  app.post('/api/contact', (req, res) => {
    const { name, email, subject, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email, and message are required.' });
    }
    console.log(`[Contact Form Received] From: ${name} (${email}) | Subject: ${subject || 'N/A'}`);
    console.log(`Message: ${message}`);
    
    return res.json({
      success: true,
      message: 'Message received successfully! Bhavan will get back to you shortly.',
      id: 'MSG-' + Date.now().toString(36).toUpperCase()
    });
  });

  // AI Assistant endpoint using Gemini SDK
  app.post('/api/ask-ai', async (req, res) => {
    const { question } = req.body;
    if (!question) {
      return res.status(400).json({ error: 'Question is required.' });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return res.json({
        answer: `[AI System Note]: Bhavan Murugesan is a Full Stack Developer & AI Prompt Engineer skilled in React, Node.js, Express, LangChain, RAG Pipelines, and LLMs (OpenAI, Claude, Gemini). Contact him directly at bhavanmurugesan111@gmail.com!`
      });
    }

    try {
      const ai = new GoogleGenAI({ apiKey });
      const prompt = `You are the AI Assistant embedded in the portfolio website of Bhavan Murugesan, a Full Stack Developer & AI Prompt Engineer based in India.
Answer the user's question concisely, professionally, and enthusiastically in a cyber-minimalist developer persona.

Context about Bhavan Murugesan:
- Email: bhavanmurugesan111@gmail.com | Phone: 9092130039 | Location: India
- Languages: English, Tamil
- Current Role / Background: Full Stack Developer & AI Prompt Engineer
- Education: Bachelor of Computer Applications (BCA) at K.S. Rangasamy College of Arts and Science (2023-2027), CGPA 7.8
- Experience:
  1. Novitech R&D private limited (May 2026 - May 2026) - Full Stack Development (React.js, Node.js, Express.js, MongoDB, PostgreSQL, LangChain, LLM integrations, Git, Docker).
  2. Review Growth Partner (July 2026 - Present) - AI Prompt Engineering (LLM accuracy optimization, OpenAI/Claude/Gemini integration, structured prompt templates).
- Featured Projects:
  1. GenAssist - AI-Powered Developer Assistant (3 months, Solo project): Web-based coding assistant with Chain-of-Thought & Few-Shot prompting, RAG pipelines with custom code docs, automated code review & debugging.
  2. Kyson Mobile Shop (2 weeks, Solo project): Buying, selling & exchanging mobile phones with PAN-India service availability.
- Skills: React.js, Node.js, Express.js, Python, RESTful APIs, HTML5/CSS3, Tailwind CSS, LLM Integration, RAG Pipelines, LangChain, Few-Shot & Chain-of-Thought Prompting, MongoDB, PostgreSQL, Git, GitHub, Docker, Vercel.

User Question: "${question}"
Keep the answer under 120 words.`;

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt
      });

      return res.json({ answer: response.text || 'No response generated.' });
    } catch (err: any) {
      console.error('Gemini API Error:', err);
      return res.json({
        answer: `Bhavan is expert in AI Prompt Engineering, RAG Pipelines, React, Node.js, and Express. Feel free to connect via email at bhavanmurugesan111@gmail.com or explore the interactive project demos below!`
      });
    }
  });

  // Serve static assets or Vite middleware
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Portfolio server running on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
});
