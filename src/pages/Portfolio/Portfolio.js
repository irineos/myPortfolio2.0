import React from 'react'
import ReactGA from "react-ga4";

import './Portfolio.css'
import ProjectItem from "./ProjectItem";
import projectData from "../../utils/projectData";

function Portfolio() {

	ReactGA.send({
		hitType: "pageview",
		page: "/portfolio",
		title: "Portfolio"
	})

	return (
		<article className="portfolio">

			<header>
				<h2 className="h2 article-title">Portfolio</h2>
			</header>

			<section className="projects">
				<ul className="project-list">
					{
						projectData.projects.map((project, i) => {
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
