/* eslint-disable react/prop-types */
import "./Transition.css";
import { motion } from "framer-motion";

const Transition = ({ children }) => {
  const exitPagev = {
    hidden: {
      y: 0,
      opacity: 1,
    },
    exit: {
      y: 100,
      opacity: 0,
      transition: { duration: 1, ease: "easeIn" },
    },
  };

  return (
    <>
      {/* pages */}
      <motion.div
        variants={exitPagev}
        initial="hidden"
        exit="exit"
        className="w-100"
      >
        {children}
      </motion.div>

      {/* slides */}
      <motion.div
        className="slide-motion one"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        exit={{ x: ["0%", "100%"], width: ["0%", "100%"] }}
        transition={{ delay: 0.2, duration: 0.3, ease: "easeInOut" }}
      />
      <motion.div
        className="slide-motion two"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        exit={{ x: ["0%", "100%"], width: ["0%", "100%"] }}
        transition={{ delay: 0.4, duration: 0.3, ease: "easeInOut" }}
      />
      <motion.div
        className="slide-motion three"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        exit={{ x: ["0%", "100%"], width: ["0%", "100%"] }}
        transition={{ delay: 0.6, duration: 0.3, ease: "easeInOut" }}
      />
    </>
  );
};

export default Transition;
