
import React from 'react';
import { Link } from 'react-router-dom';
import { Shield } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-navy to-navy-light text-white py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col space-y-6">
            <div className="flex items-center gap-3">
              <Shield className="h-10 w-10 text-blue-accent" />
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Is Your Business <span className="text-blue-accent">Secure</span> from Hackers?
              </h1>
            </div>
            <p className="text-xl text-gray-300">
              We test. We secure. We support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Link to="/contact" className="btn-primary text-center">
                Get Protected Now
              </Link>
              <Link to="/services" className="btn-secondary bg-white/10 border-white/30 text-white text-center">
                Our Services
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-accent/20 rounded-full blur-3xl"></div>
              <div className="relative bg-navy-light p-8 rounded-xl border border-white/10 backdrop-blur">
                <img 
                  src="/lovable-uploads/3367e71d-0dc7-4295-a473-bb4418ae724d.png" 
                  alt="Raksha Stack Logo" 
                  className="h-24 w-auto mx-auto mb-4" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
