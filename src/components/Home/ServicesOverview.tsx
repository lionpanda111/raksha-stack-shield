
import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Smartphone, Network, Shield, Users } from 'lucide-react';

const ServicesOverview: React.FC = () => {
  return (
    <section className="section">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-navy mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Comprehensive security solutions tailored to protect your digital assets and infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="service-card">
            <Code className="h-12 w-12 text-blue-accent mb-4" />
            <h3 className="text-xl font-semibold text-navy mb-3">Web Application VAPT</h3>
            <p className="text-gray-600 mb-4">
              Thorough assessment of web applications to identify and remediate security vulnerabilities.
            </p>
            <Link to="/services" className="text-blue-accent hover:text-blue-dark font-medium">
              Learn More →
            </Link>
          </div>

          <div className="service-card">
            <Smartphone className="h-12 w-12 text-blue-accent mb-4" />
            <h3 className="text-xl font-semibold text-navy mb-3">Mobile Application VAPT</h3>
            <p className="text-gray-600 mb-4">
              In-depth security testing of Android and iOS applications to protect user data and privacy.
            </p>
            <Link to="/services" className="text-blue-accent hover:text-blue-dark font-medium">
              Learn More →
            </Link>
          </div>

          <div className="service-card">
            <Network className="h-12 w-12 text-blue-accent mb-4" />
            <h3 className="text-xl font-semibold text-navy mb-3">Network Security Audit</h3>
            <p className="text-gray-600 mb-4">
              Comprehensive assessment of network infrastructure to identify potential security gaps.
            </p>
            <Link to="/services" className="text-blue-accent hover:text-blue-dark font-medium">
              Learn More →
            </Link>
          </div>

          <div className="service-card">
            <Shield className="h-12 w-12 text-blue-accent mb-4" />
            <h3 className="text-xl font-semibold text-navy mb-3">Incident Response</h3>
            <p className="text-gray-600 mb-4">
              Rapid and effective response to security incidents to minimize damage and recovery time.
            </p>
            <Link to="/services" className="text-blue-accent hover:text-blue-dark font-medium">
              Learn More →
            </Link>
          </div>

          <div className="service-card">
            <Users className="h-12 w-12 text-blue-accent mb-4" />
            <h3 className="text-xl font-semibold text-navy mb-3">Cyber Awareness Training</h3>
            <p className="text-gray-600 mb-4">
              Educational programs to help your team recognize and avoid security threats.
            </p>
            <Link to="/services" className="text-blue-accent hover:text-blue-dark font-medium">
              Learn More →
            </Link>
          </div>

          <div className="bg-navy text-white rounded-lg p-6 flex flex-col items-center justify-center text-center">
            <h3 className="text-xl font-semibold mb-4">Need a Custom Solution?</h3>
            <p className="mb-6">
              We offer tailored security services to meet your specific business requirements.
            </p>
            <Link to="/contact" className="bg-blue-accent hover:bg-blue-light text-white font-medium py-2 px-6 rounded-lg transition-colors duration-300">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
