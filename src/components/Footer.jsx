import React from 'react';

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          
          <div className="footer-brand">
            <img 
              src="/stylin-logo-main.png" 
              alt="Stylin Logo" 
              className="footer-logo-emblem" 
              style={{ height: '60px', width: 'auto', objectFit: 'contain' }} 
            />
            <span className="footer-brand-title">STYLIN</span>
            <p className="footer-brand-desc">Most exotic and advanced beauty salon in DGKHAN. Exclusively catering to ladies since 2005.</p>
          </div>

          <div>
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-links">
              <li><a href="#hero">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#gallery">Lookbook</a></li>
              <li><a href="#booking">Bookings</a></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-col-title">Hours</h4>
            <ul className="footer-info">
              <li>Monday - Friday: <strong>09:00 AM - 08:00 PM</strong></li>
              <li>Saturday: <strong>09:00 AM - 06:00 PM</strong></li>
              <li>Sunday: <strong>11:00 AM - 05:00 PM</strong></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-col-title">Contact</h4>
            <ul className="footer-info">
              <li>Address: <strong>Dera Ghazi Khan (DG Khan), Punjab, Pakistan</strong></li>
              <li>Phone: <strong>0337 7778953</strong></li>
              <li>Facebook: <strong>2,300+ organic followers</strong></li>
            </ul>
          </div>

        </div>

        <div className="footer-bottom">
          <span>&copy; 2026 Stylin Beauty Salon. All rights reserved. Designed for Premium Aesthetics.</span>
          <div className="social-links">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">Facebook (2,300+ followers)</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
