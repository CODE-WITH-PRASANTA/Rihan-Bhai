import React from 'react';
import './Disclimer.css';

const Disclimer = () => {
  return (
    <div className="disclaimer-wrapper">
      <div className="disclaimer-container">
        <h1 className="disclaimer-title">Disclaimer</h1>
        <p>
          The information provided on <strong>FlyUSA.site</strong> is for general informational purposes only. 
          While we strive for accuracy, we do not guarantee the completeness or reliability of any information.
        </p>

        <h2 className="disclaimer-heading">Liability</h2>
        <p>
          We are not responsible for any airline policies, changes, cancellations, or disruptions. 
          All bookings are subject to the respective airline's terms and conditions.
        </p>

        <h2 className="disclaimer-heading">Our Role</h2>
        <p>
          We do not own, manage, or operate any airlines. We act solely as an online booking platform to 
          facilitate flight reservations for users.
        </p>

        <h2 className="disclaimer-heading">Third-Party Services</h2>
        <p>
          We collaborate with third-party advertising services such as <strong>Google Ads, Facebook Ads,</strong> 
          and <strong>Bing Ads</strong> to provide personalized advertisements. These platforms may use cookies 
          and tracking technologies to display relevant ads based on user browsing behavior.
        </p>

        <h2 className="disclaimer-heading">Your Rights & Privacy</h2>
        <p>
          You have the right to request data deletion. Additionally, you can opt out of personalized ads 
          through your <strong>Google, Facebook, and Bing Ads</strong> settings.
        </p>

        <h2 className="disclaimer-heading">Contact Us</h2>
        <p>
          For any concerns or privacy-related queries, feel free to reach out to us at 
          <strong> rehanshaikh9040@gmail.com</strong>.
        </p>
      </div>
    </div>
  );
};

export default Disclimer;
