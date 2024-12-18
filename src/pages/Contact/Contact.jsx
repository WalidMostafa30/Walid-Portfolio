import GlobalTitle from "../../components/GlobalTitle/GlobalTitle";
import Form from "../../components/Form/Form";
import { motion } from "framer-motion";
import { contactInfo } from "../../assets/data/Data";
import "./Contact.css";
import EmailIcon from "../../assets/icons/EmailIcon";
import WhatsAppIcon from "../../assets/icons/WhatsAppIcon";
import LinkedInIcon from "../../assets/icons/LinkedInIcon";
import FaceBookIcon from "../../assets/icons/FaceBookIcon";
import InstaIcon from "../../assets/icons/InstaIcon";

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

      <div className="Contact__container container d-flex flex-column flex-xl-row justify-content-between gap-3">
        <motion.div
          variants={contactsV}
          initial="hidden"
          animate="visible"
          className="Contact__talkToMe col-xl-4 d-flex flex-column gap-2"
        >
          {contactInfo.map((contact, index) => {
            return (
              <motion.div
                variants={childContactsV}
                key={index}
                className="Contact__Card"
              >
                <a href={contact.link} target="_blank">
                  <div className="GlobalCard main-bg d-flex align-items-center gap-2 rounded-2 p-2">
                    {contact.head === "E-mail" ? (
                      <EmailIcon />
                    ) : contact.head === "Whatsapp" ? (
                      <WhatsAppIcon />
                    ) : contact.head === "LinkedIn" ? (
                      <LinkedInIcon />
                    ) : contact.head === "Facebook" ? (
                      <FaceBookIcon />
                    ) : (
                      <InstaIcon />
                    )}

                    <div>
                      <h3>{contact.head}</h3>
                      <p className="fs-5">{contact.info}</p>
                    </div>
                  </div>
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
