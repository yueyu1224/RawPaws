import React from 'react';
import './styles/Navbar.css';

function Navbar({ setCurrentPage, onLogout, isLoggedIn }) {
  return (
    <nav className="navbar">
      <button onClick={() => setCurrentPage('petProfile')}>Pet Profile</button>
      <button onClick={() => setCurrentPage('rawFoodInfo')}>Raw Food Info</button>
      <button onClick={() => setCurrentPage('communityForum')}>Community Forum</button>
      <button onClick={() => setCurrentPage('rawFoodCalculator')}>Raw Food Calculator</button>
      {isLoggedIn && (
        <button onClick={onLogout} className="logoutButton">Logout</button>
      )}
    </nav>
  );
}

export default Navbar;
