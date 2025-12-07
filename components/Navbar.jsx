import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 text-white flex gap-4">
      <Link to="/">Home</Link>
      <Link to="/generate-qr">Generate QR</Link>
    </nav>
  );
}

export default Navbar;
