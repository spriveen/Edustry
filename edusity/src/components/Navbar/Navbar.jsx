import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll'; // Ensure this import exists and is correct
import './Navbar.css';
import logo from '../../assets/logo.png';
import menu_icon from '../../assets/menu-icon.png';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [mobileMenu , setMobileMenu] = useState(false);
  const toggleMenu =()=>{
  mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
    
  }

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt="Logo" className="logo" />
      <ul className={mobileMenu?'':'hide-mobile-menu'}>
        <li>
          <Link to="hero" smooth={true} offset={0} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="programme" smooth={true} offset={-260} duration={500}>
            Programme
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} offset={-150} duration={500}>
            About us
          </Link>
        </li>
        <li>
          <Link to="campus" smooth={true} offset={-260} duration={500}>
            Campus
          </Link>
        </li>
        <li>
          <Link to="testimonials" smooth={true} offset={-260} duration={500}>
            Testimonials
          </Link>
          <li><Link to='contact' smooth={true}offset={-260} duration={500} className='btn'>Contact us</Link></li>
        </li>
      </ul>
      <img src={menu_icon} alt=''className='menu-icon' onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;
