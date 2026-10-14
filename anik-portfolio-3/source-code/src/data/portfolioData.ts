import { SkillItem, ProjectItem, AcademicCourse, EducationItem } from '../types';


export const PERSONAL_INFO = {
  name: "S. M. Naimur Rahman Anik",
  shortName: "Naimur Rahman Anik",
  nickname: "Anik",
  title: "Computer Science & Engineering Student",
  tagline: "Computer Science & Engineering Student | Tech Enthusiast & Aspiring Developer",
  typingPhrases: [
    "CSE Undergraduate Student",
    "Tech Enthusiast",
    "Aspiring Mobile & Web Developer",
    "Computer Science & Engineering Student",
    "Undergraduate at Khwaja Yunus Ali University"
  ],
  bio: "I am a passionate computer science and engineering undergraduate student with a strong drive to learn and innovate. Currently exploring web development, database management, and mobile app development (React Native). I enjoy solving problems, building digital experiences, and continuously expanding my technical toolkit.",
  extendedBio: "Driven by curiosity and a relentless commitment to engineering fundamentals, I immerse myself in both foundational computer science—such as microprocessors, operating systems, and network communications—and modern software stacks. Whether crafting intuitive user interfaces, designing normalized relational database schemas, or experimenting with cross-platform mobile apps in React Native, I treat every project as an opportunity to build robust, impactful solutions.",
  location: "Sirajganj, Bangladesh",
  university: "Khwaja Yunus Ali University",
  college: "Sirajganj Collectorate School and College",
  school: "Sirajganj Sobuj Kanan School and College",
  institution: "Khwaja Yunus Ali University",
  status: "Open to Internships & Collaborative Projects",
  email: "smank.u2023@gmail.com",
  phone: "+8801999459065",
  whatsapp: "+8801999459065",
  whatsappUrl: "https://wa.me/8801999459065?text=Hi%20Naimur%20Rahman%20Anik%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect%21",
  socials: {
    github: "https://github.com/smanik0002",
    facebook: "https://www.facebook.com/cloudboy.anik",
    instagram: "https://www.facebook.com/cloudboy.anik",
    email: "mailto:smank.u2023@gmail.com",
    phone: "tel:+8801999459065"
  },
  images: {
    profile: "images/Anik-1.jpg",
    portrait: "images/Anik-2.jpg"
  }
};

export const EDUCATION_DATA: EducationItem[] = [
  {
    stage: 'University',
    institution: 'Khwaja Yunus Ali University',
    degree: 'B.Sc. in Computer Science & Engineering (CSE)',
    location: 'Sirajganj, Bangladesh',
    period: 'Current Undergraduate',
    status: 'In Progress',
    badge: 'Higher Education',
    highlights: [
      'Focusing on Computer Architecture, Database Systems, and Network Protocols',
      'Hands-on lab experiments with Microprocessors (8086) and SQL Databases',
      'Active exploration of Web & Cross-platform React Native App development'
    ]
  },
  {
    stage: 'College',
    institution: 'Sirajganj Collectorate School and College',
    degree: 'Higher Secondary Certificate (HSC) - Science',
    location: 'Sirajganj, Bangladesh',
    period: 'Higher Secondary',
    status: 'Completed',
    badge: 'College Degree',
    highlights: [
      'Rigorous scientific curriculum in Physics, Chemistry, and Higher Mathematics',
      'Information & Communication Technology (ICT) fundamentals and logic gates',
      'Analytical reasoning and scientific problem solving foundation'
    ]
  },
  {
    stage: 'School',
    institution: 'Sirajganj Sobuj Kanan School and College',
    degree: 'Secondary School Certificate (SSC) - Science',
    location: 'Sirajganj, Bangladesh',
    period: 'Secondary School',
    status: 'Completed',
    badge: 'Secondary Education',
    highlights: [
      'Strong foundational grounding in General Science, Mathematics, and Computer Basics',
      'Developed early passion for technology, logical thinking, and digital systems',
      'Academic discipline and collaborative extracurricular teamwork'
    ]
  }
];

