import React from 'react';
import './Portfolios.css';
import Navbar from "../../Components/Navbar/Navbar";

import LetsGrow from '../../Assets/letsgrow.png';
import Atharaman from '../../Assets/atharaman.png';
import OurProjects from '../../Assets/ourprojects.png';

const Portfolios = () => {
    return (
        <div className="portfolios-page">
            <Navbar />
            <div className="portfolios-content">
                <h1 className="heading"><span>Our</span> Projects</h1>
                <div className="projects-container">
                    <div className="project-card">
                        <img src={LetsGrow} alt="Let's Grow" />
                        <h2>Let's Grow</h2>
                    </div>
                    <div className="project-card">
                        <img src={Atharaman} alt="Atharaman" />
                        <h2>Atharaman</h2>
                    </div>
                    <div className="project-card">
                        <img src={OurProjects} alt="Our Projects" />
                        <h2>Our Projects</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolios;