import React from "react";
import { Page, ProjectsSection, Seo } from "gatsby-theme-portfolio-minimal";
import Pricing from '../components/pricing'
import Hero from '../components/hero';
import Review from '../components/review';
import TawkToWidget from '../components/TawkToWidget';
import { graphql } from "gatsby";

export default function IndexPage() {

  return (
    <>
      <Seo title="Pos." />
      <Page useSplashScreenAnimation>
        <Hero/>
        <Pricing />
        <ProjectsSection sectionId="features" heading="Built-in Features" />
        <Review/>
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
