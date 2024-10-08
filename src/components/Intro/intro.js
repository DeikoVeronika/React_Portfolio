// src/components/Intro/intro.js
import React from "react";
import './intro.css';
import bg from '../../assets/image.png';
import btnImg from '../../assets/hireme.png';
import { Link } from 'react-scroll';
import BlobCanvas from '../Blob'; // Import the Blob component

const Intro = () => {
    return (
        <section id="intro">
            <BlobCanvas /> {/* Add the BlobCanvas component here */}
            <div className="introContent">
                <span className="hello">Hello, </span>
                <span className="introText">I'm <span className="introName">Veronika</span></span>
                <p className="introPara">I am a student majoring in computer science. I am a junior web developer and UX/UI designer.</p>
                <Link
                    to="contact"
                    smooth={true}
                    duration={500}
                    spy={true}
                    activeClass="nav-link-active"
                >
                    <button className="btn">
                        <img className="btnImg" src={btnImg} alt="Hire me" />Hire me
                    </button>
                </Link>
            </div>
            <img src={bg} alt="Profile" className="bg" />
        </section>
    );
};

export default Intro;
