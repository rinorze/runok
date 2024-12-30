import { useState } from "react";
import {
  IoArrowBackSharp,
  IoArrowForwardSharp,
  IoArrowUpSharp
} from "react-icons/io5";
import "../assets/styles/Carousel.scss";
import img1 from "../assets/images/service-1.jpg";
import img2 from "../assets/images/service-2.jpg";
import img3 from "../assets/images/service-3.jpg";
import img4 from "../assets/images/service-4.jpg";
import icon1 from "../assets/images/icon1.png";
import icon2 from "../assets/images/icon2.png";
import icon3 from "../assets/images/icon3.png";
import icon4 from "../assets/images/icon4.png";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const services = [
  {
    id: 1,
    icon: icon1,
    description:
      "Duis iaculis ut fames vestibulum tempus orci e penatibus erat plon aliquam platea.",
    image: img1
  },
  {
    id: 2,
    icon: icon2,
    description:
      "Duis iaculis ut fames vestibulum tempus orci e penatibus erat plon aliquam platea.",
    image: img2
  },
  {
    id: 3,
    icon: icon3,
    description:
      "Duis iaculis ut fames vestibulum tempus orci e penatibus erat plon aliquam platea.",
    image: img3
  },
  {
    id: 4,
    icon: icon4,
    description:
      "Duis iaculis ut fames vestibulum tempus orci e penatibus erat plon aliquam platea.",
    image: img4
  }
];

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [visibleCards, setVisibleCards] = useState(4);

  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth <= 900) {
        setVisibleCards(1);
      } else if (window.innerWidth <= 1100) {
        setVisibleCards(2);
      } else {
        setVisibleCards(4);
      }
    };

    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);

    return () => {
      window.removeEventListener("resize", updateVisibleCards);
    };
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
  };

  const getVisibleServices = () => {
    const result = [];
    for (let i = 0; i < visibleCards; i++) {
      const index = (currentSlide + i) % services.length;
      result.push(services[index]);
    }
    return result;
  };

  return (
    <div className="carousel">
      <section className="servicesSection">
        <div className="servicesHeader">
          <h5 className="subtitle">WHAT WE OFFER FOR YOU</h5>
          <div className="titleNav">
            <h2>Services We Provide</h2>
            <div className="navigation">
              <div className="navButtons">
                <button onClick={prevSlide} className="navButton">
                  <IoArrowBackSharp size={24} />
                </button>
                <span className="currentSlide">
                  {currentSlide + 1} / {services.length}
                </span>
                <button onClick={nextSlide} className="navButton">
                  <IoArrowForwardSharp size={24} />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="servicesCarousel">
          {getVisibleServices().map((service) => (
            <div
              key={service.id}
              className="serviceCard"
              style={{
                backgroundImage: `url(${service.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}
            >
              <div className="overlay"></div>
              <div className="cardContent">
                <img
                  className="serviceIcon"
                  src={service.icon}
                  alt="Service icon"
                />
                <p className="description">{service.description}</p>
                <div className="getStarted">
                  <Link to="/ServiceDetails">Get Started Now </Link>
                  <IoArrowUpSharp className="arrow" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Carousel;
