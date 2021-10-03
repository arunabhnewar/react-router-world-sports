import React from 'react';
import MenuBar from '../MenuBar/MenuBar';
import './About.css';

const About = () => {
    return (
        <div className="about-container">
            <MenuBar></MenuBar>
            <div className="text-center mt-5 pt-5 text-muted">
                <h2> About page is coming soon...</h2>
            </div>
        </div>

    );
};

export default About;