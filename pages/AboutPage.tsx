
import React from 'react';
import Section from '../components/Section';

const AboutPage: React.FC = () => {
  return (
    <div className="pb-24">
      <header className="py-24 text-center px-6">
        <span className="uppercase tracking-[0.4em] text-[10px] text-[#5B7A8C] mb-6 block font-semibold">Our Story</span>
        <h1 className="text-5xl md:text-7xl font-serif italic text-[#4A5D4E] mb-8">Who We Are</h1>
        <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto italic leading-relaxed">
          Highly Aware Wellness Centre is more than a clinic—it is a sanctuary built on the belief that everyone deserves a space to be truly understood.
        </p>
      </header>

      <Section type="fade">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-serif text-[#2D3436] mb-8">Our Philosophy</h2>
            <div className="space-y-6 text-gray-600 font-light leading-relaxed text-lg">
              <p>
                Highly Aware Wellness Centre was founded on a simple yet profound realization: that mental health is not merely the absence of distress, but the presence of consciousness and balance.
              </p>
              <p>
                Located in the heart of Kiambu, we set out to create a space that feels distinctly different from a clinical setting. We believe the environment plays a crucial role in healing, which is why our center is designed as a peaceful retreat from the bustling world.
              </p>
            </div>
          </div>
          <div className="order-1 md:order-2 rounded-[3rem] overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?auto=format&fit=crop&q=80&w=800" 
              alt="Peaceful Kenyan landscape reflecting our local roots" 
              className="w-full aspect-square object-cover hover:scale-105 transition-transform duration-[3s]"
            />
          </div>
        </div>
      </Section>

      <Section type="scale" className="bg-[#F7F9F7] rounded-[4rem] my-24 py-20 px-12">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif text-[#4A5D4E] mb-12 italic">Vision & Mission</h2>
          <div className="grid md:grid-cols-2 gap-16 text-left">
            <div className="p-8 bg-white/50 rounded-3xl border border-white/80">
              <h4 className="font-serif text-2xl text-[#2D3436] mb-6 italic">Our Vision</h4>
              <p className="text-gray-600 font-light leading-relaxed">
                To become the premier destination for holistic mental health in Central Kenya, where the community finds solace, clarity, and the tools to thrive in an ever-changing world.
              </p>
            </div>
            <div className="p-8 bg-white/50 rounded-3xl border border-white/80">
              <h4 className="font-serif text-2xl text-[#2D3436] mb-6 italic">Our Mission</h4>
              <p className="text-gray-600 font-light leading-relaxed">
                We promote holistic well-being, mindfulness, and emotional balance in a compassionate environment. We provide evidence-based counseling that respects the cultural context of Kiambu.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section type="fade" className="text-center py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-serif text-[#2D3436] mb-12 italic">Rooted in Kiambu</h2>
          <p className="text-xl text-gray-500 font-light leading-relaxed mb-16 italic">
            "Since opening our doors at Bishop Njenga Complex, we have had the privilege of supporting over 500 individuals in the Kiambu community. Our 25+ glowing reviews are a testament to our commitment to every person who walks through our doors."
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-4 group">
              <div className="text-[#5B7A8C]/20 text-6xl font-serif italic group-hover:text-[#5B7A8C]/40 transition-colors">01.</div>
              <h4 className="font-serif text-xl font-medium">Radical Empathy</h4>
              <p className="text-gray-400 text-sm leading-relaxed">We believe that true healing begins when you feel seen, heard, and deeply understood without judgment.</p>
            </div>
            <div className="space-y-4 group">
              <div className="text-[#5B7A8C]/20 text-6xl font-serif italic group-hover:text-[#5B7A8C]/40 transition-colors">02.</div>
              <h4 className="font-serif text-xl font-medium">Integrity</h4>
              <p className="text-gray-400 text-sm leading-relaxed">Honesty and transparency are the bedrocks of our professional relationship with every single client.</p>
            </div>
            <div className="space-y-4 group">
              <div className="text-[#5B7A8C]/20 text-6xl font-serif italic group-hover:text-[#5B7A8C]/40 transition-colors">03.</div>
              <h4 className="font-serif text-xl font-medium">Lifelong Growth</h4>
              <p className="text-gray-400 text-sm leading-relaxed">We don't just solve immediate problems; we help you plant the seeds for lifelong personal evolution.</p>
            </div>
          </div>
        </div>
      </Section>

      <div className="max-w-4xl mx-auto px-6 mb-32">
        <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      </div>
    </div>
  );
};

export default AboutPage;
