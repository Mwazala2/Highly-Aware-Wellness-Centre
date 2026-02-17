
import React from 'react';
import Section from './Section';

const MapSection: React.FC = () => {
  return (
    <Section id="location">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-serif mb-6 text-[#4A5D4E]">Our Location</h2>
        <p className="text-xl text-gray-700 font-light mb-2">
          Bishop Njenga Complex, 2nd Floor
        </p>
        <p className="text-gray-500 uppercase tracking-[0.2em] text-xs">
          Opposite Cooperative Bank, Kiambu Town
        </p>
      </div>

      <div className="bg-white p-4 rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="w-full h-[450px] rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000">
          <iframe
            title="Highly Aware Wellness Centre Location"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.0142603814884!2d36.82869587588325!3d-1.1504953988385626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f3974d6c6e7a1%3A0xe7a94a6d1a1e1e1e!2sBishop%20Njenga%20Complex!5e0!3m2!1sen!2ske!4v1700000000000!5m2!1sen!2ske"
          ></iframe>
        </div>
      </div>
      
      <div className="mt-8 text-center">
        <a 
          href="https://www.google.com/maps/search/?api=1&query=Bishop+Njenga+Complex+Kiambu" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-sm text-[#5B7A8C] hover:underline flex items-center justify-center gap-2"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
          Open in Google Maps
        </a>
      </div>
    </Section>
  );
};

export default MapSection;
