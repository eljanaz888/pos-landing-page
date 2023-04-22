import React from "react";
import {
  // ContactSection,
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";
import Pricing from '../components/pricing'
import Hero from '../components/hero';
import Review from '../components/review';

export default function IndexPage() {
  return (
    <>
      <Seo title="Pos." />
      <Page useSplashScreenAnimation>
      <Hero/>
        <Pricing />
        <ProjectsSection sectionId="features" heading="Built-in Features" />
        <Review/>
        {/* <ContactSection sectionId="github" heading="Issues?" /> */}

      </Page>
    </>
  );
}
