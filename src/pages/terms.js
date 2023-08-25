import React from "react";
import { Page, Seo } from "gatsby-theme-portfolio-minimal";
import { graphql } from "gatsby";
import { Trans } from "gatsby-plugin-react-i18next";
import Scrollspy from "react-scrollspy";
import "../styles/terms.css";

const Sidebar = ({ edges }) => {
  return (
    <nav className="sidebar-links">
      <h3 className="sidebar-heading"><Trans>Contents</Trans></h3>
      <Scrollspy
        items={edges.map((edge) =>
          edge.node.frontmatter.terms.replace(/\s+/g, "-")
        )}
        currentClassName="active"
      >
        {edges.map((edge, index) => {
          const { frontmatter } = edge.node;
          return (
            <li key={index}>
              <a href={`#${frontmatter.terms.replace(/\s+/g, "-")}`}>
                <Trans>{frontmatter.terms}</Trans>
              </a>
            </li>
          );
        })}
      </Scrollspy>
    </nav>
  );
};

const Terms = ({ data }) => {
  const { edges } = data.allMarkdownRemark;

  return (
    <>
      <Seo
        title="Terms"
        description={
          <Trans>
            "Explore our terms and conditions for using our products and services."
          </Trans>
        }
      />
      <Page useSplashScreenAnimation>
        <h1 className="terms-header">
          <Trans>Terms & Conditions</Trans>
        </h1>
        <section className="terms-wrapper">
          <Sidebar edges={edges} />
          <div className="terms-list">
            {edges.map((edge) => {
              const { frontmatter } = edge.node;
              const paragraphs = frontmatter.paragraph.split('<!--- DIVIDER --->');

              return (
                <section id={frontmatter.terms.replace(/\s+/g, "-")} key={frontmatter.id}>
                  <h2>
                    <Trans>{frontmatter.terms}</Trans>
                  </h2>
                  {paragraphs.map((paragraph, index) => (
                    <p key={index}>
                      <Trans>{paragraph.trim()}</Trans>
                    </p>
                  ))}
                </section>
              );
            })}
          </div>
        </section>
      </Page>
    </>
  );
};

export default Terms;

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
    allMarkdownRemark(
      filter: { frontmatter: { paragraph: { regex: "" } } }
      sort: { frontmatter: { id: ASC } }
    ) {
      edges {
        node {
          frontmatter {
            id
            terms
            paragraph
          }
        }
      }
    }
  }
`;
