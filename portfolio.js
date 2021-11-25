import emoji from "react-easy-emoji";
import hilton_image from "./public/images/Hilton-Hotels.png";
import strawberrynet from "./public/images/Strawberrynet.png";
import { Document, page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
// const resumeLnk = ""

export const greetings = {
  name: "Thakoor Chandan",
  title: "Hi all, I'm Thakoor Chandan",
  description:
    "I love building websites, A novice MERN stack developer, passionate about developing user-friendly and creative websites.",
  resumeLink: "",
};

export const openSource = {
  githubUserName: "thakoorchandan",
};

export const contact = {};

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
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
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
    // desc: "",
    // descBullets: [
    //   "Lorem ipsum dolor sit amet, consectetur adipdfgiscing elit",
    //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    // ],
  },
  {
    schoolName: "Vivekananda Institute of Tech and Sci",
    subHeader: "Computer Science and Engineering",
    duration: "August 2016 - December 2020",
    //     desc: "Recieved Young Scientist Award in my first year",
    //     descBullets: [
    //       "I was the Class Representative",
    //       "Actively participated in many workshops",
    //     ],
  },
  {
    schoolName: "TS Model School",
    subHeader: "Intermediate",
    duration: "September 2014 - April 2016",
    //     desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
    //     descBullets: ["Lorem ipsum dolorfdg sit amet, consectetur adipiscing elit"],
  },
];

// export const experience = [
//   {
//     role: "Software Engineer",
//     company: "Google",
//     companylogo: "/img/icons/common/google.svg",
//     date: "June 2018 – Present",
//     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//     descBullets: [
//       "Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
//     ],
//   },
//   {
//     role: "Front-End Developer",
//     company: "Github",
//     companylogo: "/img/icons/common/github.svg",
//     date: "May 2017 – May 2018",
//     desc: "Lorem ipsum dolor sit amet, consefdctetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//   },
//   {
//     role: "Software Engineer Intern",
//     company: "Airbnb",
//     companylogo: "/img/icons/common/airbnbLogo.png",
//     date: "Jan 2015 – Sep 2015",
//     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//   },
// ];

export const projects = [
  {
    name: "Strawberrynet.com",
    image: strawberrynet,
    desc: "An E-Commerce website which speciaizes in selling beauty products all over the globe. The website provides 800 brands and 33,000 products of different types of makeup, skincare, body care, fragrances and home scents.",
    github: "https://github.com/akhiladepu/re-clone-strawberrynet",
    link: "https://strawberrynet-clone-frontend.vercel.app/",
  },
  {
    name: "Hilton-Hotels",
    image: hilton_image,
    desc: "Hilton Hotels & Resorts is Hilton's flagship brand and one of the largest hotel brands in the world. The brand is targeted at both business and leisure travelers with locations in major city centers around the world.",
    github: "https://github.com/thakoorchandan/Hotels-by-Hilton",
    link: "https://hotels-by-hilton-44jhnnl0y-thakoorchandan.vercel.app/",
  },
];

export const feedbacks = [
  {
    name: "Hassan Mehmood",
    feedback:
      "We have been very happy with our new website! It looks professional and very easy to navigate. Our experience with the customer service at Hanzla tauqeer has been great. They handle things very efficiently and are available for any questions we have. They also keep us updated on daily reports so we know how our site is doing. I would recommend that u have choose hanzla web developer services for u.",
  },
  {
    name: "Maheen Altaf",
    feedback:
      "We have been very happy with our new website! It looks professional and very easy to navigate. Our experience with the customer service at Hanzla tauqeer has been great. They handle things very efficiently and are available for any questions we have. They also keep us updated on daily reports so we know how our site is doing. I would recommend that u have choose hanzla web developer services for u.",
  },
];
