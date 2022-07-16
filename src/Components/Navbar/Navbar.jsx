import "./Navbar.css";

import { Link } from 'react-router-dom';
import logo from "../../Assets/Big_Logo.png"



const Navbar = () => {
    return (
        <>
            <div className="navbar">
                <div className="left-side-group">
                <img className="logo" src={logo} alt="" />
                    <ul className="left-side-nav-items">
                        <li>
                            <a href="">Platform</a>
                        </li>
                        <li>
                            <a href="">Pricing</a>
                        </li>
                        <li>
                            <a href="">Acceleration</a>
                        </li>
                        <li>
                            <a href="">Resources</a>
                        </li>
                        <li>
                            <a href="">Customer Stories </a>
                        </li>
                    </ul>
                </div>
                <div  className="right-side-group">
                    <ul  className="right-side-nav-items">
                        <li>
                            <a href="">Log in</a>
                        </li>
                        <li>
                            <a className="secondary" href="">SCHEDULE DEMO</a>
                        </li>
                        <li>
                            <a className="primary" href="">TRY FOR FREE</a>
                        </li>

                    </ul>
                </div>
            </div>


           
        </>
    )
}

export default Navbar;