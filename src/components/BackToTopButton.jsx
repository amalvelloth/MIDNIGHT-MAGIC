import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import './BackToTopButton.css'
import arrow from '../assets/arrow.svg'

const BackToTopButton = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <button onClick={scrollToTop} className='backtotop-btn'>
      Back to Top
      <img src={arrow} alt="" className='arrow' />
    </button>
  );
};

export default BackToTopButton;
