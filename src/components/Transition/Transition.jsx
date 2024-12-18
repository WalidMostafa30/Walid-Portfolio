/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

const Transition = ({ children }) => {
  const exitPagev = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { duration: 1, ease: "easeIn" },
    },
    exit: {
      y: 100,
      opacity: 0,
      transition: { duration: 0.7, ease: "easeIn" },
    },
  };

  return (
    <motion.div
      variants={exitPagev}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="h-100 overflow-y-auto"
    >
      {children}
    </motion.div>
  );
};

export default Transition;
