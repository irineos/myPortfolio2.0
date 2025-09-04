import React from "react";
import './Skills.css'
import SkillItem from "./SkillItem";


function Skills({skills}) {

    return(

        <div className='skills'>

            <header>
                <h2 className="h2 article-title">My Skills</h2>
            </header>

            <section className="skills">
                <ul className="skills-list">
                    {
                        skills.map((skill, i) => {
                            return (
                                <SkillItem
                                    key={i}
                                    icon={skill.icon} title={skill.title} description={skill.description}/>
                            );
                        })
                    }
                </ul>
            </section>

        </div>

    );
}

export default Skills;