import React from "react";
import './navbar.css';
import logo from '../../assets/vd_logo.png';
import contactImg from '../../assets/contact.png';
import { Link } from 'react-scroll';

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link
                to="intro"  
                smooth={true}
                duration={500}
                spy={true}
                activeClass="nav-link-active"
            >
                <img src={logo} alt="logo" className='logo'/>
            </Link>
            <div className="desktopMenu">
                <Link
                    className="desktopMenuListItem"
                    to="intro"
                    smooth={true}
                    duration={500}
                    spy={true}
                    activeClass="nav-link-active"
                >
                    Home
                </Link>
                <Link
                    className="desktopMenuListItem"
                    to="skills"
                    smooth={true}
                    duration={500}
                    spy={true}
                    activeClass="nav-link-active"
                >
                    About
                </Link>
                <Link
                    className="desktopMenuListItem"
                    to="works"
                    smooth={true}
                    duration={500}
                    spy={true}
                    activeClass="nav-link-active"
                >
                    Portfolio
                </Link>
                <Link
                    className="desktopMenuListItem"
                    to="tools"
                    smooth={true}
                    duration={500}
                    spy={true}
                    activeClass="nav-link-active"
                >
                    Tools
                </Link>
            </div>
            <Link
                to="contact"
                smooth={true}
                duration={500}
                spy={true}
                activeClass="nav-link-active"
                className="desktopMenuBtn"
            >
                <img src={contactImg} alt="Contact" className="desktopMenuImg" />
                Contact me
            </Link>
        </nav>
    );
}

export default Navbar;
