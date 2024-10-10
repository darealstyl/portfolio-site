import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1>Jonah Ball</h1>
      <nav>
        <Link to="/">Projects</Link>
        <Link to="/about">About</Link>
        <Link to="/resume">Resume</Link>
      </nav>
    </header>
  );
}

export default Header;
