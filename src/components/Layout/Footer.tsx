
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy text-white">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4 flex flex-col">
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="/lovable-uploads/3367e71d-0dc7-4295-a473-bb4418ae724d.png" 
                alt="Raksha Stack Logo" 
                className="h-10 w-auto" 
              />
            </div>
            <p className="text-gray-300 mb-6">
              Professional cybersecurity services protecting businesses from digital threats.
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="https://www.instagram.com/rakshastack"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
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
