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
  name: "Your Name",
  title: "Full Stack Developer",
  tagline: "Building scalable web applications with modern technologies",
  bio: "I'm a passionate full-stack developer with experience in building scalable web applications. I love working with modern JavaScript/TypeScript ecosystems and have a strong focus on clean code, performance, and developer experience.",
  email: "your.email@example.com",
  location: "Your City, Country",
  resumeUrl: "#",
};

export const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with payment integration, inventory management, and admin dashboard.",
    longDescription: "Built a complete e-commerce solution with Next.js, featuring user authentication, product management, shopping cart, Stripe payment integration, order tracking, and an admin dashboard for managing products and orders.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Stripe", "Tailwind CSS"],
    githubUrl: "https://github.com/yourusername/ecommerce",
    liveUrl: "https://ecommerce-demo.vercel.app",
    featured: true,
  },
  {
    id: "2",
    title: "Task Management App",
    description: "Real-time collaborative task management application with drag-and-drop boards.",
    longDescription: "A Trello-like application with real-time updates using WebSockets, featuring boards, lists, cards, labels, due dates, and team collaboration.",
    tags: ["React", "Node.js", "Socket.io", "MongoDB", "Express", "TypeScript"],
    githubUrl: "https://github.com/yourusername/taskmanager",
    liveUrl: "https://taskmanager-demo.vercel.app",
    featured: true,
  },
  {
    id: "3",
    title: "Weather Dashboard",
    description: "Beautiful weather application with forecasts, maps, and location-based alerts.",
    longDescription: "A weather dashboard integrating multiple APIs for current conditions, 7-day forecasts, interactive maps, and severe weather alerts with geolocation support.",
    tags: ["React", "TypeScript", "Weather API", "Mapbox", "Chart.js"],
    githubUrl: "https://github.com/yourusername/weather-dashboard",
    liveUrl: "https://weather-demo.vercel.app",
    featured: false,
  },
  {
    id: "4",
    title: "Developer Portfolio Template",
    description: "Open-source portfolio template for developers with blog and project showcase.",
    longDescription: "A modern, accessible portfolio template built with Next.js 14, featuring MDX blog support, project filtering, dark mode, and SEO optimization.",
    tags: ["Next.js", "TypeScript", "MDX", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/yourusername/portfolio-template",
    liveUrl: "https://portfolio-template.vercel.app",
    featured: true,
  },
  {
    id: "5",
    title: "API Gateway Service",
    description: "Microservices API gateway with rate limiting, authentication, and monitoring.",
    longDescription: "A production-ready API gateway built with Go, featuring JWT authentication, rate limiting, request/response transformation, circuit breaker pattern, and Prometheus metrics.",
    tags: ["Go", "Docker", "Kubernetes", "Prometheus", "Redis", "NGINX"],
    githubUrl: "https://github.com/yourusername/api-gateway",
    featured: false,
  },
  {
    id: "6",
    title: "Real-time Chat Application",
    description: "End-to-end encrypted chat application with file sharing and video calls.",
    longDescription: "A secure messaging application with end-to-end encryption, supporting direct messages, group chats, file sharing, voice messages, and WebRTC video calls.",
    tags: ["React Native", "Node.js", "WebRTC", "Signal Protocol", "PostgreSQL", "Redis"],
    githubUrl: "https://github.com/yourusername/chat-app",
    featured: false,
  },
];

export const skills: Skill[] = [
  // Frontend
  { name: "React", category: "frontend", proficiency: 5 },
  { name: "Next.js", category: "frontend", proficiency: 5 },
  { name: "TypeScript", category: "frontend", proficiency: 5 },
  { name: "Tailwind CSS", category: "frontend", proficiency: 5 },
  { name: "Vue.js", category: "frontend", proficiency: 3 },
  { name: "Svelte", category: "frontend", proficiency: 3 },
  { name: "HTML/CSS", category: "frontend", proficiency: 5 },
  { name: "Framer Motion", category: "frontend", proficiency: 4 },

  // Backend
  { name: "Node.js", category: "backend", proficiency: 5 },
  { name: "Express.js", category: "backend", proficiency: 5 },
  { name: "PostgreSQL", category: "backend", proficiency: 4 },
  { name: "MongoDB", category: "backend", proficiency: 4 },
  { name: "Prisma", category: "backend", proficiency: 4 },
  { name: "GraphQL", category: "backend", proficiency: 3 },
  { name: "REST APIs", category: "backend", proficiency: 5 },
  { name: "Go", category: "backend", proficiency: 3 },

  // DevOps
  { name: "Docker", category: "devops", proficiency: 4 },
  { name: "Kubernetes", category: "devops", proficiency: 3 },
  { name: "AWS", category: "devops", proficiency: 3 },
  { name: "Vercel", category: "devops", proficiency: 5 },
  { name: "GitHub Actions", category: "devops", proficiency: 4 },
  { name: "CI/CD", category: "devops", proficiency: 4 },
  { name: "Linux", category: "devops", proficiency: 4 },

  // Tools
  { name: "Git", category: "tools", proficiency: 5 },
  { name: "VS Code", category: "tools", proficiency: 5 },
  { name: "Figma", category: "tools", proficiency: 3 },
  { name: "Postman", category: "tools", proficiency: 4 },
  { name: "Jest/Vitest", category: "tools", proficiency: 4 },
  { name: "ESLint/Prettier", category: "tools", proficiency: 5 },
];

export const experience: Experience[] = [
  {
    id: "1",
    company: "Tech Company Inc.",
    role: "Senior Full Stack Developer",
    period: "2022 - Present",
    description: "Leading frontend architecture and development for core product features.",
    achievements: [
      "Led migration from legacy React codebase to Next.js 14 App Router",
      "Improved application performance by 40% through code splitting and optimization",
      "Mentored 3 junior developers and established code review practices",
      "Designed and implemented a component library used across 5 products",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "PostgreSQL", "Prisma"],
  },
  {
    id: "2",
    company: "StartupXYZ",
    role: "Full Stack Developer",
    period: "2020 - 2022",
    description: "Built and maintained multiple client projects and internal tools.",
    achievements: [
      "Developed 10+ client projects from concept to deployment",
      "Implemented CI/CD pipelines reducing deployment time by 60%",
      "Built internal developer tools improving team productivity by 30%",
      "Architected microservices infrastructure for scalable applications",
    ],
    technologies: ["React", "Node.js", "TypeScript", "Docker", "AWS", "MongoDB"],
  },
  {
    id: "3",
    company: "Digital Agency",
    role: "Frontend Developer",
    period: "2018 - 2020",
    description: "Created responsive websites and web applications for diverse clients.",
    achievements: [
      "Delivered 20+ responsive websites with cross-browser compatibility",
      "Implemented accessibility standards (WCAG 2.1 AA) across all projects",
      "Collaborated with designers to create pixel-perfect implementations",
      "Optimized Core Web Vitals scores for all client sites",
    ],
    technologies: ["React", "Vue.js", "HTML/CSS", "JavaScript", "WordPress", "SASS"],
  },
];

export const socialLinks: SocialLink[] = [
  { name: "GitHub", url: "https://github.com/yourusername", icon: "github" },
  { name: "LinkedIn", url: "https://linkedin.com/in/yourusername", icon: "linkedin" },
  { name: "Twitter", url: "https://twitter.com/yourusername", icon: "twitter" },
  { name: "Email", url: "mailto:your.email@example.com", icon: "mail" },
];