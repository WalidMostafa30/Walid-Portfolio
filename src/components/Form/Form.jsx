import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Form.css";
import Swal from "sweetalert2";
import MainBtn from "../MainBtn/MainBtn";
import PaperPlaneIcon from "../../assets/icons/PaperPlaneIcon";

const Form = () => {
  const form = useRef();
  const nameInput = useRef();
  const emailInput = useRef();
  const msgInput = useRef();
  const [isLoading, setIsLoading] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await emailjs.sendForm(
        "service_pop6u9e",
        "template_1fec5m9",
        form.current,
        {
          publicKey: "gPai4MdxZYKC_X1r0",
        }
      );

      Swal.fire({
        icon: "success",
        title: "Message sent successfully",
        showConfirmButton: false,
        timer: 1500,
      });
      nameInput.current.value = "";
      emailInput.current.value = "";
      msgInput.current.value = "";
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Failed to send message. Please try again later.",
        showConfirmButton: false,
        timer: 1500,
      });
      console.error("Error sending email:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const formV = {
    hidden: {
      x: 50,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: { delay: 0.5, duration: 1 },
    },
  };

  return (
    <motion.form
      ref={form}
      variants={formV}
      initial="hidden"
      animate="visible"
      onSubmit={submitHandler}
      className={`Contact__form col-xl-7 d-flex flex-column gap-2 ${
        isLoading ? "disabled" : ""
      }`}
    >
      <h1 className="mb-1">Message me</h1>
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

      <MainBtn
        className=" border-0 bg-transparent "
        disabled={isLoading}
        style={{ pointerEvents: isLoading && "none" }}
      >
        {isLoading ? "Sending  " : "Send Message"}
        {isLoading ? (
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : (
          <PaperPlaneIcon />
        )}
      </MainBtn>
    </motion.form>
  );
};

export default Form;
