import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';
import './Navbar.css';

function Navbar() {
    const [menu, setMenu] = useState(false);

    const scrollToAbout = () => {
        scroll.scrollTo(2050); // Adjust the value as needed to scroll to the correct position
        setMenu(false); // Close the menu after scrolling
    };
    const scrollToContact = () => {
      scroll.scrollTo(1400); // Adjust the value as needed to scroll to the correct position
      setMenu(false); // Close the menu after scrolling
  };
  const scrollToHero = () => {
    scroll.scrollTo(700); // Adjust the value as needed to scroll to the correct position
    setMenu(false); // Close the menu after scrolling
};
const scrollToTop = () => {
  scroll.scrollTo(0); // Adjust the value as needed to scroll to the correct position
  setMenu(false); // Close the menu after scrolling
};

    return (
        <nav>
            <Link to='' className='title'  onClick={scrollToTop}>Website</Link>
            <div className='menu' onClick={() => { setMenu(!menu) }}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={menu ? "open" : ""}>
                
                <li><Link to='' onClick={scrollToHero}>Reviews</Link></li>
                <li><Link to='' onClick={scrollToContact}>Contact</Link></li>
                <li><Link to='' onClick={scrollToAbout}>About</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
