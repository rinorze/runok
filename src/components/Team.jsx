import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaInstagram
} from "react-icons/fa";
import "../assets/styles/Team.scss";
import img1 from "../assets/images/team-1.png";
import img2 from "../assets/images/team-2.png";
import img3 from "../assets/images/team-3.png";
import img4 from "../assets/images/team-4.png";
import { motion } from "framer-motion";

const Team = () => {
  const teamMembers = [
    {
      name: "Charlotte Amitina",
      role: "UX/UI DESIGNER",
      image: img1
    },
    {
      name: "William Edward",
      role: "PROJECT MANAGER",
      image: img2
    },
    {
      name: "Hannah Chloe",
      role: "PRODUCT DESIGNER",
      image: img3
    },
    {
      name: "Maiselan William",
      role: "WEB DEVELOPER",
      image: img4
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <section className="team-section">
        <div className="team-header">
          <span className="subtitle">TEAM MEMBERS</span>
          <motion.h2
            className="title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Our Expert Team Would Like
            <br />
            To Hear From You!
          </motion.h2>
        </div>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member">
              <div className="member-image">
                <img src={member.image} alt={member.name} />
                <div className="overlay">
                  <div className="social-icons">
                    <span className="social-icon" aria-hidden="true">
                      <FaFacebookF />
                    </span>
                    <span className="social-icon" aria-hidden="true">
                      <FaTwitter />
                    </span>
                    <span className="social-icon" aria-hidden="true">
                      <FaPinterestP />
                    </span>
                    <span className="social-icon" aria-hidden="true">
                      <FaInstagram />
                    </span>
                  </div>
                </div>
              </div>
              <h3 className="member-name">{member.name}</h3>
              <p className="member-role">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Team;
