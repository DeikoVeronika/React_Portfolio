import React, { useState } from 'react';

import './works.css';
import Portfolio1 from '../../assets/portfolio-1.png';
import Portfolio2 from '../../assets/portfolio-2.png';
import Portfolio3 from '../../assets/portfolio-3.png';
import Portfolio4 from '../../assets/portfolio-4.png';
import Portfolio5 from '../../assets/portfolio-5.png';
import Portfolio6 from '../../assets/portfolio-6.png';
import Portfolio7 from '../../assets/portfolio-7.png';
import Portfolio8 from '../../assets/portfolio-8.png';
import Portfolio9 from '../../assets/portfolio-9.png';

const Works = () => {
    const [showAll, setShowAll] = useState(false);

    const handleShowMore = () => {
        setShowAll(true);
    };

    return (
        <section id='works'>
            <h2 className='worksTitle uppercase'>My Portfolio</h2>
            <span className='worksDesc'>I take pride in paying attention to the small details and sure that my work is pixel perfect</span>
            <div className="projects-wrap-wrap flex justify-center">
            <div className="projects-wrap">
                <div className="project-picture-container">
                <ul className="project-meta flex">
                    <li>UX Design</li>
                    <li>Web Development</li>
                </ul>
                <div className="project-picture-wrap">
                    <img src={Portfolio1} alt="Project 1" className="project-img" />
                </div>
                </div>
                <div className={`project-picture-container ${showAll ? '' : 'hidden'}`}>
                <ul className="project-meta flex">
                    <li>UX Design</li>
                    <li>Web Development</li>
                </ul>
                <div className="project-picture-wrap">
                    <img src={Portfolio4} alt="Project 4" className="project-img" />
                </div>
                </div>
                <div className={`project-picture-container ${showAll ? '' : 'hidden'}`}>
                <ul className="project-meta flex">
                    <li>UX Design</li>
                    <li>Web Development</li>
                </ul>
                <div className="project-picture-wrap">
                    <img src={Portfolio2} alt="Project 2" className="project-img" />
                </div>
                </div>
                <div className={`project-picture-container ${showAll ? '' : 'hidden'}`}>
                <ul className="project-meta flex">
                    <li>UX/UI Design</li>
                    <li>Frontend Development</li>
                </ul>
                <div className="project-picture-wrap">
                    <img src={Portfolio7} alt="Project 7" className="project-img" />
                </div>
                </div>
                <div className={`project-picture-container ${showAll ? '' : 'hidden'}`}>
                <ul className="project-meta flex">
                    <li>UX/UI Design</li>
                    <li>Frontend Development</li>
                </ul>
                <div className="project-picture-wrap">
                    <img src={Portfolio8} alt="Project 8" className="project-img" />
                </div>
                </div>
            </div>
            <div className="projects-wrap">
                <div className="project-picture-container">
                    <ul className="project-meta flex">
                        <li>UX Design</li>
                        <li>Web Development</li>
                    </ul>
                    <div className="project-picture-wrap">
                        <img src={Portfolio3} alt="Project 3" className="project-img" />
                    </div>
                </div>
                <div className={`project-picture-container ${showAll ? '' : 'hidden'}`}>
                <ul className="project-meta flex">
                    <li>UX Design</li>
                    <li>Web Development</li>
                </ul>
                <div className="project-picture-wrap">
                    <img src={Portfolio5} alt="Project 5" className="project-img" />
                </div>
                </div>
                <div className={`project-picture-container ${showAll ? '' : 'hidden'}`}>
                <ul className="project-meta flex">
                    <li>UX/UI Design</li>
                    <li>Frontend Development</li>
                </ul>
                <div className="project-picture-wrap">
                    <img src={Portfolio6} alt="Project 6" className="project-img" />
                </div>
                </div>
                <div className={`project-picture-container ${showAll ? '' : 'hidden'}`}>
                <ul className="project-meta flex">
                    <li>UX/UI Design</li>
                    <li>Frontend Development</li>
                </ul>
                <div className="project-picture-wrap">
                    <img src={Portfolio9} alt="Project 9" className="project-img" />
                </div>
                </div>

            </div>
            </div>
            {!showAll && (
                <div className="show-more-btn">
                <button id="show-more-projects" onClick={handleShowMore}>
                    Show All
                </button>
                </div>
            )}
        </section>
    )
}

export default Works;