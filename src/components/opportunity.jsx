import React from "react";
import opport1 from "../Assets/home-img/opport1.jpg";
import opport2 from "../Assets/home-img/opport2.jpg";
import opport3 from "../Assets/home-img/opport3.jpg";
import "../styles/opportunity.css";

const Opportunity = () => {
  return (
    <section className="opportunity-section">
      {/* Text Content */}
      <div className="opportunity-text-container">
        <h3>Franchise Opportunities</h3>
        <h1>Franchise With Brave</h1>
        <p>
          Our franchise model empowers <br/>passionate educators to start and <br/>grow
          their own successful businesses.
        </p>
        <p><b>
          At Brave Sparkids Academy, we <br/>believe in the power of hands <br/>on
          learning.</b>
        </p>
        <a href="#!" className="opportunity-cta-button">
          Know More
        </a>
      </div>

      {/* Image Content */}
      <div className="opportunity-image-container">
        {/* Top Image with Overlay */}
        <div className="opportunity-top-image">
          <div className="opportunity-info-card">
            <h4>Revolutionize Education</h4>
            <p>
              Educational Programs are carefully crafted to stimulate
              intellectual and creative growth.
            </p>
          </div>
        </div>

        {/* Middle Images */}
        <div className="opportunity-middle-images">
          <img src={opport2} alt="Middle educational opportunity" />
          <div className="opportunity-middle2"><img src={opport1} alt="Another educational opportunity" />
        </div></div>

        {/* Bottom Image */}
        <div className="opportunity-bottom-image">
          <img src={opport3} alt="Hands-on learning" />
        </div>
      </div>
    </section>
  );
};

export default Opportunity;