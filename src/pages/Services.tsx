
import React from 'react';
import Layout from '../components/Layout/Layout';
import { Code, Smartphone, Network, Shield, Users, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  return (
    <Layout>
      <section className="bg-gradient-to-b from-navy to-navy-light text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Security Services</h1>
            <p className="text-xl text-gray-300 mb-8">
              Comprehensive solutions to protect your business from evolving cyber threats.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-16">
            <div>
              <div className="service-card">
                <Code className="h-12 w-12 text-blue-accent mb-4" />
                <h2 className="text-2xl font-bold text-navy mb-4">Web Application VAPT</h2>
                <p className="text-gray-700 mb-6">
                  Our comprehensive web application vulnerability assessment and penetration testing (VAPT) service 
                  identifies security weaknesses in your web applications before attackers can exploit them.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-blue-accent mr-3 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">OWASP Top 10 vulnerability testing</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-blue-accent mr-3 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Authentication and authorization flaws</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-blue-accent mr-3 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Business logic vulnerabilities</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-blue-accent mr-3 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">API security assessment</span>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <div className="service-card">
                <Smartphone className="h-12 w-12 text-blue-accent mb-4" />
                <h2 className="text-2xl font-bold text-navy mb-4">Mobile Application VAPT</h2>
                <p className="text-gray-700 mb-6">
                  Our mobile application security testing identifies vulnerabilities in Android and iOS applications 
                  to ensure your mobile apps protect sensitive user data.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-blue-accent mr-3 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Local data storage security assessment</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-blue-accent mr-3 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Client-side injection vulnerabilities</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-blue-accent mr-3 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Authentication and session handling</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-blue-accent mr-3 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Reverse engineering protection</span>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <div className="service-card">
                <Network className="h-12 w-12 text-blue-accent mb-4" />
                <h2 className="text-2xl font-bold text-navy mb-4">Network Security Audit</h2>
                <p className="text-gray-700 mb-6">
                  Our network security audits thoroughly assess your network infrastructure to identify 
                  vulnerabilities and security gaps that could be exploited by attackers.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-blue-accent mr-3 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">External and internal network scanning</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-blue-accent mr-3 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Firewall and router configuration review</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-blue-accent mr-3 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Wireless network security assessment</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-blue-accent mr-3 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">VPN and remote access security</span>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <div className="service-card">
                <Shield className="h-12 w-12 text-blue-accent mb-4" />
                <h2 className="text-2xl font-bold text-navy mb-4">Incident Response</h2>
                <p className="text-gray-700 mb-6">
                  Our incident response service helps organizations effectively respond to and recover from 
                  security incidents, minimizing damage and recovery time.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-blue-accent mr-3 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">24/7 emergency response</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-blue-accent mr-3 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Breach containment and eradication</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-blue-accent mr-3 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Forensic investigation</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-blue-accent mr-3 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Post-incident recovery support</span>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <div className="service-card">
                <Users className="h-12 w-12 text-blue-accent mb-4" />
                <h2 className="text-2xl font-bold text-navy mb-4">Cyber Awareness Training</h2>
                <p className="text-gray-700 mb-6">
                  Our cybersecurity awareness training programs help your team recognize and avoid security threats, 
                  reducing the risk of human error-based breaches.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-blue-accent mr-3 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Phishing awareness and simulations</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-blue-accent mr-3 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Social engineering defense</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-blue-accent mr-3 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Password security best practices</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-blue-accent mr-3 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Security policy compliance training</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-8 mb-16">
            <h2 className="text-2xl font-bold text-navy mb-6 text-center">Our Secure Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              <div className="bg-white p-4 rounded-lg text-center shadow-md relative">
                <div className="bg-blue-accent text-white w-8 h-8 rounded-full flex items-center justify-center absolute -top-4 left-1/2 transform -translate-x-1/2">1</div>
                <h3 className="font-semibold text-navy mt-4 mb-2">Scoping & NDA</h3>
                <p className="text-sm text-gray-600">Define scope and sign confidentiality agreements</p>
              </div>
              <div className="bg-white p-4 rounded-lg text-center shadow-md relative">
                <div className="bg-blue-accent text-white w-8 h-8 rounded-full flex items-center justify-center absolute -top-4 left-1/2 transform -translate-x-1/2">2</div>
                <h3 className="font-semibold text-navy mt-4 mb-2">Testing</h3>
                <p className="text-sm text-gray-600">Manual + automated security testing</p>
              </div>
              <div className="bg-white p-4 rounded-lg text-center shadow-md relative">
                <div className="bg-blue-accent text-white w-8 h-8 rounded-full flex items-center justify-center absolute -top-4 left-1/2 transform -translate-x-1/2">3</div>
                <h3 className="font-semibold text-navy mt-4 mb-2">Reporting</h3>
                <p className="text-sm text-gray-600">Executive + technical detailed reports</p>
              </div>
              <div className="bg-white p-4 rounded-lg text-center shadow-md relative">
                <div className="bg-blue-accent text-white w-8 h-8 rounded-full flex items-center justify-center absolute -top-4 left-1/2 transform -translate-x-1/2">4</div>
                <h3 className="font-semibold text-navy mt-4 mb-2">Free Re-Test</h3>
                <p className="text-sm text-gray-600">Verification after you implement fixes</p>
              </div>
              <div className="bg-white p-4 rounded-lg text-center shadow-md relative">
                <div className="bg-blue-accent text-white w-8 h-8 rounded-full flex items-center justify-center absolute -top-4 left-1/2 transform -translate-x-1/2">5</div>
                <h3 className="font-semibold text-navy mt-4 mb-2">Post-Support</h3>
                <p className="text-sm text-gray-600">30 days of security advisory support</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-bold text-navy mb-6">Ready to Secure Your Business?</h2>
            <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your security needs and how we can help protect your business.
            </p>
            <Link to="/contact" className="btn-primary text-lg px-8 py-3">
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
