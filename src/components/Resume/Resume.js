import React from "react";
import './Resume.css';

import Timeline from "../Timeline/Timeline";

function Resume() {

    return(

        <div className='resume'>

            <header>
                <h2 className="h2 article-title">Resume</h2>
            </header>

            <Timeline
                title='Education'
                icon='book-outline'
                children={
                    <>
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
                    </>
                }
            />

            <Timeline
                title='Experience'
                icon='briefcase-outline'
                children={
                    <>
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
                    </>
                }
            />

        </div>
    );
}

export default Resume