
import React from 'react';
import { Bug, Lock, Server, Shield } from 'lucide-react';

const WhyCybersecurity: React.FC = () => {
  return (
    <section className="section bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-navy mb-4">Why Cybersecurity Matters</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            In today's digital landscape, your business faces continuous threats that can compromise
            data, operations, and reputation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md border-t-2 border-blue-accent">
            <div className="bg-blue-accent/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <Bug className="h-7 w-7 text-blue-accent" />
            </div>
            <h3 className="text-xl font-semibold text-navy mb-3">
              Hackers Target All Businesses
            </h3>
            <p className="text-gray-600">
              Hackers exploit vulnerabilities in web applications, mobile apps, and networks to gain unauthorized access.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border-t-2 border-blue-accent">
            <div className="bg-blue-accent/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <Lock className="h-7 w-7 text-blue-accent" />
            </div>
            <h3 className="text-xl font-semibold text-navy mb-3">
              Ransomware Locks Business Data
            </h3>
            <p className="text-gray-600">
              Ransomware attacks can encrypt critical business data, leading to operational disruption and financial loss.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border-t-2 border-blue-accent">
            <div className="bg-blue-accent/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <Shield className="h-7 w-7 text-blue-accent" />
            </div>
            <h3 className="text-xl font-semibold text-navy mb-3">
              One Flaw = Major Breach
            </h3>
            <p className="text-gray-600">
              A single security vulnerability can lead to a data breach, resulting in loss of trust and reputation damage.
            </p>
          </div>
        </div>

        <div className="mt-16 bg-navy text-white rounded-lg shadow-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-blue-accent mb-2">95%</h3>
              <p className="text-gray-300">Reduction in security risks after our assessment</p>
            </div>
            
            <div className="text-center">
              <h3 className="text-3xl font-bold text-blue-accent mb-2">Ready</h3>
              <p className="text-gray-300">For ISO 27001, PCI-DSS, GDPR audits</p>
            </div>
            
            <div className="text-center">
              <h3 className="text-3xl font-bold text-blue-accent mb-2">Trusted</h3>
              <p className="text-gray-300">By startups and growing businesses</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyCybersecurity;
