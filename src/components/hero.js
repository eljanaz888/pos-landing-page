import React from 'react';
import '../components/hero.css';
import { StaticImage } from 'gatsby-plugin-image';
import { Link, Trans } from 'gatsby-plugin-react-i18next';
import { Seo } from 'gatsby-theme-portfolio-minimal';
import { Helmet } from 'react-helmet';

const Hero = () => {

  const thumbnailUrl = {
    childImageSharp: {
      original: {
        src: '../images/pos-main.png'
      }
    }
  };
  return (
    <>
      <Seo title="Pos.al"
        description={<Trans>"Discover our innovative Point of Sale (POS) solutions designed to elevate your business."</Trans>}
        thumbnail={thumbnailUrl} />

      <Helmet>
        <script type="application/ld+json">
          {`
                      {
                    "@context": "https://schema.org",
                    "@type": "Organization",
                    "headline": <Trans>Pos.al: Simplify Your Point of Sale</Trans>,
                    "description": <Trans>Discover our innovative Point of Sale (POS) solutions designed to elevate your business.</Trans>,
                    "image": thumbnailUrl.childImageSharp.original.src,
                    "url": "https://www.app.pos.al",
                    "author": {
                      "@type": "Organization",
                      "name": "Pos.al"
                    }
                  }
                `}
        </script>
      </Helmet>

      <section className='hero-wrapper'>
        <div className='first-wrapper'>
          <h1 id='the-header'><Trans>Pos.al: Simplify Your Point of Sale</Trans></h1>
          <h2><u>
            <Trans>Simplify Sales. Enhance Service.</Trans></u></h2>
          <Link className='btn' to="https://app.pos.al" target='_blank'><Trans>Try Now...</Trans></Link>
        </div>
        <div className='image-wrapper'>
          <StaticImage
            className="main-image"
            src='../images/pos-main.png'
            alt='mainimage'
          />
        </div>
      </section>
    </>
  );
};

export default Hero;