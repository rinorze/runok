import { useState } from "react";
import { FiMail } from "react-icons/fi";
import { IoMdArrowUp } from "react-icons/io";
import "../assets/styles/SubscribeBox.scss";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const SubscribeBox = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const validateEmail = () => {
    return email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    setError("");
  };

  return (
    <div className="newsletter-container">
      <div className="newsletter-header">
        <div className="newsletter-badge">NEWSLETTER</div>
        <motion.h2
          className="newsletter-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          Ready To Get Started Of Strategy Business.
        </motion.h2>
      </div>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="newsletter-form"
      >
        <div className="formWithButton">
          <div className="form-group">
            <div className="input-wrapper">
              <FiMail className="mail-icon" />
              <input
                type="email"
                placeholder="Enter Your Email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError("");
                }}
                className="email-input"
              />
            </div>
          </div>
          <button type="submit" className="submit-button">
            <Link to="/Contact">Get Started Now </Link>
            <IoMdArrowUp className="arrow" />
          </button>
        </div>
        {error && <p className="error-message">{error}</p>}
      </motion.form>
    </div>
  );
};

export default SubscribeBox;
