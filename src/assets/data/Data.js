import myPortfolioImg from "../Images/walid-portfolio.webp";
import MiniStoreImg from "../Images/mini-store.webp";
import GuessGameImg from "../Images/guess-game.webp";
import QuranImg from "../Images/quran-app.webp";
import todoListimg from "../Images/todo-list-ts.webp";
import weatherimg from "../Images/weather-app.webp";
import quizimg from "../Images/quiz-app.webp";
import DragTodoImg from "../Images/to-do.webp";
import ProfileImg from "../Images/profile.webp";
import ageCalculatorImg from "../Images/age-calculator.webp";
import ticTacToeImg from "../Images/tic-tac-toe.webp";
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
    info: "Walid Mostafa Elsayed Abdelrahman",
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
    info: "Experienced front-end developer with a strong focus on building dynamic and responsive web applications using React. Proficient in utilizing modern JavaScript (ES6+), TypeScript, and Redux Toolkit for state management, ensuring scalable and maintainable code. Expertise in creating reusable components, optimizing performance, and implementing best practices in clean code. Skilled in integrating RESTful APIs, handling asynchronous data fetching with createAsyncThunk, and managing authentication flows. Committed to delivering user-friendly interfaces with a keen eye for detail and UX/UI design principles.",
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
    github: "https://github.com/WalidMostafa30/Mini-store",
    demo: "https://mini-store1122.netlify.app/",
  },
  {
    title: "Quran App",
    img: QuranImg,
    github: "https://github.com/WalidMostafa30/Quran-App",
    demo: "https://quran-app2001.netlify.app/",
  },
  {
    title: "Todo List",
    img: todoListimg,
    github: "https://github.com/WalidMostafa30/Todo-list-TS-",
    demo: "https://todo-list-ts2001.netlify.app/",
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
    github: "https://github.com/WalidMostafa30/ToDo-DD",
    demo: "https://dd-todo-list10.netlify.app/",
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
    title: "Profile",
    img: ProfileImg,
    github: "https://github.com/WalidMostafa30/templet",
    demo: "https://walidmostafa30.github.io/templet/",
  },
];
