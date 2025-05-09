
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Shield, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 md:px-6">
        <nav className="flex items-center justify-between py-4">
          <Link to="/" className="flex items-center gap-2">
            <Shield className="h-8 w-8 text-blue-accent" />
            <div>
              <h1 className="text-xl font-bold text-navy">Raksha Stack</h1>
              <p className="text-xs text-gray-600">Your Stack</p>
            </div>
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="block md:hidden text-navy"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`nav-link ${isActive('/') ? 'active' : ''}`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`nav-link ${isActive('/about') ? 'active' : ''}`}
            >
              About Us
            </Link>
            <Link
              to="/services"
              className={`nav-link ${isActive('/services') ? 'active' : ''}`}
            >
              Services
            </Link>
            <Link
              to="/why-us"
              className={`nav-link ${isActive('/why-us') ? 'active' : ''}`}
            >
              Why Choose Us
            </Link>
            <Link to="/contact" className="btn-primary">
              Contact Us
            </Link>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white pb-4 animate-accordion-down">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className={`nav-link ${isActive('/') ? 'active' : ''}`}
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`nav-link ${isActive('/about') ? 'active' : ''}`}
                onClick={toggleMenu}
              >
                About Us
              </Link>
              <Link
                to="/services"
                className={`nav-link ${isActive('/services') ? 'active' : ''}`}
                onClick={toggleMenu}
              >
                Services
              </Link>
              <Link
                to="/why-us"
                className={`nav-link ${isActive('/why-us') ? 'active' : ''}`}
                onClick={toggleMenu}
              >
                Why Choose Us
              </Link>
              <Link
                to="/contact"
                className="btn-primary text-center"
                onClick={toggleMenu}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
