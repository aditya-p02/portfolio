export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image?: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'devops' | 'tools' | 'other';
  proficiency: number; // 1-5
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export const personalInfo = {
  name: "Aditya Pawar",
  title: "Computer Engineering Student | Aspiring Cybersecurity Researcher",
  tagline: "Building intelligent systems, exploring cybersecurity, and turning ambitious ideas into reality.",
  bio: "I'm a Computer Engineering student at VIT Pune passionate about ethical hacking, cybersecurity, artificial intelligence, and software development. I enjoy building innovative projects that combine security research, intelligent systems, and creative engineering. I'm constantly learning, experimenting with new technologies, and working toward becoming a skilled cybersecurity professional.",
  email: "adpawar06@gmail.com",
  location: "Pune, Maharashtra, India",
  resumeUrl: "#",
};

export const projects: Project[] = [
  {
    id: "1",
    title: "Breakline",
    description: "A cybersecurity-focused project exploring security analysis, threat detection, and identifying potential vulnerabilities.",
    longDescription: "Breakline focuses on cybersecurity research and practical security engineering. The project explores security testing, threat analysis, and tools designed to help understand and identify potential weaknesses in systems.",
    tags: ["Cybersecurity", "Ethical Hacking", "Security Research"],
    githubUrl: "#",
    liveUrl: "#",
    featured: true,
  },
  {
    id: "2",
    title: "ZERO — AI Desktop Assistant",
    description: "A futuristic AI assistant designed to bring intelligent conversations, automation, memory, and voice interaction into the desktop environment.",
    longDescription: "ZERO is a modular AI assistant inspired by futuristic personal assistants. It explores conversational intelligence, persistent memory, voice interaction, desktop automation, and specialized AI agents. The long-term vision is to create an extensible assistant capable of understanding requests, managing context, and executing useful tasks through an intelligent desktop experience.",
    tags: ["Python", "Large Language Models", "Groq", "Ollama", "PostgreSQL", "pgvector", "Voice Processing", "Desktop Automation"],
    githubUrl: "#",
    liveUrl: "#",
    featured: true,
  },
  {
    id: "3",
    title: "Orbit",
    description: "A modern web development project focused on interactive user interfaces, creative visual design, and smooth animations.",
    longDescription: "Orbit explores modern frontend development through interactive components, polished user experiences, and engaging visual effects. The project focuses on creating a visually distinctive interface with thoughtful design, responsive layouts, and smooth animations using modern web technologies.",
    tags: ["React", "TypeScript", "JavaScript", "Tailwind CSS", "GSAP"],
    githubUrl: "#",
    liveUrl: "#",
    featured: true,
  },
];

export const skills: Skill[] = [
  // Programming Languages
  { name: "Python", category: "backend", proficiency: 5 },
  { name: "C++", category: "backend", proficiency: 4 },
  { name: "JavaScript", category: "frontend", proficiency: 4 },
  { name: "TypeScript", category: "frontend", proficiency: 4 },

  // Cybersecurity
  { name: "Ethical Hacking Fundamentals", category: "devops", proficiency: 4 },
  { name: "Linux", category: "devops", proficiency: 4 },
  { name: "Networking Fundamentals", category: "devops", proficiency: 3 },
  { name: "Web Application Security", category: "devops", proficiency: 3 },
  { name: "Security Research", category: "devops", proficiency: 3 },

  // Development
  { name: "React", category: "frontend", proficiency: 4 },
  { name: "HTML", category: "frontend", proficiency: 5 },
  { name: "CSS", category: "frontend", proficiency: 5 },
  { name: "Tailwind CSS", category: "frontend", proficiency: 4 },
  { name: "Flask", category: "backend", proficiency: 3 },
  { name: "REST APIs", category: "backend", proficiency: 4 },

  // AI and Machine Learning
  { name: "Large Language Models", category: "other", proficiency: 4 },
  { name: "AI Agent Development", category: "other", proficiency: 3 },
  { name: "Machine Learning Fundamentals", category: "other", proficiency: 3 },
  { name: "Groq", category: "other", proficiency: 3 },
  { name: "Ollama", category: "other", proficiency: 3 },

  // Databases
  { name: "MySQL", category: "backend", proficiency: 3 },
  { name: "PostgreSQL", category: "backend", proficiency: 3 },
  { name: "MongoDB", category: "backend", proficiency: 3 },
  { name: "pgvector", category: "backend", proficiency: 2 },

  // Tools and Platforms
  { name: "Git", category: "tools", proficiency: 5 },
  { name: "GitHub", category: "tools", proficiency: 4 },
  { name: "VS Code", category: "tools", proficiency: 5 },
  { name: "Linux", category: "tools", proficiency: 4 },
  { name: "Omarchy Linux", category: "tools", proficiency: 3 },
  { name: "ESP32", category: "tools", proficiency: 3 },
];

export const experience: Experience[] = [];

export const socialLinks: SocialLink[] = [
  { name: "GitHub", url: "https://github.com/adpawar06", icon: "github" },
  { name: "LinkedIn", url: "https://linkedin.com/in/adpawar06", icon: "linkedin" },
  { name: "Twitter", url: "https://twitter.com/adpawar06", icon: "twitter" },
  { name: "Email", url: "mailto:adpawar06@gmail.com", icon: "mail" },
];