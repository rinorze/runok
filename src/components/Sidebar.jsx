import PropTypes from "prop-types";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterestP
} from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import "../assets/styles/Sidebar.scss";
import logo from "../assets/images/logo-2.png";
import { Link } from "react-router-dom";

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <div className={`sidebar-menu ${isOpen ? "open" : ""}`}>
      <div className="sidebar-content">
        <div className="sidebar-header">
          <div className="logo">
            <img src={logo} alt="Runok" className="sidebar-logo" />
          </div>
          <button className="close-button" onClick={onClose} aria-label="Close menu">
            <IoClose size={24} />
          </button>
        </div>

        <div className="about-section">
          <h2>About Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud nisi ut aliquip ex ea commodo
            consequat.
          </p>
          <button className="contact-button">
            <Link to="/Contact">Contact Us</Link>
          </button>
        </div>

        <div className="contact-info">
          <h3>Contact Us</h3>
          <div className="contact-details">
            <p>12/A, Mirnada City Tower, NYC</p>
            <p>+000 123 (456)789</p>
            <p>runokcontact@gmail.com</p>
          </div>
        </div>

        <div className="social-links">
          <span aria-hidden="true">
            <FaFacebookF />
          </span>
          <span aria-hidden="true">
            <FaTwitter />
          </span>
          <span aria-hidden="true">
            <FaInstagram />
          </span>
          <span aria-hidden="true">
            <FaPinterestP />
          </span>
        </div>
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};

export default Sidebar;
