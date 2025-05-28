

import React, { useState, useEffect, useRef } from 'react';
import Lottie from "lottie-react";
import { images } from '../../constants';
import { IconScroll } from '../../components';
import './Hero.css';
import heroimage from '../../assets/latest-gif-tempgauge.gif';
import heroAnimation from '../../assets/latest gif tempgauge.json';
import { useNavigate } from 'react-router-dom';


const logos = ["btm1", "gtm1", "pgm1", "ecm1", "eam1", "am5"];

const Hero = () => {
  const [activeDot, setActiveDot] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [titleLoaded, setTitleLoaded] = useState(false);
  const trackRef = useRef(null);
  const navigate = useNavigate();

  
  // Title animation setup
  const titleText = "Precision You Can Trust in Every Degree";
  const titleLetters = titleText.split("").map((letter, index) => (
    <span 
      key={index} 
      style={{ animationDelay: `${index * 0.05}s` }}
      className="title-letter"
    >
      {letter === ' ' ? '\u00A0' : letter}
    </span>
  ));

  // Duplicate logos for infinite scroll effect
  const duplicatedLogos = [...logos, ...logos];
  
  useEffect(() => {
    // Trigger title animation
    setTitleLoaded(true);
    
    // Auto-scroll logos
    const interval = setInterval(() => {
      if (!isPaused) {
        setActiveDot(prev => (prev + 1) % logos.length);
      }
    }, 3000); // Change logo every 3 seconds
    
    return () => clearInterval(interval);
  }, [isPaused]);

  useEffect(() => {
    if (trackRef.current) {
      const scrollPosition = (activeDot * 100) / logos.length;
      trackRef.current.style.transform = `translateX(-${scrollPosition}%)`;
    }
  }, [activeDot]);

  const handleDotClick = (index) => {
    setActiveDot(index);
  };

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };
  


  return (
    <div className="hero bg-industrial">
      <div className="row align-items-center hero-content">
        <div className="col-md-6 col-12 text-section">
          
          <h1 className="title">
            {titleLoaded && titleLetters}
          </h1>
          <p className="py-4">
            Waqtavar Instrument, established in 2019, specializes in manufacturing, supplying, and retailing top-quality Bimetallic Temperature Gauges and Gas-Filled Capillary Type Temperature Gauges.
            Our mission is to deliver precision-engineered instruments designed to meet diverse industrial needs.
          </p>
          <button onClick={() => navigate('/services')} className="btn-positivus">Explore Our Products</button>
        </div>
        <div className="col-md-6 col-12 mt-md-0 mt-4 image-wrapper">
          <Lottie
            animationData={heroAnimation}
            loop
            autoplay
            className="hero-img"
          />
        </div>
      </div>

      <div className="clients-container">
        <div className="clients">
          <div 
            className={`clients-track ${isPaused ? 'paused' : ''}`}
            ref={trackRef}
          >
            {duplicatedLogos.map((logo, index) => (
              <img 
                key={index} 
                src={images[logo]} 
                alt={`client-${index % logos.length}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                loading="lazy"
              />
            ))}
          </div>
        </div>
        <div className="pagination">
          {logos.map((_, index) => (
            <div 
              key={index}
              className={`pagination-dot ${index === activeDot ? 'active' : ''}`}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>
      </div>

      <IconScroll />
    </div>
  );
};

export default Hero;