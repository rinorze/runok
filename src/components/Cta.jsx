import { Link } from "react-router-dom";
import "../assets/styles/Cta.scss";
import img from "../assets/images/cta-img-1.png";

function Cta() {
  return (
    <div className="heroCta">
      <div className="small-text">HAVE YOU PROJECT IN MIND?</div>

      <div className="heading-container">
        <h1 className="heading-foreground">
          Let&apos;s make something great together
        </h1>

        <h1 className="heading-background">Get started!</h1>
      </div>

      <div className="image-container">
        <img src={img} alt="Team working together" className="circle-image" />
        <Link to="/Contact" className="arrow-button">
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
