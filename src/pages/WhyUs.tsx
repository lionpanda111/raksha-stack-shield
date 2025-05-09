
import React from 'react';
import Layout from '../components/Layout/Layout';
import { Shield, Check, Lock, Smartphone, Database } from 'lucide-react';
import { Link } from 'react-router-dom';

const WhyUs: React.FC = () => {
  return (
    <Layout>
      <section className="bg-gradient-to-b from-navy to-navy-light text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Why Choose Raksha Stack</h1>
            <p className="text-xl text-gray-300 mb-8">
              Our unique approach to cybersecurity delivers results you can trust.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-navy mb-6">
                Expert Security Partners
              </h2>
              <p className="text-gray-700 mb-6">
                At Raksha Stack, we don't just offer security services – we partner with your business 
                to provide ongoing protection and peace of mind in an increasingly complex threat landscape.
              </p>
              <p className="text-gray-700">
                Our team combines technical expertise with clear communication, ensuring that you always 
                understand your security posture and the steps needed to improve it.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="flex justify-center mb-6">
                <Shield className="h-16 w-16 text-blue-accent" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-4 text-center">
                The Raksha Stack Advantage
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-blue-accent mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">
                    Ethical hackers trained in real-world attack scenarios
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-blue-accent mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">
                    Custom reports with actionable proof-of-concept
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-blue-accent mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">
                    Affordable solutions for startups, scalable for enterprises
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-blue-accent mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">
                    Transparent testing methodology & clear remediation steps
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-blue-accent mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">
                    Peace of mind with long-term technical support
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="feature-card">
              <Lock className="h-12 w-12 text-blue-accent mb-4" />
              <h3 className="text-xl font-semibold text-navy mb-3">Real-World Expertise</h3>
              <p className="text-gray-600">
                Our security professionals use the same techniques as malicious hackers but with your 
                permission and for your protection. We stay current with the latest attack methods 
                to ensure your defenses are truly effective.
              </p>
            </div>

            <div className="feature-card">
              <Database className="h-12 w-12 text-blue-accent mb-4" />
              <h3 className="text-xl font-semibold text-navy mb-3">Actionable Reports</h3>
              <p className="text-gray-600">
                Our detailed reports include executive summaries for management and technical details 
                for IT teams. Each vulnerability comes with clear remediation steps and proof-of-concept 
                demonstrations that show real impact.
              </p>
            </div>

            <div className="feature-card">
              <Smartphone className="h-12 w-12 text-blue-accent mb-4" />
              <h3 className="text-xl font-semibold text-navy mb-3">Business-Focused Approach</h3>
              <p className="text-gray-600">
                We understand that security must support your business goals, not hinder them. Our 
                recommendations are practical, prioritized by risk, and designed to work within your 
                operational constraints.
              </p>
            </div>
          </div>

          <div className="bg-navy text-white rounded-lg p-8 text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Our Commitment to You</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-white/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-blue-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                    <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Clear Documentation</h3>
                <p className="text-gray-300 text-sm">
                  Detailed yet understandable reports
                </p>
              </div>

              <div className="text-center">
                <div className="bg-white/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-blue-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Responsive Support</h3>
                <p className="text-gray-300 text-sm">
                  Quick answers to your security questions
                </p>
              </div>

              <div className="text-center">
                <div className="bg-white/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-blue-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Ethical Practices</h3>
                <p className="text-gray-300 text-sm">
                  Confidentiality and responsible disclosure
                </p>
              </div>

              <div className="text-center">
                <div className="bg-white/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-blue-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Continuous Improvement</h3>
                <p className="text-gray-300 text-sm">
                  Ongoing security enhancement guidance
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-bold text-navy mb-6">Ready to Experience the Difference?</h2>
            <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
              Start your security journey with Raksha Stack and see how our unique approach can 
              strengthen your organization's security posture.
            </p>
            <Link to="/contact" className="btn-primary text-lg px-8 py-3">
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default WhyUs;
