import React from 'react';
import '../SCSS/Footer.scss';

const linksCol1 = [
  {
    id: 1,
    url: '#',
    text: 'Create Account',
  },
  {
    id: 2,
    url: '#',
    text: 'Sign In',
  },
  {
    id: 3,
    url: '#',
    text: 'iOS App',
  },
  {
    id: 4,
    url: '#',
    text: 'Android App',
  },
];

const linksCol2 = [
  {
    id: 1,
    url: '#',
    text: 'About Omnifood',
  },
  {
    id: 2,
    url: '#',
    text: 'For Business',
  },
  {
    id: 3,
    url: '#',
    text: 'Cooking Partners',
  },
  {
    id: 4,
    url: '#',
    text: 'Careers',
  },
];

const linksCol3 = [
  {
    id: 1,
    url: '#',
    text: 'Recipe directory',
  },
  {
    id: 2,
    url: '#',
    text: 'Help Centre',
  },
  {
    id: 3,
    url: '#',
    text: 'Privacy & Terms',
  },
];

const Footer = () => {
  return (
    <footer class='footer'>
      <div class='container grid grid--footer'>
        <div class='logo-col'>
          <a href='#' class='footer-logo'>
            <img
              class='logo'
              alt='Omnifood logo'
              src={require('../img/omnifood-logo.png')}
            />
          </a>
          <ul class='social-links'>
            <li>
              <a class='footer-link' href='#'>
                <ion-icon class='social-icon' name='logo-instagram'></ion-icon>
              </a>
            </li>
            <li>
              <a class='footer-link' href='#'>
                <ion-icon class='social-icon' name='logo-facebook'></ion-icon>
              </a>
            </li>
            <li>
              <a class='footer-link' href='#'>
                <ion-icon class='social-icon' name='logo-twitter'></ion-icon>
              </a>
            </li>
          </ul>

          <p class='copyright'>
            Copyright &copy; <span class='year'>2022</span> by Omnifood, Inc.
            All rights reserved.
          </p>
        </div>

        <div class='address-col'>
          <p class='footer-heading'>Contact us</p>
          <address class='contacts'>
            <p class='address'>123 Main Street, Town, AB1 3CD</p>
            <p>
              <a class='footer-link' href='tel:415-201-6370'>
                01234 567890
              </a>
              <br />
              <a class='footer-link' href='mailto:hello@omnifood.com'>
                hello@omnifood.com
              </a>
            </p>
          </address>
        </div>

        <nav class='nav-col'>
          <p class='footer-heading'>Account</p>
          <ul class='footer-nav'>
            {linksCol1.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url} className='footer-link'>
                    {text}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <nav class='nav-col'>
          <p class='footer-heading'>Company</p>
          <ul class='footer-nav'>
            {linksCol2.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url} className='footer-link'>
                    {text}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <nav class='nav-col'>
          <p class='footer-heading'>Resources</p>
          <ul class='footer-nav'>
            {linksCol3.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url} className='footer-link'>
                    {text}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
