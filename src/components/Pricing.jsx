import { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdArrowUp } from "react-icons/io";
import "../assets/styles/Pricing.scss";

const PricingSection = () => {
  const [isYearly, setIsYearly] = useState(true);

  const plans = [
    {
      name: "Basic Plan",
      monthlyPrice: 39,
      yearlyPrice: 59,
      description: "Basic features for up to 10 Users"
    },
    {
      name: "Standard Plan",
      monthlyPrice: 49,
      yearlyPrice: 69,
      description: "Basic features for up to 10 Users"
    },
    {
      name: "Premium Plan",
      monthlyPrice: 59,
      yearlyPrice: 79,
      description: "Basic features for up to 10 Users"
    }
  ];

  return (
    <div className="pricing-section">
      <div className="pricing-header">
        <span className="subtitle">OUR PRICING PLANS</span>
        <h2 className="title">Our Flexible Pricing</h2>
      </div>
      <div className="pricing-toggle">
        <button
          className={`toggle-button ${isYearly ? "active" : ""}`}
          onClick={() => setIsYearly(true)}
        >
          Billed Yearly
          <span className="discount-badge">30%</span>
        </button>
        <button
          className={`toggle-button ${!isYearly ? "active" : ""}`}
          onClick={() => setIsYearly(false)}
        >
          Billed Monthly
        </button>
      </div>
      <div className="pricing-cards">
        {plans.map((plan, index) => (
          <div className="pricing-card" key={index}>
            <h3>{plan.name}</h3>
            <div className="price">
              <span className="currency">$</span>
              <span className="amount">
                {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
              </span>
            </div>
            <p className="description">{plan.description}</p>
            <button className="primary-button">
              <Link to="/Contact">Get In Touch</Link>
              <IoMdArrowUp className="arrow" />
            </button>
            <button className="secondary-button">
              <Link to="/Contact">View Details </Link>
              <IoMdArrowUp className="arrow" />
            </button>
            <div className="features">
              <h4>FEATURES:</h4>
              <p>
                Everything in our free plan it&apos;s included with all premium
                packages.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingSection;
