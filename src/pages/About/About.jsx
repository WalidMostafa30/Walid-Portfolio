import GlobalTitle from "../../components/GlobalTitle/GlobalTitle";
import CV from "../../assets/CV/Walid-Mostafa-CV.pdf";
import labtop from "../../assets/Images/labtop.webp";
import hand from "../../assets/Images/HandCoding.webp";
import { aboutInfo } from "../../assets/data/Data";
import { motion } from "framer-motion";
import "./About.css";
import FileIcon from "../../assets/icons/FileIcon";
import MainBtn from "../../components/MainBtn/MainBtn";

const About = () => {
  const aboutImgV = {
    hidden: {
      y: -50,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: { delay: 0.5, duration: 1 },
    },
  };

  const tBodt = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1, delayChildren: 0.5 },
    },
  };

  const trV = {
    hidden: {
      x: 50,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 1, type: "spring", stiffness: 100 },
    },
  };

  const btnV = {
    hidden: {
      x: 50,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: { delay: 1, duration: 1, type: "spring", stiffness: 100 },
    },
  };

  return (
    <section>
      <GlobalTitle title={"About Me"} description={"My Introduction"} />

      <div className="container d-flex justify-content-between">
        <motion.div
          variants={aboutImgV}
          initial="hidden"
          animate="visible"
          className="About__img d-none d-xl-block position-relative col-5"
        >
          <img loading="lazy" src={labtop} alt="img" className="labtop w-100" />
          <img loading="lazy" src={hand} alt="img" className="hand" />
        </motion.div>

        <div className="About__info col-12 col-xl-6 d-flex flex-column">
          <table className="About__info-table">
            <motion.tbody variants={tBodt} initial="hidden" animate="visible">
              {aboutInfo.map((info, index) => (
                <motion.tr
                  variants={trV}
                  key={index}
                  className="About__info-box main-bg"
                >
                  <td>
                    <h4>{info.title}</h4>
                  </td>
                  <td>
                    <p>{info.info}</p>
                    {info.info2 && <p>{info.info2}</p>}
                  </td>
                </motion.tr>
              ))}
            </motion.tbody>
          </table>

          <motion.a
            variants={btnV}
            initial="hidden"
            animate="visible"
            download=""
            href={CV}
            className="mt-2"
            style={{ width: "fit-content" }}
          >
            <MainBtn>
              Downloud CV
              <FileIcon />
            </MainBtn>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default About;
