import "../assets/styles/AboutContentTwo.scss";
import aboutImg from "../assets/images/aboutImgTwo.png";
import { Link } from "react-router-dom";
import { IoMdArrowUp } from "react-icons/io";

const HeroSection = () => {
  return (
    <section className="heroSectionTwo">
      <div className="heroContent">
        <div className="heroImages">
          <img src={aboutImg} alt="Team collaboration" className="mainImage" />
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
