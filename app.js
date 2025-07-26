const express = require('express');
const path = require('path');
const app = express();

// Set view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Data (would normally come from a database)
const resumeData = {
  name: "Saksham Singh",
  title: "Computer Science Undergraduate | Data Science Specialist",
  contact: {
    phone: "+91 9818258522",
    email: "sakshamsingh0806@gmail.com",
    github: "github.com/saksham0806",
    linkedin: "linkedin.com/in/saksham-singh0806/",
    leetcode: "leetcode.com/u/sakshamsingh0806/"
  },
  education: [
    {
      degree: "B.Tech in Computer Science (Data Science)",
      institution: "Vellore Institute of Technology",
      gpa: "9.02",
      coursework: "Data Structures, Algorithms, Operating Systems, Computer Networks, Digital Logic Design, Database Management Systems, Machine Learning"
    },
    {
      degree: "Senior Secondary (Class 12)",
      institution: "Seth Anandram Jaipuria School",
      percentage: "91.4%"
    }
  ],
  skills: {
    languages: ["Python", "JavaScript", "Java", "C", "C++", "SQL", "LaTeX"],
    frameworks: ["React", "Node.js", "Express.js", "Django", "Flask"],
    webTech: ["HTML5", "CSS3", "RESTful APIs"],
    databases: ["MySQL", "PostgreSQL", "MongoDB"],
    tools: ["Git", "GitHub", "VS Code", "Linux", "IBM Cloud", "Docker", "Kubernetes"],
    other: ["Data Structures", "Algorithms", "Object-Oriented Programming", "Full-Stack Development", "Software Engineering", "Agile Scrum"]
  },
  achievements: [{
    name:"BU x Berkeley SkyDeck Fund Hackathon 2025 — Bangkok University, Thailand",
    link:"https://drive.google.com/file/d/1WtNeBibewjs3FukKWdOBCKBWu9qvAphl/view?usp=sharing"
  },
  {
    name: "Central Hack' 25 2025 — VIT University, Vellore",
    link: "https://drive.google.com/file/d/1gJlmruItML8ROLgiKEKyx9mqtfA_CYYN/view?usp=sharing"
  },
  {
    name: "Technica 2024 — VIT University, Vellore",
    link: "https://drive.google.com/file/d/13IigebmVdTomDPefuzwG3NhUlVKKhAU4/view?usp=sharing"
  }
  ],
  projects: [
    {
      name: "Trading Simulator Web App",
      description: "Developed a secure full-stack trading simulator using React, Node.js, Express, and PostgreSQL. Implemented session-based log-in, RESTful API integration, and real-time updates using sockets. Set up and maintained the user database on Supabase for optimized performance and security.",
      link: "https://github.com/saksham0806/Trading-Simulator",
      image: "Trading_Simulator.png"
    },
    {
      name: "Personal Portfolio Website",
      description: "Created a mobile-responsive personal portfolio using HTML5, CSS3, JavaScript, and GitHub Pages. Embedded Google Analytics and added accessibility support.",
      link: "#",
      image: "personal.png"
    }
  ],
  certifications: [
    {
      name: "Python for Data Science",
      issuer: "NPTEL, IIT Madras 2024",
      link: "https://archive.nptel.ac.in/content/noc/NOC24/SEM2/Ecertificates/106/noc24-cs68/Course/NPTEL24CS68S24950027902737774.pdf"
    },
    {
      name: "IBM Full Stack Software Developer Professional Certificate",
      issuer: "Coursera June 2025",
      description: "Includes training on HTML, CSS, JavaScript, React, Node.js, Python, Flask, Cloud Computing, DevOps",
      link: "https://coursera.org/share/e3c492bf2b784d13df60f5cc7a527d8b"
    },
    {
      name: "Problem Solvers: Mastering Data Structures \& Algorithm Certificate",
      issuer: "FacePrep",
      link: "https://drive.google.com/file/d/1CEnbGHRYqa8pnMnu5DjOGSzY_blmPgrx/view?usp=sharing"
    }
  ],
  languages: [
    "English: Professional Working Proficiency",
    "Hindi: Native Fluency"
  ],
  softSkills: [
    "Analytical Thinking", "Leadership", "Communication", "Collaboration",
    "Time Management", "Critical Reasoning", "Adaptability", "Emotional Intelligence"
  ]
};

// Routes
app.get('/', (req, res) => {
  res.render('index', { data: resumeData });
});

app.get('/about', (req, res) => {
  res.render('about', { data: resumeData });
});

app.get('/projects', (req, res) => {
  res.render('projects', { data: resumeData });
});

app.get('/skills', (req, res) => {
  res.render('skills', { data: resumeData });
});

app.get('/contact', (req, res) => {
  res.render('contact', { data: resumeData });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});