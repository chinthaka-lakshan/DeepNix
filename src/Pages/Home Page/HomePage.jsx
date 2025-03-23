import React from 'react';
import './homePage.css';
import { useTypewriter } from 'react-simple-typewriter';
import Navbar from '../../Components/Navbar';

export default function HomePage() {

  const [text] = useTypewriter({
    words: ['EEPNIX'],
    loop: {},
  });
import './homePage.css'
import Navbar from '../../Components/Navbar';

export default function HomePage() {
  return (
    <div className="Home-page">
    {/* Nav bar */}
        <Navbar/>

    {/* Welcome Note and Name */}

    <div className="home-page-content">
        <div className='home-page-note'>WELCOME TO</div>
        <div className='home-page-animated-name'>
          <div className="home-page-name-text">
            <div className="first-letter">
              D{text}
            </div>
            <div className='home-page-line'>|</div>
          </div>
        </div>
      </div>
      <div className="home-page-text-logo-container">
        <p className="home-page-text-logo">
        Deepnix is a dynamic software company founded by a passionate team of developers. We specialize in crafting innovative and scalable software solutions tailored to meet the evolving needs of businesses. With a focus on efficiency, creativity, and cutting-edge technology, we strive to deliver high-quality products that drive success. At Deepnix, we believe in collaboration, continuous learning, and pushing the boundaries of what’s possible in the digital world.
        </p>
        <div className="home-page-buttons">
          <button className="home-page-hire-btn">Hire Us</button>
          <button className="home-page-talk-btn">Let's Talk</button>
        </div>
        {/* <div className="circle">
          <img src={logo} alt="DeepNix Logo" className="deepnix-logo-img" />
        </div> */}
      </div>

    <div className="welcome-section">
        <h1>WELCOME TO</h1>
        <h2>Deepnix</h2>
      </div>

    {/* Logo */}


    {/* Paragraph */}


    {/* Buttons */}
    </div>
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
