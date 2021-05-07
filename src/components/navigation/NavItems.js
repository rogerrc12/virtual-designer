import React, { useState, useEffect } from 'react';
import { FaYoutube, FaFacebookF } from 'react-icons/fa';

import NavItem from './NavItem';
import Logo from '../../images/logo.jpeg';

const NavItems = () => {
  const [opened, setOpened] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const onScroll = (e) => setScrollTop(e.target.documentElement.scrollTop);
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollTop]);

  return (
    <header className='main-header'>
      <div className='social-header'>
        <FaFacebookF className='mx-2' />
        <FaYoutube className='mx-2' />
      </div>
      <nav className={`w-full py-2 px-8 flex items-center justify-between main-nav ${scrollTop > 0 ? 'sticky-nav' : ''}`}>
        <a href='https://core-ice.com/' className='main-logo'>
          <img src={Logo} alt='logo' width={140} />
        </a>
        <ul className={`flex items-center justify-end ${opened ? 'opened' : ''}`}>
          <NavItem link='https://core-ice.com/'>CORE ICE</NavItem>
          <NavItem link='https://core-ice.com/why-core/'>Why CORE</NavItem>
          <NavItem link='https://core-ice.com/models/'>Models</NavItem>
          <NavItem link='https://core-ice.com/shop/'>Store</NavItem>
          <NavItem link='https://core-ice.com/warranty-registration/'>Warranty Registration</NavItem>
          <NavItem link='https://core-ice.com/blog/'>Blog</NavItem>
          <NavItem link='https://core-ice.com/contact-a-dealer/'>Contact a Dealer</NavItem>
        </ul>
        <button className='nav-btn' onClick={() => setOpened((prev) => !prev)}>
          <span />
          <span />
          <span />
        </button>
      </nav>
    </header>
  );
};

export default NavItems;
