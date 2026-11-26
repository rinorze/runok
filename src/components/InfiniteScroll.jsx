import PropTypes from "prop-types";
import "../assets/styles/InfiniteScroll.scss";

const InfiniteScroll = ({ text, className, direction }) => {
  const content = [...text, ...text];

  return (
    <div className={`scroll-row ${className}`}>
      <div
        className={`scroll-content ${direction === "reverse" ? "reverse" : ""}`}
      >
        {content.map((item, index) => (
          <span key={index} className="scroll-item">
            {item}
            <span className="separator">—</span>
          </span>
        ))}
      </div>
    </div>
  );
};

InfiniteScroll.propTypes = {
  text: PropTypes.arrayOf(PropTypes.string).isRequired,
  className: PropTypes.string,
  direction: PropTypes.oneOf(["normal", "reverse"])
};

const Index = () => {
  const topRowText = [
    "AGENCY",
    "DESIGN",
    "SOLUTION",
    "BRANDING",
    "IDEA",
    "STRATEGY",
    "CREATIVE AGENCY"
  ];
  const bottomRowText = [
    "IDEA",
    "STRATEGY",
    "CREATIVE AGENCY",
    "DESIGN",
    "SOLUTION",
    "DIGITAL SOLUTION",
    "DEVELOPMENT"
  ];

  return (
    <div className="scroll-container">
      <InfiniteScroll text={topRowText} className="dark" />
      <InfiniteScroll
        text={bottomRowText}
        className="light"
        direction="reverse"
      />
    </div>
  );
};

export default Index;
