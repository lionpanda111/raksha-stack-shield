
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-navy to-navy-light text-white py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col space-y-6">
            <div className="flex items-center gap-4">
              <img 
                src="/lovable-uploads/9c2093b0-1d78-42a4-b86f-a0771cddce0c.png" 
                alt="Raksha Stack Shield" 
                className="h-12 w-auto"
              />
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Is Your Business <span className="text-blue-accent">Secure</span> from Hackers?
              </h1>
            </div>
            <p className="text-xl text-gray-300">
              We test. We secure. We support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Link to="/contact" className="btn-primary text-center group flex items-center justify-center">
                Get Protected Now
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="/services" className="btn-secondary bg-white/10 border-white/30 text-white text-center group flex items-center justify-center">
                Our Services
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-accent/20 rounded-full blur-3xl"></div>
              <div className="relative bg-navy-light p-8 rounded-xl border border-white/10 backdrop-blur hover:shadow-lg hover:shadow-blue-accent/20 transition-all duration-300">
                <img 
                  src="/lovable-uploads/374ad721-c3b7-402d-8c55-866f2b7f0ba8.png" 
                  alt="Raksha Stack Logo" 
                  className="h-32 w-auto mx-auto" 
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
