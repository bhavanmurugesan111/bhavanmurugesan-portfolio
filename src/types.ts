export interface PersonalDetails {
  fullName: string;
  professionalTitle: string;
  tagline: string;
  shortIntro: string;
  careerObjective: string;
  email: string;
  phone: string;
  location: string;
  languages: string[];
  religion?: string;
  avatarUrl: string;
  availability: string;
  socials: {
    github: string;
    linkedin: string;
    twitter: string;
    mail: string;
  };
}

export interface SkillItem {
  name: string;
  category: 'frontend' | 'backend' | 'ai_prompting' | 'databases' | 'tools_devopp';
  level: number; // 0 - 100
  badge?: string;
  iconName?: string;
  description?: string;
}

export interface ExperienceItem {
  id: string;
  jobTitle: string;
  companyName: string;
  duration: string;
  location: string;
  responsibilities: string[];
  technologiesUsed: string[];
  achievements: string[];
  type: 'Full-time' | 'Contract' | 'Project';
}

export interface ProjectItem {
  id: string;
  projectTitle: string;
  shortDescription: string;
  fullDescription: string;
  duration: string;
  teamSize: string;
  role: string;
  features: string[];
  technologiesUsed: string[];
  liveDemoUrl: string;
  githubUrl: string;
  category: 'AI & Prompt Eng' | 'Full Stack' | 'Web App';
  imagePlaceholder: string;
  featured: boolean;
  promptPlayground?: {
    sampleSystemPrompt: string;
    sampleUserPrompt: string;
    outputSample: string;
  };
}

export interface CertificationItem {
  id: string;
  certificateName: string;
  organization: string;
  date: string;
  credentialUrl: string;
  credentialId: string;
  skillsCovered: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  collegeName: string;
  university: string;
  graduationYear: string;
  score: string;
  highlights: string[];
}

export interface AchievementItem {
  id: string;
  title: string;
  category: 'Hackathon' | 'Competition' | 'Award' | 'Academic';
  organization: string;
  date: string;
  description: string;
  badgeText: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  iconName: string;
  description: string;
  deliverables: string[];
  techStack: string[];
}

export interface TechnicalProficiencyCategory {
  category: string;
  items: {
    name: string;
    proficiency: number; // percentage
    yearsOfExp?: string;
  }[];
}

export interface TestimonialItem {
  id: string;
  name: string;
  designation: string;
  organization: string;
  feedback: string;
  avatarSeed: string;
  relationship: string;
  rating: number;
}

export interface BlogPost {
  id: string;
  articleTitle: string;
  summary: string;
  readTime: string;
  publishDate: string;
  category: string;
  tags: string[];
  contentMarkdown: string;
}
