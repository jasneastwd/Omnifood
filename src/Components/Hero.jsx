import React from 'react';
import '../SCSS/Hero.scss';

const Hero = () => {
  const gallery = [1, 2, 3, 4, 5, 6];

  const list = [];

  gallery.forEach((image) => {
    list.push(
      <img
        src={require('../img/customers/customer-' + image + '.jpg')}
        alt='Customer'
      />,
    );
  });

  return (
    <div>
      <section class='section-hero'>
        <div class='hero'>
          <div class='hero-text-box'>
            <h1 class='heading-primary'>
              A healthy meal delivered to your door, every single day
            </h1>
            <p class='hero-description'>
              The smart 365-days-per-year food subscription that will make you
              eat healthy again. Tailored to your personal tastes and
              nutritional needs.
            </p>
            <a href='#cta' class='btn btn--full margin-right-sm'>
              Start eating well
            </a>

            <a href='#how' class='btn btn--outline'>
              Learn more &darr;
            </a>
            <div class='delivered-meals'>
              <div class='delivered-imgs'>{list}</div>
              <p class='delivered-text'>
                <span>250,000+</span> meals delivered last year!
              </p>
            </div>
          </div>
          <div class='hero-img-box'>
            <img
              src={require('../img/hero/hero-min.png')}
              class='hero-img'
              alt='Woman enjoying food, meals in storage container, and food bowls on a table'
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
