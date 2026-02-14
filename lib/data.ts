export const personalInfo = {
  name: "Hasan Sheikh",
  title: "Computer Science Student & Aspiring Software Engineer",
  bio: "Second-year Computer Science student (Statistics minor) at the University of Canterbury with hands-on coding experience and a strong track record collaborating in team and solo settings. I'm especially interested in software engineering and developing solutions, and I'm actively seeking internships and other tech roles where I can build, learn fast, and contribute to real-world systems.",
  email: "hasanalisheikh1@outlook.com",
  location: "Christchurch, New Zealand",
  avatar: "/avatar.jpg", // Add your avatar image to the public folder
};

export const socialLinks = {
  github: "https://github.com/hasanalisheikh",
  linkedin: "https://www.linkedin.com/in/hasan-sheikh-737145348/",
  email: "mailto:hasanalisheikh1@outlook.com",
};

export const skills = [
  {
    category: "Programming Languages",
    technologies: [
      { name: "Python", level: 85 },
      { name: "JavaScript", level: 75 },
      { name: "TypeScript", level: 70 },
      { name: "HTML/CSS", level: 80 },
    ],
  },
  {
    category: "Frontend Development",
    technologies: [
      { name: "React", level: 75 },
      { name: "Next.js", level: 70 },
      { name: "Tailwind CSS", level: 75 },
      { name: "Framer Motion", level: 65 },
    ],
  },
  {
    category: "Data & Analysis",
    technologies: [
      { name: "NumPy", level: 80 },
      { name: "matplotlib", level: 75 },
      { name: "Excel/Sheets", level: 80 },
      { name: "OpenRefine", level: 70 },
    ],
  },
  {
    category: "Developer Tools",
    technologies: [
      { name: "Git/GitHub", level: 85 },
      { name: "VS Code", level: 90 },
      { name: "Jupyter Notebook", level: 80 },
      { name: "LaTeX", level: 75 },
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "CampusGuard - 1st Place Hackathon Winner 🏆",
    description:
      "AI-powered, community-driven platform that lets students report campus hazards. Integrates GenAI to deliver critical information faster for security guards, and centralizes safety data to help universities make smarter, data-driven decisions. Won 1st place at Deloitte X ServiceNow X UC Hackathon during Tech Week NZ 2025.",
    image: "/projects/campusguard.jpg",
    tags: ["ServiceNow", "GenAI", "AI", "Security", "Data Analytics"],
    github: "",
    demo: "",
    featured: true,
  },
  {
    id: 2,
    title: "Portfolio Website",
    description:
      "A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. Features smooth animations with Framer Motion, dark/light mode toggle, and optimized for performance and SEO.",
    image: "/projects/portfolio.jpg",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/hasanalisheikh/hasan-sheikh-portfolio",
    demo: "https://hasan-sheikh-portfolio.vercel.app",
    featured: true,
  },
  {
    id: 3,
    title: "Data Analysis Project",
    description:
      "Comprehensive data analysis project utilizing Python, NumPy, and matplotlib to visualize and interpret complex datasets. Demonstrates proficiency in statistical analysis and data visualization.",
    image: "/projects/data-analysis.jpg",
    tags: ["Python", "NumPy", "matplotlib", "Data Science"],
    github: "",
    demo: "",
    featured: false,
  },
  {
    id: 4,
    title: "Academic Research Documentation",
    description:
      "Collection of academic research papers and technical documentation created using LaTeX, showcasing strong technical writing and documentation skills.",
    image: "/projects/research.jpg",
    tags: ["LaTeX", "Research", "Documentation"],
    github: "",
    demo: "",
    featured: false,
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
