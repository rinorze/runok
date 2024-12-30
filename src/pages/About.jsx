import "../assets/styles/About.scss";
import { Link } from "react-router-dom";
import img1 from "../assets/images/arrows.png";
import Navbar from "../components/Navbar";
import AboutContent from "../components/AboutContent";
import Studio from "../components/Studio";
import Counter from "../components/Counter";
import Team from "../components/Team";
import AboutCompany from "../components/AboutCompany";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";

export default function Services() {
  return (
    <>
      <Navbar />
      <div className="about">
        <div className="banner">
          <div className="h1">
            <h1>About</h1>
          </div>
          <div className="subTitle">
            <Link to="/">RUNOK</Link>
            <img src={img1} alt="" />
            <p>ABOUT</p>
          </div>
        </div>
      </div>
      <AboutContent />
      <Studio />
      <Counter />
      <AboutCompany />
      <Team />
      <Testimonials />
      <Footer />
    </>
  );
}
