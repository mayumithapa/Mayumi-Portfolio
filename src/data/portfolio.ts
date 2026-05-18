/**
 * Single source of truth for portfolio content.
 * Update social URLs below if any of them don't match your real profiles.
 */

export const profile = {
  name: "Mayumi Thapa",
  initials: "MT",
  role: "Full-Stack Software Engineer",
  roles: [
    "Full-Stack Software Engineer",
    "React + TypeScript Specialist",
    "Backend & Event-Driven Systems",
    "Scalable UI Architect",
  ],
  location: "India",
  email: "mayumi1509thapa@gmail.com",
  phone: "+91 70241 60858",
  available: true,
  tagline:
    "I build scalable, high-performance web products — from polished React UIs to event-driven Node.js backends — with a focus on clean architecture and measurable impact.",
  about: [
    "I'm a full-stack engineer with 1.5+ years of experience modernizing enterprise applications at Korn Ferry (via iSpace). I move comfortably between pixel-perfect React/TypeScript UIs and modular NestJS/Node.js services backed by PostgreSQL, RabbitMQ, and Kafka.",
    "What I care about: shipping clean, maintainable code that solves real business problems, reducing production incidents, and turning Figma designs into smooth, accessible interfaces. I love event-driven architecture, sensible state management, and well-typed APIs.",
  ],
  socials: {
    github: "https://github.com/mayumithapa",
    linkedin: "https://www.linkedin.com/in/mayumi15thapa/",
    leetcode: "https://leetcode.com/u/mayumi15/",
    email: "mailto:mayumi1509thapa@gmail.com",
  },
  resume: {
    url: "/Mayumi-Thapa-CV.pdf",
    filename: "Mayumi-Thapa-CV.pdf",
    label: "Download CV",
  },
};

export const stats = [
  { label: "Years of experience", value: "1.5+" },
  { label: "React pages shipped", value: "15+" },
  { label: "Personal projects", value: "5+" },
  { label: "Hackathon wins", value: "1st" },
];

export const skills: { category: string; items: string[] }[] = [
  {
    category: "Frontend",
    items: [
      "React",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Redux",
      "Zustand",
      "Vite",
    ],
  },
  {
    category: "Backend",
    items: ["Node.js", "NestJS", "Express", "FastAPI", "REST APIs", "JWT", "bcrypt"],
  },
  {
    category: "Data & Messaging",
    items: ["PostgreSQL", "MySQL", "Redis", "RabbitMQ", "Kafka", "SQLAlchemy"],
  },
  {
    category: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "C++", "C"],
  },
  {
    category: "Tools & Workflow",
    items: ["GitHub", "Postman", "Socket.io", "Figma", "CI/CD", "Agile"],
  },
];

export type ExperienceEntry = {
  role: string;
  company: string;
  client?: string;
  period: string;
  current?: boolean;
  groups: { title: string; bullets: string[] }[];
};

export const experience: ExperienceEntry[] = [
  {
    role: "Associate Software Engineer",
    company: "iSpace",
    client: "Korn Ferry",
    period: "Dec 2024 — Present",
    current: true,
    groups: [
      {
        title: "Legacy application support & stabilization",
        bullets: [
          "Drove a 25%+ reduction in production issues with structured bug triaging and root-cause fixes across dev, QA, staging, and prod — improving overall system stability.",
          "Implemented environment-wise debugging and regression fixes, leading to smoother releases and fewer recurring defects.",
        ],
      },
      {
        title: "MVP feature development & modern UI",
        bullets: [
          "Built 15+ React + TypeScript pages from Figma designs with optimized component architecture, delivering a 30%+ improvement in performance and UX.",
          "Introduced Redux and Zustand for scalable state management, reducing UI inconsistencies and data-handling bugs by 25%+.",
        ],
      },
      {
        title: "Backend services & event-driven architecture",
        bullets: [
          "Built modular backend services with Node.js, NestJS, and PostgreSQL — improving API reliability by 30%+ across enterprise workflows.",
          "Designed asynchronous communication with RabbitMQ and Kafka, boosting system resilience by 35%+ and unlocking real-time data processing.",
        ],
      },
      {
        title: "Continuous delivery",
        bullets: [
          "Shipped new features and resolved cross-environment defects every release cycle, enabling smoother MVP rollouts as workflows grew more complex.",
        ],
      },
    ],
  },
  {
    role: "Project Intern → Associate Software Engineer",
    company: "iSpace",
    client: "Korn Ferry",
    period: "Jun 2024 — Dec 2024",
    groups: [
      {
        title: "AI-based resume ranking & JD matching tool",
        bullets: [
          "Built an AI-driven resume ranking system that analyzes job descriptions and scores candidate relevance — significantly cutting manual screening time.",
          "Implemented automated skill extraction and relevance scoring for stronger alignment between candidate profiles and role requirements.",
        ],
      },
      {
        title: "Cafeteria application (team ordering & management)",
        bullets: [
          "Delivered a real-time web ordering and consolidation system that streamlined daily team workflows.",
          "Added automated price calculation and centralized order tracking, reducing order errors and improving user satisfaction.",
        ],
      },
    ],
  },
];

