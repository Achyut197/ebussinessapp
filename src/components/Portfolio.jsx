import React, { useState } from 'react'; 
import portfolio1 from '../assets/img/portfolio/portfolio-1.webp';
import portfolio2 from '../assets/img/portfolio/portfolio-2.webp';
import portfolio3 from '../assets/img/portfolio/portfolio-3.webp';
import portfolio4 from '../assets/img/portfolio/portfolio-4.webp';
import portfolio5 from '../assets/img/portfolio/portfolio-5.webp';
import portfolio6 from '../assets/img/portfolio/portfolio-6.webp';
import portfolio7 from '../assets/img/portfolio/portfolio-7.webp';
import portfolio8 from '../assets/img/portfolio/portfolio-8.webp';
import portfolio9 from '../assets/img/portfolio/portfolio-9.webp';
import portfolio10 from '../assets/img/portfolio/portfolio-10.webp';
import portfolio11 from '../assets/img/portfolio/portfolio-11.webp';
import portfolio12 from '../assets/img/portfolio/portfolio-12.webp';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const portfolioItems = [
    { id: 1, image: portfolio1, title: 'Creative Branding', category: 'Branding', description: 'Modern brand identity design' },
    { id: 2, image: portfolio2, title: 'Mobile Application', category: 'App', description: 'iOS and Android development' },
    { id: 3, image: portfolio3, title: 'Product Design', category: 'Product', description: 'Innovative product solutions' },
    { id: 4, image: portfolio4, title: 'Digital Marketing', category: 'Branding', description: 'Strategic marketing campaigns' },
    { id: 5, image: portfolio5, title: 'Web Application', category: 'App', description: 'Full-stack web development' },
    { id: 6, image: portfolio6, title: 'Product Launch', category: 'Product', description: 'Successful product launches' },
    { id: 7, image: portfolio7, title: 'Brand Strategy', category: 'Branding', description: 'Comprehensive brand strategy' },
    { id: 8, image: portfolio8, title: 'E-commerce Platform', category: 'App', description: 'Online shopping solutions' },
    { id: 9, image: portfolio9, title: 'Product Innovation', category: 'Product', description: 'Cutting-edge product design' },
    { id: 10, image: portfolio10, title: 'Marketing Book', category: 'Books', description: 'Digital marketing guide' },
    { id: 11, image: portfolio11, title: 'Design System', category: 'Branding', description: 'Comprehensive design systems' },
    { id: 12, image: portfolio12, title: 'Business Strategy', category: 'Books', description: 'Strategic business planning' }
  ];

  const filteredItems = activeFilter === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section id="portfolio" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4 sm:mb-6">
            Our Portfolio
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
            Explore our diverse portfolio of successful projects that showcase our expertise 
            in design, development, and digital innovation across various industries.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-8 lg:mb-12 animate-fade-in-up">
          {['All', 'Branding', 'App', 'Product', 'Books'].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-3 sm:px-4 lg:px-6 py-1.5 sm:py-2 lg:py-3 rounded-lg font-medium text-xs sm:text-sm lg:text-base transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 animate-fade-in-up">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105 group flex flex-col h-full"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-40 sm:h-48 lg:h-44 xl:h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-2 sm:top-3 left-2 sm:left-3 bg-blue-600 text-white px-2 sm:px-3 py-1 rounded text-xs sm:text-sm font-semibold">
                  {item.category}
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="text-center text-white p-4">
                    <h3 className="text-base sm:text-lg font-bold mb-2">{item.title}</h3>
                    <p className="text-xs sm:text-sm opacity-90">{item.description}</p>
                  </div>
                </div>
              </div>

              {/* Content Area */}
              <div className="p-4 sm:p-5 lg:p-6 flex flex-col flex-1 justify-between">
                <div className="mb-2">
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 line-clamp-1">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-600 line-clamp-2">{item.description}</p>
                </div>
                <button className="mt-2 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-medium text-sm transition-all duration-300 transform hover:scale-105">
                  View Project
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 sm:mt-16 animate-fade-in-up">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-12 text-white">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6">
              Ready to Start Your Project?
            </h3>
            <p className="text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto opacity-90">
              Let's collaborate to bring your vision to life. Our team is ready to create 
              something extraordinary for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <button className="bg-white text-blue-600 hover:bg-gray-100 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 transform hover:scale-105">
                Start Project
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 transform hover:scale-105">
                View More Work
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
