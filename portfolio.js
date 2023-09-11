import emoji from "react-easy-emoji";
import hilton_image from "./public/images/Hilton-Hotels.png";
import strawberrynet from "./public/images/Strawberrynet.png";
import chatApplication_image from "./public/images/ChatApplication.png";

export const greetings = {
  name: "Thakoor Chandan",
  title: "Hi all, I'm Thakoor Chandan",
  description:
    "Dynamic Web Developer with a strong background in team collaboration, code analysis, debugging, bug fixing, coupled with a flair for feature development, research and API integration. Committed to crafting efficient and user-centric web applications, backed by a solid skill set in React, Redux, JavaScript and CSS. Seeking a challenging role to leverage skills to contribute to the creation of dynamic and efficient web applications while continuously learning and growing in a fast-paced environment.",
    resumeLink:
    'https://drive.google.com/file/d/1HtPuC2ViSEF5DcGN4eIHvveNL3L30R2_/view?usp=sharing',
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
    {
      skillName: "reactjs",
      fontAwesomeClassname: "vscode-icons:file-type-reactjs",
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "logos:nodejs-icon",
    },
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
    {
      skillName: "git",
      fontAwesomeClassname: "logos:git-icon",
    },
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
    duration: "April 2021 - February 2022",
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
];

export const experience = [
  {
    role: "Associate Software Engineer",
    company: "Tekion Corp",
    companylogo: "/img/icons/common/TekionLogo.png",
    date: "Feb 2022 – Present",
    desc: 'Worked as a frontend web developer for Vehicle Inventory Module on ARC and DRP projects',
    descBullets: [
      "Leveraged React, SCSS, Lodash to craft multiple features for the organization’s DMS web application, ensuring the creating of clean and efficient code for enhanced user experiences.",
      "Created a dynamic trade-in vehicle valuation form by integrating a third-party agency API, resulting in improved performance and an intuitive user interface.",
      "Engineered a dynamic table solution that skillfully filters and presents data sourced from API’s enhancing data visualization and user interaction.",
      "Resolved critical production issues within tight deadlines through adept browser debugging techniques, ensuring seamless application performance.",
      "Collaborated with cross-functional teams to troubleshoot and resolve software issues.",
      "Ensured software quality by conducting unit and integration tests.",
      "Strengthened code quality by crafting comprehensive unit test cases for all newly developed features using jest and the react testing library.",
      "Utilized Agile methodology to manage project timelines and deliverables."
    ],
  },
];

export const projects = [
  {
    name: 'Strawberrynet.com',
    image: strawberrynet,
    desc: 'An E-Commerce website which speciaizes in selling beauty products all over the globe. The website provides 800 brands and 33,000 products of different types of makeup, skincare, body care, fragrances and home scents.',
    stack: ['HTML, ', 'CSS, ', 'Express.js,  ', 'Node.js,  ', 'MongoDb'],
    github: 'https://github.com/akhiladepu/re-clone-strawberrynet',
    link: 'https://strawberrynet-clone-frontend.vercel.app/',
    descBullets: [
      "Filter to sort brand-based products.",
      "Favorite items can be added to the Wishlist.",
      "Order can be tracked using an order ID.",
    ],
  },
  {
    name: 'Hilton-Hotels',
    image: hilton_image,
    desc: "Hilton Hotels & Resorts is Hilton's flagship brand and one of the largest hotel brands in the world. The brand is targeted at both business and leisure travelers with locations in major city centers around the world.",
    stack: [
      'React.js,  ',
      'Material UI,  ',
      'Express.js,  ',
      'Node.js,  ',
      'MongoDb',
    ],
    descBullets: [
      "Sign In / Sign Up",
      "Location-based hotel search",
      "Data displayed on google maps.",
      "Select category and filter by rating.",
      "Select hotels to see prices according to rooms."
    ],
    github: 'https://github.com/thakoorchandan/Hotels-by-Hilton',
    link: 'https://hotels-by-hilton-44jhnnl0y-thakoorchandan.vercel.app/',
  },
  {
    name: 'Chat-Application',
    image: chatApplication_image,
    desc: "This is the project code for my React and Firebase. The app uses React for the frontend, Firestore for real-time messaging, and Firebase Authentication for Email and Password.Storing global context with the Context API Creating custom hooks for consuming context and synchronizing with external data Using unauthenticated and authenticated app components based on the user's authentication state",
    stack: [
      'React.js',
      'Redux',
      'Material UI,  ',
      'Node.js,  ',
      'Firebase',
    ],
    descBullets: [
      "Sign In / Sign Up",
      "Responsive UI",
      "Archived / Un-Archived chats.",
      "Online / Offline toggle that works in real-time.",
      "Media Files and Emojis are supported.",
      "Firebase Integration for the real-time conversations.",
      "Redux is used for state management."
    ],
    github: 'https://github.com/thakoorchandan/chat-app',
    link: 'https://chat-app-xi-bay.vercel.app/',
  },
];
