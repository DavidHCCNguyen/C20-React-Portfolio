import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Home from '../pages/Home';
import Resume from '../pages/Resume';
import Portfolio from '../pages/Portfolio';
import Contact from '../pages/Contact';
import MiniGames from '../pages/MiniGames'; // Import the MiniGames component
import './PortfolioContainer.css';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'MiniGames') {
      return <MiniGames />;
    }
    return null;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="portfolio-container">
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}
