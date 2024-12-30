import "../assets/styles/ServiceHero.scss";
import { Link } from "react-router-dom";
import { IoMdArrowUp } from "react-icons/io";

const ContactHero = () => {
  return (
    <section className="serviceHero">
      <div className="heroOverlay"></div>
      <div className="heroContent">
        <div>
          <span className="heroLabel">MAKE AN APPOINTMENT</span>
          <h1 className="heroTitle">Have Any Projects On Minds! Contact Us</h1>
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
