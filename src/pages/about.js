import React from "react";
import { Page, Seo } from "gatsby-theme-portfolio-minimal";
import { graphql } from "gatsby";
import { Trans } from "gatsby-plugin-react-i18next";
import "../components/about.css";

const AboutUs = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <>
      <Seo title="About Us"
        description={<Trans>"Learn more about our company's mission, services, and commitment to excellence."</Trans>} />
      <Page useSplashScreenAnimation>
        <section className="about">
          <div className="about-content">
            <h1><Trans>{frontmatter.title}</Trans></h1>
            <p><Trans>{frontmatter.welcome}</Trans></p>
            <p><Trans>{frontmatter.mission}</Trans></p>
            <div>
              <h2><Trans>Services</Trans></h2>
              <ul>
                {frontmatter.services.map((service, index) => (
                  <li key={index}><u><Trans>{service}</Trans></u></li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </Page>
    </>
  );
};

export default AboutUs;

export const query = graphql`
query languagesAndMyQuery($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    markdownRemark(fileAbsolutePath: { regex: "/about.md/" }) {
      frontmatter {
        title
        welcome
        mission
        services
      }
    }
  }
  
`;
