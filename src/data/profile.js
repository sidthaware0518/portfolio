// ============================================================================
//  👋  PERSONAL DATA — auto-filled from your resume. Edit anything freely.
//  Everything shown on the site comes from this file.
// ============================================================================

export const profile = {
  // ---- Basic identity ----
  name: "Siddheshwar Thaware",
  // Roles shown with the typing animation in the hero section:
  titles: [
    "Associate Data Scientist",
    "AI & Machine Learning Enthusiast",
    "Python Developer",
    "SQL Developer",
    "Data Analyst",
  ],
  location: "Pune, Maharashtra, India",
  email: "sid.t05.18@gmail.com",
  phone: "+91 7558788603",
  // Domain-specific resumes — the hero "Download Resume" button opens a menu of these.
  // Add/reorder freely; the first entry is treated as the default/primary resume.
  resumes: [
    { label: "Data Scientist", url: "/resumes/Siddheshwar-Thaware-Data-Scientist.pdf" },
    { label: "Data Analyst", url: "/resumes/Siddheshwar-Thaware-Data-Analyst.pdf" },
    { label: "Python Developer", url: "/resumes/Siddheshwar-Thaware-Python-Developer.pdf" },
    { label: "SQL Developer", url: "/resumes/Siddheshwar-Thaware-SQL-Developer.pdf" },
  ],
  resumeUrl: "/resumes/Siddheshwar-Thaware-Data-Scientist.pdf", // default (kept for backward compat)
  photo: "/profile.jpg", // save your headshot as public/profile.jpg (falls back to initials)

  // ---- Social links ----
  socials: {
    github: "https://github.com/sidthaware0518",
    linkedin: "https://www.linkedin.com/in/sidthaware0518",
    twitter: "",
  },
  githubUsername: "sidthaware0518",

  // ---- Hero tagline & objective ----
  tagline:
    "Entry-level Data Scientist building high-accuracy predictive models with Python, SQL & Machine Learning — passionate about leveraging Generative AI to solve real business problems.",
  objective:
    "Analytical and growth-oriented entry-level Data Scientist currently pursuing an M.Sc. in Data Science. Proven track record in building high-accuracy predictive models (98% accuracy) and developing data-driven Proof of Concepts (POCs). Skilled in Python, SQL, and Machine Learning libraries, and passionate about leveraging Generative AI and modern AI frameworks to solve complex business challenges in a collaborative Agile environment.",
};

// ---- About section ----
export const about = {
  intro:
    "I'm an aspiring Data Scientist currently pursuing my M.Sc. in Data Science. I love turning real-world data into accurate predictive models and practical Proof of Concepts — combining strong Python & SQL fundamentals with a hands-on, project-first mindset.",
  highlights: [
    {
      title: "Data Science & ML",
      text: "Built predictive models reaching 98% accuracy using feature engineering and rigorous evaluation.",
    },
    {
      title: "Python & SQL (Advanced)",
      text: "Strong fundamentals in data wrangling, analysis, and efficient relational database querying.",
    },
    {
      title: "Generative AI & Learning",
      text: "Passionate about modern AI frameworks; actively learning TensorFlow & PyTorch and Neural Networks.",
    },
    {
      title: "Problem Solver",
      text: "POC development, REST APIs and analytical thinking in collaborative Agile environments.",
    },
  ],
  // Quick stats shown as counters
  stats: [
    { label: "Model Accuracy", value: "98%" },
    { label: "BCA CGPA", value: "8.92" },
    { label: "Projects Built", value: "3+" },
    { label: "Records Analyzed", value: "10K+" },
  ],
};

// ---- Skills (value = proficiency % for the progress bar) ----
export const skills = [
  {
    category: "Programming",
    items: [
      { name: "Python (Advanced)", value: 90 },
      { name: "SQL (Advanced)", value: 88 },
      { name: "Java (Basic)", value: 55 },
      { name: "OOPS", value: 80 },
    ],
  },
  {
    category: "Machine Learning & AI",
    items: [
      { name: "Scikit-Learn", value: 85 },
      { name: "Predictive Modeling", value: 85 },
      { name: "Feature Engineering", value: 82 },
      { name: "Statistical Analysis", value: 80 },
    ],
  },
  {
    category: "Libraries & Visualization",
    items: [
      { name: "Pandas", value: 88 },
      { name: "NumPy", value: 85 },
      { name: "Matplotlib", value: 82 },
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "MySQL", value: 85 },
      { name: "CRUD Operations", value: 82 },
    ],
  },
  {
    category: "Tools & Workflow",
    items: [
      { name: "Jupyter Notebook", value: 88 },
      { name: "VS Code", value: 90 },
      { name: "Git", value: 80 },
      { name: "Agile Methodologies", value: 78 },
    ],
  },
  {
    category: "Web & Core Concepts",
    items: [
      { name: "HTML5 & CSS3", value: 80 },
      { name: "Bootstrap", value: 60 },
      { name: "REST APIs", value: 75 },
      { name: "POC Development", value: 85 },
    ],
  },
];

