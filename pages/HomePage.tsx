
import React from 'react';
import Hero from '../components/Hero';
import EmpathySection from '../components/EmpathySection';
import Section from '../components/Section';
import Testimonials from '../components/Testimonials';
import MapSection from '../components/MapSection';

interface HomePageProps {
  onNavigate: (page: 'home' | 'services' | 'about') => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <>
      <Hero />
      
      <div className="space-y-32 pb-32">
        <EmpathySection />
        
        {/* New "Our Approach" Section */}
        <Section type="fade" className="text-center">
          <span className="uppercase tracking-[0.3em] text-[10px] text-[#5B7A8C] mb-4 block">The Highly Aware Way</span>
          <h2 className="text-4xl font-serif text-[#4A5D4E] mb-8 italic">Holistic, Mindful, Compassionate</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left mt-16">
            <div className="stagger-item" style={{ transitionDelay: '0.2s' }}>
              <h3 className="font-serif text-xl mb-4 text-[#2D3436]">Evidence-Based</h3>
              <p className="text-gray-500 text-sm leading-relaxed">We combine modern therapeutic techniques with time-tested mindfulness practices for a balanced approach to mental health.</p>
            </div>
            <div className="stagger-item" style={{ transitionDelay: '0.4s' }}>
              <h3 className="font-serif text-xl mb-4 text-[#2D3436]">Safe Space</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Our sanctuary in Kiambu is designed to be a non-judgmental harbor where you can explore your deepest thoughts freely.</p>
            </div>
            <div className="stagger-item" style={{ transitionDelay: '0.6s' }}>
              <h3 className="font-serif text-xl mb-4 text-[#2D3436]">Personalized</h3>
              <p className="text-gray-500 text-sm leading-relaxed">No two journeys are the same. We tailor every session to your unique emotional landscape and personal goals.</p>
            </div>
          </div>
        </Section>

        {/* Process Section */}
        <Section type="scale" className="bg-[#F7F9F7] rounded-[3rem] py-20 px-12">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-serif text-[#4A5D4E] mb-12 italic">Your Path to Clarity</h2>
            <div className="space-y-12">
              <div className="flex items-start gap-6 text-left">
                <div className="w-10 h-10 rounded-full bg-[#4A5D4E] text-white flex items-center justify-center font-serif flex-shrink-0">1</div>
                <div>
                  <h4 className="font-medium text-[#2D3436] mb-1">Initial Consultation</h4>
                  <p className="text-gray-500 text-sm">A brief conversation to understand your needs and match you with the right support.</p>
                </div>
              </div>
              <div className="flex items-start gap-6 text-left">
                <div className="w-10 h-10 rounded-full bg-[#4A5D4E] text-white flex items-center justify-center font-serif flex-shrink-0">2</div>
                <div>
                  <h4 className="font-medium text-[#2D3436] mb-1">Deep Exploration</h4>
                  <p className="text-gray-500 text-sm">Working together through regular sessions to uncover patterns and build emotional resilience.</p>
                </div>
              </div>
              <div className="flex items-start gap-6 text-left">
                <div className="w-10 h-10 rounded-full bg-[#4A5D4E] text-white flex items-center justify-center font-serif flex-shrink-0">3</div>
                <div>
                  <h4 className="font-medium text-[#2D3436] mb-1">Sustainable Balance</h4>
                  <p className="text-gray-500 text-sm">Equipping you with the tools to maintain your well-being independently as you move forward.</p>
                </div>
              </div>
            </div>
            <button 
              onClick={() => onNavigate('services')}
              className="mt-16 text-[#5B7A8C] uppercase tracking-widest text-xs font-semibold hover:opacity-70 transition-opacity border-b border-[#5B7A8C] pb-1"
            >
              Explore Our Services
            </button>
          </div>
        </Section>

        <Testimonials />

        <MapSection />

        {/* Final Call to Action */}
        <section className="text-center max-w-xl mx-auto px-6 py-12">
          <h3 className="text-3xl font-serif mb-8 text-[#2D3436]">Take the first step.</h3>
          <p className="text-gray-600 mb-12 font-light leading-relaxed">
            We invite you to visit us at Bishop Njenga Complex or call to book your first consultation.
          </p>
          <a 
            href="tel:0703149876" 
            className="inline-block bg-[#4A5D4E] text-white px-12 py-5 rounded-full text-lg font-serif italic shadow-xl hover:bg-[#3d4d40] transition-all transform hover:-translate-y-1"
          >
            Call Now: 0703 149876
          </a>
        </section>
      </div>
    </>
  );
};

export default HomePage;
