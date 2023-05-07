import * as React from "react";
import { Page, Seo } from "gatsby-theme-portfolio-minimal";
import '../styles/terms.css';
import {Trans} from 'gatsby-plugin-react-i18next';
import { graphql } from "gatsby";

const Terms = () => {
    return(
        <>
        <Seo title="Terms" />
        <Page useSplashScreenAnimation>
            <section className='terms-wrapper'>
                <ol>
                    <li><Trans>Introduction</Trans></li>
                    <p><Trans>Welcome to our Point of Sale (POS) website. These terms and conditions (hereafter Terms) apply to all users of the website and its services. By accessing or using our website, you agree to be bound by these Terms. If you do not agree with these Terms, you may not use the website.</Trans></p>
                    <li>Use of Website</li>
                    <p>You are granted permission to use our website and services for lawful purposes only. You may not use the website in any way that breaches any applicable local, national or international law or regulation.</p>
                    <li>Intellectual Property</li>
                    <p>All content on this website, including but not limited to text, graphics, logos, images, and software, is the property of our company or its content suppliers and is protected by United States and international copyright laws.</p>
                    <li>Privacy Policy</li>
                    <p>Our privacy policy governs the collection, use, and storage of personal information provided by users of this website. By using our website, you agree to our privacy policy.</p>
                    <li>User Conduct</li>
                    <p>You agree to use our website in a manner that is legal, ethical, and respectful of the rights of others. You may not use our website to harass, threaten, or intimidate others, to engage in any activity that is fraudulent, deceptive or harmful, or to transmit any viruses or other harmful code.</p>
                    <li>Limitation of Liability</li>
                    <p>Our company is not liable for any damages resulting from the use or inability to use our website or services, including but not limited to direct, indirect, incidental, punitive, and consequential damages. We are not responsible for any loss or damage that may result from any unauthorized access to or use of our servers or any interruption of our services.</p>
                    <li>Indemnification</li>
                    <p>You agree to indemnify and hold our company and its affiliates, officers, agents, employees, and partners harmless from any claim or demand, including reasonable attorneys' fees, arising out of your use of our website or services, your violation of these Terms, or your violation of any rights of another person or entity.</p>
                    <li>Modifications</li>
                    <p>We reserve the right to modify or revise these Terms at any time without notice. Your continued use of the website after any changes to these Terms constitutes your acceptance of the new Terms.</p>
                    <li>Governing Law</li>
                    <p>These Terms shall be governed by and construed in accordance with the laws of the State of California, without giving effect to any principles of conflicts of law.</p>
                    <li>Contact Us</li>
                    <p>If you have any questions or comments about these Terms, please contact us.</p>
                </ol>
                
        </section>
        </Page>
        </>
    )
}

export default Terms;

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