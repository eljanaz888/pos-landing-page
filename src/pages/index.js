import React from "react";
import { Page, ProjectsSection, Seo } from "gatsby-theme-portfolio-minimal";
import Pricing from '../components/pricing'
import Hero from '../components/hero';
import TawkToWidget from '../components/TawkToWidget';
import { graphql } from "gatsby";
import ContactUs from "../components/contact";

export default function IndexPage() {

  return (
    <>
      <Seo title="Pos." />
      <Page useSplashScreenAnimation>
        <Hero />
        <Pricing />
        <ProjectsSection sectionId="features" heading="Features" />
        <ContactUs />
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