export type Project = {
  name: string;
  blurb: string;
  description: string;
  stack: string[];
  href: string;
  highlight?: string;
  accent: "violet" | "fuchsia" | "cyan" | "emerald" | "amber";
};

export const projects: Project[] = [
  {
    name: "TaskMaster",
    blurb: "Real-time team task tracker with JWT, Socket.io & OpenAI assist.",
    description:
      "Backend for a team task tracker: secure JWT auth, tasks with assignees, comments & attachments, teams with invite codes, real-time notifications over Socket.io, and optional OpenAI-powered descriptions.",
    stack: ["Node.js", "Express", "JWT", "Socket.io", "OpenAI"],
    href: "https://github.com/mayumithapa/TaskMaster",
    highlight: "Real-time + AI",
    accent: "violet",
  },
  {
    name: "Chronos Job Scheduler",
    blurb: "Production-style job scheduler — mini Sidekiq / BullMQ-as-a-service.",
    description:
      "Backend that lets users create, schedule, monitor and retry background jobs. Built with Node.js, Express, PostgreSQL and Redis with worker queues and retry semantics.",
    stack: ["Node.js", "Express", "PostgreSQL", "Redis", "Queues"],
    href: "https://github.com/mayumithapa/Chronos-Job-Scheduler-System",
    highlight: "Distributed Systems",
    accent: "fuchsia",
  },
  {
    name: "Smart Parking Lot",
    blurb: "Concurrency-safe parking system with vehicle-aware allocation.",
    description:
      "Backend for a multi-floor smart parking lot. FastAPI + SQLAlchemy with vehicle-aware spot allocation, hourly fee calculation, real-time availability and concurrency-safe check-in via atomic constraints.",
    stack: ["Python", "FastAPI", "SQLAlchemy", "PostgreSQL"],
    href: "https://github.com/mayumithapa/smart-parking-lot-system",
    highlight: "Concurrency safe",
    accent: "cyan",
  },
  {
    name: "Virtual Event Platform",
    blurb: "Role-based event platform with auth, RSVP & welcome emails.",
    description:
      "Node.js + Express backend for a virtual event management platform — JWT auth, bcrypt password hashing, role-based access (organizer / attendee), event CRUD, participant registration and welcome emails.",
    stack: ["Node.js", "Express", "JWT", "bcrypt", "Nodemailer"],
    href: "https://github.com/mayumithapa/Virtual-Event-Management-Platform",
    highlight: "Auth + RBAC",
    accent: "emerald",
  },
  {
    name: "BookMyShow DB Design",
    blurb: "Normalized MySQL schema (1NF–BCNF) for a ticketing platform.",
    description:
      "End-to-end database design for a BookMyShow-style ticketing platform — fully normalized MySQL schema from 1NF to BCNF, sample seed data, and an example query to list all shows at a theatre on a given date.",
    stack: ["MySQL", "Schema Design", "Normalization"],
    href: "https://github.com/mayumithapa/bookmyshow-db-design",
    highlight: "Database Design",
    accent: "amber",
  },
];

export const achievements = [
  {
    title: "1st place — company-wide hackathon",
    body: "Built a high-impact internal solution recognized for innovation and execution.",
  },
  {
    title: "Became billable during internship",
    body: "Earned production-level ownership early based on consistent performance.",
  },
  {
    title: "Junior developer recognition award",
    body: "Awarded for consistent high-quality delivery and problem-solving.",
  },
];

export const education = {
  school: "Gyan Ganga Institute of Technology and Sciences",
  degree: "B.Tech in Computer Science",
  period: "Aug 2020 — Jun 2024",
  cgpa: "8.45 / 10",
};
