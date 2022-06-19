import React from 'react';
import '../SCSS/Testimonials.scss';

const Testimonials = () => {
  const gallery = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  const list = [];

  gallery.forEach((image) => {
    list.push(
      <figure class='gallery-item'>
        <img
          src={require('../img/gallery/gallery-' + image + '.jpg')}
          alt='Beautifully
      arranged food'
        />
      </figure>,
    );
  });

  return (
    <section class='section-testimonials' id='testimonials'>
      <div class='testimonials-container'>
        <span class='subheading'>Testimonials</span>
        <h2 class='heading-secondary'>Once you try it, you can't go back</h2>

        <div class='testimonials'>
          <figure class='testimonial'>
            <img
              class='testimonial-img'
              alt='Customer Dave Bryson'
              src={require('../img/customers/dave.jpg')}
            />
            <blockquote class='testimonial-text'>
              Inexpensive, healthy and great-tasting meals, without even having
              to order manually! It feels truly magical.
            </blockquote>
            <p class='testimonial-name'>&mdash; Dave Bryson</p>
          </figure>

          <figure class='testimonial'>
            <img
              class='testimonial-img'
              alt='Customer Ben Hadley'
              src={require('../img/customers/ben.jpg')}
            />
            <blockquote class='testimonial-text'>
              The AI algorithm is crazy good, it chooses the right meals for me
              every time. It's amazing not to worry about food anymore!
            </blockquote>
            <p class='testimonial-name'>&mdash; Ben Hadley</p>
          </figure>

          <figure class='testimonial'>
            <img
              class='testimonial-img'
              alt='Customer Steve Miller'
              src={require('../img/customers/steve.jpg')}
            />
            <blockquote class='testimonial-text'>
              Omnifood is a life saver! I just started a company, so there's no
              time for cooking. I couldn't live without my daily meals now!
            </blockquote>
            <p class='testimonial-name'>&mdash; Steve Miller</p>
          </figure>

          <figure class='testimonial'>
            <img
              class='testimonial-img'
              alt='Customer Hannah Smith'
              src={require('../img/customers/hannah.jpg')}
            />
            <blockquote class='testimonial-text'>
              I got Omnifood for the whole family, and it frees up so much time!
              Plus, everything is organic and vegan and without plastic.
            </blockquote>
            <p class='testimonial-name'>&mdash; Hannah Smith</p>
          </figure>
        </div>
      </div>

      <div class='gallery'>{list}</div>
    </section>
  );
};

export default Testimonials;
