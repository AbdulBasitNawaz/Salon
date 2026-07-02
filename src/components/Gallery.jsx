import React from 'react';

function Gallery() {
  return (
    <section className="section gallery-section" id="gallery">
      <div className="container">
        <div className="gallery-header">
          <h2 className="gallery-title">The Bridal Lookbook & Portfolio</h2>
        </div>
        
        <div className="gallery-grid">
          <div className="gallery-item">
            <img src="/s8b.jpg_202607010335.jpeg" alt="Elite Makeover Design" />
            <div className="gallery-overlay">
              <span className="gallery-category">Glamour Makeover</span>
              <h3 className="gallery-caption">Elegant Radiance</h3>
            </div>
          </div>
          <div className="gallery-item">
            <img src="/s12.jpg_202607010330.jpeg" alt="Bridal Couture" />
            <div className="gallery-overlay">
              <span className="gallery-category">Bridal Lookbook</span>
              <h3 className="gallery-caption">Classic Silhouette</h3>
            </div>
          </div>
          <div className="gallery-item">
            <img src="/s13.jpg" alt="Luxury Spa Session" />
            <div className="gallery-overlay">
              <span className="gallery-category">Hair Design</span>
              <h3 className="gallery-caption">Luxury Gold Waves</h3>
            </div>
          </div>
          <div className="gallery-item">
            <img src="/s14.jpg_202607010328.jpeg" alt="Bridal Hair Preparation" />
            <div className="gallery-overlay">
              <span className="gallery-category">Bridal Details</span>
              <h3 className="gallery-caption">Champagne Glamour</h3>
            </div>
          </div>
          <div className="gallery-item">
            <img src="/s6.jpg_202607010300.jpeg" alt="Color & Highlights" />
            <div className="gallery-overlay">
              <span className="gallery-category">Color & Style</span>
              <h3 className="gallery-caption">Warm Balayage</h3>
            </div>
          </div>
          <div className="gallery-item">
            <img src="/s7.jpg" alt="Signature Makeup Treatment" />
            <div className="gallery-overlay">
              <span className="gallery-category">Cosmetology</span>
              <h3 className="gallery-caption">Dewy Elegance</h3>
            </div>
          </div>
          <div className="gallery-item">
            <img src="/s1.jpg" alt="Lash Details" />
            <div className="gallery-overlay">
              <span className="gallery-category">Eyes & Lashes</span>
              <h3 className="gallery-caption">Perfect Frame</h3>
            </div>
          </div>
          <div className="gallery-item">
            <img src="/s2.webp" alt="Nail Art Design" />
            <div className="gallery-overlay">
              <span className="gallery-category">Luxury Nails</span>
              <h3 className="gallery-caption">Champagne Chrome</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
