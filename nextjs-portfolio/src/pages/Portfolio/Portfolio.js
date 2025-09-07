import React from 'react'

import './Portfolio.css'
import ProjectItem from "./ProjectItem";
function Portfolio({ projectsData, onProjectClick }) {
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
						projectsData.projects
							.sort((a, b) => (b.order || 0) - (a.order || 0))
							.map((project, i) => {
								return(
									<ProjectItem
										key={i}
										project={project}
										image={project.image}
										title={project.title}
										description={project.description}
										link={project.links[0].link}
										onProjectClick={onProjectClick}
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
