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
        staggerChildren: 0.1,
        delayChildren: 0.5,
      },
    },
  };

  const cVariants = {
    hidden: {
      y: 50,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.3, type: "spring", stiffness: 100 },
    },
  };
  return (
    <section className="container">
      <GlobalTitle title={"My Skills"} description={"My Technical Level"} />

      <motion.div
        variants={pVariants}
        initial="hidden"
        animate="visible"
        className="rounded-3 d-flex flex-wrap p-3 gap-2 main-bg"
      >
        {skillsData.map((skill, index) => {
          return (
            <motion.div
              variants={cVariants}
              className="flex-grow-1 p-3 rounded-2 text-center"
              style={{
                backgroundColor: "var(--main-bg-color)",
                minWidth: "calc(100% / 4)",
              }}
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
