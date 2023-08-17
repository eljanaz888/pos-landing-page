import React from "react"
import { Link } from "gatsby"
import "../components/contact.css"
import { Trans } from "react-i18next"
import { Youtube, EnvelopeAtFill } from "react-bootstrap-icons"
import { Seo } from "gatsby-theme-portfolio-minimal"
import { Helmet } from "react-helmet"

const ContactUs = () => {
    return (
        <>
            <Seo title="Pos.al"
                description={<Trans>"Get in touch with us to learn more about our services and how we can help your business thrive."</Trans>} />

            <Helmet>
                <script type="application/ld+json">
                    {`
        {
          "@context": "https://schema.org",
          "@type": "Organization",
          "url": "https://posal.tawk.help/",
          "name": "SPos.al",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+355672014274",
            "email": "info@pos.al"
            "contactType": "Customer Support"
          }
        }
      `}
                </script>
            </Helmet>

            <section className="contact-us" id="contact">
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
            </section>
        </>
    )
}

export default ContactUs
