import React from 'react';

function Services() {
  return (
    <section className="section services-section" id="services">
      <div className="container">
        <div className="services-header">
          <h2 className="services-title">Our services</h2>
        </div>
        
        <div className="services-grid-wrapper">
          
          {/* Left Column */}
          <div className="services-left">
            <div className="service-item-text">
              <div className="service-meta-title">
                <span>Advanced Hair Care</span>
              </div>
              <p className="service-desc">Specialized cutting, color treatments, balayage, and advanced aesthetic styling treatments.</p>
              <a href="#booking" className="service-link">
                Explore Looks
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>

            <div className="service-item-text">
              <div className="service-meta-title">
                <span>Party & Event Styling</span>
              </div>
              <p className="service-desc">Event-specific hair and makeup services customized for your unique appearance.</p>
              <a href="#booking" className="service-link">
                View Portfolios
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>

            {/* Lower Left Corner Square Frame */}
            <div className="corner-frame">
              <div className="corner-frame-inner">
                <img src="/s10.jpg_202607010335.jpeg" alt="Stylin Bridal Hair Detail" />
              </div>
            </div>
          </div>

          {/* Center Column: Oval Portrait placeholder */}
          <div className="services-center">
            <div className="oval-image-container">
              <div className="oval-image-inner">
                <img src="/s9.jpg_202607010335.jpeg" alt="Stylin Signature Oval Portrait" />
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="services-right">
            {/* Lower Right Corner Square Frame */}
            <div className="corner-frame">
              <div className="corner-frame-inner">
                <img src="/s11.jpg_202607010333.jpeg" alt="Stylin Bridal Glamour Detail" />
              </div>
            </div>

            <div className="service-item-text">
              <div className="service-meta-title">
                <span>Bridal & Nikkah Makeovers</span>
              </div>
              <p className="service-desc">Premium high-end wedding makeup transformations, our highly featured signature segment.</p>
              <a href="#booking" className="service-link">
                View Packages
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>

            <div className="service-item-text">
              <div className="service-meta-title">
                <span>Advanced Skin Care</span>
              </div>
              <p className="service-desc">Specialized aesthetic therapies, dewy glow treatments, and premium facial designs.</p>
              <a href="#booking" className="service-link">
                View Palette
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Services;
