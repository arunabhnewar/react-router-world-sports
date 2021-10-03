import { faFacebook, faInstagramSquare, faTwitterSquare, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkedAlt, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Footer.css';


const Footer = () => {
    return (
        <div>
            <div className="footer-container">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="text-start left-footer-container">
                                <h1>Real Madrid</h1>
                                <div className="icons-container d-flex text-center">
                                    <div className="icon">
                                        <FontAwesomeIcon icon={faTwitterSquare} />
                                    </div>
                                    <div className="icon">
                                        <FontAwesomeIcon icon={faInstagramSquare} />
                                    </div>
                                    <div className="icon">
                                        <FontAwesomeIcon icon={faFacebook} />
                                    </div>
                                    <div className="icon">
                                        <FontAwesomeIcon icon={faYoutubeSquare} />
                                    </div>
                                </div>
                                <p className="mt-4">
                                    <small>
                                        *These statements have not been evaluated by the Food and
                                        Drug Administration. These products are not intended to
                                        diagnose.
                                    </small>
                                </p>

                                <p className="mt-5">
                                    <small>Madridistas @ , All rights reserved</small>
                                </p>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="footer-menu-container">
                                <ul>
                                    <li className="footer-menu">Home</li>
                                    <li className="footer-menu">Services</li>
                                    <li className="footer-menu">Sports</li>
                                    <li className="footer-menu">Contact us</li>
                                    <li className="footer-menu">About Us</li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-md-5">
                            <div className="right-footer-container">
                                <h3>Sign up for the Madridistas</h3>
                                <input type="text"
                                    className="footer-input"
                                    placeholder="Enter Email" />
                                <div className="phone mt-4 d-flex justify-content-center align-items-center">
                                    <div className="footer-phone-icon">
                                        <FontAwesomeIcon icon={faPhoneVolume} />
                                    </div>
                                    <div>
                                        <h6>+3-9-500-777-11-00</h6>
                                    </div>
                                </div>
                                <div className="map d-flex justify-content-center align-items-center">
                                    <div className="footer-phone-icon">
                                        <FontAwesomeIcon icon={faMapMarkedAlt} />
                                    </div>

                                    <div>
                                        <p>
                                            333 Gateway, Madrid, Spain 70035,
                                            <br />
                                            69 2nd Avenue, Madrid, Spain 400
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;