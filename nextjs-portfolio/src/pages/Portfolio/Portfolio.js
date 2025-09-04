import React from 'react'

import './Portfolio.css'
import ProjectItem from "./ProjectItem";
function Portfolio({ projectsData }) {
	// Fallback data in case props are not provided
	if (!projectsData || !projectsData.projects) {
		return <div>Loading projects...</div>;
	}

	return (
		<article className="portfolio">

			<header>
				<h2 className="h2 article-title">Portfolio</h2>
			</header>

			<section className="projects">
				<ul className="project-list">
					{
						projectsData.projects.map((project, i) => {
							return(
								<ProjectItem
									key={i}
									image={project.image}
									title={project.title}
									description={project.description}
									link={project.links[0].link}
									icon={project.links[0].icon}
								/>
							)
						})
					}
				</ul>
			</section>
		</article>
	);
}

export default Portfolio
