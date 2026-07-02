import React from 'react';

function Booking({ booking, onChange, onSubmit }) {
  return (
    <section className="section booking-section" id="booking">
      <div className="container">
        <div className="booking-card">
          <h2 className="booking-card-title">Book an Appointment</h2>
          <p className="booking-card-subtitle">Elevate Your Presence</p>
          
          <form className="booking-form" onSubmit={onSubmit}>
            <div className="form-group-row">
              <input 
                type="text" 
                className="form-control" 
                placeholder="YOUR FULL NAME" 
                required 
                id="book-name"
                value={booking.name}
                onChange={onChange}
              />
              <input 
                type="tel" 
                className="form-control" 
                placeholder="PHONE NUMBER" 
                required 
                id="book-phone"
                value={booking.phone}
                onChange={onChange}
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
                onChange={onChange}
              />
              <select 
                className="form-control" 
                required 
                id="book-service"
                value={booking.service}
                onChange={onChange}
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
                onChange={onChange}
              />
              <select 
                className="form-control" 
                required 
                id="book-time"
                value={booking.time}
                onChange={onChange}
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
  );
}

export default Booking;
