import React from 'react'
import './Contact.css'
import '../../App.css'
import '../../index.css'


function Contact() {

   
	return (

        <article className="contact active">

            <header>
                <h2 className="h2 article-title">Contact</h2>
            </header>

            <section className="mapbox" data-mapbox>
                <figure>
                <iframe
                    title='Area Map'
                    src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Piraeus,%20Greece+()&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                    width="400" height="300" loading="lazy"></iframe>
                </figure>
            </section>

            <section className="contact-form">

                <h3 className="h3 form-title">Contact Form</h3>

                <form className="form">

                    <div className="input-wrapper">
                        <input type="text" name="fullname" className="form-input" placeholder="Full name" required />
                        <input type="email" name="email" className="form-input" placeholder="Email address" required/>
                    </div>

                    <textarea name="message" className="form-input" placeholder="Your Message" required ></textarea>

                    <button className="form-btn" type="submit">
                        <ion-icon name="paper-plane"></ion-icon>
                        <span>Send Message</span>
                    </button>

                </form>

            </section>

        </article>
    );

}
export default Contact;
