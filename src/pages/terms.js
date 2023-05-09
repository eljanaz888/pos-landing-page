import React, { useState } from "react";
import { Page, Seo } from "gatsby-theme-portfolio-minimal";
import { graphql } from "gatsby";
import { Trans } from 'gatsby-plugin-react-i18next';
import Scrollspy from 'react-scrollspy';
import '../styles/terms.css';

const Sidebar = ({ edges, activeSectionIndex, onSectionClick }) => {
  return (
    <nav>
      <ul>
        {edges.map((edge, index) => {
          const { frontmatter } = edge.node;
          const isActive = activeSectionIndex === index;
          return (
            <li key={frontmatter.terms}>
              <a
                href={`#${frontmatter.terms}`}
                onClick={(event) => {
                  event.preventDefault();
                  onSectionClick(index);
                }}
                className={isActive ? 'active' : ''}
              >
                <Trans>{frontmatter.terms}</Trans>
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
};

const Terms = ({ data }) => {
  const { edges } = data.allMarkdownRemark;
  const [activeSectionIndex, setActiveSectionIndex] = useState(0);

  return (
    <>
      <Seo title="Terms" />
      <Sidebar
        edges={edges}
        activeSectionIndex={activeSectionIndex}
        onSectionClick={(index) => {
          setActiveSectionIndex(index);
        }}
      />
      <Page useSplashScreenAnimation>
        <section className='terms-wrapper'>
          <Scrollspy 
            items={edges.map((edge) => edge.node.frontmatter.terms)}
            currentClassName='is-current'
            offset={-100}
            onUpdate={(spy) => {
              const index = edges.findIndex((edge) => edge.node.frontmatter.terms === spy);
              setActiveSectionIndex(index);
            }}
          >
            {edges.map((edge) => {
              const { frontmatter } = edge.node;
              return (
                <React.Fragment key={frontmatter.terms}>
                  <h2 id={frontmatter.terms}><Trans>{frontmatter.terms}</Trans></h2>
                  <p><Trans>{frontmatter.paragraph}</Trans></p>
                </React.Fragment>
              )
            })}
          </Scrollspy>
        </section>
      </Page>
    </>
  )
};

export default Terms;

export const query = graphql`
  query MyQuery($language: String!) {
    allMarkdownRemark(filter: {frontmatter: {paragraph: {regex: ""}}}) {
      edges {
        node {
          frontmatter {
            terms
            paragraph
          }
        }
      }
    }
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
