import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { motion } from "framer-motion";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Form.css";

const Form = () => {
  const form = useRef();
  const nameInput = useRef();
  const emailInput = useRef();
  const msgInput = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_pop6u9e", "template_1fec5m9", form.current, {
        publicKey: "gPai4MdxZYKC_X1r0",
      })
      .then(
        () => {
          alert("message sent successfully 🥰");
          nameInput.current.value = null;
          emailInput.current.value = null;
          msgInput.current.value = null;
        },
        (error) => {
          alert("FAILED...", error.text);
          nameInput.current.value = null;
          emailInput.current.value = null;
          msgInput.current.value = null;
        }
      );
  };

  const formV = {
    hidden: {
      x: 50,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: { delay: 0.9, duration: 1 },
    },
  };

  return (
    <motion.form
      ref={form}
      variants={formV}
      initial="hidden"
      animate="visible"
      onSubmit={submitHandler}
      className="Contact__form col-xl-7 d-flex flex-column gap-3"
    >
      <h1>Message me</h1>
      <div className="Contact__form-input main-bg d-flex flex-column p-2 rounded-3">
        <label htmlFor="Name">Name</label>
        <input
          ref={nameInput}
          required
          id="Name"
          type="text"
          name="user_name"
        />
      </div>

      <div className="Contact__form-input main-bg d-flex flex-column p-2 rounded-3">
        <label htmlFor="E-mail">E-mail</label>
        <input
          ref={emailInput}
          required
          id="E-mail"
          type="email"
          name="user_email"
        />
      </div>

      <div className="Contact__form-input main-bg d-flex flex-column p-2 rounded-3">
        <label htmlFor="Message">Message</label>
        <textarea ref={msgInput} required id="Message" name="message" />
      </div>

      <button className="main-btn">
        Send Message <FontAwesomeIcon icon={faPaperPlane} />
      </button>
    </motion.form>
  );
};

export default Form;
