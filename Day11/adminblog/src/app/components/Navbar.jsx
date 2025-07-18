import React from 'react';
import Link from 'next/link';

const Navbar = () => (
  <nav style={{ display: 'flex', gap: 16, padding: 16, borderBottom: '1px solid #eee' }}>
    <Link href="/">Home</Link>
    <Link href="/blogs">Blogs</Link>
    <Link href="/admin">Admin</Link>
    <Link href="/login">Login</Link>
  </nav>
);

export default Navbar; 