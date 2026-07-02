import React from 'react';

function Header({ isSticky, mobileMenuOpen, setMobileMenuOpen }) {
  return (
    <header className={isSticky ? 'sticky' : ''}>
      <div className="nav-container">
        <a href="#" className="logo-link">
          <img 
            src="/stylin-logo-main.png" 
            alt="Stylin Logo" 
            className="logo-icon" 
            style={{ height: '40px', width: 'auto', objectFit: 'contain' }} 
          />
          <span className="nav-logo-text">STYLIN</span>
        </a>
        
        <button 
          className="mobile-menu-btn" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          &#9776;
        </button>
        
        <ul className="nav-links">
          <li><a href="#hero">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#gallery">Lookbook</a></li>
          <li><a href="#booking">Book Now</a></li>
        </ul>

        {mobileMenuOpen && (
          <ul className="mobile-nav-menu">
            <li><a href="#hero" onClick={() => setMobileMenuOpen(false)}>Home</a></li>
            <li><a href="#services" onClick={() => setMobileMenuOpen(false)}>Services</a></li>
            <li><a href="#gallery" onClick={() => setMobileMenuOpen(false)}>Lookbook</a></li>
            <li><a href="#booking" onClick={() => setMobileMenuOpen(false)}>Book Now</a></li>
          </ul>
        )}
        
        <a href="#booking" className="nav-cta">Book Appointment</a>
      </div>
    </header>
  );
}

export default Header;
