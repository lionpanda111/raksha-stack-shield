
import React, { useState } from 'react';
import Layout from '../components/Layout/Layout';
import { Mail, Phone, MapPin, Instagram, Send } from 'lucide-react';
import { toast } from "sonner";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Message sent successfully! We'll contact you soon.");
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <Layout>
      <section className="bg-gradient-to-b from-navy to-navy-light text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-gray-300 mb-8">
              Get in touch with our team to discuss your security needs.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-navy mb-6">
                Let's Secure Your Business
              </h2>
              <p className="text-gray-700 mb-8">
                Contact us today to discuss your cybersecurity challenges and how Raksha Stack 
                can help protect your business from evolving digital threats.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-blue-accent mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-navy">Email</h3>
                    <a 
                      href="mailto:rakshastack@gmail.com" 
                      className="text-gray-700 hover:text-blue-accent transition-colors"
                    >
                      rakshastack@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-blue-accent mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-navy">Phone</h3>
                    <a 
                      href="tel:+916351704966" 
                      className="text-gray-700 hover:text-blue-accent transition-colors"
                    >
                      +91 6351704966
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-blue-accent mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-navy">Location</h3>
                    <p className="text-gray-700">Surat, Gujarat</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Instagram className="h-6 w-6 text-blue-accent mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-navy">Instagram</h3>
                    <a 
                      href="https://www.instagram.com/rakshastack" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-blue-accent transition-colors"
                    >
                      @rakshastack
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-navy mb-6">Send Us a Message</h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-accent focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-accent focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-accent focus:border-transparent"
                    placeholder="Your phone number"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-accent focus:border-transparent"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <span className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></span>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
