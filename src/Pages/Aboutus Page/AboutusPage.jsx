import React from 'react';
import './aboutusPage.css';
import Navbar from '../../Components/Navbar/Navbar';

export default function AboutusPage() {
  return (
    <div className="About-Us-page">
      {/* Nav bar */}
      <Navbar />

      {/* About Us Section */}
      <div className="about-us-content">
      <h1>
          <span className="about-text">About  </span> 
          <span className="us-text">Us</span>
        </h1>
        <p>
          Welcome to Deepflix, where innovation meets technology. We are a passionate team of web developers dedicated to crafting high-performance, scalable, and visually stunning digital solutions. Our expertise spans across custom website development, web applications, e-commerce platforms, and UI/UX design, ensuring that businesses stay ahead in the digital era.
        </p>
        <p>
          At Deepflix, we believe in the power of collaboration and cutting-edge technology. Whether you’re a startup looking for a strong online presence or an established business in need of advanced digital solutions, we bring creativity, precision, and technical excellence to every project. With a focus on modern web technologies, user-centric design, and seamless functionality, we transform ideas into reality. Our goal is not just to build websites but to create digital experiences that drive success.
        </p>
        <p>Let’s build the future together.</p>

        {/* Members Button */}
        <button className="members-button">Members</button>
      </div>
    </div>
  );
}