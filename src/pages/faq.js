import React, { useState } from "react";
import { Page, Seo } from "gatsby-theme-portfolio-minimal";
import "../components/faq.css";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { graphql } from "gatsby";
import { Trans } from "gatsby-plugin-react-i18next";


const FAQ = ({ data }) => {
    const [openQuestionId, setOpenQuestionId] = useState(null);

    const handleQuestionClick = (id) => {
        setOpenQuestionId(prevOpenQuestionId => prevOpenQuestionId === id ? null : id);
    };

    const handleKeyPress = (id, event) => {
        if (event.key === "Enter" || event.key === " ") {
            handleQuestionClick(id);
        }
    };

    const faqItems = data.allMarkdownRemark.edges;

    return (
        <>
            <Seo title="FAQ"
                description={<Trans>"Find answers to common questions about our products and services."</Trans>} />
            <Page useSplashScreenAnimation>
                <section className="faq" id="faq">
                    <h1><Trans>Frequently Asked Questions</Trans></h1>
                    <div className="faq-wrapper">
                        {faqItems.map((item) => {
                            const { id, question, answer } = item.node.frontmatter;
                            return (
                                <div
                                    className={`faq-item ${openQuestionId === id ? "open" : ""}`}
                                    key={id}
                                >
                                    <div
                                        className="faq-header"
                                        onClick={() => handleQuestionClick(id)}
                                        onKeyPress={(event) => handleKeyPress(id, event)}
                                        role="button"
                                        tabIndex={0} // Add tabIndex to make it focusable
                                    >
                                        <h3><Trans>{question}</Trans></h3>
                                        {openQuestionId === id ? (
                                            <IoMdArrowDropup className="dropdown-icon" />
                                        ) : (
                                            <IoMdArrowDropdown className="dropdown-icon" />
                                        )}
                                    </div>
                                    {openQuestionId === id && (
                                        <div className="faq-content">
                                            <p><Trans>{answer}</Trans></p>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </section>
            </Page>
        </>
    );
};

export default FAQ;

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
        filter: {frontmatter: {question: {regex: ""}}}
      sort: { frontmatter: {id: ASC}}
      ) {
        edges {
          node {
            frontmatter {
              id
              question
              answer
            }
          }
        }
      }
    }
`;

