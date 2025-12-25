// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import jQuery from './assets/tech_logo/jQuery.png'


// Experience Section Logo's
import cetpa from './assets/company_logo/cetpa.jpeg';
import united from './assets/company_logo/united.jpeg'

// Education Section Logo's
import vbspu from './assets/education_logo/vbspu.png';

import school from './assets/education_logo/school.jpeg';

// Project Section Logo's
import movierecLogo from './assets/work_logo/movie_rec.png';
import imagesearchLogo from './assets/work_logo/image_search.png';
import removebgLogo from './assets/work_logo/remove_bg.png';
import Grocifylogo from './assets/work_logo/grocify-logo.jpg';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
      { name: 'JQuery', logo: jQuery },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 1,
      img: cetpa,
      role: "Fullstack with MERN",
      company: "Cetpa Intitute of Noida",
      date: "July 2025 - March 2025",
      desc: "Currently pursuing Full Stack MERN internship training at CETPA Infotech, where I am actively contributing to innovative projects as a Fullstack Engineer. I have worked on both frontend and backend development using HTML, CSS, JavaScript, MongoDB, Bootstrap, and ReactJS. I collaborated closely with the team to build responsive, high-performance web applications and enhanced user experience through seamless integration of multiple technologies.",
      skills: [
        "ReactJS",
        "Redux",
        "JavaScript",
        "Tailwind CSS",
        "javaScript",
        "HTML",
        "CSS",
        "Node",
        "Express",
        "MongoDB",
      ],
    },
    {
      id: 2,
      img: united,
      role: "MERN Stack Intern",
      company: "United Univercity",
      date: "june 2024 - August 2024",
      desc: "Worked as a MERN Stack Developer Intern at United University, where I designed and implemented scalable UI components and responsive web applications using React.js, Node.js, MongoDB, and Material UI. Collaborated with the design team to convert Figma wireframes and prototypes into fully interactive, user-friendly interfaces, ensuring smooth functionality and an enhanced user experience.",
      skills: [
        "React",
        "Node",
        "Express",
        "MongoDB",
        "Figma",
        "Material UI",
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: united,
      school: "United University, Prayagraj",
      date: "Sept 2023 - July 2025",
      grade: "7.81 CGPA",
      desc: "I have completed my Master of Computer Applications (MCA) from United University, where I built a strong foundation in programming, software development, and computer science fundamentals. During my studies, I gained hands-on experience in Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I also actively participated in workshops, coding activities, and technical events, which helped me strengthen my practical skills and overall technical growth. My academic experience has played a key role in shaping my problem-solving abilities and preparing me for real-world development challenges.",
      degree: "Master of Computer Applications - MCA",
    },
    {
      id: 1,
      img: vbspu,
      school: "VBSPU Univercity, jaunpur",
      date: "Sept 2020 - Aug 2023",
      grade: "65%",
      desc: "I completed my B.Sc. in PCM from Veer Bahadur Singh Purvanchal University, where I developed a strong understanding of Mathematics, Physics, and Chemistry. Along with my degree, I also completed CCC, DCA, and O Level certifications, which helped me build essential computer fundamentals and strengthen my technical foundation.",
      degree: "Bachelor of Science - BSC (PCM)",
    },
    {
      id: 2,
      img: school,
      school: "Swami Vivekanand Inter college,Azamgarh",
      date: "Apr 2018 - March 2020",
      grade: "56.6",
      desc: "I completed my class 12 education from Swami Vivekanand Inter college, Up Board, where I studied Physics, Chemistry, and Mathematics (PCM).",
      degree: "CBSE(XII) - PCM",
    },
    {
      id: 3,
      img: school,
      school: "Swami Vivekanand Inter college,Azamgarh",
      date: "Apr 2016 - March 2018",
      grade: "66%",
      desc: "I completed my class 10 education from Swami Vivekanand Inter college, Up Board, where I studied Science.",
      degree: "CBSE(X), Science",
    },
  ];



  export const projects = [
    
    
    {
      id: 2,
      title: "Movie Recommendation App",
      description:
        "A React-based web application that provides movie recommendations based on different criteria, such as genres, user preferences, and popular trends. The intuitive design and smooth experience make it a go-to app for movie enthusiasts.",
      image: movierecLogo,
      tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/ranjeetchauhan123/Reach-Project-Movie-Search-APP-",
      webapp: "https://reach-project-movie-search-91c1s9h4i-ranjeet-chauans-projects.vercel.app/",
    },   
    {
      id: 7,
      title: "Image Search App",
      description:
        "A React.js-based image search application that allows users to search and download high-quality images from the web. Built using external APIs to ensure a vast library of results for various queries.",
      image: imagesearchLogo,
      tags: ["React JS", "API", "Search Feature", "CSS", "Javascript"],
      github: "https://github.com/ranjeetchauhan123/Image-search-APP/blob/main/index.html",
      webapp: "https://rawcdn.githack.com/ranjeetchauhan123/Image-search-APP/acd2c278ff49dacdc3eb31c23752af0444067ca6/index.html",
    },
    {
      id: 8,
      title: "Image Background Remover",
      description:
        "An efficient background removal app built with React.js and API integration. Users can upload any image, remove the background, and download the transparent version for further use.",
      image: removebgLogo,
      tags: ["React JS", "API", "Image Processing", "HTML", "CSS", "Javascript"],
      github: "https://github.com/ranjeetchauhan123/Image-background-remover-js-/blob/main/index.html",
      webapp: "https://rawcdn.githack.com/ranjeetchauhan123/Image-background-remover-js-/aa5e7f196ac3f34da231bc7bb7d7cce8b4cfd31d/index.html",
    },
    {
      id: 8,
      title: "Grocery Website (Pending...)",
      description:
        "A responsive grocery e-commerce website built using React.js, styled with Tailwind CSS, data fetched via Fetch API, smooth routing using React Router DOM, and interactive sliders implemented with Swiper.js.",
      image: Grocifylogo,
      tags: ["React JS", "Fetch API","Javascript","Tailwind css","React-Router-Dom", "Swiper","react-icons"],
      github: "https://github.com/ranjeetchauhan123/Grocery-Website-react-",
      webapp: "https://grocery-website-react-1twsjl49v-ranjeet-chauans-projects.vercel.app/",
    },
  ];  