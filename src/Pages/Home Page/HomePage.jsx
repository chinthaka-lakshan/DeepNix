import React from 'react';
import './homePage.css'
import Navbar from '../../Components/Navbar';

export default function HomePage() {
  return (
    <div className="Home-page">
    {/* Nav bar */}
        <Navbar/>

    {/* Welcome Note and Name */}
    <div className="welcome-section">
        <h1>WELCOME TO</h1>
        <h2>Deepnix</h2>
      </div>


    {/* Logo */}


    {/* Paragraph */}
    <div className="paragraph-section">
        <p>
          Deepnix is a dynamic software company founded by a passionate team of developers. We specialize in crafting innovative and scalable software solutions tailored to meet the evolving needs of businesses. With a focus on efficiency, creativity, and cutting-edge technology, we strive to deliver high-quality products that drive success. At Deepnix, we believe in collaboration, continuous learning, and pushing the boundaries of what’s possible in the digital world.
        </p>
      </div>


    {/* Buttons */}
    <div className="button-section">
        <button className="hire-us">Hire Us</button>
        <button className="lets-talk">Let's Talk</button>
      </div>
    </div>

  )
}
