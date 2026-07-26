import {
  PersonalDetails,
  SkillItem,
  ExperienceItem,
  ProjectItem,
  CertificationItem,
  EducationItem,
  AchievementItem,
  ServiceItem,
  TechnicalProficiencyCategory,
  TestimonialItem,
  BlogPost
} from '../types';

export const personalDetails: PersonalDetails = {
  fullName: 'Bhavan Murugesan',
  professionalTitle: 'Full Stack Developer & AI Prompt Engineer',
  tagline: 'Building High-Intelligence Web Applications & Custom RAG Pipelines',
  shortIntro:
    'Full Stack Developer & AI Prompt Engineer with expertise in building responsive web applications using React.js, Node.js, and Express.js, integrated with advanced LLM prompt workflows (OpenAI, Claude, Gemini), LangChain pipelines, and RAG architectures.',
  careerObjective:
    'To leverage deep expertise in full-stack engineering and state-of-the-art AI prompt architecture to build scalable, intelligent software systems that solve complex real-world problems and push the boundaries of human-computer interaction.',
  email: 'bhavanmurugesan111@gmail.com',
  phone: '9092130039',
  location: 'Tamil Nadu, India',
  languages: ['English', 'Tamil'],
  religion: 'India',
  avatarUrl: '/bhavan_photo.jpg',
  availability: 'Available for Full-Time, Contract & High-Impact Freelance Roles',
  socials: {
    github: 'https://github.com/bhavanmurugesan',
    linkedin: 'https://linkedin.com/in/bhavanmurugesan',
    twitter: 'https://x.com/bhavanmurugesan',
    mail: 'mailto:bhavanmurugesan111@gmail.com'
  }
};

export const skillsList: SkillItem[] = [
  // Frontend
  { name: 'React.js', category: 'frontend', level: 92, badge: 'Advanced', description: 'Hooks, Context API, Custom State, Performance Optimization' },
  { name: 'Tailwind CSS', category: 'frontend', level: 95, badge: 'Expert', description: 'Utility-first styling, Responsive layouts, Dark/Neon themes' },
  { name: 'JavaScript (ES6+)', category: 'frontend', level: 90, badge: 'Advanced', description: 'Async/Await, DOM manipulation, ES Modules, Functional Specs' },
  { name: 'HTML5 & CSS3', category: 'frontend', level: 95, badge: 'Expert', description: 'Semantic markup, Flexbox, Grid, CSS Variables, Animations' },

  // Backend
  { name: 'Node.js', category: 'backend', level: 88, badge: 'Advanced', description: 'Event loop, Async streams, Express server architecture' },
  { name: 'Express.js', category: 'backend', level: 90, badge: 'Advanced', description: 'RESTful API routing, Middleware chains, Error handling' },
  { name: 'Python', category: 'backend', level: 82, badge: 'Proficient', description: 'Data processing, LangChain scripts, AI pipeline integration' },
  { name: 'RESTful APIs', category: 'backend', level: 92, badge: 'Advanced', description: 'JSON standards, Authentication protocols, Rate limiting, Cors' },

  // AI & Prompt Engineering
  { name: 'LLM Integration (Gemini, OpenAI, Claude)', category: 'ai_prompting', level: 95, badge: 'Expert', description: 'API orchestration, Temperature tuning, Streaming responses' },
  { name: 'Chain-of-Thought (CoT) Prompting', category: 'ai_prompting', level: 96, badge: 'Expert', description: 'Step-by-step reasoning prompts, Decomposition strategies' },
  { name: 'Few-Shot & System Prompting', category: 'ai_prompting', level: 94, badge: 'Expert', description: 'Persona framing, Output formatting constraints, Guardrails' },
  { name: 'RAG Pipelines & LangChain', category: 'ai_prompting', level: 90, badge: 'Advanced', description: 'Document chunking, Vector embeddings, Context retrieval' },

  // Databases
  { name: 'MongoDB', category: 'databases', level: 85, badge: 'Proficient', description: 'Document schemas, Mongoose ORM, Aggregation pipelines' },
  { name: 'PostgreSQL', category: 'databases', level: 82, badge: 'Proficient', description: 'Relational design, SQL queries, Indexing, Joins' },

  // Tools & DevOps
  { name: 'Git & GitHub', category: 'tools_devopp', level: 90, badge: 'Advanced', description: 'Version control, Branching strategies, PR reviews' },
  { name: 'Docker', category: 'tools_devopp', level: 80, badge: 'Proficient', description: 'Containerization, Dockerfiles, Multi-stage builds' },
  { name: 'Vercel & Deployment', category: 'tools_devopp', level: 88, badge: 'Advanced', description: 'CI/CD deployment, Environment configuration, Cloud hosting' }
];

