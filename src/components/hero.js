import React from 'react';
import '../components/hero.css';
import { StaticImage } from 'gatsby-plugin-image';
import { Link, Trans, useTranslation } from 'gatsby-plugin-react-i18next';

const Hero = () => {
  const { t } = useTranslation();
  return (
    <section className='hero-wrapper'>
      <div className='first-wrapper'>
        <h1 id='the-header'>{t('Pos.al: Simplify Your Point of Sale')}</h1>
        <p><u>
          <Trans>Simplify Sales. Enhance Service.</Trans></u></p>
        <Link className='btn' to="https://pos.al/signup" target='_blank'><Trans>Try Now...</Trans></Link>
      </div>
      <div className='image-wrapper'>
        <StaticImage
          className="main-image"
          src='../images/pos-main.png'
          alt='mainimage'
        />
      </div>
    </section>
  );
};

export default Hero;