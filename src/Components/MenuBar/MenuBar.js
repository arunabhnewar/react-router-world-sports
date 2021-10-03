import { Link } from 'react-router-dom';
import './MenuBar.css';



const MenuBar = () => {
    return (
        <div className="menubar-container">
            <div className="container">
                <div className="row">
                    <div className="col-md-2">
                        <div className="brand-name">
                            <h2>Madridista</h2>
                        </div>
                    </div>
                    <div className="col-md-10">
                        <div className="menu-container ">
                            <ul className="d-flex align-items-end justify-content-end">
                                <Link to="/home" className="items">
                                    <li>Home</li>
                                </Link>
                                <Link to="/sports" className="items">
                                    <li>Sports</li>
                                </Link>
                                <Link to="/about" className="items">
                                    <li>About</li>
                                </Link>
                                <Link to="contact" className="items">
                                    <li>Contact</li>
                                </Link>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default MenuBar;