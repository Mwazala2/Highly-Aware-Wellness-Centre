
import React from 'react';
import Section from '../components/Section';

const blogPosts = [
  {
    title: "The Art of Mindful Breathing in Busy Kiambu",
    date: "May 15, 2024",
    category: "Mindfulness",
    excerpt: "In the heart of our bustling town, finding a moment of silence can feel impossible. Discover how to reclaim your peace through simple breathwork techniques you can use anywhere.",
    image: "https://images.unsplash.com/photo-1596208035687-353d262d141e?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Supporting Your Teen: A Guide to Emotional Intelligence",
    date: "April 28, 2024",
    category: "Parenting",
    excerpt: "Adolescence is a turbulent time. Learn how to foster an environment of open communication and emotional security for your teenager during their most formative years.",
    image: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Finding Balance: Why Holistic Wellness Matters",
    date: "March 10, 2024",
    category: "Wellness",
    excerpt: "True health isn't just about the body; it's about the alignment of mind, spirit, and emotion. We explore the pillars of holistic well-being and how to start your journey.",
    image: "https://images.unsplash.com/photo-1545208393-216c7ad81685?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Communication in Relationships: Beyond the Words",
    date: "February 14, 2024",
    category: "Relationships",
    excerpt: "Most conflicts arise not from what we say, but from what is left unheard. Explore the nuances of deep listening and how to strengthen your bond with your partner.",
    image: "https://images.unsplash.com/photo-1524311894761-0428585489be?auto=format&fit=crop&q=80&w=800"
  }
];

const BlogPage: React.FC = () => {
  return (
    <div className="pb-24">
      <header className="py-24 bg-[#F7F9F7] text-center px-6">
        <h1 className="text-5xl md:text-7xl font-serif italic text-[#4A5D4E] mb-6">Our Blog</h1>
        <p className="text-xl text-gray-500 font-light max-w-2xl mx-auto italic">
          Insights, tips, and reflections on the journey to inner clarity.
        </p>
      </header>

      <Section className="mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {blogPosts.map((post, index) => (
            <article 
              key={index} 
              className="stagger-item group cursor-pointer" 
              style={{ transitionDelay: `${index * 0.15 + 0.2}s` }}
            >
              <div className="rounded-[2rem] overflow-hidden mb-8 shadow-sm group-hover:shadow-xl transition-all duration-500 aspect-[16/10]">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s]" 
                />
              </div>
              <div className="px-2">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#5B7A8C] bg-[#5B7A8C]/5 px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-400 font-light">{post.date}</span>
                </div>
                <h2 className="text-2xl font-serif text-[#2D3436] mb-4 group-hover:text-[#4A5D4E] transition-colors leading-tight">
                  {post.title}
                </h2>
                <p className="text-gray-500 text-sm font-light leading-relaxed line-clamp-3 mb-6">
                  {post.excerpt}
                </p>
                <button className="text-[10px] uppercase tracking-widest font-bold text-[#4A5D4E] border-b border-[#4A5D4E] pb-1 hover:opacity-60 transition-opacity">
                  Read Article
                </button>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section className="mt-24 text-center">
        <div className="bg-[#F7F9F7] rounded-[3rem] py-16 px-8 border border-gray-50">
          <h3 className="text-2xl font-serif text-[#4A5D4E] mb-4 italic">Subscribe to our newsletter</h3>
          <p className="text-gray-500 font-light mb-8 max-w-md mx-auto">
            Receive monthly mindfulness tips and wellness insights delivered directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow bg-white border border-gray-100 rounded-full px-6 py-3 text-sm focus:ring-1 focus:ring-[#4A5D4E] outline-none"
            />
            <button className="bg-[#4A5D4E] text-white px-8 py-3 rounded-full text-sm font-serif italic hover:bg-[#3d4d40] transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default BlogPage;
