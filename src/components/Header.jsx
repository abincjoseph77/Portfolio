import React, { useState } from 'react';
import '../components/style/header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu when clicking any link
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header>
      <div className="container">
        

        {/* Hamburger icon */}
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>

        {/* Navigation Menu */}
        <nav className={menuOpen ? "active" : ""}>
          <ul>
            <li><a href="#about" onClick={handleLinkClick}>About</a></li>
            <li><a href="#skills" onClick={handleLinkClick}>Skills</a></li>
            <li><a href="#projects" onClick={handleLinkClick}>Projects</a></li>
            <li><a href="#experience" onClick={handleLinkClick}>Experience</a></li>
            <li><a href="#querts" onClick={handleLinkClick}>Querts</a></li>
            <li><a href="#contact" onClick={handleLinkClick}>Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
