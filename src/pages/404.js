import React from 'react';
import { Page, Seo, Section } from "gatsby-theme-portfolio-minimal";



export default function NotFoundPage() {


  return (
    <>
      <Seo title="404: Not found" />
      <Page useSplashScreenAnimation>
        <Section heading="Page does not exist" anchor="404">
        </Section>
      </Page>
    </>
  );
}

