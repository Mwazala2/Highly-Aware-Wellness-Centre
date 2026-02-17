
import React, { useEffect, useRef, useState } from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  type?: 'fade' | 'scale';
}

const Section: React.FC<SectionProps> = ({ children, className = "", id, type = 'fade' }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once visible, we can stop observing
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const animationClass = type === 'scale' ? 'reveal-scale' : 'reveal';

  return (
    <section 
      id={id} 
      ref={sectionRef}
      className={`py-24 px-6 md:px-12 max-w-4xl mx-auto ${animationClass} ${isVisible ? 'active' : ''} ${className}`}
    >
      {children}
    </section>
  );
};

export default Section;
