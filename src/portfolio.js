import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 1000
};

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Fernando Ferrarazzo",
  title: "Hey everyone, I'm Fernando",
  subTitle: emoji(
    "Software engineer 👨‍💻, with vast experience in leading developers teams"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1Ii-6VDeX8i6k_9JUokg69uGvSrJXGdBp/view", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

const socialMediaLinks = {
  github: "https://github.com/ferferrarazzo",
  linkedin: "https://www.linkedin.com/in/fernando-ferrarazzo/",
  gmail: "fernando.ferrarazzo@gmail.com",
  display: true
};

const profilePicture = {
  // Your profile picture
  // You can change the path to your own image
  // If you want to use a static image, set animated to false
  animated: false,
  image: require("./assets/images/profilePicture.png"),
  display: true // Set false to hide this section, defaults to true
};
// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "Engineering leader focused on building empowered teams, delivering scalable solutions, and growing products users love.",
  skills: [
    emoji("🧭 Lead cross-functional teams with empathy, clarity, and strong technical alignment"),
    emoji("⚙️ Design and implement robust backend architectures and cloud-native solutions"),
    emoji("🔍 Drive quality, reliability, and continuous improvement through best engineering practices")
  ],

  softwareSkills: [
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "jenkins",
      fontAwesomeClassname: "fab fa-jenkins"
    },
    {
      skillName: "kubernetes",
      fontAwesomeClassname: "fas fa-user-circle"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
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
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "Jira",
      fontAwesomeClassname: "fab fa-jira"
    },
    {
      skillName: "Figma",
      fontAwesomeClassname: "fab fa-figma"
    },
    {
      skillName: "Scrum",
      fontAwesomeClassname: "fas fa-user-circle"
    }
  ],
  display: true
};

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Universidad del Salvador",
      logo: require("./assets/images/usalLogo.png"),
      subHeader: "Bachelor of Software Engineering",
      duration: "March 2009 - December 2016"
    }
  ]
};

const techStack = {
  viewSkillBars: false
};

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Engineering Manager",
      company: "Salesforce",
      companylogo: require("./assets/images/salesforceLogo.png"),
      date: "Jan 2022 - Jan 2025",
      desc: "Led technical strategy and team development for large-scale Salesforce solutions, balancing delivery with team health and customer success.",
      descBullets: [
        "Managed a high-performing team across multiple projects, fostering collaboration and technical excellence",
        "Worked closely with customers and stakeholders to define roadmaps and resolve escalations",
        "Enabled faster releases through planning, QA coordination, and incident resolution"
      ]
    },
    {
      role: "Senior Software Engineer",
      company: "Salesforce",
      companylogo: require("./assets/images/salesforceLogo.png"),
      date: "2018 - 2021",
      desc: "Led development of platform features and served as technical liaison with customers during key launches and incidents.",
      descBullets: [
        "Took ownership of complex features from design to deployment and implementation",
        "Collaborated on release management, performance monitoring, and postmortems",
        "Mentored junior engineers and contributed to hiring efforts"
      ]
    },
    {
      role: "QA Software Engineer",
      company: "MuleSoft",
      companylogo: require("./assets/images/muleSoftLogo.png"),
      date: "2017 - 2018",
      desc: "Designed and executed quality strategies for core MuleSoft products, ensuring scalability and performance.",
      descBullets: [
        "Created and maintained automated test suites",
        "Investigated and triaged customer-reported bugs",
        "Collaborated with developers to embed quality in the SDLC"
      ]
    },
    {
      role: "Software Developer",
      company: "Tek Genesis",
      companylogo: require("./assets/images/tekgenesisLogo.png"),
      date: "2016 - 2017",
      desc: "Worked on enterprise-grade software applications with a focus on performance and maintainability.",
      descBullets: [
        "Built reusable backend services in Java",
        "Participated in code reviews and agile ceremonies",
        "Contributed to system architecture decisions"
      ]
    },
    {
      role: "BPM Consultant",
      company: "BesySoft",
      companylogo: require("./assets/images/besysoftLogo.png"),
      date: "2014 - 2016",
      desc: "Implemented BPM solutions for clients across different industries.",
      descBullets: [
        "Developed workflows using BPM",
        "Integrated BPM solutions with client systems",
        "Trained client teams on BPM tools and processes"
      ]
    }
  ]
};

const openSource = {
  showGithubProfile: "true",
  display: true
};

const bigProjects = {
  title: "Stuff I Made",
  subtitle: "Some of the projects you worked on",
  projects: [
    {
      image: require("./assets/images/giftpoolLogo.png"),
      projectName: "projectName",
      projectDesc: "A projectDescription",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://projectDesc.app/"
        }
      ]
    }
  ],
  display: true
};

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements and Certifications I've earned!",

  achievementsCards: [
    {
      title: "US Patent Granted",
      subtitle:
        "Wrote, submitted, and received a patent for structuring web apps through a specification file.",
      image: require("./assets/images/usptoLogo.png"),
      imageAlt: "USPTO Logo",
      footerLink: [
        {
          name: "Patent",
          url: "https://patents.google.com/patent/US10977011B2/en"
        }
      ]
    },
    {
      title: "AWS Certified Cloud Practitioner",
      subtitle:
        "Obtained a score of 834 on the AWS Certified Cloud Practitioner certification exam.",
      image: require("./assets/images/awsCertifiedCloudPractitioner.png"),
      imageAlt: "AWS Certified Cloud Practitioner Logo",
      footerLink: [
        {
          name: "Certificate",
          url: "https://drive.google.com/file/d/1unydJb7Xe3u1UNBm4NX_u5r8_DofpE5t/view?usp=sharing"
        }
      ]
    }
  ],
  display: true
};

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false
};

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I do not have a podcast yet, but I am planning to start one soon.",

  // Please Provide with Your Podcast embeded Link
  podcast: [],
  display: false
};

const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+32-663469477",
  email_address: "fernando.ferrarazzo@gmail.com"
};

const twitterDetails = {
  userName: "twitter",
  display: false
};

const isHireable = true;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  profilePicture,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
