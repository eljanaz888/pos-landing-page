import React from "react";
import { Page, ProjectsSection, Seo } from "gatsby-theme-portfolio-minimal";
import Pricing from '../components/pricing'
import Hero from '../components/hero';
import TawkToWidget from '../components/TawkToWidget';
import { graphql } from "gatsby";
import ContactUs from "../components/contact";
import { Helmet } from "react-helmet";

export default function IndexPage() {

  const thumbnailUrl = {
    childImageSharp: {
      original: {
        src: '../images/pos-main.png'
      }
    }
  };

  return (
    <>
      <Seo title="Pos.al: Simplify Your Point of Sale"
        description="Discover our innovative Point of Sale (POS) solutions designed to elevate your business."
        thumbnail={thumbnailUrl} />
      <Page useSplashScreenAnimation>
        <Helmet>
          <script type="application/ld+json">
            {`
                      {
                    "@context": "https://schema.org",
                    "@type": "Organization",
                    "headline": <Trans>Pos.al: Simplify Your Point of Sale</Trans>,
                    "description": <Trans>Discover our innovative Point of Sale (POS) solutions designed to elevate your business.</Trans>,
                    "image": thumbnailUrl.childImageSharp.original.src,
                    "url": "https://www.app.pos.al",
                    "author": {
                      "@type": "Organization",
                      "name": "Pos.al"
                    }
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
        <Hero sectionId="hero" heading="Heading" />
        <Pricing sectionId="pricing" heading="Pricing" />
        <ProjectsSection sectionId="features" heading="Features" />
        <ContactUs sectionId="contact-us" heading="Contact Us" />
        <TawkToWidget tawkId="644403d74247f20fefed28f8/1gukqu0l3" />
      </Page>
    </>
  );
}

export const query = graphql`
  query($language: String!) {
    locales: allLocale(filter: {language: {eq: $language}}) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