export const SKILLS_DATA: SkillItem[] = [
  {
    id: "html5",
    name: "HTML5",
    category: "Frontend & Mobile",
    level: 90,
    levelLabel: "Advanced",
    description: "Semantic markup, modern web standards, accessibility, canvas, and responsive layouts.",
    iconName: "Code2",
    isHighlight: true
  },
  {
    id: "css3",
    name: "CSS3 & Modern Styling",
    category: "Frontend & Mobile",
    level: 88,
    levelLabel: "Proficient",
    description: "Flexbox, Grid, 3D transforms, custom animations, Tailwind CSS, and responsive fluid design.",
    iconName: "Palette",
    isHighlight: true
  },
  {
    id: "react-native",
    name: "React Native (Basic)",
    category: "Frontend & Mobile",
    level: 70,
    levelLabel: "Intermediate",
    description: "Cross-platform mobile apps for Android & iOS, native navigation, flex styling, and component lifecycles.",
    iconName: "Smartphone",
    isHighlight: true
  },
  {
    id: "database-systems",
    name: "Database Systems (DBMS / SQL)",
    category: "Databases & Tools",
    level: 85,
    levelLabel: "Proficient",
    description: "Relational database design, SQL querying, schema normalization, ACID compliance, and integrity constraints.",
    iconName: "Database",
    isHighlight: true
  },
  {
    id: "problem-solving",
    name: "Problem Solving",
    category: "Core CS & Engineering",
    level: 82,
    levelLabel: "Proficient",
    description: "Algorithmic thinking, time/space complexity analysis, data structure implementations, and competitive coding logic.",
    iconName: "BrainCircuit",
    isHighlight: true
  },
  {
    id: "microprocessors",
    name: "Microprocessors & Architecture",
    category: "Core CS & Engineering",
    level: 76,
    levelLabel: "Academic Core",
    description: "Instruction set architecture, register addressing, memory interfacing, assembly basics, and 8086/ARM concepts.",
    iconName: "Cpu",
    isHighlight: true
  },
  {
    id: "networking",
    name: "Network & Data Communication Basics",
    category: "Core CS & Engineering",
    level: 78,
    levelLabel: "Academic Core",
    description: "OSI & TCP/IP stack layers, IP addressing, routing fundamentals, packet switching, and protocol analysis.",
    iconName: "Network",
    isHighlight: true
  },
  {
    id: "ms-office",
    name: "MS Office Suite (Word, Excel, PowerPoint)",
    category: "Productivity & Office",
    level: 95,
    levelLabel: "Mastery",
    description: "Advanced documentation, formulaic data analysis, automated spreadsheets, dynamic charts, and professional presentation decks.",
    iconName: "FileSpreadsheet",
    isHighlight: true
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "mobile-campus-app",
    title: "React Native Mobile Explorer",
    description: "A sleek cross-platform mobile application featuring smooth tab transitions, offline state caching, and responsive UI designed for student workflows.",
    tags: ["React Native", "JavaScript", "Mobile UI", "Cross-Platform"],
    category: "Mobile",
    githubUrl: "https://github.com/smanik0002",
    stars: 5,
    forks: 2,
    featured: true,
    highlights: [
      "Custom responsive mobile screens with smooth gesture transitions",
      "Asynchronous local storage for offline state resilience",
      "Native component bridge integration with dark mode support"
    ]
  },
  {
    id: "student-db-system",
    title: "Database Management & Academic Portal",
    description: "A normalized relational database system for student records, enrollment tracking, grade processing, and automated reporting queries.",
    tags: ["SQL", "Relational DBMS", "Database Design", "Normalization"],
    category: "Database",
    githubUrl: "https://github.com/smanik0002",
    stars: 4,
    forks: 1,
    featured: true,
    highlights: [
      "3NF normalized database schema eliminating redundant anomalies",
      "Complex SQL joins, subqueries, and stored procedures for fast reporting",
      "Role-based entity relationship mapping for students and faculty"
    ]
  },
  {
    id: "modern-web-portfolio",
    title: "Interactive 3D Portfolio & Showcase",
    description: "A high-performance modern developer portfolio engineered with Three.js particle dynamics, card tilt physics, and responsive Tailwind layouts.",
    tags: ["Three.js", "React", "Tailwind CSS", "3D Transforms"],
    category: "Web",
    githubUrl: "https://github.com/smanik0002",
    stars: 8,
    forks: 3,
    featured: true,
    highlights: [
      "Real-time Three.js particle field with interactive mouse parallax",
      "Subtle 3D perspective card tilt with specular highlights",
      "Full responsive accessibility across mobile, tablet, and ultra-wide screens"
    ]
  },
  {
    id: "dsa-problem-solving",
    title: "Problem Solving & Algorithmic Solutions",
    description: "A curated repository of algorithmic problems, data structures, recursion strategies, and dynamic programming challenges solved with optimal complexity.",
    tags: ["Problem Solving", "Data Structures", "Algorithms", "C++ / JS"],
    category: "Systems & Algorithms",
    githubUrl: "https://github.com/smanik0002",
    stars: 6,
    forks: 2,
    featured: true,
    highlights: [
      "Solutions categorized by Data Structures: Trees, Graphs, Sorting, Hash Maps",
      "Comprehensive benchmark tests and complexity justifications (O(N) vs O(log N))",
      "Clean modular code structure documented with problem statements"
    ]
  },
  {
    id: "microprocessor-assembly-lab",
    title: "Microprocessor 8086 Instruction Simulation",
    description: "Hands-on assembly routines and architecture demonstrations covering register manipulation, interrupt service routines, and memory mapping.",
    tags: ["Microprocessors", "Assembly 8086", "Computer Architecture"],
    category: "Systems & Algorithms",
    githubUrl: "https://github.com/smanik0002",
    stars: 3,
    forks: 1,
    featured: false,
    highlights: [
      "Hardware register state tracking and memory addressing modes",
      "Arithmetic, logical, and string manipulation routine implementations",
      "Interfacing and BIOS/DOS interrupt handler experimentation"
    ]
  },
  {
    id: "network-protocol-analyzer",
    title: "Data Communication & Network Suite",
    description: "Analysis of packet routing, subnet masking calculators, socket communication experiments, and protocol decoding across OSI layers.",
    tags: ["Networking", "TCP/IP", "Socket Programming", "Data Communication"],
    category: "Systems & Algorithms",
    githubUrl: "https://github.com/smanik0002",
    stars: 4,
    forks: 1,
    featured: false,
    highlights: [
      "Subnetting IP address calculator with VLSM allocation logic",
      "Client-Server TCP socket communication demonstration",
      "Packet flow diagrams demonstrating three-way handshakes"
    ]
  }
];

