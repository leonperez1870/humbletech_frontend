import * as React from 'react';
import { Link } from 'gatsby';

interface HeaderProps {
  siteTitle?: string;
}

const Header: React.FC<HeaderProps> = ({ siteTitle = '' }) => {
  return (
    <header className="p-5 bg-white shadow-md fixed top-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <Link to="/" className="text-xl font-bold text-gray-800" aria-label="Home">{siteTitle}</Link>
        </div>
        <nav className="space-x-4" aria-label="Main">
          <Link to="/about" className="text-gray-700 hover:text-indigo-600 transition duration-300" aria-label="About">About</Link>
          <Link to="/contact" className="text-gray-700 hover:text-indigo-600 transition duration-300" aria-label="Contact">Contact</Link>
          <Link to="/portfolio" className="text-gray-700 hover:text-indigo-600 transition duration-300" aria-label="Portfolio">Portfolio</Link>
          <Link to="/services" className="text-gray-700 hover:text-indigo-600 transition duration-300" aria-label="Services">Services</Link>
          <Link to="/register" className="text-gray-700 hover:text-indigo-600 transition duration-300" aria-label="Register">Register</Link>
          <Link to="/login" className="text-gray-700 hover:text-indigo-600 transition duration-300" aria-label="Login">Login</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
