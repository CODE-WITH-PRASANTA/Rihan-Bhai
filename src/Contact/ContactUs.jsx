import React, { useState } from "react";
import "./ContactUs.css";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import { FaQuestionCircle } from "react-icons/fa";

const ContactUs = () => {
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData(event.target);
    formData.append("access_key", "7b7a970f-c064-48e2-8e45-656ecaee0d4b");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());

      if (res.success) {
        console.log("Success:", res);
        alert("Message sent successfully!");
        event.target.reset(); // Reset the form
      } else {
        console.error("Error:", res);
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="Full-contact-form">
        <div className="main-contact-form-container">
          <div className="main-contact-left-section">
            <h2 className="contact-heading">Talk to us</h2>
            <h1 className="contact-title">Any Question? Feel Free to Contact</h1>
            <p className="contact-description">
              With a vast array of popular private planes to choose from, travelling by
              private jet charter is the most efficient.
            </p>
            <div className="contact-social-icons">
              <FaFacebookF className="social-icon" />
              <FaTwitter className="social-icon" />
              <FaYoutube className="social-icon" />
              <FaInstagram className="social-icon" />
            </div>
          </div>
          <div className="contact-right-section">
            <form className="main-contact-form" onSubmit={onSubmit}>
              <div className="form-group form-group-name">
                <input type="text" name="name" className="form-input" placeholder="Name" required />
                <span className="icon-placeholder">&#128100;</span>
              </div>
              <div className="form-group form-group-email">
                <input type="email" name="email" className="form-input" placeholder="Email" required />
                <span className="icon-placeholder">&#9993;</span>
              </div>
              <div className="form-group form-group-phone">
                <input type="text" name="phone" className="form-input" placeholder="Phone" required />
                <span className="icon-placeholder">&#128222;</span>
              </div>
              <div className="form-group form-group-message">
                <textarea name="message" className="form-textarea" placeholder="Message" rows="5" required></textarea>
              </div>
              <button type="submit" className="submit-button" disabled={loading}>
                <FaQuestionCircle className="inquiry-icon" /> {loading ? "Sending..." : "Enquiry Now"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
