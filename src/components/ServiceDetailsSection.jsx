import "../assets/styles/ServiceDetailsSection.scss";
import img from "../assets/images/service-details-img.jpg";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import img1 from "../assets/images/download-icon-1.png";
import img2 from "../assets/images/download-icon-2.png";
import icon1 from "../assets/images/growth-chart.png";
import icon2 from "../assets/images/pen.png";
import icon3 from "../assets/images/settings-1.png";
import icon4 from "../assets/images/seo.png";

const Index = () => {
  const services = [
    {
      icon: icon1,
      title: "Main Strategy",
      description: "Maintain wireless scerios after sure quality vectors future"
    },
    {
      icon: icon2,
      title: "Website Design",
      description: "Maintain wireless scerios after sure quality vectors future"
    },
    {
      icon: icon3,
      title: "Project Testing",
      description: "Maintain wireless scerios after sure quality vectors future"
    },
    {
      icon: icon4,
      title: "SEO Optimizations",
      description: "Maintain wireless scerios after sure quality vectors future"
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Content Creation",
      description:
        "Identify the type of content needed e.g., articles, blog posts..."
    },
    {
      number: "02",
      title: "Content Review ",
      description:
        "Review and edit the content for accuracy, grammar, style...."
    },
    {
      number: "03",
      title: "Media Management",
      description:
        "Organize media assets into folders for easy retrieval and..."
    },
    {
      number: "04",
      title: "Content Organization",
      description:
        "Choose an appropriate category or topic for the content to..."
    }
  ];

  const categories = [
    "User Experience Design",
    "E-Commerce Marketing",
    "Advanced Programming",
    "Web Development",
    "Social Media Marketing"
  ];

  return (
    <div className="cmsContainer">
      <div className="servicesDetailsSections">
        <div className="heroSection">
          <div className="heroImage">
            <img src={img} alt="Team working" />
          </div>
          <div className="heroContent">
            <h1>Content Management System</h1>
            <p>
              A Content Management System (CMS) is a software application that
              allows users to create, manage, and modify digital content, such
              as text, images, videos, and documents, on a website without
              requiring in-depth technical knowledge. CMS platforms streamline
              the process of website management, enabling users to focus on
              content creation and organization rather than coding and
              programming. Here’s a deeper look into CMS:
            </p>
          </div>
        </div>

        <div className="servicesGrid">
          {services.map((service, index) => (
            <div className="serviceCard" key={index}>
              <img className="serviceIcon" src={service.icon} />
              <div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        <p style={{ fontSize: "15px", paddingBottom: "30px" }}>
          A Content Management System (CMS) comprises various components that
          work together to enable users to create, manage, and publish digital
          content on the web without the need for advanced technical skills.
          These components ensure the smooth functioning of the CMS and provide
          users with the tools they need to effectively manage their online
          presence.
        </p>

        <div className="processSection">
          <h2>4 Simple Steps to Process</h2>
          <p>
            The process of managing content using a Content Management System
            (CMS) involves several key steps to ensure effective content
            creation, organization, and publication. Here’s a typical workflow:
          </p>
          <div className="stepsGrid">
            {steps.map((step, index) => (
              <div className="stepCard" key={index}>
                <div className="stepNumber">{step.number}</div>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="categories">
        <div className="categoriesSection">
          <h2>Categories</h2>
          <div className="categoriesList">
            {categories.map((category, index) => (
              <Link to="/ServiceDetails" className="categoryItem" key={index}>
                <FaArrowRight />
                {category}
              </Link>
            ))}
          </div>
        </div>

        <div className="categoriesSectionTwo">
          <h2>Categories</h2>
          <div className="categoriesListTwo">
            <div className="categoryCardTwo">
              <div className="categoryContentTwo">
                <div className="categoryIconTwo">
                  <img src={img1} />
                </div>
                <div className="categoryInfoTwo">
                  <h3>User Experience Design</h3>
                  <Link to="#">
                    <p>Download</p>
                  </Link>
                </div>
              </div>
              <button className="categoryButtonTwo">
                <FaArrowRight />
              </button>
            </div>
            <div className="categoryCardTwo">
              <div className="categoryContentTwo">
                <div className="categoryIconTwo">
                  <img src={img2} />
                </div>
                <div className="categoryInfoTwo">
                  <h3>User Experience Design</h3>
                  <Link to="#">
                    <p>Download</p>
                  </Link>
                </div>
              </div>
              <button className="categoryButtonTwo">
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
