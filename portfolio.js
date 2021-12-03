import emoji from "react-easy-emoji";
import hilton_image from "./public/images/Hilton-Hotels.png";
import strawberrynet from "./public/images/Strawberrynet.png";

export const greetings = {
  name: "Thakoor Chandan",
  title: "Hi all, I'm Thakoor Chandan",
  description:
    "Software Engineer who loves to transform ideas into reality using code and developing web applications using the latest front-end and UI/UX technologies and full-fledged APIs. Motivated designer and developer with experience creating custom websites with ReactJs, Node, Express, Mongo, and React JS.",
  resumeLink:
    "https://drive.google.com/file/d/1ksyzvyWheHgbZuw13_aTTGt6JaXALw9h/view?usp=sharing",
};

export const openSource = {
  githubUserName: "thakoorchandan",
};

export const socialLinks = {
  facebook: "https://www.facebook.com/cherrychandantakur",
  instagram: "https://www.instagram.com/chandansingh__inc/?hl=en",
  twitter: "https://twitter.com/thakoor_chandan",
  github: "https://github.com/thakoorchandan",
  linkedin: "https://www.linkedin.com/in/thakoor-chandan-4a78b5106/",
};

export const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web applications"
    ),
    emoji("⚡  Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as MongoDB/ AWS / Digital Ocean"
    ),
  ],

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "vscode-icons:file-type-html",
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "vscode-icons:file-type-css",
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "logos:sass",
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "logos:javascript",
    },
    // {
    //   skillName: "TypeScript",
    //   fontAwesomeClassname: "logos:typescript-icon",
    // },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "vscode-icons:file-type-reactjs",
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "logos:nodejs-icon",
    },
    // {
    //   skillName: "flutter",
    //   fontAwesomeClassname: "logos:flutter",
    // },
    // {
    //   skillName: "swift",
    //   fontAwesomeClassname: "vscode-icons:file-type-swift",
    // },
    {
      skillName: "npm",
      fontAwesomeClassname: "vscode-icons:file-type-npm",
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "vscode-icons:file-type-sql",
    },
    {
      skillName: "mongoDB",
      fontAwesomeClassname: "vscode-icons:file-type-mongo",
    },
    // {
    //   skillName: "aws",
    //   fontAwesomeClassname: "logos:aws",
    // },
    // {
    //   skillName: "firebase",
    //   fontAwesomeClassname: "logos:firebase",
    // },
    // {
    //   skillName: "python",
    //   fontAwesomeClassname: "logos:python",
    // },
    {
      skillName: "git",
      fontAwesomeClassname: "logos:git-icon",
    },
    // {
    //   skillName: "docker",
    //   fontAwesomeClassname: "logos:docker-icon",
    // },
  ],
};

export const SkillBars = [
  {
    Stack: "Frontend/Design", //Insert stack or technology you have experience in
    progressPercentage: "90", //Insert relative proficiency in percentage
  },
  {
    Stack: "Backend",
    progressPercentage: "80",
  },
  {
    Stack: "Programming",
    progressPercentage: "75",
  },
];

export const educationInfo = [
  {
    schoolName: "MASAI SCHOOL",
    subHeader: "Full Stack Web Development",
    duration: "April 2021 - December 2021",
    desc: "Pursued Full-Stack Web Development Bootcamp.",
    descBullets: [
      "MERN Stack",
      "Data Structures and Algorithms",
      "Soft skills",
      "Hackathons",
    ],
  },
  {
    schoolName: "Vivekananda Institute of Tech and Sci",
    subHeader: "Computer Science and Engineering",
    duration: "August 2016 - December 2020",
    desc: "Recieved Young Scientist Award in my first year",
    descBullets: [
      "Operating Systems",
      "Database Management System",
      "Basics of Programming",
      "Software Engineering Basics",
    ],
  },
  // {
  //   schoolName: "TS Model School",
  //   subHeader: "Intermediate",
  //   duration: "September 2014 - April 2016",
  //   //     desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
  //   //     descBullets: ["Lorem ipsum dolorfdg sit amet, consectetur adipiscing elit"],
  // },
];

export const projects = [
  {
    name: "Strawberrynet.com",
    image: strawberrynet,
    desc: "An E-Commerce website which speciaizes in selling beauty products all over the globe. The website provides 800 brands and 33,000 products of different types of makeup, skincare, body care, fragrances and home scents.",
    stack: ["HTML, ", "CSS, ", "Express.js,  ", "Node.js,  ", "MongoDb"],
    github: "https://github.com/akhiladepu/re-clone-strawberrynet",
    link: "https://strawberrynet-clone-frontend.vercel.app/",
  },
  {
    name: "Hilton-Hotels",
    image: hilton_image,
    desc: "Hilton Hotels & Resorts is Hilton's flagship brand and one of the largest hotel brands in the world. The brand is targeted at both business and leisure travelers with locations in major city centers around the world.",
    stack: [
      "React.js,  ",
      "Material UI,  ",
      "Express.js,  ",
      "Node.js,  ",
      "MongoDb",
    ],
    github: "https://github.com/thakoorchandan/Hotels-by-Hilton",
    link: "https://hotels-by-hilton-44jhnnl0y-thakoorchandan.vercel.app/",
  },
];
