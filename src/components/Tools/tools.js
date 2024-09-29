import React from 'react'
import './tools.css';

const Tools = () => {
    return (
        <section id='tools'>
        <h3 className="toolsTitle uppercase">Technologies and Tools</h3>
        <div className="tool-item flex align-items-center">
            <div className="tools-item">
              <div className="tool-item flex align-items-center">
                <img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" />
                <h4>HTML5</h4>
              </div>
              <div className="progress">
                <span className="html"></span>
              </div>
            </div>
            <div className="tools-item">
              <div className="tool-item flex align-items-center">
                <img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg" alt="CSS3"/>
                <h4>CSS3</h4>
              </div>
              <div className="progress">
                <span className="css"></span>
              </div>
            </div>
            <div  className="tools-item">
              <div className="tool-item flex align-items-center">
                <img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript"/>
                <h4>JavaScript</h4>
              </div>
              <div className="progress">
                <span className="javascript"></span>
              </div>
            </div>
            <div className="tools-item">
              <div className="tool-item flex align-items-center">
                <img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg" alt="Bootstrap"/>
                <h4>Bootstrap</h4>
              </div>
              <div className="progress">
                <span className="bootstrap"></span>
              </div>
            </div>
            <div className="tools-item">
              <div className="tool-item flex align-items-center">
                <img  src="https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/csharp/csharp-original.svg" alt="cSharp"/>
                <h4>C#</h4>
              </div>
              <div className="progress">
                <span className="csharp"></span>
              </div>
            </div>
            <div className="tools-item">
              <div className="tool-item flex align-items-center">
                <img  src="https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/webstorm/webstorm-original.svg" alt="WebStorm"/>
                <h4>WebStorm</h4>
              </div>
            </div>
            <div className="tools-item">
              <div className="tool-item flex align-items-center">
                <img  src="https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/vscode/vscode-original.svg" alt="VisualStudioCode"/>
                <h4>Visual Studio Code</h4>
              </div>
            </div>
            <div className="tools-item" >
              <div className="tool-item flex align-items-center">
                <img  src="https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/visualstudio/visualstudio-original.svg" alt="VisualStudio"/>
                <h4>Visual Studio</h4>
              </div>
            </div>
            <div className="tools-item" >
              <div className="tool-item flex align-items-center">
                <img  src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="Postman"/>
                <h4>Postman</h4>
              </div>
            </div>
          </div>
        </section>
    )
}

export default Tools;