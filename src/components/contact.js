import React from "react"
import { Link } from "gatsby"
import "../components/contact.css"
import { Trans } from "react-i18next"
import { Youtube, EnvelopeAtFill } from "react-bootstrap-icons"

const ContactUs = () => {
    return (
        <div className="contact-us" id="contact">
            <h1><Trans>Get in Touch with us</Trans></h1>
            <p><Trans>If you have any quesiton or need help with anything, don't hesitate to reach out to us:</Trans></p>
            <div className="contact-details">
                <div className="contact-info">
                    <p className="phone"><Trans>Mobile:</Trans><span>+355672014274</span></p>
                    <p className="email"><Trans>Email:</Trans><span>info@pos.al</span></p>
                </div>
            </div>
            <div className="buttons">
                <Link to="https://www.youtube.com/channel/UCuR5SmYAHoXONCGUSwlqRSg" className="youtube" target="_blank">
                    <span className="icon"><Youtube /></span>
                    <span className="text"><Trans>Follow us on YouTube</Trans></span>
                </Link>
                <a href="info@pos.al" className="email-button">
                    <span className="icon"><EnvelopeAtFill /></span>
                    <span className="text"><Trans>Email us</Trans></span>
                </a>

            </div>
        </div>
    )
}

export default ContactUs
