import React from 'react'
import './Home.css'
import '../../App.css'
import '../../index.css'
import About from "../../components/About/About";
import Resume from "../../components/Resume/Resume";
import Skills from "../../components/Skills/Skills";

function Home() {

    return (

        <article className="home">

            <About/>
            <Resume/>
            <Skills/>

        </article>

    )
}

export default Home