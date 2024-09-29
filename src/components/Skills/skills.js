import React from 'react';
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';
import WebDevelopment from '../../assets/web-development.png';



const Skills = () => {
    return (
        <section id='skills'>
            <span className="skillTitle">What I do</span>
            <span className="skillDesc">Тут скоро буде опис</span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={WebDevelopment} alt="Web Development" className="skillBarImg"/>
                    <div className="SkillBarText">
                        <h2>Web Development</h2>
                        <p>Тут скоро щось буде написано..</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={UIDesign} alt="UI/UX Design" className="skillBarImg"/>
                    <div className="SkillBarText">
                        <h2>UI/UX</h2>
                        <p>Тут скоро щось буде написано..</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={WebDesign} alt="Web Design" className="skillBarImg"/>
                    <div className="SkillBarText">
                        <h2>Web Design</h2>
                        <p>Тут скоро щось буде написано..</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={AppDesign} alt="App Design" className="skillBarImg"/>
                    <div className="SkillBarText">
                        <h2>App Design</h2>
                        <p>Тут скоро щось буде написано..</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills;