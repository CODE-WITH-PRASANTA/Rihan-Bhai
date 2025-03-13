import React from 'react';
import './TermandConditionCancelation.css';

const TermandConditionCancelation = () => {
  return (
    <div className="cancellation-wrapper">
      <div className="cancellation-container">
        <h1 className="cancellation-title">Privacy Policy</h1>
        <div className="policy-intro">
          <p>
            <strong>At FlyUSA.site, we respect your privacy. This Privacy Policy explains how we collect, use, and protect your personal data when you use our website.</strong> Information We Collect
          </p>
        </div>
        
        <div className="policy-section">
          <h2 className="policy-heading">We may collect the following types of information:</h2>
          <ul className="policy-list">
            <li>Personal Data: Name, email, phone number (if provided).</li>
            <li>Technical Data: IP address, browser type, and device information.</li>
          </ul>
        </div>

        <div className="policy-section">
          <h2 className="policy-heading">Cookies & Tracking:</h2>
          <ul className="policy-list">
            <li>We use Google Ads, Facebook Ads, and Bing Ads to track user activity for advertising and analytics purposes.</li>
          </ul>
        </div>

        <div className="policy-section">
          <h2 className="policy-heading">How We Use Your Information</h2>
          <ul className="policy-list">
            <li>To process flight booking inquiries. </li>
            <li>To improve our website’s functionality and security.</li>
            <li>To personalize ads and marketing campaigns.</li>

          </ul>
        </div>

        <div className="policy-section">
          <h2 className="policy-heading">Third-Party Services          </h2>
          <ul className="policy-list">
            <li>We work with Google Ads, Facebook Ads, and Bing Ads to display personalized advertisements. These platforms use cookies to show relevant ads based on browsing behavior.</li>
          </ul>
        </div>

        <div className="policy-section">
          <h2 className="policy-heading">Your Rights</h2>
          <ul className="policy-list">
            <li>You can request data deletion.            <strong>You can opt out of personalized ads through Google, Facebook, and Bing Ads settings.
            </strong>For any privacy concerns, contact us at rehanshaikh9040@gmail.com.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TermandConditionCancelation;
