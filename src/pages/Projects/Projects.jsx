import GlobalTitle from "../../components/GlobalTitle/GlobalTitle";
import Project from "../../components/Project/Project";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { ProjectsData } from "../../assets/data/Data";
import { motion } from "framer-motion";
import "./Projects.css";

const Projects = () => {
  const projectsV = {
    hidden: {
      y: 50,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: { delay: 0.5, duration: 1 },
    },
  };

  return (
    <section className="Projects container">
      <GlobalTitle title={"My Projects"} description={"Most Recent Work"} />

      <motion.div
        variants={projectsV}
        initial="hidden"
        animate="visible"
        className="Services__container container"
      >
        <Swiper
          className="Swiper"
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={{ clickable: true, dynamicBullets: true }}
          modules={[EffectCoverflow, Pagination]}
        >
          {ProjectsData.map((pro, index) => {
            return (
              <SwiperSlide key={index}>
                <Project pro={pro} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </motion.div>
    </section>
  );
};

export default Projects;
