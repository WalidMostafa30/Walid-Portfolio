import GlobalTitle from "../../components/GlobalTitle/GlobalTitle";
import GlobalCard from "../../components/GlobalCard/GlobalCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { services } from "../../assets/data/Data";
import { motion } from "framer-motion";
import "./Services.css";

const Services = () => {
  const servicesV = {
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
    <section className="Services">
      <GlobalTitle title={"Services"} description={"What i offer"} />

      <motion.div
        variants={servicesV}
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
          {services.map((serv, index) => {
            return (
              <SwiperSlide key={index}>
                <GlobalCard
                  head={serv.head}
                  icon={serv.icon}
                  info={serv.info}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </motion.div>
    </section>
  );
};

export default Services;
