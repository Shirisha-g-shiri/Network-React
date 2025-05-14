import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
      <a href="/" class="navbar-logo">
            <span class="logo-symbol">⚡</span><h1 className="navbar-logo">NetCore</h1>
        </a>
        
        <nav className={`navbar-links ${isOpen ? 'navbar-open' : ''}`}>
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="navbar-mobile">
          <div
            className={`navbar-toggle ${isOpen ? 'navbar-open' : ''}`}
            onClick={toggleMenu}
          />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
