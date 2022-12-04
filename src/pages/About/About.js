import React from 'react'
import './About.css'
import '../../App.css'
import '../../index.css'

import iconDesign from "../../images/icon-design.svg"
import iconDev from "../../images/icon-dev.svg"
import git from "../../images/git.svg"
import database from "../../images/database.svg"

function About() {

    return (
        <article className="about active" data-page="about">

            <header>
                <h2 className="h2 article-title">About me</h2>
            </header>

            <section className="about-text">

                <p>
                    Junior Software Engineer with fundamental knowledge of software design,
                    development and testing. Seeking to utilize broad educational
                    background at the right place, for further growth.
                </p>

            </section>
            
            {/*Resume*/}
            <div className='resume'>
                <article className="resume" data-page="resume"></article>

                <header>
                <h2 className="h2 article-title">Resume</h2>
                </header>

                <section className="timeline">

                    <div className="title-wrapper">
                        <div className="icon-box">
                            <ion-icon name="book-outline"></ion-icon>
                        </div>

                        <h3 className="h3">Education</h3>
                    </div>

                    <ol className="timeline-list">

                        <li className="timeline-item">
                            <h4 className="h4 timeline-item-title">Computer Science and Engineering</h4>
                            <span>2016-2021</span>
                            <p className="timeline-text">
                                University of Ioannina
                            </p>
                        </li>

                        <li className="timeline-item">
                            <h4 className="h4 timeline-item-title">High School</h4>
                            <span>Graduated Class of 2016</span>
                            <p className="timeline-text">
                                Makryhori, Larissa
                            </p>
                        </li>

                    </ol>

                </section>

                <section className="timeline">

                    <div className="title-wrapper">
                        <div className="icon-box">
                            <ion-icon name="book-outline"></ion-icon>
                        </div>

                        <h3 className="h3">Experience</h3>
                    </div>

                    <ol className="timeline-list">

                        <li className="timeline-item">
                            <h4 className="h4 timeline-item-title">RCS Technologies Greece</h4>
                            <span>2022 — Present</span>
                            <p className="timeline-text">
                               Java Developer
                            </p>
                        </li>

                        <li className="timeline-item">
                            <h4 className="h4 timeline-item-title">Terracom S.A.</h4>
                            <span>April-May 2021</span>
                            <p className="timeline-text">
                                Created a gamification mobile app,
                                that was part of Voeska Project, using Flutter/Dart framework.
                            </p>
                        </li>

                    </ol>

                </section>

                <section className="service">

                    <h3 className="h3 service-title">My Skills</h3>

                    <ul className="service-list">

                        <ul className="service-item">

                            <div className="service-icon-box">
                                <img src={iconDev} alt="design icon" width="40"/>
                            </div>

                            <div className="service-content-box">
                                <h4 className="h4 service-item-title">Front End</h4>

                                <p className="service-item-text">
                                    <li>- Html/CSS</li>
                                    <li>- React</li>
                                    <li>- Flutter/ Dart</li>
                                </p>
                            </div>

                        </ul>

                            <ul className="service-item">

                            <div className="service-icon-box">
                                <img src={iconDesign} alt="Web development icon" width="40"/>
                            </div>

                            <div className="service-content-box">
                                <h4 className="h4 service-item-title">Back End</h4>

                                <p className="service-item-text">
                                    <li>- Java</li>
                                    <li>- Python</li>
                                    <li>- NodeJS</li>
                                </p>
                            </div>

                        </ul>

                        <ul className="service-item">

                            <div className="service-icon-box">
                                <img src={database} alt="mobile app icon" width="40"/>
                            </div>

                            <div className="service-content-box">
                                <h4 className="h4 service-item-title">Databases</h4>

                                <p className="service-item-text">
                                    <li>- MySQL</li>
                                    <li>- MongoDB</li>
                                </p>
                            </div>

                        </ul>

                        <ul className="service-item">

                            <div className="service-icon-box">
                                <img src={git} alt="camera icon" width="40"/>
                            </div>

                            <div className="service-content-box">
                                <h4 className="h4 service-item-title">Source Control</h4>

                                <p className="service-item-text">
                                    <li>- Git</li>
                                    <li>- GitHub</li>
                                </p>
                            </div>

                        </ul>

                    </ul>

                </section>
            </div>

        </article>

    )
}

export default About