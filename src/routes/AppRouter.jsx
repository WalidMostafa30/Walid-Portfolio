import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Skills from "../pages/Skills/Skills";
import Projects from "../pages/Projects/Projects";
import Contact from "../pages/Contact/Contact";
import Transition from "../components/Transition/Transition";
import { AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";

const AppRouter = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          index
          element={
            <Transition>
              <Home />
            </Transition>
          }
        />
        <Route
          path="/about"
          element={
            <Transition>
              <About />
            </Transition>
          }
        />
        <Route
          path="/skills"
          element={
            <Transition>
              <Skills />
            </Transition>
          }
        />
        <Route
          path="/projects"
          element={
            <Transition>
              <Projects />
            </Transition>
          }
        />
        <Route
          path="/contact"
          element={
            <Transition>
              <Contact />
            </Transition>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

export default AppRouter;
