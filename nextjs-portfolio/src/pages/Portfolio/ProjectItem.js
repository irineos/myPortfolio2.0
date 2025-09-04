import React from "react";

function ProjectItem({image, title, description, link, icon}) {

    return (
        <li className="project-item" >
            <a href={link}>
                <figure className="project-img">
                    <div className="project-item-icon-box">
                        <ion-icon name={icon}></ion-icon>
                    </div>
                    <img src={image} alt={title} loading="lazy"/>
                </figure>
                <h3 className="project-title">{title}</h3>
                <p className="project-category">{description}</p>
            </a>
        </li>
    );
}

export default ProjectItem;