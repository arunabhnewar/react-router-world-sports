import React from 'react';
import './Banner.css';
import MenuBar from '../MenuBar/MenuBar'

const Banner = () => {
    return (
        <div className="banner-container">
            <MenuBar></MenuBar>
            <div className="row d-flex justify-content-center align-items-center banner">

                <div className="col-md-6">
                    <h1 className="hero-title">BE THE CR7 <br /> STAR AND SHINE</h1>
                    <p className="text-white text-center mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Ut elit
                        tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    <button className="mt-3 about-btn">About Us</button>
                </div>
                <div className="col-md-6"></div>
            </div>
        </div>
    );
};

export default Banner;