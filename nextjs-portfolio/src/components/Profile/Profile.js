import React, { useState } from 'react'
import './Profile.css'
import '../../App.css'
import '../../index.css'
import IonIcon from '../IonIcon'


function Profile({ profileData }) {
	const [isActive, setActive] = useState(false);
	
	// Fallback data in case props are not provided
	if (!profileData) {
		return <div>Loading profile...</div>;
	}
	const elementToggleFunc = () => { setActive(!isActive) };

	return (
		
	    <aside className={isActive ? "sidebar active" : "sidebar"}>

			<div className="sidebar-info">
	
				<figure className="avatar-box">
					<img src={profileData.logo} alt="Irineos Kyritsis" width="80"/>
				</figure>
		
				<div className="info-content">
					<h1 className="name" title="Irineos Kyritsis">{profileData.name}</h1>
		
					<p className="title">{profileData.jobTitle}</p>
				</div>
	
			</div>

			<button className="info_more-btn" onClick={elementToggleFunc}>
          		<span>Show Contacts</span>

			<IonIcon name="chevron-down"></IonIcon>
        	</button>

	
			<div className="sidebar-info_more">
	
			<div className="separator"></div>
	
			<ul className="contacts-list">
				<li className="contact-item">
					<div className="icon-box">
						<IonIcon name={profileData.email.icon}></IonIcon>
					</div>
		
					<div className="contact-info">
						<p className="contact-title">Email</p>
						<a href="mailto:irineosk@gmail.com" className="contact-link">
							{profileData.email.text}
						</a>
					</div>
				</li>
				<li className="contact-item">
					<div className="icon-box">
						<IonIcon name={profileData.phone.icon}></IonIcon>
					</div>
		
					<div className="contact-info">
						<p className="contact-title">Phone</p>
						<a href={profileData.phone.text} className="contact-link">{profileData.phone.text}</a>
					</div>
				</li>
				<li className="contact-item">
					<div className="icon-box">
						<IonIcon name={profileData.birthday.icon}></IonIcon>
					</div>

					<div className="contact-info">
						<p className="contact-title">Birthday</p>

						<time dateTime="1998-07-25">{profileData.birthday.text}</time>
					</div>
				</li>
				<li className="contact-item">
					<div className="icon-box">
						<IonIcon name={profileData.address.icon}></IonIcon>
					</div>

					<div className="contact-info">
						<p className="contact-title">Address</p>

						<address>{profileData.address.text}</address>
					</div>
				</li>
			</ul>
	
			<div className="separator"></div>
	
			<ul className="social-list">
				<li className="social-item">
					<a href={profileData.gitHub.link}className="social-link">
						<IonIcon name={profileData.gitHub.icon}></IonIcon>
					</a>
				</li>
				<li className="social-item">
					<a href={profileData.linkedIn.link} className="social-link">
						<IonIcon name={profileData.linkedIn.icon}></IonIcon>
					</a>
				</li>
			</ul>
	
			</div>
  
	  	</aside>
  
	)
}

export default Profile
