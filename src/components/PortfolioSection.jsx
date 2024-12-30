import PropTypes from "prop-types";
import { BsArrowUpRight } from "react-icons/bs";
import "../assets/styles/PortfolioSection.scss";
import img1 from "../assets/images/cs-img-1.png";
import img2 from "../assets/images/cs-img-2.png";
import img3 from "../assets/images/cs-img-3.png";
import img4 from "../assets/images/cs-img-4.png";
import img5 from "../assets/images/cs-img-5.png";
import img6 from "../assets/images/cs-img-6.png";

const ProjectCard = ({ title, image, number }) => {
  return (
    <div className="projectCard">
      <div className="projectCardImage">
        <img src={image} alt={title} />
        <div className="projectCardOverlay">
          <BsArrowUpRight className="projectCardArrow" />
        </div>
      </div>
      <div className="projectCardContent">
        <span className="projectCardNumber">{number}</span>
        <h3 className="projectCardTitle">{title}</h3>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired
};

const PortfolioSection = () => {
  const projects = [
    {
      id: 1,
      title: "Medical Application Design",
      image: img1,
      number: "01"
    },
    {
      id: 2,
      title: "Dashboard App Design",
      image: img2,
      number: "02"
    },
    {
      id: 3,
      title: "Form Application",
      image: img3,
      number: "03"
    },
    {
      id: 4,
      title: "Finance Application",
      image: img4,
      number: "04"
    },
    {
      id: 5,
      title: "Universe Landing Page Design",
      image: img5,
      number: "05"
    },
    {
      id: 6,
      title: "Payment App Design",
      image: img6,
      number: "06"
    }
  ];

  return (
    <div className="projectGrid">
      {projects.map((project) => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </div>
  );
};

export default PortfolioSection;
