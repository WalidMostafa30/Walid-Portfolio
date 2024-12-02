import myPortfolioImg from "../Images/projectsImgs/portfolio.webp";
import MiniStoreImg from "../Images/projectsImgs/ecom.webp";
import GuessGameImg from "../Images/projectsImgs/guess-game.webp";
import QuranImg from "../Images/projectsImgs/quran-app.webp";
import todoListimg from "../Images/projectsImgs/todo-list.webp";
import weatherimg from "../Images/projectsImgs/weather-app.webp";
import quizimg from "../Images/projectsImgs/quiz-app.webp";
import DragTodoImg from "../Images/projectsImgs/drag-drop-todo.webp";
import ageCalculatorImg from "../Images/projectsImgs/age-calculator.webp";
import ticTacToeImg from "../Images/projectsImgs/tic-tac-toe.webp";
import calculatorImg from "../Images/projectsImgs/calculator.webp";
import memoryGameImg from "../Images/projectsImgs/memoryGame.webp";

import {
  faDesktop,
  faHeadset,
  faMobileScreen,
  faWandMagicSparkles,
} from "@fortawesome/free-solid-svg-icons";
import {
  faEnvelope,
  faLightbulb,
  faObjectGroup,
} from "@fortawesome/free-regular-svg-icons";
import { faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

// *************************************************

export const navLinks = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Skills", link: "/skills" },
  { name: "Services", link: "/services" },
  { name: "Projects", link: "/projects" },
  { name: "Contact", link: "/contact" },
];

export const aboutInfo = [
  {
    title: "Name",
    info: "Walid Mostafa Elshazly",
  },
  {
    title: "Age",
    info: "23",
  },
  {
    title: "Location",
    info: "Egypt, Mansoura",
  },
  {
    title: "Education",
    info: "BACHELOR'S DEGREE IN COMPUTER SCIENCE.",
    info2: "GRADUATION YEAR: 2022 - 2023",
  },
  {
    title: "Summary",
    info: "Experienced Frontend Developer specializing in building dynamic and responsive web applications with React and Next.js. Proficient in modern JavaScript (ES6+), TypeScript, and Redux Toolkit, ensuring scalable and maintainable solutions. Skilled in creating reusable components, optimizing performance, integrating RESTful APIs, and managing authentication flows. Dedicated to delivering user-friendly interfaces with a strong focus on UX/UI design principles and clean code practices.",
  },
];

export const services = [
  {
    head: "Web Development",
    icon: faDesktop,
    info: "I can build a website by using HTML, CSS, JavaScript and REACT",
  },
  {
    head: "Responsive Design",
    icon: faMobileScreen,
    info: "your website well be responsive for all devices: Tablets ans Smart phones",
  },
  {
    head: "Creative Design",
    icon: faObjectGroup,
    info: "i can edit your current website by adding a new content to make it much better",
  },
  {
    head: "Web ideas",
    icon: faLightbulb,
    info: "i could turn your ideas into a real projects with high quality",
  },
  {
    head: "Retouch",
    icon: faWandMagicSparkles,
    info: "I can help you by redesign your current website to looks much better",
  },
  {
    head: "Support",
    icon: faHeadset,
    info: "Support is available if you wanna make any changes for your website after delivering it",
  },
];

export const contactInfo = [
  {
    head: "E-mail",
    icon: faEnvelope,
    info: "walidmoustafa436@gmail.com",
    link: "https://walidmoustafa436@gmail.com",
  },
  {
    head: "Whatsapp",
    icon: faWhatsapp,
    info: "0106 525 4159",
    link: "https://wa.me/201065254159",
  },
  {
    head: "LinkedIn",
    icon: faLinkedin,
    info: "Walid Mostafa",
    link: "https://www.linkedin.com/in/walid-m0stafa-",
  },
];

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Bootstrap",
  "Tailwind",
  "TypeScript",
  "Next JS",
  "Redux",
  "Redux/Toolkit",
  "Sass",
  "Git",
  "GitHub",
  "Responsive Design",
  "Framer Motion",
];

export const ProjectsData = [
  {
    title: "My Portfolio",
    img: myPortfolioImg,
    github: "https://github.com/WalidMostafa30/Walid-Portfolio",
    demo: "https://walid-portfolio-2001.netlify.app/",
  },
  {
    title: "Mini Store",
    img: MiniStoreImg,
    github: "https://github.com/WalidMostafa30/E-commerce-jsonserver",
    demo: "https://ecommerce-ministore.netlify.app/",
  },
  {
    title: "Quran App",
    img: QuranImg,
    github: "https://github.com/WalidMostafa30/Quran-App",
    demo: "https://al-mostafa-app.vercel.app/",
  },
  {
    title: "Todo List",
    img: todoListimg,
    github: "https://github.com/WalidMostafa30/Todo-List",
    demo: "https://todo-list-2o01.netlify.app/",
  },
  {
    title: "Weather App",
    img: weatherimg,
    github: "https://github.com/WalidMostafa30/Weather-App",
    demo: "https://weather-app-2o24.netlify.app/",
  },
  {
    title: "Draggable To-DO",
    img: DragTodoImg,
    github: "https://github.com/WalidMostafa30/Drag_Drop_Todo",
    demo: "https://drag-drop-todo-2001.netlify.app/",
  },
  {
    title: "Quiz App",
    img: quizimg,
    github: "https://github.com/WalidMostafa30/Quiz-App",
    demo: "https://quiz-app-1022.netlify.app/",
  },
  {
    title: "Tic-Tac-Toe",
    img: ticTacToeImg,
    github: "https://github.com/WalidMostafa30/tic-tac-toe",
    demo: "https://walidmostafa30.github.io/tic-tac-toe/",
  },
  {
    title: "Guess Game",
    img: GuessGameImg,
    github: "https://github.com/WalidMostafa30/Guess-Game",
    demo: "https://walidmostafa30.github.io/Guess-Game/",
  },
  {
    title: "Age Calculator",
    img: ageCalculatorImg,
    github: "https://github.com/WalidMostafa30/Age-calculation",
    demo: "https://walidmostafa30.github.io/Age-calculation/",
  },
  {
    title: "Calculator",
    img: calculatorImg,
    github: "https://github.com/WalidMostafa30/Calculator",
    demo: "https://walidmostafa30.github.io/Calculator/",
  },
  {
    title: "Memory Game",
    img: memoryGameImg,
    github: "https://github.com/WalidMostafa30/Memory-game",
    demo: "https://walidmostafa30.github.io/Memory-game/",
  },
];
