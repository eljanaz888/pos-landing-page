import React from 'react';
import '../components/hero.css';
import { StaticImage } from 'gatsby-plugin-image';
import {Link, Trans, useTranslation} from 'gatsby-plugin-react-i18next';

const Hero = () => {
  const {t} = useTranslation();
  return (
    <section className='hero-wrapper'>
      <div className='first-wrapper'>
        <h1>{t('Pos Software Platform')}</h1>
        <p><u>
        <Trans>I do all the updates for you</Trans></u></p>
        <Link className='btn' to="#pricing">Start your plan</Link>
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