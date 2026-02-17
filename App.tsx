
import React, { useState, useEffect } from 'react';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import ChatWidget from './components/ChatWidget';

type Page = 'home' | 'about' | 'services' | 'blog';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  // Simple scroll-to-top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <HomePage onNavigate={setCurrentPage} />;
      case 'about': return <AboutPage />;
      case 'services': return <ServicesPage />;
      case 'blog': return <BlogPage />;
      default: return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFCFB] text-[#2D3436] flex flex-col">
      {/* Navigation Bar - Reordered for professional flow */}
      <nav className="fixed top-0 w-full z-50 bg-[#FDFCFB]/95 backdrop-blur-sm px-6 py-6 border-b border-gray-100 flex justify-between items-center">
        <button 
          onClick={() => setCurrentPage('home')} 
          className="font-serif italic text-xl text-[#4A5D4E] font-semibold hover:opacity-80 transition-opacity"
        >
          HA Wellness
        </button>
        <div className="flex gap-4 md:gap-8 text-[10px] md:text-xs uppercase tracking-widest font-medium text-gray-400">
          <button 
            onClick={() => setCurrentPage('home')} 
            className={`${currentPage === 'home' ? 'text-[#4A5D4E] font-bold' : ''} hover:text-[#4A5D4E] transition-colors`}
          >
            Home
          </button>
          <button 
            onClick={() => setCurrentPage('about')} 
            className={`${currentPage === 'about' ? 'text-[#4A5D4E] font-bold' : ''} hover:text-[#4A5D4E] transition-colors`}
          >
            Who We Are
          </button>
          <button 
            onClick={() => setCurrentPage('services')} 
            className={`${currentPage === 'services' ? 'text-[#4A5D4E] font-bold' : ''} hover:text-[#4A5D4E] transition-colors`}
          >
            Services
          </button>
          <button 
            onClick={() => setCurrentPage('blog')} 
            className={`${currentPage === 'blog' ? 'text-[#4A5D4E] font-bold' : ''} hover:text-[#4A5D4E] transition-colors`}
          >
            Blog
          </button>
          <a href="tel:0703149876" className="text-[#5B7A8C] hidden lg:block border border-[#5B7A8C]/20 px-4 py-1 rounded-full hover:bg-[#5B7A8C]/5 transition-colors">0703 149876</a>
        </div>
      </nav>

      <main className="flex-grow pt-20">
        {renderPage()}
      </main>

      {/* Consistent Footer */}
      <footer className="bg-white py-20 px-6 border-t border-gray-50 text-center mt-20">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-12 mb-20 text-left">
            <div className="max-w-xs text-center md:text-left">
              <p className="font-serif italic text-3xl text-[#4A5D4E] mb-4">HA Wellness</p>
              <p className="text-gray-400 font-light text-sm leading-relaxed">
                Promoting holistic well-being, mindfulness, and emotional balance in a compassionate environment since our founding in Kiambu.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 md:gap-20">
              <div>
                <h4 className="uppercase tracking-[0.2em] text-[10px] font-bold mb-6 text-gray-300">Contact Us</h4>
                <div className="space-y-4 text-sm text-gray-500 font-light">
                  <p>0703 149876</p>
                  <p>Bishop Njenga Complex, Kiambu</p>
                  <p>2nd Floor, Opp. Co-operative Bank</p>
                </div>
              </div>
              <div>
                <h4 className="uppercase tracking-[0.2em] text-[10px] font-bold mb-6 text-gray-300">Quick Links</h4>
                <div className="flex flex-col gap-4 text-sm text-gray-500 font-light">
                  <button onClick={() => setCurrentPage('about')} className="hover:text-[#4A5D4E] text-left">The Team</button>
                  <button onClick={() => setCurrentPage('services')} className="hover:text-[#4A5D4E] text-left">Our Therapy</button>
                  <button onClick={() => setCurrentPage('blog')} className="hover:text-[#4A5D4E] text-left">Wellness Tips</button>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-12 border-t border-gray-50 text-[10px] uppercase tracking-[0.4em] text-gray-300">
            &copy; {new Date().getFullYear()} Highly Aware Wellness Centre. Established in Kiambu Town.
          </div>
        </div>
      </footer>

      <ChatWidget />
    </div>
  );
};

export default App;
