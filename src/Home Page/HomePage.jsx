import React, { useState, useEffect } from 'react';
import './homePage.css'
import { useNavigate, useLocation } from 'react-router-dom';

export default function HomePage() {

    const navigate = useNavigate();

    const location = useLocation();

    const [currentPath, setCurrentPath] = useState(location.pathname);

    useEffect(() => {
        setCurrentPath(location.pathname);
    }, [location.pathname]);

    const handleHomeClick = () => {
        navigate('/');
        window.location.reload();
    }

    const handleAboutClick = () => {
        navigate('/about');
    }

    const handleServicesClick = () => {
        navigate('/services');
    }

    const handlePortfoliosClick = () => {
        navigate('/portfolios');
    }

    const handleContactUsClick = () => {
        navigate('/contactus');
    }

  return (
    <div className="Home-page">
      {/* Nav bar */}
        <div className="navigation-bar">
            <div className="navigation-bar-company-name">
                <h6>DEEPNIX</h6>
            </div>
            <div className="navigation-bar-buttons">
                <button onClick={handleHomeClick} className={currentPath === '/' ? 'active' : ''}>Home</button>
                <button onClick={handleAboutClick} className={currentPath === '/about' ? 'active' : ''}>About Us</button>
                <button onClick={handleServicesClick} className={currentPath === '/services' ? 'active' : ''}>Services</button>
                <button onClick={handlePortfoliosClick} className={currentPath === '/portfolios' ? 'active' : ''}>Portfolios</button>
                <button onClick={handleContactUsClick} className={currentPath === '/contactus' ? 'active' : ''}>Contact Us</button>
            </div>
        </div>

      {/* Welcome Note and Name */}


      {/* Logo */}


      {/* Paragraph */}


      {/* Buttons */}
    </div>
  )
}
