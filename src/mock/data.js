import { nanoid } from "nanoid";

// HEAD DATA
export const headData = {
  title: "Alec Pagliarussi", // e.g: 'Name | Developer'
  lang: "en", // e.g: en, es, fr, jp
  description: "Alec Pagliarussi - Software Developer based in Toronto, ON", // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: "I am",
  name: "Alec Pagliarussi",
  subtitle: "Software Developer based in Toronto",
  // "I solve problems and turn ideas into reality"
  // I can turn your ideas into reality!
  cta: "",
};

// ABOUT DATA
export const aboutData = {
  img: "Alec_Pagliarussi_Profile_picture.jpg",
  paragraphOne:
    "Currently taking the last semester of the Computer Programmer Analyst program at George Brown College and looking for a position as Software Developer after graduation.",
  paragraphTwo:
    "I am a challenge driven person, with strong teamwork and cooperation, I have a passion for learning and teaching.",
  paragraphThree:
    "I started programming during High School and since then I had the opportunity to work with a wide variety of technologies and things, ranging from robots, microprocessors and 3D printers to designing and developing software.",
  resume: "https://drive.google.com/file/d/1Vdz3n-8ApZKz2loayOa7JwVbN3b3JcYg/view?usp=sharing", // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: "alec_pagliarussi_react_messenger.jpg",
    title: "React-Messenger",
    info:
      "A messaging app inspired by Slack made with React, Redux and SemanticUI deployed with Firebase",
    info2: "",
    url: "https://messenger.alecpagliarussi.me/",
    repo: "https://github.com/AlecBp/react-messenger", // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: "alec_pagliarussi_react_weather_app.jpg",
    title: "Weather Forecast App",
    info:
      "A React app that utilizes the OpenWeather API to fetch weather forecast data of any city.",
    info2: "",
    url: "https://weatherapp.alecpagliarussi.me",
    repo: "https://github.com/AlecBp/weather-react", // if no repo, the button will not show up
  },
];

// EXPERIENCE DATA
export const experienceData = [
  {
    id: nanoid(),
    title: "Software Engineer",
    type: "Contract",
    company: "Developing a system for Working Women Community Center",
    location: "Toronto, Ontario, Canada",
    from: "April 2020",
    to: "Present",
    info: "",
    info2: "",
    info3: "",
    bullets: [
      "Project in partnership with the Working Women Community Center’s to develop a web application capable of managing their tutoring program.",
      "The project scope consists of a complex and large data collection process, scheduling, reports/statistics, among other tools tailored specifically for the client’s needs.",
      "Tech stack: Typescript, React, NodeJs, GraphQL and PostgreSQL.",
    ],
  },
  {
    id: nanoid(),
    title: "Tutor and Teacher Assistant",
    company: "George Brown College",
    type: "Part-time",
    location: "Toronto, Ontario, Canada",
    from: "January 2019 to August 2020 and February 2021",
    to: "Present",
    info: "",
    info2: "",
    info3: "",
    bullets: [
      "Totalized more than 850 hours of work, helping students to succeed in their program by providing one-to-one tutoring sessions on the following topics: HTML, CSS, Javascript, C#, Python, Java, C++, PHP, MySQL, Math, CCNA, Data Structures and Algorithms.",
      "Assist lab instructors during their classes.",
      "Plan and run in-class tutoring sessions as additional classes that students can attend to reinforce their understanding of the weekly content.",
    ],
  },
  {
    id: nanoid(),
    title: "Software Engineer",
    company: "George Brown College",
    type: "Contract",
    location: "Toronto, Ontario, Canada",
    from: "August 2020",
    to: "February 2021",
    info: "",
    info2: "",
    info3: "",
    bullets: [
      "Engineered and developed a web application that enabled seniors, who are part of home care homes across the US and Canada, to meet online and access a curated library of content served during weekly sessions as a way to combat isolation, a phenomenon that was aggravated by the COVID-19 situation.",
      "The application scope included CRUD operations for many entities, system scheduled tasks, real-time communication through web sockets, authentication and detailed and customizable authorization levels.",
      "Tech stack: ReactJS, NodeJS, GraphQL, MongoDB, Redis and Twilio API.",
      "Deployed on AWS using best practices to achieve elasticity and scalability.",
    ],
  },
  {
    id: nanoid(),
    title: "Extracurrilar Robotics Teacher",
    company: "Colegio Jean Piaget",
    type: "Full-time",
    location: "Santos, Sao Paulo, Brazil",
    from: "January 2015",
    to: "January 2018",
    info: "",
    info2: "",
    info3: "",
    bullets: [
      "Taught and trained students to participate in many Robotics competitions, achieving outstanding results.",
      "Close involvement in teaching students from Kindergarten to High School to introduce logical thinking to algorithm basics and a soft introduction to programming.",
    ],
  },
];

// CONTACT DATA
export const contactData = {
  cta: "",
  btn: "",
  email: "alec.paglia@gmail.com",
};

// OTHER INTERESTS DATA
export const interestsData = [
  {
    id: nanoid(),
    main: "Competitive programming",
    more: "Placed 10th in Canada in the IEEEXtreme 2020.",
  },
  {
    id: nanoid(),
    main: "Robotics",
    more:
      "Took part in a quite a few competitions during High School, got a few gold medals on the way.",
  },
  {
    id: nanoid(),
    main: "3D Printing",
    more:
      "This probably ties back to the Robotics topic, perfect match... I own a 3D printer and it is always awesome to play around with some designs.",
  },
];

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: nanoid(),
    //   name: 'twitter',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: "linkedin",
      url: "https://www.linkedin.com/in/alecbp/",
    },
    {
      id: nanoid(),
      name: "github",
      url: "https://github.com/AlecBp",
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
