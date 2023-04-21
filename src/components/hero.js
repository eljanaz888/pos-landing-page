import React from 'react';
import '../components/hero.css';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

const Hero = () => {
  return (
    <section className='hero-wrapper'>
      <div className='first-wrapper'>
        <h1>Pos Software Platform</h1>
        <p><u>I do all the updates for you</u></p>
        <Link className='btn' to="#pricing">Start your plan</Link>
      </div>
      <div className='image-wrapper'>
      <StaticImage
          className="main-image"
          src='../images/pos-main.jpeg'
          alt='mainimage'
        />
      </div>
    </section>
  );
};

export default Hero;
