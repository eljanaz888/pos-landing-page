import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import "../components/pricing.css";
import { TiTickOutline } from "react-icons/ti";
import { Trans } from "gatsby-plugin-react-i18next";
import { Seo } from "gatsby-theme-portfolio-minimal";

const Pricing = () => {
  const data = useStaticQuery(graphql`
    query pricingQuery {
      allMarkdownRemark(filter: { frontmatter: { header: { regex: "" } } }) {
        nodes {
          frontmatter {
            id
            title
            whats_included
            list
            header
            pricing
          }
          id
        }
      }
    }
  `);

  // sort nodes by id
  const sortedNodes = data.allMarkdownRemark.nodes.sort((a, b) =>
    a.frontmatter.id.localeCompare(b.frontmatter.id)
  );

  return (
    <>
      <Seo title="Pricing"
        description={<Trans>"Browse our flexible pricing plans and choose the perfect package for your business."</Trans>} />
      <section className="pricing" id="pricing">
        <h1><Trans>{sortedNodes[0].frontmatter.title}</Trans></h1>
        <div className="pricing-wrapper">
          {sortedNodes.map((item, index) => {
            return (
              <div className="cards-wrapper" key={index}>
                <div className="pricing-card" id={item.frontmatter.id}>
                  <h3 className="header"><Trans>{item.frontmatter.header}</Trans></h3>
                  <h3 className="price">
                    <Trans>{item.frontmatter.pricing}</Trans>
                  </h3>
                  <p className="included">
                    <Trans>{item.frontmatter.whats_included}</Trans>
                  </p>
                  <p>
                    <span>
                      <TiTickOutline className="tick-icon" />
                    </span>
                    <Trans>{item.frontmatter.list}</Trans>
                  </p>
                  <a className="btn btn-pricing" href="https://app.pos.al" target="_blank" rel="noopener noreferrer">
                    <Trans>Get Started</Trans>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Pricing;
