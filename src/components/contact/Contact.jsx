import React from 'react'
import './contact.css'
import Phone from '../../assets/phone.png'
import Email from '../../assets/email.png'

const Contact = () => {
    return (
        <section id="contact">
        <h2>Contact Me</h2>
            <div className="container contact__container">
                <div className="contact_card">
                    <img src={Phone}></img>
                    <a href="tel:+15145661989">Call Me</a>
                </div>

                <div className="contact_card">
                    <img src={Email}></img>
                    <a href="mailto:saeedjamalifashy@gmail.com">Email me</a>
                </div>
            </div>
        </section>
    )
}

export default Contact
