import icon1 from "../assets/images/growth-chart.png";
import icon2 from "../assets/images/pen.png";
import icon3 from "../assets/images/settings-1.png";
import icon4 from "../assets/images/seo.png";
import "../assets/styles/ServiceSection.scss";
import { Link } from "react-router-dom";
import { IoMdArrowUp } from "react-icons/io";
import img1 from "../assets/images/service-12.jpg";
import img2 from "../assets/images/service-13.jpg";
import img3 from "../assets/images/service-14.jpg";
import img4 from "../assets/images/service-15.jpg";
import img5 from "../assets/images/service-8.jpg";
import img6 from "../assets/images/service-9.jpg";
import img7 from "../assets/images/service-10.jpg";
import img8 from "../assets/images/service-11.jpg";

const Index = () => {
  const services = [
    {
      title: "/DESIGNING",
      icon: icon1,
      image: img1
    },
    {
      title: "/DEVELOPMENT",
      icon: icon2,
      image: img2
    },
    {
      title: "/USER EXPERIENCE",
      icon: icon3,
      image: img3
    },
    {
      title: "/MOBILE SOLUTION",
      icon: icon4,
      image: img4
    },
    {
      title: "/BRANDING",
      icon: icon1,
      image: img5
    },
    {
      title: "/CONSULTING",
      icon: icon2,
      image: img6
    },
    {
      title: "/SOFTWARE",
      icon: icon3,
      image: img7
    },
    {
      title: "/OPTIMIZATION",
      icon: icon4,
      image: img8
    }
  ];

  return (
    <div className="services-container">
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-wrapper">
            <h3 className="service-title">{service.title}</h3>
            <div
              className="service-card"
              style={{ backgroundImage: `url(${service.image})` }}
            >
              <div className="service-content">
                <img className="service-icon" src={service.icon} alt="" />
                <button className="read-more-btn">
                  <Link to="/ServiceDetails">Get Started Now </Link>
                  <IoMdArrowUp className="arrow" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Index;