export const experiencesList: ExperienceItem[] = [
  {
    id: 'exp-1',
    jobTitle: 'AI Prompt Engineer',
    companyName: 'Review Growth Partner',
    duration: 'July 2026 - Present',
    location: 'Remote / India',
    type: 'Full-time',
    responsibilities: [
      'Designed and optimized custom AI prompt architectures to improve Large Language Model (LLM) output accuracy and task reliability across client applications.',
      'Integrated state-of-the-art AI models (OpenAI GPT-4, Claude 3.5, Gemini 2.5) into automated workflows to eliminate manual content review.',
      'Engineered structured system prompt templates, few-shot examples, and JSON-enforced output constraints for strict multi-field evaluation.',
      'Evaluated and benchmarked model responses for consistency, edge-case resilience, hallucination mitigation, and execution speed.'
    ],
    technologiesUsed: ['AI Prompt Engineering', 'Gemini API', 'OpenAI API', 'Claude API', 'Few-Shot Prompting', 'Chain-of-Thought', 'JSON Schemas'],
    achievements: [
      'Boosted LLM accuracy by 34% through multi-step chain-of-thought prompt refactoring.',
      'Reduced prompt token consumption by 28% while maintaining zero loss in output quality.'
    ]
  },
  {
    id: 'exp-2',
    jobTitle: 'Full Stack Developer',
    companyName: 'Novitech R&D Private Limited',
    duration: 'May 2026 - May 2026',
    location: 'Tamil Nadu, India',
    type: 'Project',
    responsibilities: [
      'Developed and maintained responsive, high-performance web applications using React.js for the frontend and Node.js/Express.js for the backend.',
      'Architected custom AI prompt engineering workflows, LangChain document indexers, and LLM API integrations to bring cognitive capabilities to web tools.',
      'Designed RESTful API endpoints and connected both relational (PostgreSQL) and non-relational (MongoDB) databases for efficient data persistence.',
      'Automated build tasks, containerized application environments using Docker, and streamlined deployment using Git, GitHub, and cloud platforms.'
    ],
    technologiesUsed: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'LangChain', 'LLM Integration', 'Docker', 'Git'],
    achievements: [
      'Built a full-stack RAG document QA prototype within 3 weeks that handled 1,000+ custom document pages.',
      'Optimized backend SQL & Mongo query indexing, cutting API response latency by 45%.'
    ]
  }
];

