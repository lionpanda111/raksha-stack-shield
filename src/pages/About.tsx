
import React from 'react';
import Layout from '../components/Layout/Layout';
import { ShieldCheck, AlertTriangle, Shield } from 'lucide-react';

const About: React.FC = () => {
  return (
    <Layout>
      <section className="bg-gradient-to-b from-navy to-navy-light text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Raksha Stack</h1>
            <p className="text-xl text-gray-300 mb-8">
              We're here to protect your digital presence in an increasingly complex threat landscape.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-navy mb-6">
                Our Mission
              </h2>
              <p className="text-gray-700 mb-6">
                At Raksha Stack, our mission is to be your trusted security stack — every step of the way. 
                We believe that robust cybersecurity should be accessible to businesses of all sizes, not just 
                large corporations with massive IT budgets.
              </p>
              <p className="text-gray-700">
                Through our expertise, transparent practices, and commitment to excellence, we help businesses 
                identify vulnerabilities before attackers do, implement proper security controls, and build a 
                culture of security awareness.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="flex justify-center mb-6">
                <Shield className="h-20 w-20 text-blue-accent" />
              </div>
              <h3 className="text-2xl font-semibold text-navy mb-4 text-center">
                Why We Exist
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-blue-accent mr-3 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">
                    60% of small businesses close within 6 months of a cyber attack
                  </p>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-blue-accent mr-3 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">
                    Most businesses discover breaches 200+ days after they occur
                  </p>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-blue-accent mr-3 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">
                    95% of cybersecurity breaches are caused by human error
                  </p>
                </li>
                <li className="flex items-start">
                  <ShieldCheck className="h-5 w-5 text-blue-accent mr-3 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">
                    Regular security testing can prevent most common attacks
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-navy mb-12 text-center">
            Problems Without Cybersecurity
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border-t-2 border-red-500">
              <h3 className="text-xl font-semibold text-navy mb-3">Financial Loss</h3>
              <p className="text-gray-600">
                Cyber attacks can lead to direct financial losses through theft, ransom payments, regulatory fines, and operational disruption.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-t-2 border-red-500">
              <h3 className="text-xl font-semibold text-navy mb-3">Reputation Damage</h3>
              <p className="text-gray-600">
                A security breach can severely damage your brand reputation and erode customer trust that took years to build.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-t-2 border-red-500">
              <h3 className="text-xl font-semibold text-navy mb-3">Legal Consequences</h3>
              <p className="text-gray-600">
                Data breaches can result in non-compliance penalties, lawsuits, and legal obligations to notify affected parties.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
