export const personalInfo = {
  name: "Hasan Sheikh",
  title: "Computer Science Student & Software Developer",
  bio: "Penultimate-year Computer Science student with a Statistics minor at the University of Canterbury. Extensive software development experience. Co-Founder of TerraMind — Building the Intelligence Ecosystem for Horticulture.",
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
      { name: "MapLibre GL" },
    ],
  },
  {
    category: "Backend & Database",
    technologies: [
      { name: "FastAPI" },
      { name: "PostgreSQL" },
      { name: "PostGIS" },
      { name: "Supabase" },
      { name: "Redis" },
    ],
  },
  {
    category: "Data / ML",
    technologies: [
      { name: "pandas" },
      { name: "NumPy" },
      { name: "scikit-learn" },
      { name: "LightGBM" },
      { name: "OpenRouter" },
    ],
  },
  {
    category: "Tooling & Deployment",
    technologies: [
      { name: "Git/GitHub" },
      { name: "Vercel" },
      { name: "Docker" },
      { name: "Turborepo" },
      { name: "Clerk" },
      { name: "Vitest" },
      { name: "pytest" },
      { name: "Playwright" },
    ],
  },
];

export const projects = [
  {
    id: 5,
    title: "TerraMind — Co-Founder",
    year: "2026",
    description:
      "Co-founding the intelligence ecosystem for NZ horticulture — hardware, AI-powered probabilistic predictions, and finance workflows that save growers time, money, and guesswork. Architecting a forecasting platform that translates block-level frost, yield, and disease predictions into dollar-denominated recommendations growers can act on immediately. Building a unified observation schema across NIWA, Open-Meteo, and Sentinel-2 satellite data, with calibrated probability distributions and explicit confidence intervals — powered by a Gemma 4 LLM reasoning layer for AI-driven agronomic insights.",
    image: "/projects/terramind.png",
    tags: ["Next.js", "FastAPI", "PostgreSQL", "PostGIS", "MapLibre GL", "Clerk", "Docker", "Gemma 4"],
    demo: "https://terramind.co.nz",
    featured: true,
  },
  {
    id: 2,
    title: "FactorLab",
    year: "2026",
    description:
      "Built a full-stack quantitative research platform for backtesting and comparing systematic equity/ETF strategies against benchmarks. Developed six built-in strategies, including machine learning models using Ridge regression and LightGBM with walk-forward validation, plus downloadable tearsheets, portfolio analytics, and a side-by-side comparison dashboard.",
    image: "/projects/factorlab.jpg",
    imageContain: true,
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL", "Python", "scikit-learn"],
    github: "https://github.com/hasanalisheikh/factor-lab",
    demo: "https://factor-lab.vercel.app/login",
    featured: true,
  },
  {
    id: 3,
    title: "Monad",
    year: "2026",
    description:
      "Built a full-stack SaaS platform that helps freelancers and agencies protect against scope creep. Developed AI-powered request analysis using LLMs to evaluate client requests against project scope, automatically estimate costs and effort, and generate client approval workflows. Integrated with Slack for request capture and GitHub for issue creation and tracking. Built with Next.js App Router, TypeScript, React 19, Supabase (Auth, Postgres, RLS), OpenRouter AI, Slack OAuth, and GitHub App API. Created at SaaSathon 2026, placed 3rd.",
    image: "/projects/monad.jpg",
    tags: ["AI", "GitHub", "SaaS", "Workflow Automation", "Scope Management"],
    github: "https://github.com/monad-saasathon/saasathon",
    demo: "https://monad-weld.vercel.app/",
    linkedin: "https://www.linkedin.com/feed/update/urn:li:activity:7460194275734138880/",
    featured: true,
  },
  {
    id: 1,
    title: "CampusGuard - Hackathon Winner",
    year: "2025",
    description:
      "Built an AI-powered, community-driven platform for reporting campus hazards, enabling faster delivery of critical information to security staff and centralizing safety data to support university decision-making. Awarded 1st place at the Deloitte × ServiceNow × University of Canterbury Hackathon during Tech Week NZ 2025.",
    image: "/projects/campusguard.jpg",
    tags: ["ServiceNow", "GenAI", "AI", "Security", "Data Analytics"],
    github: "",
    demo: "",
    linkedin: "https://www.linkedin.com/feed/update/urn:li:activity:7331568331897954304/",
    featured: true,
  },
  {
    id: 4,
    title: "Portfolio Website",
    year: "2026",
    description:
      "Developed a responsive portfolio website using Next.js, TypeScript, and Tailwind CSS, implementing Framer Motion animations, dark/light mode functionality, and performance and SEO optimizations.",
    image: "/projects/portfolio.jpg",
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
