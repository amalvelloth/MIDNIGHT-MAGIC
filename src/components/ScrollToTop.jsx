import React, { useState, useEffect } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';
import './ScrollToTop.css';
import { FaArrowUpLong } from "react-icons/fa6";
import Aos from "aos";
import "aos/dist/aos.css";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 1650) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="scroll-to-top justify-content-end d-flex">
      {isVisible && (
        <span>
          <div className="circle-border" onClick={scrollToTop} data-aos="fade">
            <FaArrowUpLong className="scroll-icon" data-aos="fade-up" />
          </div>
        </span>
      )}
    </div>
  );
};

export default ScrollToTop;
