import "../assets/styles/ServicesDetails.scss";
import Navbar from "../components/Navbar";
import ServiceDetailsSection from "../components/ServiceDetailsSection";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import img1 from "../assets/images/arrows.png";

export default function Services() {
  return (
    <>
      <Navbar />
      <div className="serviceDetails">
        <div className="banner">
          <div className="h1">
            <h1>Service Details</h1>
          </div>
          <div className="subTitle">
            <Link to="/">RUNOK</Link>
            <img src={img1} alt="" />
            <p>SERVICE DETAILS</p>
          </div>
        </div>
      </div>
      <ServiceDetailsSection />
      <Footer />
    </>
  );
}
