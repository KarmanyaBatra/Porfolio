// Single source of truth for portfolio content, sourced from the resume. Edit this file — no need to touch components.

export const profile = {
  name: "Karmanya Batra",
  role: "Full Stack Developer & AI/ML Engineer",
  roles: [
    "Full Stack Developer",
    "AI/ML Engineer",
    "Computer Vision Engineer",
  ],
  tagline:
    "I build production-ready web, IoT, and computer-vision systems — from Indian Army surveillance pipelines to full-stack platforms — and ship measurable improvements, not just demos.",
  location: "New Delhi, India",
  email: "karmanya82@gmail.com",
  resumeUrl: "/resume.pdf",
  socials: [
    { label: "GitHub", href: "https://github.com/KarmanyaBatra" },
    { label: "LinkedIn", href: "https://linkedin.com/in/karmanya-batra" },
  ],
};

export const about = {
  bio: [
    "Full Stack Developer and AI/ML Engineer with hands-on experience across web development, IoT, and computer vision — including real-world defense-focused projects for the Indian Army. I work across React.js, Next.js, Node.js, Express.js, MongoDB, PostgreSQL, and Python, building production-ready applications spanning smart automation, computer vision, and chatbot-integrated systems.",
    "Across my full-stack and ML projects I've consistently delivered 20%+ measurable improvements in speed, reliability, and user experience — I care about the number moving, not just the feature shipping.",
  ],
};

export const education = {
  school: "Vellore Institute of Technology, Bhopal",
  location: "Bhopal, India",
  degree: "B.Tech in Computer Science & Engineering (AI & ML)",
  dates: "2022 – 2026",
  gpa: "7.7 / 10.0 CGPA",
  coursework: [
    "Machine Learning",
    "Deep Learning",
    "Data Structures & Algorithms",
    "DBMS",
    "Operating Systems",
    "Software Engineering",
    "Object-Oriented Programming",
    "Computer Networks",
  ],
};

export const skills = [
  { group: "Languages", items: ["Python", "JavaScript (ES6+)", "C++", "Java", "SQL"] },
  {
    group: "Frontend & Backend",
    items: ["React.js", "Next.js", "Node.js", "Express.js", "Flask", "RESTful APIs", "JWT"],
  },
  {
    group: "Databases",
    items: ["MongoDB", "PostgreSQL", "MySQL", "SQLite", "Prisma ORM", "Mongoose ODM"],
  },
  { group: "ML & AI", items: ["TensorFlow", "Keras", "PyTorch", "Scikit-learn", "OpenCV", "Pandas"] },
  { group: "Cloud & Tools", items: ["AWS", "Git", "Docker", "Postman", "Raspberry Pi"] },
];

export type ExperienceRole = {
  title: string;
  company: string;
  location: string;
  dates: string;
  bullets: string[];
  metrics?: { label: string; value: string }[];
};

export const experience: ExperienceRole[] = [
  {
    title: "AI/ML Engineer",
    company: "Rayonix",
    location: "Gurugram, India",
    dates: "September 2026 – Present",
    bullets: [
      // Placeholder — tell me what Cashew is and what the AI analytics work involves and I'll tighten these up.
      "Converted from intern to full-time AI/ML Engineer at Rayonix.",
      "Building Cashew — details pending.",
      "Developing AI-powered analytics features — details pending.",
    ],
  },
  {
    title: "Frontend and AI Intern",
    company: "Rayonix",
    location: "Gurugram, India",
    dates: "May 2026 – September 2026",
    bullets: [
      "Built a real-time LED detection and calibration pipeline for an Indian Army surveillance application using Python and OpenCV with ArUco marker mapping.",
      "Deployed the LED detection pipeline on Raspberry Pi 4 for edge inference, cutting average detection latency significantly.",
      "Developed Next.js and React.js frontend interfaces for a smart switch automation platform, enabling remote control of 15+ IoT devices.",
      "Optimized 8+ REST API endpoints and PostgreSQL schemas via Prisma ORM, reducing average query response time.",
      "Shipped 10+ production features using Git-based feature branches and pull requests within sprint deadlines.",
    ],
    metrics: [
      { label: "detection accuracy", value: "+12%" },
      { label: "detection latency", value: "-30%" },
      { label: "query response time", value: "-18%" },
      { label: "IoT devices controlled", value: "15+" },
    ],
  },
  {
    title: "Software Developer Intern",
    company: "Besseggen Infotech LLP",
    location: "Remote, India",
    dates: "May 2025 – July 2025",
    bullets: [
      "Decreased UI load time by implementing React.js lazy loading and code-splitting across 10+ frontend components.",
      "Streamlined 3+ manual workflows by integrating Node.js and Express.js RESTful APIs.",
      "Resolved 15+ critical production bugs using Postman and monitoring pipelines.",
      "Redesigned 5+ REST API endpoints with the backend team, improving throughput and reliability.",
    ],
    metrics: [
      { label: "UI load time", value: "-20%" },
      { label: "team effort on workflows", value: "-30%" },
      { label: "bug resolution time", value: "-40%" },
      { label: "API throughput", value: "+22%" },
    ],
  },
];

export const achievements = [
  {
    title: "Featured Speaker",
    org: "BBC World Service — What in the World Podcast",
    dates: "April 2026",
    description: "Spoke on graduate employment challenges; episode reached 19,000+ viewers on YouTube.",
  },
  {
    title: "Event Organiser",
    org: "iOS Club Inauguration, VIT Bhopal",
    dates: "Dec 2022",
    description: "Collected 100+ feedback responses to inform future club activities.",
  },
];

export const nav = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];
