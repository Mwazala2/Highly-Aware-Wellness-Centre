
import React from 'react';
import Section from './Section';

const EmpathySection: React.FC = () => {
  const feelings = [
    "Overwhelmed by daily life?",
    "Searching for a sense of purpose?",
    "Feeling disconnected from yourself?",
    "Struggling with emotional balance?",
    "Simply needing a safe space to be heard?"
  ];

  return (
    <Section className="text-center bg-[#F7F9F7] rounded-[3rem] my-24 border border-gray-50">
      <h2 className="text-3xl font-serif mb-16 text-[#2D3436]">We understand.</h2>
      <ul className="space-y-8">
        {feelings.map((feeling, index) => (
          <li 
            key={index} 
            className="stagger-item text-xl md:text-3xl text-gray-400 font-light italic hover:text-[#4A5D4E] transition-colors duration-500 cursor-default"
            style={{ transitionDelay: `${index * 0.15 + 0.3}s` }}
          >
            {feeling}
          </li>
        ))}
      </ul>
      <div className="mt-20 w-px h-32 bg-gradient-to-b from-gray-300 to-transparent mx-auto"></div>
    </Section>
  );
};

export default EmpathySection;
