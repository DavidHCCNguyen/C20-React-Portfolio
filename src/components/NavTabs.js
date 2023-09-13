// NavTabs.js

import React from 'react';
import './NavTabs.css'; // Import the CSS file

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#home"
          onClick={() => handlePageChange('Home')}
          className={`nav-link ${currentPage === 'Home' ? 'active home' : ''}`}
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#Resume"
          onClick={() => handlePageChange('Resume')}
          className={`nav-link ${currentPage === 'Resume' ? 'active resume' : ''
            }`}
        >
          Resume
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#Portfolio"
          onClick={() => handlePageChange('Portfolio')}
          className={`nav-link ${currentPage === 'Portfolio' ? 'active Portfolio' : ''}`}
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          className={`nav-link ${currentPage === 'Contact' ? 'active contact' : ''
            }`}
        >
          Contact
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#minigames"
          onClick={() => handlePageChange('MiniGames')}
          className={`nav-link ${currentPage === 'MiniGames' ? 'active minigames' : ''}`}
        >
          Mini Games
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