export const projectsList: ProjectItem[] = [
  {
    id: 'proj-1',
    projectTitle: 'GenAssist - AI-Powered Developer Assistant',
    category: 'AI & Prompt Eng',
    shortDescription: 'Web-based coding assistant powered by LLMs with Chain-of-Thought prompting, RAG document indexing, and real-time code review.',
    fullDescription:
      'GenAssist is a full-stack web application designed for software engineers. It integrates Large Language Models using advanced prompt engineering techniques (Chain-of-Thought and Few-Shot prompting) combined with Retrieval-Augmented Generation (RAG) pipelines. It allows developers to upload custom codebase documentation, receive automated code reviews, generate inline documentation, and receive instant debugging suggestions.',
    duration: '3 Months',
    teamSize: 'Solo Project',
    role: 'AI Prompt Engineer & Full Stack Developer',
    features: [
      'Retrieval-Augmented Generation (RAG) pipeline for indexing local markdown & code docs.',
      'Chain-of-Thought reasoning console showing the AI step-by-step logic prior to code generation.',
      'Automated code smell detection, syntax vulnerability checks, and optimization recommendations.',
      'Interactive prompt template library for system architecture generation and unit test drafting.',
      'Real-time streaming text interface with syntax highlighting and instant copy-to-clipboard.'
    ],
    technologiesUsed: ['React.js', 'Node.js', 'Express.js', 'Gemini API', 'LangChain', 'RAG Architecture', 'Tailwind CSS', 'Vector Search'],
    liveDemoUrl: '#genassist-demo',
    githubUrl: 'https://github.com/bhavanmurugesan/GenAssist-AI-Dev-Assistant',
    imagePlaceholder: 'https://picsum.photos/seed/genassist/800/600',
    featured: true,
    promptPlayground: {
      sampleSystemPrompt: `You are GenAssist, an expert Senior Code Auditor. Analyze the code provided by the user using Chain-of-Thought reasoning.
First output a <thinking> block breaking down syntax, logic, performance, and security.
Then provide the <refactored_code> and a <summary_of_changes>.`,
      sampleUserPrompt: `function calculateDiscount(user, cart) {
  let discount = 0;
  if(user.isVip) discount = 0.2;
  let total = 0;
  for(let i=0; i<cart.length; i++) {
    total += cart[i].price;
  }
  return total - (total * discount);
}`,
      outputSample: `<thinking>
1. Input validation missing for 'user' and 'cart'.
2. Array loop can be simplified using 'Array.prototype.reduce'.
3. Floating point rounding errors possible on total calculations.
</thinking>

<refactored_code>
export function calculateDiscount(user: { isVip?: boolean }, cart: Array<{ price: number }>): number {
  if (!Array.isArray(cart) || cart.length === 0) return 0;
  const discountRate = user?.isVip ? 0.2 : 0;
  const subtotal = cart.reduce((acc, item) => acc + (Number(item?.price) || 0), 0);
  const finalTotal = subtotal * (1 - discountRate);
  return Number(finalTotal.toFixed(2));
}
</refactored_code>`
    }
  },
  {
    id: 'proj-2',
    projectTitle: 'Kyson Mobile Shop',
    category: 'Full Stack',
    shortDescription: 'Full-featured mobile phone marketplace for buying, selling, and exchanging mobile devices with PAN-India service coverage.',
    fullDescription:
      'Kyson Mobile Shop is an end-to-end e-commerce platform designed for phone sales, trade-ins, and refurbishment exchanges. Features include real-time trade-in valuation estimators based on device condition, filterable product catalogs, specifications breakdown, and responsive order management.',
    duration: '2 Weeks',
    teamSize: 'Solo Project',
    role: 'Development and Design',
    features: [
      'Interactive trade-in price calculator for phone buyback estimation.',
      'Comprehensive product catalog with multi-facet filtering (Brand, Price, RAM, Storage, Condition).',
      'Shopping cart, checkout simulation, and order status tracking.',
      'Responsive dark/neon mobile-first user experience optimized for touch devices.'
    ],
    technologiesUsed: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'REST APIs'],
    liveDemoUrl: '#kyson-demo',
    githubUrl: 'https://github.com/bhavanmurugesan/Kyson-Mobile-Shop',
    imagePlaceholder: 'https://picsum.photos/seed/kyson/800/600',
    featured: true
  },
  {
    id: 'proj-3',
    projectTitle: 'PromptCraft Studio - System Prompt Evaluator',
    category: 'AI & Prompt Eng',
    shortDescription: 'Interactive prompt engineering sandbox for benchmarking temperature, topP, and system prompt variations across LLMs.',
    fullDescription:
      'A specialized developer tool built to test, version-control, and benchmark system prompts. Allows AI engineers to execute side-by-side prompt comparisons and evaluate output variance using structured grading metrics.',
    duration: '1 Month',
    teamSize: 'Solo Project',
    role: 'Lead Architect',
    features: [
      'Side-by-side execution split view for prompt comparison.',
      'JSON schema validation for LLM output enforcement.',
      'Latency and token usage tracking metric panel.'
    ],
    technologiesUsed: ['React.js', 'Gemini API', 'Tailwind CSS', 'TypeScript'],
    liveDemoUrl: '#promptcraft-demo',
    githubUrl: 'https://github.com/bhavanmurugesan/PromptCraft-Studio',
    imagePlaceholder: 'https://picsum.photos/seed/promptcraft/800/600',
    featured: false
  }
];

export const certificationsList: CertificationItem[] = [
  {
    id: 'cert-1',
    certificateName: 'Generative AI & Advanced Prompt Engineering',
    organization: 'DeepLearning.AI / AI Pioneer Academy',
    date: '2026',
    credentialUrl: 'https://example.com/credentials/genai-prompt-eng',
    credentialId: 'GAI-PE-884920',
    skillsCovered: ['System Prompting', 'Chain-of-Thought', 'Few-Shot Learning', 'RAG Pipelines', 'Hallucination Mitigation']
  },
  {
    id: 'cert-2',
    certificateName: 'Full Stack Web Development Masterclass',
    organization: 'Novitech R&D Certification',
    date: '2026',
    credentialUrl: 'https://example.com/credentials/fullstack-novitech',
    credentialId: 'NOV-FS-2026-091',
    skillsCovered: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'Docker']
  },
  {
    id: 'cert-3',
    certificateName: 'LangChain & Vector Databases for LLMs',
    organization: 'AI Engineers Guild',
    date: '2026',
    credentialUrl: 'https://example.com/credentials/langchain-vector-db',
    credentialId: 'LC-VEC-77210',
    skillsCovered: ['LangChain', 'Embeddings', 'Pinecone/ChromaDB', 'Context Window Optimization']
  }
];

