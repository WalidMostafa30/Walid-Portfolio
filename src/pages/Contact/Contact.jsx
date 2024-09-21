import GlobalTitle from "../../components/GlobalTitle/GlobalTitle";
import GlobalCard from "../../components/GlobalCard/GlobalCard";
import Form from "../../components/Form/Form";
import { motion } from "framer-motion";
import { contactInfo } from "../../assets/data/Data";
import "./Contact.css";

const Contact = () => {
  const contactsV = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2, delayChildren: 0.5 },
    },
  };

  const childContactsV = {
    hidden: {
      x: -50,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 1, type: "spring", stiffness: 100 },
    },
  };

  return (
    <section className="Contact">
      <GlobalTitle title={"Contact Me"} description={"Get In Touch"} />

      <div className="Contact__container container d-flex flex-column flex-xl-row justify-content-between gap-5">
        <motion.div
          variants={contactsV}
          initial="hidden"
          animate="visible"
          className="Contact__talkToMe col-xl-4 d-flex flex-column gap-3"
        >
          {contactInfo.map((contact, index) => {
            return (
              <motion.div
                variants={childContactsV}
                key={index}
                className="Contact__Card"
              >
                <a href={contact.link} target="_blank">
                  <GlobalCard
                    head={contact.head}
                    icon={contact.icon}
                    info={contact.info}
                  />
                </a>
              </motion.div>
            );
          })}
        </motion.div>

        <Form />
      </div>
    </section>
  );
};

export default Contact;
