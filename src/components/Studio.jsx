import { Link } from "react-router-dom";
import "../assets/styles/Studio.scss";
import { IoIosArrowForward } from "react-icons/io";
import { motion } from "framer-motion";

const Studio = () => {
  const processSteps = [
    {
      id: "01",
      title: "Project Processing",
      description:
        "Autem vel eum repreh enderit eui in ea velit esse quame nihil molestiae"
    },
    {
      id: "02",
      title: "Research and Analysis",
      description:
        "Autem vel eum repreh enderit eui in ea velit esse quame nihil molestiae"
    },
    {
      id: "03",
      title: "Project Revisions Launch",
      description:
        "Autem vel eum repreh enderit eui in ea velit esse quame nihil molestiae"
    }
  ];

  return (
    <section className="workProcess">
      <div className="workProcessHeader">
        <span className="workProcessLabel">WORK PROCESS</span>
        <motion.h2
          className="workProcessTitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          QUALITY SERVICE FOR GROWTH
          <br />
          YOUR BRANDING IDENTITY
        </motion.h2>
      </div>

      <div className="workProcessCards">
        {processSteps.map((step) => (
          <div key={step.id} className="processCard">
            <span className="processCardNumber">{step.id}</span>
            <h3 className="processCardTitle">{step.title}</h3>
            <p className="processCardDescription">{step.description}</p>
            <Link to="/ServiceDetails" className="processCardButton">
              READ MORE <IoIosArrowForward />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Studio;
