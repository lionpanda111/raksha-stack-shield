import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy text-white">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4 flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/lovable-uploads/374ad721-c3b7-402d-8c55-866f2b7f0ba8.png" 
                alt="Raksha Stack Logo" 
                className="h-14 w-auto" 
              />
            </div>
            <p className="text-gray-300 mb-6">
              Professional cybersecurity services protecting businesses from digital threats.
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="https://www.instagram.com/rakshastack/?igsh=ZWowdnVlejl6dm80#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/share/1AahFMGFZn/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://x.com/rakshastack"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="h-5 w-5"
                >
                  <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                  <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                </svg>
              </a>
            </div>
          </div>

          <div className="md:col-span-2 flex flex-col">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/why-us" className="text-gray-300 hover:text-white transition-colors">
                  Why Choose Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3 flex flex-col">
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">Web Application VAPT</li>
              <li className="text-gray-300">Mobile Application VAPT</li>
              <li className="text-gray-300">Network Security Audit</li>
              <li className="text-gray-300">Incident Response</li>
              <li className="text-gray-300">Cyber Awareness Training</li>
            </ul>
          </div>

          <div className="md:col-span-3 flex flex-col">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-3 text-blue-accent flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:rakshastack@gmail.com"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  rakshastack@gmail.com
                </a>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-3 text-blue-accent flex-shrink-0 mt-0.5" />
                <a
                  href="tel:+916351704966"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  +91 6351704966
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-blue-accent flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">Surat, Gujarat</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Raksha Stack. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
