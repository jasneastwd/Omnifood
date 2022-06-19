import React from 'react';
import '../SCSS/Nav.scss';
import '../js/script';

const Nav = () => {
  const links = [
    {
      id: 1,
      url: '#how',
      text: 'How it works',
    },
    {
      id: 2,
      url: '#meals',
      text: 'Meals',
    },
    {
      id: 3,
      url: '#testimonials',
      text: 'Testimonials',
    },
    {
      id: 4,
      url: '#pricing',
      text: 'Pricing',
    },
  ];
  return (
    <div>
      <header class='header'>
        <a href='#'>
          <img
            class='logo'
            alt='Omnifood logo'
            src={require('../img/omnifood-logo.png')}
          />
        </a>
        <nav class='main-nav'>
          <ul className='main-nav-list'>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url} className='main-nav-link'>
                    {text}
                  </a>
                </li>
              );
            })}
            <li>
              <a class='main-nav-link nav-cta' href='#cta'>
                Try for free
              </a>
            </li>
          </ul>
        </nav>

        <button class='btn-mobile-nav'>
          <ion-icon class='icon-mobile-nav' name='menu-outline'></ion-icon>
          <ion-icon class='icon-mobile-nav' name='close-outline'></ion-icon>
        </button>
      </header>
    </div>
  );
};

export default Nav;
