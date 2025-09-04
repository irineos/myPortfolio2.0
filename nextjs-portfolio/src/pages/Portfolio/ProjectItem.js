import React from "react";

function ProjectItem({project, image, title, description, link, onProjectClick}) {

    const handleClick = (e) => {
        e.preventDefault()
        if (onProjectClick) {
            onProjectClick(project)
        }
    }

    return (
        <li className="project-item" >
            <a href={link} onClick={handleClick} className="project-item-link">
                <figure className="project-img">
                    <img src={image} alt={title} loading="lazy"/>
                </figure>
                <h3 className="project-title">{title}</h3>
                <p className="project-category">{description}</p>
                <div className="project-overlay">
                    <span className="view-details">View Details</span>
                </div>
            </a>
        </li>
    );
}

export default ProjectItem;