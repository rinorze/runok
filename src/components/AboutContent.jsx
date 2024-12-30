import aboutIcon1 from "../assets/images/about-1.png";
import aboutIcon2 from "../assets/images/about-2.png";
import "../assets/styles/AboutContent.scss";
import aboutImg from "../assets/images/aboutImg.png";
import { Link } from "react-router-dom";
import { IoMdArrowUp } from "react-icons/io";

const HeroSection = () => {
  return (
    <section className="heroSection">
      <div className="heroContent">
        <div className="heroImages">
          <img src={aboutImg} alt="Team collaboration" className="mainImage" />
          <div className="circleDecoration"></div>
        </div>

        <div className="heroText">
          <span className="subtitle">ABOUT OUR COMPANY</span>

          <h1>
            We design and develop outstanding Digital Products and digital-first
            Brands.
          </h1>

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
