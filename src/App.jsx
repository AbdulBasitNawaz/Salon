import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Booking from './components/Booking';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

function App() {
  const [isSticky, setIsSticky] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [booking, setBooking] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    date: '',
    time: ''
  });

  // Sticky navigation on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle form change
  const handleChange = (e) => {
    const { id, value } = e.target;
    // Map element ids to state keys
    const stateKey = id.replace('book-', '');
    setBooking(prev => ({
      ...prev,
      [stateKey]: value
    }));
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Reset Form
    setBooking({
      name: '',
      phone: '',
      email: '',
      service: '',
      date: '',
      time: ''
    });
  };

  return (
    <>
      <Header 
        isSticky={isSticky} 
        mobileMenuOpen={mobileMenuOpen} 
        setMobileMenuOpen={setMobileMenuOpen} 
      />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Booking 
        booking={booking} 
        onChange={handleChange} 
        onSubmit={handleSubmit} 
      />
      <Footer />
      <WhatsAppFloat />
    </>
  );
}

export default App;
