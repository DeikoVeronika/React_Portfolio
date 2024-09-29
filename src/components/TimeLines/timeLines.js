import React from 'react'
import './timeLines.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';

const TimeLines = () => {
    return (
        <section id='timeLines' className='timeline-wrap'>
            <h3 className="stat-title text-center uppercase">My Timeline</h3>
            <div className="timeline">
            <div className="timeline-item">
                    <div className="timeline-icon flex">
                        <FontAwesomeIcon icon={faBriefcase} className='icon'/>   {/* Briefcase icon */}
                    </div>
                    <p className="timeline-duration">2022 - 2026</p>
                    <h5>КНУ ім. Тараса Шевченка <span>ФКНК</span></h5>
                    <p>
                        Студентка Київського національного університету імені Тараса Шевченка. Факультет комп'ютерних наук та кібернетики, спеціальність 122 "Комп'ютерні науки".
                    </p>
                    </div>
                </div>
        </section>
    )
}

export default TimeLines;
