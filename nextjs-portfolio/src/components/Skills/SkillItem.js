import React from "react";

function SkillItem({icon, title, description}) {

    return (

        <li className="skills-item">
            <div className="skills-icon-box">
                <img src={icon} alt="design icon" width="40"/>
            </div>

            <div className="skills-content-box">
                <h4 className="h4 skills-item-title">{title}</h4>

                <ul className="skills-item-text">
                    {
                        description.map((d, i) => {
                            return(
                                <li key={i}>
                                    {'- ' + d}
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        </li>

    )
}

export default SkillItem;