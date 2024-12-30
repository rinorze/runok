import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import "../assets/styles/Counter.scss";

const CounterItem = ({ end, label, suffix = "", duration = 1000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime = null;
    let animationFrame;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const newCount = Math.floor(progress * end);

      setCount((prevCount) => {
        if (prevCount !== newCount) {
          return newCount;
        }
        return prevCount;
      });

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration]);

  return (
    <div className="counter-item">
      <div className="number">
        {count}
        {suffix}
      </div>
      <div className="label">{label}</div>
    </div>
  );
};

CounterItem.propTypes = {
  end: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  suffix: PropTypes.string,
  duration: PropTypes.number
};

const CounterSection = () => {
  return (
    <div className="counter-section">
      <div className="container">
        <div className="counter-grid">
          <CounterItem end={10} label="Years of Experience" />
          <CounterItem end={18} label="Skilled Performance" />
          <CounterItem end={32} label="Visited Conferences" />
          <CounterItem end={1} label="Years of Experience" suffix="K" />
        </div>
      </div>
    </div>
  );
};

export default CounterSection;
