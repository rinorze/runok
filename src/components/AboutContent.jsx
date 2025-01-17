import aboutIcon1 from "../assets/images/about-1.png";
import aboutIcon2 from "../assets/images/about-2.png";
import "../assets/styles/AboutContent.scss";
import aboutImg from "../assets/images/aboutImg.png";
import { Link } from "react-router-dom";
import { IoMdArrowUp } from "react-icons/io";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="heroSection">
      <div className="heroContent">
        <div className="heroImages">
          <motion.img
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            src={aboutImg}
            alt="Team collaboration"
            className="mainImage"
          />
          <div className="circleDecoration"></div>
        </div>

        <div className="heroText">
          <span className="subtitle">ABOUT OUR COMPANY</span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            We design and develop outstanding Digital Products and digital-first
            Brands.
          </motion.h1>

          <p>
            Platea vehicula rutrum curae magna taciti acut malesuada inceptos
            phasellus massa, eget ultrices tempor lacinia dictumst tincdunt leo
            mollis luctus varius gravida eleifend cursus litora consequat...
          </p>

          <div className="features">
            <div className="featureItem">
              <img className="featureIcon" src={aboutIcon1} />
              <span>Professional Creative Team Members</span>
            </div>
            <div className="featureItem">
              <img className="featureIcon" src={aboutIcon2} />
              <span>Provide Market Standard Service to Client&apos;s</span>
            </div>
          </div>

          <button className="getStarted">
            <Link to="/Contact">Get Started Now </Link>
            <IoMdArrowUp className="arrow" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
