import React from 'react';
import './Terms.css';

const Terms = () => {
  return (
    <div className="terms-wrapper">
      <div className="terms-container">
        <h1 className="terms-title">Terms & Conditions</h1>
        <p className="terms-updated">Last Updated: 17th march 2025</p>

        <div className="terms-section">
          <h2 className="terms-heading">1. Website Use</h2>
          <p>This website is designed for booking flight tickets and related services.</p>
          <p>Unauthorized use of this website may result in legal action.</p>
        </div>

        <div className="terms-section">
          <h2 className="terms-heading">2. Payments & Bookings</h2>
          <p>We act as an intermediary between customers and airlines.</p>
          <p>Flight prices and availability are subject to change at any time.</p>
        </div>

        <div className="terms-section">
          <h2 className="terms-heading">3. Limitation of Liability</h2>
          <p>We are not responsible for flight delays, cancellations, or airline policies.</p>
          <p>Users should verify travel regulations before booking.</p>
        </div>

        <div className="terms-section">
          <h2 className="terms-heading">4. Changes to Terms</h2>
          <p>We reserve the right to modify these terms at any time. Please review them periodically.</p>
          <p>For any questions, contact us at <strong>rehanshaikh9040@gmail.com</strong>.</p>
        </div>

        <div className="terms-section contact-section">
          <h2 className="terms-heading">Contact Us</h2>
          <p>For any inquiries, please reach out to us:</p>
          <p>✉ Email: <a href="mailto:rehanshaikh9040@gmail.com">rehanshaikh9040@gmail.com</a></p>
          <p>🌐 Website: <a href="https://FlyUSA.site" target="_blank" rel="noopener noreferrer">FlyUSA.site</a></p>
          <p className="terms-support">Our customer support is available Monday to Friday, 9 AM – 6 PM.</p>
        </div>
      </div>
    </div>
  );
};

export default Terms;
