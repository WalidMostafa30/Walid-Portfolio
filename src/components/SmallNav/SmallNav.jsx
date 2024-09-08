import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks } from "../../assets/data/Data";
import "./SmallNav.css";

const SmallNav = () => {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => setShowNav((prevState) => !prevState);

  const renderNavLinks = () =>
    navLinks.map(({ name, link }) => (
      <NavLink
        key={name}
        className="SmallNav__link"
        to={link}
        onClick={toggleNav}
      >
        <motion.span
          initial={{
            x: 10,
            y: 10,
            opacity: 0,
            borderEndEndRadius: "400%",
          }}
          animate={{
            x: 0,
            y: 0,
            opacity: 1,
            borderEndEndRadius: "0%",
          }}
          transition={{
            delay: 0.5,
            duration: 0.5,
          }}
          exit={{
            x: 10,
            y: 10,
            opacity: 0,
            borderEndEndRadius: "400%",
          }}
        >
          {name}
        </motion.span>
      </NavLink>
    ));

  return (
    <div className="SmallNav">
      <div
        className="SmallNav__BarsMenu Nav-icon d-flex d-xl-none"
        onClick={toggleNav}
      >
        <FontAwesomeIcon icon={faBars} />
      </div>

      <AnimatePresence>
        {showNav && (
          <motion.div
            initial={{
              left: "-100%",
              borderTopRightRadius: "100%",
              borderBottomRightRadius: "100%",
            }}
            animate={{
              left: "0",
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0,
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            exit={{
              left: "-100%",
              borderTopRightRadius: "100%",
              borderBottomRightRadius: "100%",
            }}
            className="SmallNav__Nav d-flex d-xl-none overflow-hidden"
          >
            <div
              className="SmallNav__close Nav-icon d-flex d-xl-none"
              onClick={toggleNav}
            >
              <FontAwesomeIcon icon={faClose} />
            </div>

            {renderNavLinks()}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SmallNav;
