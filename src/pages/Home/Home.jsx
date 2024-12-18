import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SocialMedia from "../../components/SocialMedia/SocialMedia";
import PaperPlaneIcon from "../../assets/icons/PaperPlaneIcon";
import MainBtn from "../../components/MainBtn/MainBtn";
import ProjectsIcon from "../../assets/icons/ProjectsIcon";
import ProfileImg from "../../assets/Images/profile-img.webp";
import "./Home.css";

const Home = () => {
  const nameText = "Walid Mostafa";

  const homeInfoV = {
    hidden: {
      x: -50,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 1 },
    },
  };

  const homeImgV = {
    hidden: {
      x: 50,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 1 },
    },
  };

  const nameV = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
  };

  const childNameV = {
    hidden: {
      y: -100,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.1, type: "spring", stiffness: 100 },
    },
  };

  const handV = {
    hidden: {
      rotate: "45deg",
      x: 100,
      opacity: 0,
    },
    visible: {
      rotate: "0deg",
      x: 0,
      opacity: 1,
      transition: { delay: 1.8, duration: 0.2, type: "spring", stiffness: 100 },
    },
  };

  const arrowV = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: { delay: 1.8, duration: 0.2, type: "spring", stiffness: 100 },
    },
  };

  return (
    <section className="Home container d-flex flex-column-reverse align-items-center justify-content-center gap-5 flex-xl-row justify-content-xl-around gap-xl-0">
      <motion.div
        variants={homeInfoV}
        initial="hidden"
        animate="visible"
        className="Home__info d-flex flex-column align-items-center gap-1 gap-md-2"
      >
        <p className="fs-4">{`Hello I'm`}</p>

        <div className="d-flex align-items-center">
          <motion.h1
            className="d-flex"
            variants={nameV}
            initial="hidden"
            animate="visible"
          >
            {nameText.split("").map((name, index) => (
              <motion.span
                className={name === "M" ? "ms-2" : ""}
                variants={childNameV}
                key={index}
              >
                {name}
              </motion.span>
            ))}
          </motion.h1>

          <motion.span
            variants={handV}
            initial="hidden"
            animate="visible"
            className="fs-1 ms-1"
          >
            🖐
          </motion.span>
        </div>

        <h4>
          <motion.span
            variants={arrowV}
            initial="hidden"
            animate="visible"
          ></motion.span>
          FrontEnd Developer
        </h4>
        <div className="d-flex gap-2 mt-2">
          <Link to={"/contact"}>
            <MainBtn active={true}>
              Say Hello
              <PaperPlaneIcon />
            </MainBtn>
          </Link>

          <Link to={"/projects"}>
            <MainBtn>
              My Projects
              <ProjectsIcon />
            </MainBtn>
          </Link>
        </div>

        <SocialMedia />
      </motion.div>

      <motion.div
        variants={homeImgV}
        initial="hidden"
        animate="visible"
        className="Home__profile"
      >
        <div className="Home__profile-img">
          <img
            src={ProfileImg}
            alt="profile-img"
            loading="lazy"
            className="w-100 h-100 object-fit-cover rounded-circle"
          />
          <div className="Home__profile-img-border" />
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
