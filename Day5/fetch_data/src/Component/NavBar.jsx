import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav style={{ display: 'flex', gap: '2rem', padding: '1rem', background: '#23272f' }}>
      <Link to="/" style={{ color: '#ffb347', textDecoration: 'none', fontWeight: 'bold' }}>Home</Link>
      <Link to="/about" style={{ color: '#ffb347', textDecoration: 'none', fontWeight: 'bold' }}>About</Link>
      <Link to="/contact" style={{ color: '#ffb347', textDecoration: 'none', fontWeight: 'bold' }}>Contact</Link>
      <Link to="/posts" style={{ color: '#ffb347', textDecoration: 'none', fontWeight: 'bold' }}>Posts</Link>
    </nav>
  );
};

export default NavBar;
