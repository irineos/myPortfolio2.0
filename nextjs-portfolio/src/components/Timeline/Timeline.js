import React from 'react';
import './Timeline.css'
import IonIcon from '../IonIcon'

function Timeline({title, icon, children}) {

	return (

		<section className="timeline">

			<div className="title-wrapper">
				<div className="icon-box">
					<IonIcon name={icon}></IonIcon>
				</div>

				<h3 className="h3">{title}</h3>
			</div>

			<ol className="timeline-list">
				{children}
			</ol>

		</section>

	);
}

export default Timeline
