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
    "I am a challenge driven person, with strong teamwork and cooperation skills, I have a passion for learning and teaching.",
  paragraphThree:
    "I started programming during High School and since then I had the opportunity to work with a wide variety of technologies, ranging from robots, microprocessors and 3D printers to designing and developing software.",
  resume: "https://drive.google.com/file/d/1Vdz3n-8ApZKz2loayOa7JwVbN3b3JcYg/view?usp=sharing", // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    title: "React-Messenger",
    img: "alec_pagliarussi_react_messenger_01.jpg",
    info:
      "A messaging app inspired by Slack made with React, Redux and SemanticUI deployed with Firebase",
    info2: "",
    techStack: [
      { id: nanoid(), name: "React" },
      { id: nanoid(), name: "Redux" },
      { id: nanoid(), name: "SemanticUI" },
      { id: nanoid(), name: "Firebase" },
    ],
    url: "https://messenger.alecpagliarussi.me/",
    repo: "https://github.com/AlecBp/react-messenger-public", // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    title: "Dog Breed Classifier",
    img: "alec_pagliarussi_dog_breed_01.JPG",
    info:
      "Dog Breed Classifier is a web app capable of classifying a dog's breed through a single picture.",
    info2:
      "The front end of the application is made primarily with React and the backend is a simple Flask server that utilizes a Convolutional Neural Network developed with Tensorflow 2 to classify any incoming picture, outputting the probability of a given picture to belong to one of the more than 120 different dog breeds.",
    techStack: [
      { id: nanoid(), name: "Tensorflow 2" },
      { id: nanoid(), name: "React" },
      { id: nanoid(), name: "Flask" },
      { id: nanoid(), name: "AWS EC2 and Application Load Balancer" },
    ],
    enableSeeMore: true,
    modalInfo: [
      "Dog Breed Classifier is a web app capable of classifying a dog's breed through a single picture.",
      "The front end of the application is made primarily with React and the backend is a simple Flask server that utilizes a Convolutional Neural Network developed with Tensorflow 2 to classify any incoming picture, outputting the probability of a given picture to belong to one of the more than 120 different dog breeds.",
      "The web app also includes a section explaining many different aspects and challenges of developing and training a Neural Network model to accomplish such a task.",
    ],
    modalImages: [
      {
        id: nanoid(),
        img: "alec_pagliarussi_dog_breed_01.JPG",
        alt: "Dog Breed Classifier home page",
        caption: "Dog Breed Classifier home page.",
      },
      {
        id: nanoid(),
        img: "alec_pagliarussi_dog_breed_03.JPG",
        alt: "Dog Breed Classifier classify an image page",
        caption:
          "In this page the user can choose to upload an image or simply use the camera to capture a new image to classify.",
      },
      {
        id: nanoid(),
        img: "alec_pagliarussi_dog_breed_04.JPG",
        alt: "Tutoring Management System Dashboard",
        caption:
          "This page shows the results of the classified image, breaking down the confidence level for each one of the possible labels.",
      },
      {
        id: nanoid(),
        img: "alec_pagliarussi_dog_breed_05.JPG",
        alt: "Tutoring Management System Dashboard",
        caption:
          "The same data output data is also displayed in the form of a chart for better visualization.",
      },
      {
        id: nanoid(),
        img: "alec_pagliarussi_dog_breed_02.JPG",
        alt: "Dog Breed Classifier documentation page",
        caption:
          "The application also includes a documentation section, in which many of the technical aspects and challenges of developing a Convolutional Neural Network model to solve the dog breed classification are detailed and explained.",
      },
    ],
    url: "https://www.dogbreed.alecpagliarussi.me/",
    // repo: "https://github.com/AlecBp/react-messenger", // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    title: "Tutoring Management System",
    img: "alec_pagliarussi_tutoring_management_system.jpg",
    info:
      "Application dedicated to help community centers to manage their free of charge tutoring programs. Still under development.",
    info2:
      "The system include CRUD operations, complex scheduling algorithm, reporting functionalities, student progress tracking tools, among other tools custom tailored to the community center's needs.",
    techStack: [
      { id: nanoid(), name: "React" },
      { id: nanoid(), name: "NodeJs" },
      { id: nanoid(), name: "GraphQL" },
      { id: nanoid(), name: "PostgreSQL" },
      { id: nanoid(), name: "TypeORM" },
      { id: nanoid(), name: "MaterialUI" },
    ],
    enableSeeMore: false,
    modalInfo: [
      "Application dedicated to help community centers to manage their free of charge tutoring programs.",
      "The system includes CRUD operations, complex scheduling algorithm, reporting functionalities, student progress tracking tools, among other tools custom tailored to the community center's needs.",
    ],
    modalImages: [
      {
        id: nanoid(),
        img: "alec_pagliarussi_tutoring_management_system.jpg",
        alt: "Tutoring Management System Dashboard",
        caption:
          "Screenshot of the system's dashboard, where it is possible to visualize some stats and access any system functionality.",
      }
    ],
    // url: "https://messenger.alecpagliarussi.me/",
    // repo: "https://github.com/AlecBp/react-messenger", // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    title: "Weather Forecast App",
    img: "alec_pagliarussi_react_weather_app.jpg",
    info:
      "A React app that utilizes the OpenWeather API to fetch weather forecast data of any city.",
    info2: "",
    techStack: [{ id: nanoid(), name: "React" }],
    url: "https://weatherapp.alecpagliarussi.me",
    repo: "https://github.com/AlecBp/weather-react", // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    title: "React Spring CRUD",
    img: "alec_pagliarussi_react_spring_crud_02.PNG",
    info: "Simple CRUD application made with Spring Framework and React.",
    info2: "",
    techStack: [
      { id: nanoid(), name: "React" },
      { id: nanoid(), name: "Spring Boot" },
      { id: nanoid(), name: "PostgreSQL" },
      { id: nanoid(), name: "MaterialUI" },
    ],
    enableSeeMore: true,
    modalInfo: ["Simple CRUD application made with Spring Framework and React."],
    modalImages: [
      {
        id: nanoid(),
        img: "alec_pagliarussi_react_spring_crud_01.PNG",
        alt: "React Spring CRUD form screen",
        caption: "",
      },
      {
        id: nanoid(),
        img: "alec_pagliarussi_react_spring_crud_02.PNG",
        alt: "Tutoring Management System Dashboard",
        caption: "Student registration form made with MaterialUI and Formik",
      },
      {
        id: nanoid(),
        img: "alec_pagliarussi_react_spring_crud_03.PNG",
        alt: "React Spring CRUD form screen",
        caption:
          "Validation is performed using the yup validation library alongside Formik to manage the form's state",
      },
      {
        id: nanoid(),
        img: "alec_pagliarussi_react_spring_crud_04.PNG",
        alt: "React Spring CRUD form screen",
        caption:
          "Records are displayed in a table made with the react-table library. This allows for a more performant table, with the capability of filtering results per column, with more than one active filter at once.",
      },
      {
        id: nanoid(),
        img: "alec_pagliarussi_react_spring_crud_05.PNG",
        alt: "React Spring CRUD form screen",
        caption: "Table filter demonstration.",
      },
      {
        id: nanoid(),
        img: "alec_pagliarussi_react_spring_crud_06.PNG",
        alt: "React Spring CRUD form screen",
        caption: "Student profile page.",
      },
    ],
    // url: "https://messenger.alecpagliarussi.me/",
    repo: "https://github.com/AlecBp/react-spring-simple-crud", // if no repo, the button will not show up
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
  {
    id: nanoid(),
    main: "Competitive programming",
    more: "Ranked 11th in Canada and top 12% global in the IEEEXtreme 2020.",
  },
  {
    id: nanoid(),
    main: "Gaming",
    more: "I am a big fan of First Person Shooters and RPGs.",
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
