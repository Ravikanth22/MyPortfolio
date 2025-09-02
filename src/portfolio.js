import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen
const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 500 // Set animation duration as per your animation
};

// Summary And Greeting Section
const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Ravikanth Reddy Kondreddy",
  title: "Hi all, I'm Ravikanth Reddy",
  subTitle: emoji(
    "a Software Engineer with experience in building scalable, high-performance applications using Java, Spring Boot, React, and cloud technologies. Skilled in microservices, distributed systems, API development, and database optimization. Proven track record of improving system performance, ensuring reliability, and delivering projects on time in fast-paced environments"
  ),
  resumeLink: "https://drive.google.com/file/d/1GXpoOnSNi8Dgi5O9UUApnhJFMrBSHuZF/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Ravikanth22",
  linkedin: "https://www.linkedin.com/in/ravi0322/",
  gmail: "rkondred@usc.edu",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"),
    emoji("⚡ Build the microservices for a backend web and applications"),
    emoji("⚡ Progressive Web Applications in normal and SPA Stacks")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "golang",
      fontAwesomeClassname: "fab fa-gofore"
    },
    {
      skillName: "wordpress",
      fontAwesomeClassname: "fab fa-wordpress"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Southern California",
      logo: require("./assets/images/usc3.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "January 2023 - May 2024",
      desc: "Coursework: Operating Systems; Analysis of Algorithms; Machine Learning; Natural Language Processing; Web Technologies; Database Management Systems; Data Structures & Algorithms; Information Retrieval; Machine Learning ",
      descBullets: [
      ]
    },
    {
      schoolName: "Jawaharlal Nehru Technological University, Hyderabad",
      logo: require("./assets/images/jntuh.jpeg"),
      subHeader: "Bachelor of Technology in Computer Science",
      duration: "August 2017 - June 2021",
      desc: "Relevant Coursework: Operating Systems; Analysis of Algorithms; Machine Learning; Natural Language Processing; Web Technologies; Design Patterns; Compiler Design; Database Management Systems; System Design; Computer Networks; Artificial Intelligence; Data Structures & Algorithms; Big Data and Cloud Computing",
      descBullets: ["Activities and societies: Hosted a Technical Fest(Promethean) as Lead Organizer at JNTUH college."]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "Design",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Developer",
      company: "Everest Computers Inc",
      companylogo: require("./assets/images/everest.jpeg"),
      date: "March 2025 – Present",
      desc: ["Designed Kafka-based microservices with listeners & replay, deployed on GCP (Kubernetes/Cloud Run) for scalable, fault-tolerant processing → +55% API efficiency.", 
      "Built a React + Spring Boot configuration platform backed by MongoDB and LDAP for secure authentication and admin workflows.", 
      "Automated builds, tests, and deployments with GitLab CI/CD, cutting release cycles by 30% and improving reliability."],
    },
    {
      role: "Software Engineer",
      company: "Entain",
      companylogo: require("./assets/images/entain.png"),
      date: "September 2021 – December 2022",
      desc: ["Designed and shipped a wallet platform handling real-time transactions with 99.95% consistency.",
      "Shipped JWT-secured REST APIs, containerized with Docker and orchestrated on Kubernetes for scalable, fault-tolerant microservices.",
    "Ensured correctness & ops readiness with idempotency + optimistic locking, retry/backoff & saga orchestration, and an audit ledger/reconciliation with Prometheus/Grafana monitoring."],
    },
    {
      role: "Software Engineer Trainee",
      company: "Caspex Tech LLP",
      companylogo: require("./assets/images/caspex.jpeg"),
      date: "May 2021 – August 2021",
      desc: ["Normalized and optimized customer credit data using advanced decomposition techniques, ensuring data security and confidentiality. Developed a streamlined FTP solution using Python to transfer files from Mainframe systems to local machines, reducing transfer time by 50%.", 
      "Implemented decision and validation rules for credit data components, achieving a 75% error reduction and significantly improving data accuracy"],
    },
    {
      role: "Software Engineer Associate",
      company: "YM Global Technologies Pvt Ltd",
      companylogo: require("./assets/images/ym_global.png"),
      date: "November 2020 – April 2021",
      desc: ["Built a React + Spring Boot platform for the Singapore Industrial Association, shipping 100% of modules ahead of schedule with clean REST contracts and reusable components.",
      "Used React Hooks and Spring Data JPA, optimized queries/payloads, and ran a Docker Compose prod-like stack → +40% faster APIs and much quicker testing/QA.",
    "Designed a Java/Spark pipeline with Redis caching and 10k-point batching, taking chart renders from 2 min → 5 sec, with robust error handling and monitoring for reliable reporting"]
    },
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "Some major contributions done",
  projects: [
    {
      image: require("./assets/images/enchance.jpg"),
      projectName: "Enhancing Resume Retrieval via Job Description",
      projectDesc: "Built a DPR+BM25 hybrid to semantically match resumes ↔ job descriptions, fine-tuned on 27k samples, achieving 68% ranking accuracy with GPU-based cloud training",
      skills: ["Python", "DPR", "BM25", "GPT-3.5"],
  },
    {
      image: require("./assets/images/pubsub.gif"),
      projectName: "Trojan Careers Alerts (Pub/Sub) Model",
      projectDesc: "Built a distributed pub/sub Trojan Career Alerts platform for real-time job updates using RabbitMQ, Docker/Kubernetes replication, and Java with concurrency control and robust monitoring.",
    },
    {image: require("./assets/images/eventsearch.avif"),
    projectName: "Event search with favorites & sharing",
    projectDesc: "Angular + Node.js web and SwiftUI iOS apps using Ticketmaster for event search/card-table views; added Favorites and one-tap Facebook/Twitter sharing, responsive, accessible, performant.",
    }
  ],

  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Amazon Web Services",
      subtitle:
        "AWS Certified Cloud Practitioner",
      image: require("./assets/images/awscloud.png"),
      imageAlt: "Amazon Web Serivices",
      footerLink: [
        {
          name: "AWS Level 0",
          url: ""
        }
      ]
    },
    {
      title: "Super Rookie Award",
      subtitle:
        "Super Rookie Award for Kafka Enablement at Entain",
      image: require("./assets/images/rewards.avif"),
      imageAlt: "Super Rookie Award Entain",
      footerLink: [
        {
          name: "Rookie Award",
          url: ""
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "Subtitle",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "URL",
      title: "TITLE",
      description:
        "DESCRIPTION"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: "Reach Out to me!",
  subtitle: "Discuss a project or just want to say hi? My inbox is open for all.",
  pitch: "Full-stack engineer (Java/Spring, React, Kafka). I ship fast, secure, and reliable systems.",
  email_address: "rkondred@usc.edu",
  phone: "804-988-7319",
  location: "San Jose, California",
  resume: "https://your-resume-link",
  calendly: "https://calendly.com/your-slot",
  photo: require("./assets/images/ravikanth.jpeg"),
  photoAlt: "Ravikanth Reddy — profile photo",
  extra: [
    { label: "LinkedIn", value: "linkedin.com/in/ravi0322", href: "https://linkedin.com/in/ravi0322" }
  ]
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
  resumeSection,
};