export const educationList: EducationItem[] = [
  {
    id: 'edu-1',
    degree: 'Bachelor of Computer Applications (BCA)',
    collegeName: 'K.S. Rangasamy College of Arts and Science',
    university: 'Periyar University',
    graduationYear: '2027 (Expected)',
    score: '7.8 CGPA',
    highlights: [
      'Specialization in Software Development, Database Management Systems, and Web Technologies.',
      'Active Student Lead in College Tech Club & AI Innovation Workshops.',
      'Completed multiple industry-oriented projects combining full-stack web applications with modern AI models.'
    ]
  }
];

export const achievementsList: AchievementItem[] = [
  {
    id: 'ach-1',
    title: '1st Place - GenAI Innovation Hackathon',
    category: 'Hackathon',
    organization: 'Regional Tech Fest',
    date: '2026',
    description: 'Designed and presented GenAssist RAG developer assistant under a 24-hour sprint deadline, winning top honors among 45 participating teams.',
    badgeText: '🏆 Winner'
  },
  {
    id: 'ach-2',
    title: 'Top AI Prompt Engineering Contributor',
    category: 'Competition',
    organization: 'Review Growth Partner Internal Challenge',
    date: '2026',
    description: 'Achieved the highest scoring prompt accuracy optimization benchmark (98.4% output compliance) for multi-attribute automated text extraction.',
    badgeText: '🥇 1st Rank'
  },
  {
    id: 'ach-3',
    title: 'Academic Excellence in Computer Applications',
    category: 'Academic',
    organization: 'K.S. Rangasamy College of Arts and Science',
    date: '2025 - 2026',
    description: 'Maintained a consistent 7.8 CGPA while balancing industry internships and building production-grade web applications.',
    badgeText: '⭐ Honor Roll'
  }
];

export const servicesList: ServiceItem[] = [
  {
    id: 'srv-1',
    title: 'Full Stack Web Development',
    iconName: 'Code2',
    description: 'End-to-end development of responsive, modern web applications using React.js, Node.js, Express, and modern styling libraries.',
    deliverables: ['Custom Single-Page Applications (SPAs)', 'Express RESTful APIs', 'Database Integration (Mongo/PostgreSQL)', 'Responsive & Mobile-First UI'],
    techStack: ['React.js', 'Node.js', 'Express', 'Tailwind CSS', 'MongoDB']
  },
  {
    id: 'srv-2',
    title: 'AI & Prompt Engineering',
    iconName: 'Cpu',
    description: 'Designing custom system prompt architectures, few-shot prompting strategies, and LLM integrations for automated reasoning and output consistency.',
    deliverables: ['System Prompt Engineering', 'Chain-of-Thought Workflows', 'JSON Enforcement Schemas', 'Hallucination Mitigation'],
    techStack: ['Gemini API', 'OpenAI', 'Claude', 'Few-Shot Prompting', 'System Framing']
  },
  {
    id: 'srv-3',
    title: 'RAG Pipelines & LangChain',
    iconName: 'DatabaseZap',
    description: 'Building custom Retrieval-Augmented Generation systems that connect LLMs to your private codebase, PDF documentation, or knowledge base.',
    deliverables: ['Document Chunking & Vectorization', 'Semantic Search Querying', 'Custom Knowledge Base QA Systems', 'Context Window Management'],
    techStack: ['LangChain', 'Python', 'Vector DBs', 'Gemini API', 'Embeddings']
  },
  {
    id: 'srv-4',
    title: 'Frontend & Responsive UI/UX',
    iconName: 'Layout',
    description: 'Crafting pixel-perfect, high-tech dashboard user interfaces with glassmorphic cards, smooth animations, and ergonomic layouts.',
    deliverables: ['Interactive Dashboards', 'Tailwind CSS Custom Themes', 'Cyber-Minimalist Aesthetics', 'Accessibility & Performance'],
    techStack: ['React.js', 'Tailwind CSS', 'Motion / React', 'Lucide Icons']
  }
];

