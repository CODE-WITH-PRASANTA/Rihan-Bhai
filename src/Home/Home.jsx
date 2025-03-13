import React from 'react';
import './Home.css';

// Import assets
import jetImage from '../assets/element-2.png';
import AboutUsElement from '../AboutUsElement/AboutUsElement';
import BenefitsSection from '../BenefitsSection/BenefitsSection';
import ContactUs from '../Contact/ContactUs';

const Home = () => {
  return (
    <>
    <div className="home-container">
      <section className="banner-section">
        <div className="container">
          <div className="banner-content">
            <h2 className="sub-title"><span>Fly</span>USA</h2>
            <h1 className="main-title">Book Your Flight instantly</h1>
            <p className="description">
            Looking for the best deals on flight tickets in the USA? Our online booking platform makes it easy to find and book affordable flights with top airlines. Whether you're planning a business trip or a vacation, we offer secure payments, real-time price comparisons, and 24/7 customer support. Fly hassle-free with the best offers available. Book your flight now and save big!
            </p>
            <div className="banner-buttons">
            <a href="tel:+18337131425" className="btn btn-primary">Call Now</a>
            </div>
          </div>
          <div className="banner-image">
            <img src={jetImage} alt="Private Jet" className="jet-animation" />
          </div>
        </div>
      </section>
    </div>
    <AboutUsElement />
    <BenefitsSection />
    <ContactUs />
    </>
  );
};

export default Home;
