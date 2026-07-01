import { useState, useEffect } from 'react'

function App() {
  const [isSticky, setIsSticky] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)


  const [booking, setBooking] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    date: '',
    time: ''
  })

  // Sticky navigation on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true)
      } else {
        setIsSticky(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Handle form change
  const handleChange = (e) => {
    const { id, value } = e.target
    // Map element ids to state keys
    const stateKey = id.replace('book-', '')
    setBooking(prev => ({
      ...prev,
      [stateKey]: value
    }))
  }

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault()

    // Reset Form
    setBooking({
      name: '',
      phone: '',
      email: '',
      service: '',
      date: '',
      time: ''
    })
  }

  return (
    <>
      {/* Header & Navigation */}
      <header className={isSticky ? 'sticky' : ''}>
        <div className="nav-container">
          <a href="#" className="logo-link">
            <img src="/stylin-logo-main.png" alt="Stylin Logo" className="logo-icon" style={{ height: '40px', width: 'auto', objectFit: 'contain' }} />
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

      {/* Hero Section */}
      <section className="hero-section" id="hero">
        <div className="hero-bg"></div>
        <div className="hero-content">
          <img src="/stylin-logo-main.png" alt="Stylin Logo" className="hero-emblem" style={{ height: '120px', width: 'auto', objectFit: 'contain', marginBottom: '10px' }} />
          <span className="hero-subtitle">Most exotic and advanced beauty salon in DGKHAN. (Only for Ladies)</span>
          <h1 className="hero-title">WELCOME TO STYLIN BEAUTY SALON</h1>
          <a href="#booking" className="hero-btn">BOOK AN APPOINTMENT</a>
        </div>
      </section>

      {/* About Section */}
      <section className="section about-section" id="about">
        <div className="container">
          <span className="about-subtitle">Crafting Elegance Since 2005</span>
          <h2 className="about-title">WE CRAFT LUXURY MAKEOVERS & HAIR DESIGN THAT DEFINE SOVEREIGN STYLE</h2>
          <p className="about-text">
            At Stylin Beauty Salon, we balance contemporary innovation with timeless indulgence. Using only the highest quality portfolio products, our bridal experts and elite colorists curate an aesthetic tailormade for you.
          </p>
        </div>
      </section>

      {/* Services Section */}
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
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </a>
              </div>

              <div className="service-item-text">
                <div className="service-meta-title">
                  <span>Party & Event Styling</span>
                </div>
                <p className="service-desc">Event-specific hair and makeup services customized for your unique appearance.</p>
                <a href="#booking" className="service-link">
                  View Portfolios
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
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
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </a>
              </div>

              <div className="service-item-text">
                <div className="service-meta-title">
                  <span>Advanced Skin Care</span>
                </div>
                <p className="service-desc">Specialized aesthetic therapies, dewy glow treatments, and premium facial designs.</p>
                <a href="#booking" className="service-link">
                  View Palette
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Gallery Section */}
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
                <span class="gallery-category">Bridal Details</span>
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

      {/* Booking Section */}
      <section className="section booking-section" id="booking">
        <div className="container">
          <div className="booking-card">
            <h2 className="booking-card-title">Book an Appointment</h2>
            <p className="booking-card-subtitle">Elevate Your Presence</p>
            
            <form className="booking-form" onSubmit={handleSubmit}>
              <div className="form-group-row">
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="YOUR FULL NAME" 
                  required 
                  id="book-name"
                  value={booking.name}
                  onChange={handleChange}
                />
                <input 
                  type="tel" 
                  className="form-control" 
                  placeholder="PHONE NUMBER" 
                  required 
                  id="book-phone"
                  value={booking.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group-row">
                <input 
                  type="email" 
                  className="form-control" 
                  placeholder="EMAIL ADDRESS" 
                  required 
                  id="book-email"
                  value={booking.email}
                  onChange={handleChange}
                />
                <select 
                  className="form-control" 
                  required 
                  id="book-service"
                  value={booking.service}
                  onChange={handleChange}
                >
                  <option value="" disabled>CHOOSE A SERVICE</option>
                  <option value="bridal">Bridal & Nikkah Makeovers</option>
                  <option value="party">Party & Event Styling</option>
                  <option value="skin_hair">Advanced Skin & Hair Care</option>
                </select>
              </div>
              <div className="form-group-row">
                <input 
                  type="date" 
                  className="form-control" 
                  required 
                  id="book-date"
                  value={booking.date}
                  onChange={handleChange}
                />
                <select 
                  className="form-control" 
                  required 
                  id="book-time"
                  value={booking.time}
                  onChange={handleChange}
                >
                  <option value="" disabled>PREFERRED TIME</option>
                  <option value="morning">Morning (09:00 AM - 12:00 PM)</option>
                  <option value="afternoon">Afternoon (12:00 PM - 04:00 PM)</option>
                  <option value="evening">Evening (04:00 PM - 07:00 PM)</option>
                </select>
              </div>
              <button type="submit" className="form-btn">SUBMIT BOOKING REQUEST</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer>
        <div className="container">
          <div className="footer-grid">
            
            <div className="footer-brand">
              <img src="/stylin-logo-main.png" alt="Stylin Logo" className="footer-logo-emblem" style={{ height: '60px', width: 'auto', objectFit: 'contain' }} />
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



      {/* Floating WhatsApp Action */}
      <a 
        href="https://wa.me/923377778953" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="whatsapp-float"
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.501-5.734-1.451L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.967C16.63 2.03 14.162 1.008 11.53 1.008c-5.437 0-9.863 4.371-9.867 9.8-.001 1.73.457 3.418 1.33 4.927L1.93 20.354l4.717-1.2zm11.396-6.195c-.297-.148-1.758-.867-2.03-.967-.273-.099-.471-.148-.669.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.148-.174.198-.298.297-.497.099-.198.05-.371-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347z"/>
        </svg>
      </a>
    </>
  )
}

export default App
