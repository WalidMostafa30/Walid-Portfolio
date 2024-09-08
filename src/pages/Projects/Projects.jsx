import GlobalTitle from "../../components/GlobalTitle/GlobalTitle";
import { ProjectsData } from "../../assets/data/Data";
import Project from "../../components/Project/Project";
import { motion } from "framer-motion";
import "./Projects.css";

const Projects = () => {
  const projectsV = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2, delayChildren: 0.9 },
    },
  };

  const childProjectsV = {
    hidden: {
      y: -50,
      x: -50,
      opacity: 0,
    },
    visible: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: { duration: 1, type: "spring", stiffness: 100 },
    },
  };

  return (
    <section className="Projects container">
      <GlobalTitle title={"My Projects"} description={"Most Recent Work"} />

      <motion.div
        variants={projectsV}
        initial="hidden"
        animate="visible"
        className="Projects__container row m-auto row-cols-lg-2 row-cols-xl-3 g-3"
      >
        {ProjectsData.map((pro, index) => {
          return (
            <motion.div variants={childProjectsV} key={index}>
              <Project pro={pro} />
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default Projects;
