import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
const logo = new URL('../i.png', import.meta.url).href;

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/contact', label: 'Contact Us', cta: true },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="backdrop-blur-md bg-white/70 shadow-lg border-b border-indigo-100 sticky top-0 z-50 transition-all">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-3 px-4 md:px-10">
        {/* Logo */}
        <div className="flex items-center space-x-2 select-none">
          <img src={logo} alt="Innosanskriti Labs Logo" className="h-11 w-11 rounded-full object-contain shadow-md border-2 border-indigo-100" />
          <Link to="/" className="text-2xl font-extrabold tracking-wide bg-gradient-to-r from-indigo-700 to-fuchsia-500 bg-clip-text text-transparent drop-shadow-md">
            Innosanskriti Labs
          </Link>
        </div>
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-2 lg:space-x-6">
          {navLinks.map((link, idx) => (
            <Link
              key={link.to}
              to={link.to}
              className={`relative px-4 py-2 font-semibold transition-all duration-200 rounded-lg group ${link.cta ? 'bg-gradient-to-r from-indigo-700 to-fuchsia-500 text-white shadow-lg hover:from-fuchsia-600 hover:to-indigo-700' : 'text-gray-800 hover:text-indigo-700'} ${location.pathname === link.to && !link.cta ? 'text-indigo-700' : ''}`}
            >
              {link.label}
              {!link.cta && location.pathname === link.to && (
                <span className="absolute left-1/2 -bottom-1 w-2/3 h-1 bg-gradient-to-r from-indigo-500 to-fuchsia-400 rounded-full -translate-x-1/2 animate-pulse"></span>
              )}
            </Link>
          ))}
        </div>
        {/* Hamburger for mobile */}
        <button
          className="md:hidden flex flex-col space-y-1 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="w-7 h-0.5 bg-indigo-700 rounded"></span>
          <span className="w-7 h-0.5 bg-indigo-700 rounded"></span>
          <span className="w-7 h-0.5 bg-indigo-700 rounded"></span>
        </button>
      </div>
      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center space-y-2 bg-white/90 py-4 shadow border-t border-indigo-100 animate-fade-in-down">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`block px-4 py-2 rounded-lg w-11/12 text-center font-semibold transition-all ${link.cta ? 'bg-gradient-to-r from-indigo-700 to-fuchsia-500 text-white shadow-lg hover:from-fuchsia-600 hover:to-indigo-700' : 'text-gray-800 hover:bg-indigo-50'} ${location.pathname === link.to && !link.cta ? 'bg-indigo-50 text-indigo-700' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;