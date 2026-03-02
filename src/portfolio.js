// Change this file to get your Personal Portfolio

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

// Splash Screen
const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

// Illustration
const illustration = {
  animated: true
};

// Greeting
const greeting = {
  username: "Aya Abdo",
  title: "Hi, I'm Aya 👋",
  subTitle: emoji(
    "AI Student 💙 | Data Analyst | Interested in Machine Learning & Computer Vision 🚀"
  ),
  resumeLink: "",
  displayGreeting: true
};

// Social Media
const socialMediaLinks = {
  github: "https://github.com/your-username",
  linkedin: "https://www.linkedin.com/",
  gmail: "your-email@gmail.com",
  display: true
};

// Skills
const skillsSection = {
  title: "What I Do",
  subTitle: "AI & DATA SCIENCE ENTHUSIAST",
  skills: [
    emoji("⚡ Data Analysis using Python (Pandas, NumPy)"),
    emoji("⚡ Machine Learning & Model Building"),
    emoji("⚡ Computer Vision using YOLO"),
    emoji("⚡ Data Visualization (Matplotlib, Seaborn)")
  ],
  softwareSkills: [
    { skillName: "python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "tensorflow", fontAwesomeClassname: "fas fa-brain" },
    { skillName: "pandas", fontAwesomeClassname: "fas fa-database" },
    { skillName: "numpy", fontAwesomeClassname: "fas fa-calculator" },
    { skillName: "git", fontAwesomeClassname: "fab fa-git-alt" }
  ],
  display: true
};

// Education
const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Faculty of Computers and Information",
      subHeader: "Artificial Intelligence Department",
      duration: "2022 - 2026",
      desc: "Studying AI, Machine Learning, Data Science and Computer Vision"
    }
  ]
};

// Tech Stack
const techStack = {
  viewSkillBars: true,
  experience: [
    { Stack: "Data Analysis", progressPercentage: "85%" },
    { Stack: "Machine Learning", progressPercentage: "75%" },
    { Stack: "Programming (Python)", progressPercentage: "80%" }
  ],
  displayCodersrank: false
};

// Work Experience (ممكن تسيبيه فاضي لو لسه)
const workExperiences = {
  display: false,
  experience: []
};

// Open Source
const openSource = {
  showGithubProfile: "true",
  display: true
};

// Projects
const bigProjects = {
  title: "Projects",
  subtitle: "MY PROJECTS IN AI & DATA SCIENCE",
  projects: [
    {
      projectName: "Fraud Detection System",
      projectDesc:
        "Machine learning model to detect fraudulent transactions",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/"
        }
      ]
    },
    {
      projectName: "Student Monitoring System",
      projectDesc:
        "Computer Vision project to detect cheating using camera",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/"
        }
      ]
    }
  ],
  display: true
};

// Achievements
const achievementSection = {
  title: emoji("Achievements 🏆"),
  subtitle: "My Certifications & Achievements",
  achievementsCards: [],
  display: false
};

// Blogs
const blogSection = {
  title: "Blogs",
  subtitle: "I share what I learn",
  displayMediumBlogs: "false",
  blogs: [],
  display: false
};

// Talks
const talkSection = {
  title: "Talks",
  subtitle: "",
  talks: [],
  display: false
};

// Podcast
const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "",
  podcast: [],
  display: false
};

// Resume
const resumeSection = {
  title: "Resume",
  subtitle: "Download my resume",
  display: true
};

// Contact
const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Feel free to reach out 💙",
  number: "+20 11 59313117",
  email_address: "aya2003abdelwahab@gmail.com"
};

// Twitter
const twitterDetails = {
  userName: "",
  display: false
};

const isHireable = true;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
