import { useState } from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";
import "../assets/styles/Footer.scss";
import logo from "../assets/images/logo-2.png";
import { Link } from "react-router-dom";

const Footer = () => {
  const [email, setEmail] = useState("");

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column">
          <img className="footer-logo" src={logo} alt="Runok" />
          <p className="footer-description">
            Centric applications production before front end verifies visualize
            front end results and value added
          </p>
          <h4 className="h4">WE ARE AVAILABLE</h4>
          <p className="footer-description">MON-SAT: 09:00AM TO 6:30 PM</p>
        </div>

        <div className="footer-column">
          <h3 className="footer-title">Useful Links</h3>
          <Link to="/About" className="footer-link">
            About Us
          </Link>
          <Link to="/Portfolio" className="footer-link">
            Our Portfolio
          </Link>
          <Link to="/Services" className="footer-link">
            Our Services
          </Link>
          <Link to="#" className="footer-link">
            Our Team
          </Link>
        </div>

        <div className="footer-column">
          <h3 className="footer-title">Contact Us</h3>
          <div className="footer-contact-info">
            <div className="footer-link" style={{ cursor: "pointer" }}>
              support@agency.com
            </div>
            <div className="footer-link" style={{ cursor: "pointer" }}>
              +258 (549) 258 3715
            </div>
            <div className="footer-link" style={{ cursor: "pointer" }}>
              2587 Dorland Street Luke Rd,BA Berlin, Germany
            </div>
          </div>
        </div>

        <div className="footer-column">
          <h3 className="footer-title">Subscribe newsletter</h3>
          <div className="footer-form-container">
            <form>
              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="footer-input"
              />
              <button type="submit" className="footer-button">
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="footer-copyright">
        <h3 className="copyrightText">
          Practice project by Rinor Zeqiri: a React rebuild of the Runok
          ThemeForest design. Not a real agency.
        </h3>
        <div className="footer-social-container">
          <span className="footer-social-link" aria-hidden="true">
            <FaFacebook size={20} />
          </span>
          <span className="footer-social-link" aria-hidden="true">
            <FaTwitter size={20} />
          </span>
          <span className="footer-social-link" aria-hidden="true">
            <FaInstagram size={20} />
          </span>
          <a href="https://github.com/rinorze/runok" className="footer-social-link" aria-label="Source code on GitHub" target="_blank" rel="noreferrer">
            <FaGithub size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
