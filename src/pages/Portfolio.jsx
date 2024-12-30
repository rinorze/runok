import "../assets/styles/Portfolio.scss";
import Navbar from "../components/Navbar";
import PortfolioSection from "../components/PortfolioSection";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import img1 from "../assets/images/arrows.png";

export default function Services() {
  return (
    <>
      <Navbar />
      <div className="portfolio">
        <div className="banner">
          <div className="h1">
            <h1>Portfolio</h1>
          </div>
          <div className="subTitle">
            <Link to="/">RUNOK</Link>
            <img src={img1} alt="" />
            <p>PORTFOLIO</p>
          </div>
        </div>
      </div>
      <PortfolioSection />
      <Footer />
    </>
  );
}
