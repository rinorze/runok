import { Link } from "react-router-dom";
import "../assets/styles/Cta.scss";
import img from "../assets/images/cta-img-1.png";
import { motion } from "framer-motion";

function Cta() {
  return (
    <div className="heroCta">
      <motion.div
        className="small-text"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        HAVE YOU PROJECT IN MIND?
      </motion.div>

      <div className="heading-container">
        <motion.h2
          className="heading-foreground"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          Let&apos;s make something great together
        </motion.h2>

        <h2 className="heading-background">Get started!</h2>
      </div>

      <div className="image-container">
        <img src={img} alt="Team working together" className="circle-image" />
        <Link to="/Contact" className="arrow-button" aria-label="Contact us">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 12H19M19 12L12 5M19 12L12 19"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}

export default Cta;
