import React from 'react'
import './About.css'
import '../../App.css'
import '../../index.css'

function About({text}) {

    return (

        <>
            <header>
                <h2 className="h2 article-title">About me</h2>
            </header>

            <section className="about-text">

                <p>
                    {text}
                </p>

            </section>
        </>
    );
}

export default About;