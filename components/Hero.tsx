
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-[85vh] flex flex-col items-center justify-center text-center px-6 pt-10">
      <div className="max-w-4xl">
        <span className="uppercase tracking-[0.4em] text-[10px] md:text-xs text-[#5B7A8C] mb-8 block font-semibold fade-in" style={{ animationDelay: '0.2s' }}>
          Highly Aware Wellness Centre
        </span>
        
        <h1 className="hero-title text-5xl md:text-8xl leading-[1.1] mb-10 font-serif italic text-[#4A5D4E] overflow-hidden">
          <span style={{ animationDelay: '0.4s' }}>Your Partner in</span>
          <span style={{ animationDelay: '0.6s' }}>Holistic Wellness &</span>
          <span style={{ animationDelay: '0.8s' }}>Mental Clarity</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed serif fade-in max-w-2xl mx-auto" style={{ animationDelay: '1.2s' }}>
          Providing a sanctuary for the modern mind in the heart of Kiambu Town.
        </p>
      </div>
      
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce opacity-20 hidden md:block">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
