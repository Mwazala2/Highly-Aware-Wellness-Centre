
import React from 'react';
import Section from '../components/Section';

const services = [
  {
    title: "Individual Therapy",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800",
    description: "A one-on-one sanctuary to navigate anxiety, depression, or personal transitions. We focus on uncovering your inner strengths and building practical coping mechanisms for life's challenges.",
    focus: ["Anxiety & Stress", "Personal Growth", "Trauma Recovery", "Grief & Loss"]
  },
  {
    title: "Teenage Counselling",
    image: "https://images.unsplash.com/photo-1484981138541-3d074aa97716?auto=format&fit=crop&q=80&w=800",
    description: "Adolescence is a time of profound change. We provide a safe, confidential space for teens to navigate identity, social pressures, academic stress, and emotional regulation.",
    focus: ["Academic Pressure", "Social Anxiety", "Identity Formation", "Family Dynamics"]
  },
  {
    title: "Family Therapy",
    image: "https://images.unsplash.com/photo-1529209076408-5a115ec9f1c0?auto=format&fit=crop&q=80&w=800",
    description: "Healing the unit as a whole. We facilitate healthy communication and conflict resolution patterns within families to foster understanding and deeper bonds.",
    focus: ["Communication Gaps", "Parenting Support", "Intergenerational Conflict", "Life Transitions"]
  },
  {
    title: "Relationship Counselling",
    image: "https://images.unsplash.com/photo-1524311894761-0428585489be?auto=format&fit=crop&q=80&w=800",
    description: "Whether you're seeking to strengthen a bond or navigate difficult waters, our relationship counselling helps partners build intimacy, trust, and effective communication.",
    focus: ["Intimacy Issues", "Conflict Resolution", "Pre-marital Support", "Trust Rebuilding"]
  }
];

const ServicesPage: React.FC = () => {
  return (
    <div className="pb-24">
      <header className="py-24 bg-[#F7F9F7] text-center px-6">
        <span className="uppercase tracking-[0.4em] text-[10px] text-[#5B7A8C] mb-6 block font-semibold">Specialized Care</span>
        <h1 className="text-5xl md:text-7xl font-serif italic text-[#4A5D4E] mb-6">Our Services</h1>
        <p className="text-xl text-gray-500 font-light max-w-2xl mx-auto leading-relaxed">
          Tailored therapeutic approaches designed to meet the unique needs of the Kiambu community.
        </p>
      </header>

      <div className="max-w-6xl mx-auto px-6 mt-20 space-y-32">
        {services.map((service, index) => (
          <div 
            key={index} 
            className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 md:gap-24`}
          >
            <div className="w-full md:w-1/2 reveal-scale active">
              <div className="rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[4/5] md:aspect-square group">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[3s]" />
              </div>
            </div>
            <div className="w-full md:w-1/2 reveal active">
              <h2 className="text-4xl font-serif text-[#4A5D4E] mb-6 italic">{service.title}</h2>
              <p className="text-gray-600 text-lg font-light leading-relaxed mb-8">
                {service.description}
              </p>
              <div className="space-y-3">
                <h4 className="uppercase tracking-widest text-[10px] font-bold text-gray-300 mb-4">Core Areas of Focus</h4>
                <div className="flex flex-wrap gap-2">
                  {service.focus.map((item, i) => (
                    <span key={i} className="bg-white border border-gray-100 text-gray-500 px-5 py-2 rounded-full text-xs font-medium">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Section className="my-32">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif italic text-[#2D3436]">The Therapeutic Journey</h2>
          <p className="text-gray-400 font-light mt-4">What to expect when you start your journey with us.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-12">
          <div className="text-center p-8 bg-white rounded-3xl border border-gray-50 shadow-sm">
            <div className="w-12 h-12 bg-[#F7F9F7] rounded-full flex items-center justify-center mx-auto mb-6 text-[#4A5D4E] font-serif italic text-xl">1</div>
            <h4 className="font-serif text-xl mb-4">Connection</h4>
            <p className="text-gray-500 text-sm font-light">The first step is a consultation where we build rapport and ensure you feel safe and heard.</p>
          </div>
          <div className="text-center p-8 bg-white rounded-3xl border border-gray-50 shadow-sm">
            <div className="w-12 h-12 bg-[#F7F9F7] rounded-full flex items-center justify-center mx-auto mb-6 text-[#4A5D4E] font-serif italic text-xl">2</div>
            <h4 className="font-serif text-xl mb-4">Discovery</h4>
            <p className="text-gray-500 text-sm font-light">Together, we identify patterns and uncover the root causes of your current challenges.</p>
          </div>
          <div className="text-center p-8 bg-white rounded-3xl border border-gray-50 shadow-sm">
            <div className="w-12 h-12 bg-[#F7F9F7] rounded-full flex items-center justify-center mx-auto mb-6 text-[#4A5D4E] font-serif italic text-xl">3</div>
            <h4 className="font-serif text-xl mb-4">Empowerment</h4>
            <p className="text-gray-500 text-sm font-light">We equip you with the practical tools and mindset needed to achieve lasting emotional balance.</p>
          </div>
        </div>
      </Section>

      <Section className="mt-32 text-center bg-[#4A5D4E] text-white rounded-[4rem] py-24 shadow-2xl overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]"></div>
        <div className="relative z-10">
          <h2 className="text-4xl font-serif italic mb-8">Ready to begin your journey?</h2>
          <p className="text-lg text-white/80 font-light mb-12 max-w-xl mx-auto leading-relaxed">
            We offer a complimentary 15-minute introductory call to discuss your needs and find the right path forward together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:0703149876" 
              className="inline-block bg-white text-[#4A5D4E] px-10 py-4 rounded-full font-serif italic text-lg shadow-lg hover:scale-105 transition-transform"
            >
              Call Us: 0703 149876
            </a>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default ServicesPage;
