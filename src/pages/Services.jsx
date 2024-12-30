import "../assets/styles/Services.scss";
import { Link } from "react-router-dom";
import img1 from "../assets/images/arrows.png";
import Navbar from "../components/Navbar";
import ServiceSection from "../components/ServiceSection";
import ServiceHero from "../components/ServiceHero";
import Pricing from "../components/Pricing";
import Footer from "../components/Footer";

export default function Services() {
  return (
    <>
      <Navbar />
      <div className="service">
        <div className="banner">
          <div className="h1">
            <h1>Service</h1>
          </div>
          <div className="subTitle">
            <Link to="/">RUNOK</Link>
            <img src={img1} alt="" />
            <p>SERVICE</p>
          </div>
        </div>
      </div>
      <ServiceSection />
      <ServiceHero />
      <Pricing />
      <Footer />
    </>
  );
}
