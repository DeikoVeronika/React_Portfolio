import React from 'react'
import './works.css';
import Portfolio1 from '../../assets/portfolio-1.png';
import Portfolio2 from '../../assets/portfolio-2.png';
import Portfolio3 from '../../assets/portfolio-3.png';
import Portfolio4 from '../../assets/portfolio-4.png';
import Portfolio5 from '../../assets/portfolio-5.png';
import Portfolio6 from '../../assets/portfolio-6.png';
import Portfolio8 from '../../assets/portfolio-8.png';
import Portfolio9 from '../../assets/portfolio-9.png';

const Works = () => {
    return (
        <section id='works'>
            <h2 className='worksTitle uppercase'>My Portfolio</h2>
            <span className='worksDesc'>I take pride in paying attention to the small details and sure that my work is pixel perfect</span>
            <div className='worksImgs'>
                <img className='worksImg' src={Portfolio1} alt='Portfolio 1'/>
                <img className='worksImg' src={Portfolio2} alt='Portfolio 2'/>
                <img className='worksImg' src={Portfolio3} alt='Portfolio 3'/>
                <img className='worksImg' src={Portfolio4} alt='Portfolio 4'/>
                <img className='worksImg' src={Portfolio5} alt='Portfolio 5'/>
                <img className='worksImg' src={Portfolio6} alt='Portfolio 6'/>
                <img className='worksImg' src={Portfolio8} alt='Portfolio 8'/>
                <img className='worksImg' src={Portfolio9} alt='Portfolio 9'/>
            </div>
            <button className='worksBtn'>See more</button>
        </section>
    )
}

export default Works;