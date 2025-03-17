import React, { useState } from 'react';
import './Navbar.css';
import logo from '../assets/logo.png';
import { FaHome, FaInfoCircle, FaRegFileAlt, FaBlog, FaQuestionCircle, FaPhone, FaBars, FaTimes , FaChalkboardTeacher } from 'react-icons/fa';
import { MdFlightTakeoff } from 'react-icons/md';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate(); // Initialize navigate

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false); // Close the menu after a menu item is clicked
  };

  // Function to handle navigation on menu item click
  const handleNavigation = (route) => {
    navigate(route); // Navigate to the specified route
    closeMenu(); // Close the menu
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src={logo} alt="Flynext Logo" onClick={()=> handleNavigation('/')} />
        </div>
        <button className="menu-toggle-btn" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
        <ul className={`navbar-menu ${menuOpen ? 'open' : ''}`}>
        <li className="menu-item book-now">
            <a href="tel:+18337131425" className="book-now-btn">
              <MdFlightTakeoff className="icon" /> Call Now
            </a>
          </li>

        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
