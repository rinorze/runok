import "../assets/styles/Hero.scss";
import { Link } from "react-router-dom";
import heroImg from "../assets/images/hero-img-4.png";
import Button from "./common/Button";

export default function Hero() {
  return (
    <>
      <div className="hero">
        <div className="heroContent">
          <div className="socials">
            <Link to="/" target="_blank">
              INSTAGRAM
            </Link>
            <Link to="/" target="_blank">
              TWITTER
            </Link>
            <Link to="/" target="_blank">
              FACEBOOK
            </Link>
          </div>
          <div className="heroContainer">
            <div className="img">
              <img src={heroImg} alt="" />
            </div>
            <div className="text">
              <p>WELCOME TO OUR AGENCY</p>
              <h1>Digital Creative Studio</h1>
              <p>
                Over 15 years in the game & build successful, profitable
                products.
              </p>
              <Button />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
