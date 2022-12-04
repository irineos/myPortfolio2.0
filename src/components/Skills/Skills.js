import React from "react";
import './Skills.css'

import iconDev from "../../assets/icon-dev.svg";
import iconDesign from "../../assets/icon-design.svg";
import database from "../../assets/database.svg";
import git from "../../assets/git.svg";


function Skills() {

    return(

        <div className='skills'>

            <header>
                <h2 className="h2 article-title">My Skills</h2>
            </header>

            <section className="skills">

                <ul className="skills-list">

                    <ul className="skills-item">

                        <div className="skills-icon-box">
                            <img src={iconDev} alt="design icon" width="40"/>
                        </div>

                        <div className="skills-content-box">
                            <h4 className="h4 skills-item-title">Front End</h4>

                            <p className="skills-item-text">
                                <li>- Html/CSS</li>
                                <li>- React</li>
                                <li>- Flutter/ Dart</li>
                            </p>
                        </div>

                    </ul>

                    <ul className="skills-item">

                        <div className="skills-icon-box">
                            <img src={iconDesign} alt="Web development icon" width="40"/>
                        </div>

                        <div className="skills-content-box">
                            <h4 className="h4 skills-item-title">Back End</h4>

                            <p className="skills-item-text">
                                <li>- Java</li>
                                <li>- Python</li>
                                <li>- NodeJS</li>
                            </p>
                        </div>

                    </ul>

                    <ul className="skills-item">

                        <div className="skills-icon-box">
                            <img src={database} alt="mobile app icon" width="40"/>
                        </div>

                        <div className="skills-content-box">
                            <h4 className="h4 skills-item-title">Databases</h4>

                            <p className="skills-item-text">
                                <li>- MySQL</li>
                                <li>- MongoDB</li>
                            </p>
                        </div>

                    </ul>

                    <ul className="skills-item">

                        <div className="skills-icon-box">
                            <img src={git} alt="camera icon" width="40"/>
                        </div>

                        <div className="skills-content-box">
                            <h4 className="h4 skills-item-title">Source Control</h4>

                            <p className="skills-item-text">
                                <li>- Git</li>
                                <li>- GitHub</li>
                            </p>
                        </div>

                    </ul>

                </ul>

            </section>
        </div>

    );
}

export default Skills;