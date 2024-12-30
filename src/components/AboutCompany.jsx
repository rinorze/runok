import { useState } from "react";
import "../assets/styles/AboutCompany.scss";
import bg from "../assets/images/chrome_DJpvsmmnEb.png";

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState("goal");

  const tabContent = {
    mission: {
      title: "Our Mission to Excellence",
      description:
        "A web design agency is a multifaceted entity that plays a pivotal role in shaping the digital presence of businesses and individuals alike. These agencies are dynamic hubs of creativity, technical expertise, and strategic thinking.",
      secondDescription:
        "At the core of a web design agency's essence lies the artistry of visual storytelling and user experience creation."
    },
    vision: {
      title: "Our Vision for the Future",
      description:
        "A web design agency is a multifaceted entity that plays a pivotal role in shaping the digital presence of businesses and individuals alike. These agencies are dynamic hubs of creativity, technical expertise, and strategic thinking.",
      secondDescription:
        "At the core of a web design agency's essence lies the artistry of visual storytelling and user experience creation."
    },
    goal: {
      title: "Our Main Goal to Satisfied local & Global Clients",
      description:
        "A web design agency is a multifaceted entity that plays a pivotal role in shaping the digital presence of businesses and individuals alike. These agencies are dynamic hubs of creativity, technical expertise, and strategic thinking.",
      secondDescription:
        "At the core of a web design agency's essence lies the artistry of visual storytelling and user experience creation."
    }
  };

  const renderContent = () => {
    const { description, secondDescription } = tabContent[activeTab];
    console.log("Active Tab:", activeTab);
    return (
      <>
        <p>{description}</p>
        <p>{secondDescription}</p>
      </>
    );
  };

  return (
    <div className="aboutSection">
      <div className="aboutContent">
        <div className="aboutText">
          <span className="aboutLabel">ABOUT COMPANY</span>
          <h1>Our Main Goal to Satisfied local & Global Clients</h1>
          <div className="tabButtons">
            <button
              className={activeTab === "mission" ? "active" : ""}
              onClick={() => setActiveTab("mission")}
            >
              Our Mission
            </button>
            <button
              className={activeTab === "vision" ? "active" : ""}
              onClick={() => setActiveTab("vision")}
            >
              Our Vision
            </button>
            <button
              className={activeTab === "goal" ? "active" : ""}
              onClick={() => setActiveTab("goal")}
            >
              Our Goal
            </button>
          </div>
          <h2>Digital Web Design Agency</h2>
          {renderContent()}
        </div>

        <div className="aboutImages">
          <img src={bg} alt="Team at work" className="mainImage" />
        </div>
      </div>
    </div>
  );
}
