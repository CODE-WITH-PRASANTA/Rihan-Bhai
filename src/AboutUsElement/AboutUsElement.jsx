import React from 'react';
import { FaPlane } from 'react-icons/fa'; // Import airplane icon
import './AboutusElement.css';

// Assets of the page
import bgimg from '../assets/About-bg.png';
import callandbookbg from '../assets/element-7.png';
import rightsidestylebg from '../assets/element-8.png';

const AboutUsElement = () => {
  return (
    <div className="about-container" style={{ backgroundImage: `url(${bgimg})` }}>
      <div className="background-overlay"></div>
      <div className="about-content">
        <div className="text-section">
          <p className="section-title">About Fly<span>USA</span></p>
          <h1 className="main-heading">
            Book Your Flight & save your <span className="fly-text">time</span> and give more comfort
          </h1>
          <p className="about-description">
          Looking for the best deals on flight tickets in the USA? Our online booking platform makes it easy to find and book affordable flights with top airlines. Whether you're planning a business trip or a vacation, we offer secure payments, real-time price comparisons, and 24/7 customer support. Fly hassle-free with the best offers available. Book your flight now and save big!
          </p>
        </div>

        <div className="call-to-action">
          <div className="call-card" style={{ backgroundImage: `url(${callandbookbg})` }}>
            <div className="call-details">
              <p className="call-text">Call for book quick:</p>
              <p className="call-number">+1(833) 713-14-25</p>
            </div>
            <button
  className="about-book-now"
  onClick={() => (window.location.href = "tel:+18337131425")}
>
  <FaPlane className="plane-icon" /> Call Now
</button>

          </div>
        </div>
      </div>
      <div className="right-style" style={{ backgroundImage: `url(${rightsidestylebg})` }}></div>
    </div>
  );
};

export default AboutUsElement;
