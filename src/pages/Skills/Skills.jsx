import "./Skills.css";
import GlobalTitle from "../../components/GlobalTitle/GlobalTitle";
import { skillsData } from "../../assets/data/Data";
import { motion } from "framer-motion";

const Skills = () => {
  const pVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.4,
        duration: 1,
        staggerChildren: 0.15,
        delayChildren: 0.5,
      },
    },
  };

  const cVariants = {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.3, type: "spring", stiffness: 100 },
    },
  };
  return (
    <section className="Skills container">
      <GlobalTitle title={"My Skills"} description={"My Technical Level"} />

      <motion.div
        variants={pVariants}
        initial="hidden"
        animate="visible"
        className="Skills__container main-bg"
      >
        {skillsData.map((skill, index) => {
          return (
            <motion.div
              variants={cVariants}
              className="Skills__skill"
              key={index}
            >
              <h4>{skill}</h4>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default Skills;