export const technicalProficiencyData: TechnicalProficiencyCategory[] = [
  {
    category: 'Programming Languages',
    items: [
      { name: 'JavaScript (ES6+)', proficiency: 92 },
      { name: 'TypeScript', proficiency: 85 },
      { name: 'Python', proficiency: 82 },
      { name: 'HTML5 / CSS3', proficiency: 95 }
    ]
  },
  {
    category: 'Frameworks & Libraries',
    items: [
      { name: 'React.js', proficiency: 92 },
      { name: 'Node.js', proficiency: 88 },
      { name: 'Express.js', proficiency: 90 },
      { name: 'Tailwind CSS', proficiency: 95 },
      { name: 'LangChain', proficiency: 86 }
    ]
  },
  {
    category: 'Databases & Storage',
    items: [
      { name: 'MongoDB', proficiency: 85 },
      { name: 'PostgreSQL', proficiency: 82 },
      { name: 'Vector DBs / Embeddings', proficiency: 84 }
    ]
  },
  {
    category: 'Cloud & DevOps Tools',
    items: [
      { name: 'Git & GitHub', proficiency: 90 },
      { name: 'Docker', proficiency: 80 },
      { name: 'Vercel / Cloud Run', proficiency: 88 },
      { name: 'Postman / REST Tools', proficiency: 92 }
    ]
  }
];

export const testimonialsList: TestimonialItem[] = [
  {
    id: 'test-1',
    name: 'R&D Team Lead',
    designation: 'Senior Technical Manager',
    organization: 'Novitech R&D Private Limited',
    feedback:
      'Bhavan demonstrated exceptional technical capability during his tenure. His ability to build responsive React frontends while integrating complex LLM APIs and database backends made him a key contributor to our R&D initiatives.',
    avatarSeed: 'novitech-lead',
    relationship: 'Manager at Novitech R&D',
    rating: 5
  },
  {
    id: 'test-2',
    name: 'AI Operations Director',
    designation: 'Growth & AI Lead',
    organization: 'Review Growth Partner',
    feedback:
      'Bhavan is one of the sharpest AI prompt engineers we have worked with. He has a systematic approach to chain-of-thought prompting that consistently delivers reliable outputs with minimum token overhead.',
    avatarSeed: 'review-growth-lead',
    relationship: 'Team Lead at Review Growth Partner',
    rating: 5
  },
  {
    id: 'test-3',
    name: 'Department Faculty',
    designation: 'Assistant Professor, Computer Applications',
    organization: 'K.S. Rangasamy College of Arts and Science',
    feedback:
      'Bhavan combines academic diligence with practical industry passion. His full-stack projects show a level of polish and technical depth well beyond typical undergraduate work.',
    avatarSeed: 'faculty-prof',
    relationship: 'Academic Advisor',
    rating: 5
  }
];

export const blogPostsList: BlogPost[] = [
  {
    id: 'blog-1',
    articleTitle: 'Mastering Chain-of-Thought Prompt Engineering for LLMs',
    summary: 'A deep dive into decomposing complex multi-step reasoning tasks in Gemini and Claude to eliminate hallucinations and achieve 98%+ structured JSON reliability.',
    readTime: '5 min read',
    publishDate: 'July 2026',
    category: 'AI Engineering',
    tags: ['Prompt Engineering', 'Chain-of-Thought', 'LLM', 'Gemini'],
    contentMarkdown: `### Introduction to Chain-of-Thought (CoT)

When prompting Large Language Models for complex reasoning—such as code reviews, financial analysis, or multi-step classification—asking for an immediate answer often leads to shallow logic or hallucinations.

**Chain-of-Thought (CoT) Prompting** forces the model to generate intermediate reasoning steps before arriving at a final conclusion.

#### Key Principles:
1. **Explicit Decomposition:** instruct the model to step through validation checks.
2. **Thinking Tags:** wrap reasoning inside \`<thinking>\` tags for parsing.
3. **Output Isolation:** separate the raw logic from the clean schema response.

\`\`\`json
{
  "step_1_analysis": "Identify missing parameters",
  "step_2_validation": "Check type correctness",
  "final_decision": "Approved with optimization"
}
\`\`\`
`
  },
  {
    id: 'blog-2',
    articleTitle: 'Building Production RAG Pipelines with React, Node & LangChain',
    summary: 'How to connect custom documentation stores to LLMs using vector embeddings, chunking strategies, and streaming Express backends.',
    readTime: '7 min read',
    publishDate: 'June 2026',
    category: 'Full Stack AI',
    tags: ['RAG', 'LangChain', 'React', 'Node.js', 'Vector Search'],
    contentMarkdown: `### The Power of Local Context

Retrieval-Augmented Generation bridges the gap between private enterprise documentation and public LLM capabilities.

#### Pipeline Overview:
- **Ingestion & Chunking:** Split document trees into 500-token chunks with 50-token overlap.
- **Embedding Generation:** Convert text chunks into dense vector embeddings.
- **Similarity Search:** Match user queries against vector indices.
- **Augmented Prompting:** Inject relevant context chunks into system prompts before sending to the model.
`
  }
];
