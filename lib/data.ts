export const personalInfo = {
  name: "Hasan Sheikh",
  title: "Computer Science Student & Software Developer",
  bio: "Second-year Computer Science student with a Statistics minor at the University of Canterbury, with practical software development experience and a strong track record of delivering successful projects in both independent and team environments.",
  email: "hasanalisheikh1@outlook.com",
  location: "Christchurch, New Zealand",
  avatar: "/profile.jpg",
};

export const socialLinks = {
  github: "https://github.com/hasanalisheikh",
  linkedin: "https://www.linkedin.com/in/hasan-sheikh-737145348/",
  email: "mailto:hasanalisheikh1@outlook.com",
};

export const skills = [
  {
    category: "Languages",
    technologies: [
      { name: "Python" },
      { name: "Java" },
      { name: "TypeScript" },
      { name: "JavaScript" },
    ],
  },
  {
    category: "Frontend",
    technologies: [
      { name: "React" },
      { name: "Next.js" },
      { name: "Tailwind CSS" },
    ],
  },
  {
    category: "Backend & Database",
    technologies: [
      { name: "Supabase" },
      { name: "PostgreSQL" },
      { name: "Supabase Auth" },
      { name: "RLS" },
      { name: "Upstash Redis" },
    ],
  },
  {
    category: "Data / ML",
    technologies: [
      { name: "pandas" },
      { name: "NumPy" },
      { name: "scikit-learn" },
      { name: "LightGBM" },
    ],
  },
  {
    category: "Testing, Tooling & Deployment",
    technologies: [
      { name: "Vitest" },
      { name: "pytest" },
      { name: "Playwright" },
      { name: "Git/GitHub" },
      { name: "Vercel" },
      { name: "Supabase CLI" },
      { name: "ESLint" },
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "CampusGuard - Hackathon Winner",
    description:
      "Built an AI-powered, community-driven platform for reporting campus hazards, enabling faster delivery of critical information to security staff and centralizing safety data to support university decision-making. Awarded 1st place at the Deloitte × ServiceNow × University of Canterbury Hackathon during Tech Week NZ 2025.",
    image: "/projects/campusguard.jpg",
    tags: ["ServiceNow", "GenAI", "AI", "Security", "Data Analytics"],
    github: "",
    demo: "https://www.linkedin.com/feed/update/urn:li:activity:7331568331897954304/",
    featured: true,
  },
  {
    id: 2,
    title: "FactorLab",
    description:
      "Built a full-stack quantitative research platform for backtesting and comparing systematic equity/ETF strategies against benchmarks. Developed six built-in strategies, including machine learning models using Ridge regression and LightGBM with walk-forward validation, plus downloadable tearsheets, portfolio analytics, and a side-by-side comparison dashboard.",
    image: "/projects/factorlab.png",
    imageContain: true,
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL", "Python", "scikit-learn"],
    github: "https://github.com/hasanalisheikh/factor-lab",
    demo: "https://factor-lab.vercel.app/login",
    featured: true,
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "Developed a responsive portfolio website using Next.js, TypeScript, and Tailwind CSS, implementing Framer Motion animations, dark/light mode functionality, and performance and SEO optimizations.",
    image: "/projects/portfolio.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/hasanalisheikh/hasan-sheikh-portfolio",
    demo: "https://hasan-sheikh-portfolio.vercel.app",
    featured: true,
  },
];

export const experiences = [
  {
    title: "Hackathon Winner",
    company: "Deloitte X ServiceNow X UC Hackathon",
    period: "2025",
    description:
      "Won 1st place developing CampusGuard, an AI-powered campus safety platform, collaborating with a team of 4 during Tech Week NZ 2025.",
  },
  {
    title: "Computer Science Student",
    company: "University of Canterbury",
    period: "2024 - Present",
    description:
      "Pursuing Bachelor's degree in Computer Science with a minor in Statistics. Gaining hands-on experience in software development, data analysis, and collaborative projects.",
  },
];
