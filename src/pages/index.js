import React from "react";
import {
  // ContactSection,
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";
import Pricing from '../components/pricing'
import Hero from '../components/hero';

export default function IndexPage() {
  return (
    <>
      <Seo title="Pos." />
      <Page useSplashScreenAnimation>
      <Hero/>
        <Pricing />
        <ProjectsSection sectionId="features" heading="Built-in Features" />
        {/* <ContactSection sectionId="github" heading="Issues?" /> */}

      </Page>
    </>
  );
}
