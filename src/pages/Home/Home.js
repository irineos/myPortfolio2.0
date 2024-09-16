import React from 'react'
import ReactGA from 'react-ga4';

import './Home.css'
import '../../App.css'
import '../../index.css'
import About from "../../components/About/About";
import Resume from "../../components/Resume/Resume";
import Skills from "../../components/Skills/Skills";

import resumeData from "../../utils/resumeData";

function Home() {

    ReactGA.send({
        hitType: "pageview",
        page: "/",
        title: "Home"
    })

    return (

        <article className="home">

            <About text={resumeData.about} />
            <Resume education={resumeData.education} experience={resumeData.experience}/>
            <Skills skills={resumeData.skills}/>

        </article>

    )
}

export default Home