import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import '../components/pricing.css';
import { TiTickOutline } from 'react-icons/ti';


const Pricing = () => {
  const data = useStaticQuery(graphql`
    query pricingQuery {
      allMarkdownRemark(
        filter: { frontmatter: { header: { regex: "" } } }
      ) {
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
    <section className="pricing" id="pricing">
      <h1>{sortedNodes[0].frontmatter.title}</h1>
      <div className="pricing-wrapper">
        {sortedNodes.map((item, index) => {
          return (
            <div className="cards-wrapper" key={index}>
              <div className="pricing-card" id={item.frontmatter.id}>
                <h3 className='header'>{item.frontmatter.header}</h3>
                <h3 className="price">{item.frontmatter.pricing}</h3>
                <p className='included'>{item.frontmatter.whats_included}</p>
                <p><span><TiTickOutline className='tick-icon' /></span>{item.frontmatter.list}</p>
                <button className='btn' type='button'>
                        Get Started
                      </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Pricing