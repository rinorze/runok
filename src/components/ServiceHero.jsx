import "../assets/styles/ServiceHero.scss";
import { Link } from "react-router-dom";
import { IoMdArrowUp } from "react-icons/io";
import { motion } from "framer-motion";

const ContactHero = () => {
  return (
    <section className="serviceHero">
      <div className="heroOverlay"></div>
      <div className="heroContent">
        <div>
          <span className="heroLabel">MAKE AN APPOINTMENT</span>
          <motion.h2
            className="heroTitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            Have Any Projects On Minds! Contact Us
          </motion.h2>
        </div>
        <button className="heroButton">
          <Link to="/Contact">Get Started Now </Link>
          <IoMdArrowUp className="arrow" />
        </button>
      </div>
    </section>
  );
};

export default ContactHero;
