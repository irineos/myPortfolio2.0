import React from 'react'

import './Portfolio.css'
import image1 from "../../assets/voeskaImage.jpg"
import image2 from "../../assets/nnlibrary.png"
import image3 from "../../images/project-7.png"

function Portfolio() {

	return (
		<article className="portfolio active" data-page="portfolio">

			<header>
				<h2 className="h2 article-title">Portfolio</h2>
			</header>

			<section className="projects">

				<ul className="project-list">

					<li className="project-item  active" >
						<a href="#">

							<figure className="project-img">
								<div className="project-item-icon-box">
									<ion-icon name="logo-github"></ion-icon>
								</div>

								<img src={image1} alt="finance" loading="lazy"/>
							</figure>

							<h3 className="project-title">Voeska</h3>

							<p className="project-category">Mobile App</p>

						</a>
					</li>

					<li className="project-item  active" >
						<a href="#">

							<figure className="project-img">
								<div className="project-item-icon-box">
									<ion-icon name="logo-github"></ion-icon>
								</div>

								<img src={image2} alt="orizon" loading="lazy"/>
							</figure>

							<h3 className="project-title">Neural Network Library</h3>

							<p className="project-category">C program</p>

						</a>
					</li>

					<li className="project-item  active" >
						<a href="#">

							<figure className="project-img">
								<div className="project-item-icon-box">
									<ion-icon name="logo-github"></ion-icon>
								</div>

								<img src={image3} alt="orizon" loading="lazy"/>
							</figure>

							<h3 className="project-title">Money Expert</h3>

							<p className="project-category">Web Development</p>

						</a>
					</li>

				</ul>

			</section>
		</article>
	)
}

export default Portfolio
