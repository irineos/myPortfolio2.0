import React from "react";
import './Resume.css';

import Timeline from "../Timeline/Timeline";
import TimelineItem from "../Timeline/TimelineItem";

function Resume({education, experience}) {

    return(

        <div className='resume'>

            <header>
                <h2 className="h2 article-title">Resume</h2>
            </header>

            <Timeline
                title={education.root.title}
                icon={education.root.icon}
                children={
                    education.list.map((item, i) => {
                        return(
                            <TimelineItem
                                key={i}
                                title={item.title} period={item.period} description={item.description}
                            />
                        );
                    })
                }
            />

            <Timeline
                title={experience.root.title}
                icon={experience.root.icon}
                children={
                    experience.list.map((item, i) => {
                        return(
                            <TimelineItem
                                key={i}
                                title={item.title} period={item.period} description={item.description}
                            />
                        )
                    })
                }
            />

        </div>
    );
}

export default Resume