export const ACADEMIC_COURSES: AcademicCourse[] = [
  {
    code: "CSE 311",
    title: "Database Management Systems",
    description: "Core principles of relational DBMS, relational algebra, SQL optimization, schema design, and transaction concurrency.",
    topics: ["Entity-Relationship (ER) Modeling", "SQL Query Optimization", "Normalization (1NF-BCNF)", "ACID & Transactions"],
    icon: "Database"
  },
  {
    code: "CSE 323",
    title: "Microprocessors & Interfacing",
    description: "Internal architecture, instruction set execution, assembly programming, bus timing, and peripheral interfacing.",
    topics: ["8086 Architecture", "Memory Segmentation", "Interrupt Controllers (8259)", "I/O Ports & Timers"],
    icon: "Cpu"
  },
  {
    code: "CSE 335",
    title: "Data Communication & Computer Networks",
    description: "Signals, transmission media, encoding, OSI and TCP/IP models, routing protocols, and transport layer reliability.",
    topics: ["OSI & TCP/IP Layering", "Error Detection & Correction", "Subnetting & Routing Protocols", "Congestion Control"],
    icon: "Network"
  },
  {
    code: "CSE 215",
    title: "Data Structures & Problem Solving",
    description: "Implementation and rigorous time complexity evaluation of fundamental linear and non-linear data structures.",
    topics: ["Linked Lists, Stacks & Queues", "Binary Search Trees & AVL", "Graph Traversals (BFS/DFS)", "Dynamic Programming"],
    icon: "Binary"
  }
];
