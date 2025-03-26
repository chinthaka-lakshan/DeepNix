import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "./Services.css";

const ServicesPage = () => {
  return (
    <div className="services-container">
      <Navbar />
      <div className="services-content">
        <h2>Our Services</h2>
        <div className="services-cards">
          <div className="service-card">
            <h3>UI/UX Designing</h3>
            <div className="service-image uiux-image"></div>
          </div>
          <div className="service-card">
            <h3>Web Development</h3>
            <div className="service-image webdev-image"></div>
          </div>
          <div className="service-card">
            <h3>Digital Marketing</h3>
            <div className="service-image digital-image"></div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default ServicesPage;