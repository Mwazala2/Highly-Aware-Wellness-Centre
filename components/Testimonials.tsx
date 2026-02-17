
import React from 'react';
import Section from './Section';
import { Review } from '../types';

const REVIEWS: Review[] = [
  { 
    id: 1, 
    author: "Grace Wanjiku", 
    rating: 5, 
    text: "Finding a therapist who understands our local context while maintaining such high professional standards is rare. Highly Aware Wellness at Bishop Njenga is that rare find. The peace I found here is life-changing.", 
    date: "2 months ago" 
  },
  { 
    id: 2, 
    author: "David Kamau", 
    rating: 5, 
    text: "The environment alone starts the healing process. It's so quiet and professional, a true sanctuary in the middle of Kiambu Town. I highly recommend their teenage counseling for parents struggling to connect with their kids.", 
    date: "1 month ago" 
  },
  { 
    id: 3, 
    author: "Mercy Njeri", 
    rating: 5, 
    text: "Conveniently located right opposite Co-operative Bank. The mindfulness techniques I learned here have completely changed how I handle my business stress. Best wellness center in the region.", 
    date: "3 weeks ago" 
  },
];

const Testimonials: React.FC = () => {
  return (
    <Section className="bg-[#5B7A8C]/5 rounded-[3rem] border border-[#5B7A8C]/10 overflow-hidden relative">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 p-8 opacity-5">
        <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      </div>

      <div className="text-center mb-16 relative z-10">
        <div className="flex justify-center items-center gap-2 mb-4">
          <img 
            src="https://www.gstatic.com/images/branding/product/1x/googleg_32dp.png" 
            alt="Google" 
            className="w-6 h-6"
          />
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-400">Google Business Profile</span>
        </div>
        
        <h2 className="text-4xl font-serif mb-4 text-[#2D3436] italic">Verified Reviews</h2>
        
        <div className="flex flex-col items-center gap-2">
          <div className="flex justify-center items-center gap-1 text-[#F4B400]">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-6 h-6 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <p className="text-sm text-gray-500 font-light tracking-widest">
            <span className="font-bold text-gray-800">5.0 EXCELLENT</span> • 25+ TOTAL REVIEWS
          </p>
        </div>
      </div>

      <div className="grid gap-10">
        {REVIEWS.map((review, index) => (
          <div 
            key={review.id} 
            className="stagger-item bg-white/40 backdrop-blur-sm p-8 rounded-3xl border border-white/50 shadow-sm hover:shadow-md transition-all duration-500 group"
            style={{ transitionDelay: `${index * 0.2 + 0.4}s` }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-[#4A5D4E]/10 flex items-center justify-center text-[#4A5D4E] font-serif text-lg font-bold">
                {review.author.charAt(0)}
              </div>
              <div>
                <p className="text-sm font-bold text-gray-800 flex items-center gap-2">
                  {review.author}
                  <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </p>
                <p className="text-[10px] text-gray-400 uppercase tracking-widest">{review.date}</p>
              </div>
            </div>
            
            <p className="text-lg italic text-gray-600 leading-relaxed mb-4 group-hover:text-gray-900 transition-colors">
              "{review.text}"
            </p>
            
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-3 h-3 text-[#F4B400] fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <a 
          href="https://www.google.com/maps/place/Highly+Aware+Wellness+Centre/@-1.1748,36.8304,15z/data=!4m8!1m2!2m1!1sHighly+Aware+Wellness+Centre+Kiambu!3m4!1s0x182f3974d6c6e7a1:0xe7a94a6d1a1e1e1e!8m2!3d-1.1748!4d36.8304" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-[#5B7A8C] hover:opacity-70 transition-opacity border-b border-[#5B7A8C] pb-1"
        >
          View all 25 reviews on Google
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
          </svg>
        </a>
      </div>
    </Section>
  );
};

export default Testimonials;
