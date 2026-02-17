
import React from 'react';
import Section from './Section';

const AboutSection: React.FC = () => {
  return (
    <Section id="about" type="scale">
      <div className="flex flex-col items-center text-center">
        <div className="mb-16 w-full overflow-hidden rounded-[2rem] shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1200" 
            alt="Warm, peaceful consultation room" 
            className="w-full object-cover aspect-[16/9] hover:scale-105 transition-transform duration-[3s] ease-out"
          />
        </div>
        <h2 className="text-4xl font-serif mb-10 text-[#4A5D4E] italic">There is a path forward.</h2>
        <div className="space-y-8 text-lg md:text-xl text-gray-600 leading-relaxed font-light max-w-3xl">
          <p className="stagger-item" style={{ transitionDelay: '0.4s' }}>
            Welcome to our wellness centre located in Kiambu, Kenya. We provide a compassionate and supportive environment for personal growth, mindfulness, and emotional healing.
          </p>
          <p className="stagger-item" style={{ transitionDelay: '0.6s' }}>
            Our mission is to promote holistic well-being, mindfulness, and emotional balance. Whether you're navigating a specific challenge or seeking deeper self-awareness, we are here to walk with you.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;
