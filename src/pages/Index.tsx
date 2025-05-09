
import React from 'react';
import Layout from '../components/Layout/Layout';
import Hero from '../components/Home/Hero';
import WhyCybersecurity from '../components/Home/WhyCybersecurity';
import ServicesOverview from '../components/Home/ServicesOverview';
import { Link } from 'react-router-dom';
import { ShieldCheck } from 'lucide-react';

const Index: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <WhyCybersecurity />
      <ServicesOverview />
      
      {/* CTA Section */}
      <section className="bg-navy py-16 px-4">
        <div className="container mx-auto text-center">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center justify-center mb-6">
              <ShieldCheck className="h-16 w-16 text-blue-accent mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Secure Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl">
                Take the first step towards comprehensive digital protection with Raksha Stack.
              </p>
              <Link
                to="/contact"
                className="btn-primary text-lg px-8 py-3"
              >
                Get Started Today
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
