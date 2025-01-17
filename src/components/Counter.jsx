import PropTypes from "prop-types";
import { useEffect, useState, useRef } from "react";
import "../assets/styles/Counter.scss";

const CounterItem = ({
  end,
  label,
  suffix = "",
  duration = 1000,
  startAnimation
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startAnimation) return; // Don't start animation if not triggered

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
  }, [end, duration, startAnimation]);

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
  duration: PropTypes.number,
  startAnimation: PropTypes.bool.isRequired
};

const CounterSection = () => {
  const [startAnimation, setStartAnimation] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartAnimation(true);
          observer.disconnect(); // Stop observing after the animation starts
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the section is visible
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  return (
    <div className="counter-section" ref={counterRef}>
      <div className="container">
        <div className="counter-grid">
          <CounterItem
            end={10}
            label="Years of Experience"
            startAnimation={startAnimation}
          />
          <CounterItem
            end={18}
            label="Skilled Performance"
            startAnimation={startAnimation}
          />
          <CounterItem
            end={32}
            label="Visited Conferences"
            startAnimation={startAnimation}
          />
          <CounterItem
            end={1}
            label="Years of Experience"
            suffix="K"
            startAnimation={startAnimation}
          />
        </div>
      </div>
    </div>
  );
};

export default CounterSection;
