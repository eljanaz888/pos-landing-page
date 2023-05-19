import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { Animation } from 'gatsby-theme-portfolio-minimal';
import '../components/review.css';
import { Trans } from "gatsby-plugin-react-i18next";


const Review = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allMarkdownRemark(
        filter: {
          frontmatter: { description: { ne: "" }, stars: { regex: "" } }
        }
      ) {
        nodes {
          frontmatter {
            stars
            id
            description
            name
          }
          id
        }
      }
    }
  `)

  // sort nodes by id
  const sortedNodes = data.allMarkdownRemark.nodes.sort((a, b) =>
  a.frontmatter.id.localeCompare(b.frontmatter.id)
  );

  return(
    <section className="review" id="reviews">
        <h1><Trans>What our people say</Trans></h1>
    <div className="reviews-wrapper">
      {sortedNodes.map((item, index) => {
        return (
          <div className="review-wrapper" key={index}>
            <div className="review-card" id={item.frontmatter.id}>
              <span className='star'>{item.frontmatter.stars}</span>
              <p className='opinion'><Trans>{item.frontmatter.description}</Trans></p>
              <div className='opinion-wrapper'>
                <StaticImage className='review-photo'
                            src='../images/review-photo.jpg'
                            alt='hello'/>
                <h2>{item.frontmatter.name}</h2>
              </div>
            </div>
          </div>
        );
      })}
    </div>
    <Animation/>
  </section>
);
}
export default Review