import React from 'react';

function Hero() {
  return (
    <section className="hero-section" id="hero">
      <div className="hero-bg"></div>
      <div className="hero-content">
        <img 
          src="/stylin-logo-main.png" 
          alt="Stylin Logo" 
          className="hero-emblem" 
          style={{ height: '120px', width: 'auto', objectFit: 'contain', marginBottom: '10px' }} 
        />
        <span className="hero-subtitle">Most exotic and advanced beauty salon in DGKHAN. (Only for Ladies)</span>
        <h1 className="hero-title">WELCOME TO STYLIN BEAUTY SALON</h1>
        <a href="#booking" className="hero-btn">BOOK AN APPOINTMENT</a>
      </div>
    </section>
  );
}

export default Hero;
