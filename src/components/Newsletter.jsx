import "../assets/styles/Newsletter.scss";
import { useEffect } from "react";
import PropTypes from "prop-types";
import img from "../assets/images/reward-bg.png";
import { motion } from "framer-motion";

const AchievementCard = ({ number, title, subtitle, image }) => {
  return (
    <div className="achievement-card">
      <div className="achievement-card__content">
        <div className="subTittleWithTittle">
          <p className="achievement-card__subtitle">{subtitle}</p>
          <h3 className="achievement-card__title">{title}</h3>
        </div>
        <span className="achievement-card__number">{number}</span>
      </div>

      <div
        className="achievement-card__bg"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="achievement-card__bg-overlay"></div>
        <div className="achievement-card__blue-overlay"></div>
      </div>
    </div>
  );
};

AchievementCard.propTypes = {
  number: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

const Achievements = () => {
  const achievements = [
    {
      number: "01",
      title: "New York Design Week",
      subtitle: "MAIN DEVELOPER 2020",
      image: img
    },
    {
      number: "02",
      title: "UI/UX DESIGNER 2021",
      subtitle: "MAIN DEVELOPER 2020",
      image: img
    },
    {
      number: "03",
      title: "TOP 15 WEBSITE 2023",
      subtitle: "WEBBYS, SITE OF THE YEAR",
      image: img
    },
    {
      number: "04",
      title: "BEST DEVELOPER 2024",
      subtitle: "WEBBYS, SITE OF THE YEAR",
      image: img
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".achievement-card").forEach((card) => {
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="achievements">
      <div className="achievements__container">
        <div className="achievements__header">
          <motion.span
            className="achievements__header-tag"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            OUR CONTACT US
          </motion.span>
          <motion.h2
            className="achievements__header-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Have Any Contact! Say The People Trust Us
          </motion.h2>
        </div>

        <div className="achievements__grid">
          {achievements.map((achievement, index) => (
            <div key={index}>
              <AchievementCard {...achievement} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