// ---- Projects ----
export const projects = [
  {
    name: "Predictive Analysis of Teen Digital Addiction",
    problem:
      "Detect smartphone/digital addiction patterns in teenagers early, to support timely intervention and better wellbeing.",
    dataset: "10,000+ behavioral records covering usage, sleep, and academic performance.",
    tech: ["Python", "Scikit-Learn", "Pandas", "NumPy", "Matplotlib", "Feature Engineering"],
    features: [
      "Feature engineering on large behavioral datasets",
      "Trained & evaluated machine learning models",
      "Analyzed usage, sleep, and academic performance patterns",
    ],
    results: "Achieved 98% accuracy in predicting smartphone addiction patterns.",
    impact:
      "Improves behavioral pattern insights, enabling early intervention for teen digital wellbeing.",
    image: "",
    github: "https://github.com/sidthaware0518", // TODO: link the exact repo
    demo: "",
  },
  {
    name: "Airline Reservation & Management System",
    problem:
      "Airline support teams needed faster resolution of recurring ticketing issues and better visibility into trends.",
    dataset: "Airline ticket & booking transaction data.",
    tech: ["Python", "SQL", "MySQL", "Pandas"],
    features: [
      "SQL + Python ticket analysis system",
      "Identified recurring issues and trends through data analysis",
      "Automated reporting in Python for faster troubleshooting",
    ],
    results: "Reduced issue resolution time by 20%.",
    impact: "Faster troubleshooting and measurable service-quality improvement.",
    image: "",
    github: "https://github.com/sidthaware0518", // TODO: link the exact repo
    demo: "",
  },
  {
    name: "CineRate — Full-Stack Movie Rating Platform",
    problem:
      "Movie fans lacked one place to browse films, see real IMDb ratings, and track their own ratings & watchlist.",
    dataset: "Live movie data via the OMDb API (titles, ratings, cast, genres).",
    tech: ["React", "Node.js", "Express", "SQLite", "REST API", "JWT Auth"],
    features: [
      "Search & browse movies with real IMDb ratings",
      "Secure user accounts with JWT authentication",
      "Personal 1–10 ratings, site-wide averages & watchlist",
    ],
    results: "A fully deployed full-stack web app handling auth, a database, and a third-party API.",
    impact: "Demonstrates end-to-end engineering: API design, security, and cloud deployment.",
    image: "",
    github: "https://github.com/suyoug/cinerate",
    demo: "https://cinerate-xonm.onrender.com",
  },
];

// ---- Experience timeline ----
export const experience = [
  {
    role: "Full-Stack Development Project — CineRate",
    org: "Self-directed Project",
    period: "2026",
    points: [
      "Designed, built and deployed a full-stack movie rating platform end to end.",
      "Implemented REST APIs, JWT authentication and a SQLite database.",
      "Shipped a live, cloud-hosted application with a public URL.",
    ],
  },
  {
    role: "Machine Learning Project Work",
    org: "Academic / Self-directed",
    period: "2024 — 2025",
    points: [
      "Built a predictive model achieving 98% accuracy on 10,000+ records.",
      "Applied feature engineering, model evaluation and statistical analysis.",
      "Developed data-driven Proof of Concepts (POCs).",
    ],
  },
  {
    role: "Python Full Stack with Data Science — Training",
    org: "FirstBit Solutions, Pune",
    period: "2024 — 2025",
    points: [
      "Intensive training in Python, SQL, Machine Learning and Data Analysis.",
      "Hands-on practice with Pandas, NumPy, Scikit-Learn and MySQL.",
      "Worked with REST APIs, CRUD operations and Agile methodologies.",
    ],
  },
];

// ---- Certifications ----
export const certifications = [
  {
    name: "Python Full Stack with Data Science",
    issuer: "FirstBit Solutions, Pune — Python, SQL, Machine Learning, Data Analysis",
    year: "2025",
  },
];

// ---- Education timeline ----
export const education = [
  {
    degree: "M.Sc. in Data Science",
    org: "Savitribai Phule Pune University",
    period: "Pursuing",
    points: ["Advanced study in Data Science, Machine Learning and Statistics."],
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    org: "Swami Ramanand Teerth Marathwada University, Nanded",
    period: "2022 — 2025",
    points: ["CGPA: 8.92 / 10 (May 2025).", "Foundations in programming, databases and software development."],
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    org: "Maharashtra State Board, Pune",
    period: "2021 — 2022",
    points: ["Percentage: 83.50%."],
  },
];

// ---- Achievements ----
export const achievements = [
  "Built a machine learning model with 98% accuracy on 10,000+ behavioral records.",
  "Reduced issue resolution time by 20% through SQL & Python ticket analysis.",
  "Graduated BCA with a strong 8.92 CGPA.",
  "Designed and deployed a full-stack web application (CineRate) end to end.",
  "Pursuing M.Sc. in Data Science while continuously building real projects.",
];

// ---- Blog (future articles) ----
export const blog = [
  { title: "Python Tutorials for Data Science", tag: "Python", excerpt: "Practical Python tips for cleaning and analyzing data.", date: "Coming soon" },
  { title: "SQL Queries Every Analyst Should Know", tag: "SQL", excerpt: "Joins, window functions, and aggregations explained simply.", date: "Coming soon" },
  { title: "How I Hit 98% Accuracy on a Real ML Project", tag: "ML", excerpt: "Feature engineering and evaluation lessons from my addiction-prediction POC.", date: "Coming soon" },
  { title: "My Data Science Roadmap", tag: "Career", excerpt: "The exact path I'm following to become a Data Scientist.", date: "Coming soon" },
  { title: "Generative AI Trends Worth Watching", tag: "AI", excerpt: "Emerging trends shaping the future of AI and analytics.", date: "Coming soon" },
];
