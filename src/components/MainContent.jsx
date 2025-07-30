import React from 'react';
import teamMeetingImage from '../assets/img/about/about-8.webp';

const MainContent = () => {
  return (
    <section id="main-content" className="bg-gradient-to-br from-gray-50 to-blue-50 py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
        {/* Hero Section */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="animate-fade-in-up animate-delay-100">
            <span className="inline-block bg-blue-600 text-white px-3 py-2 sm:px-4 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
              Welcome to eBusiness
            </span>
          </div>
          
          <div className="animate-fade-in-up animate-delay-200">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              Strategic Solutions for Business Growth
            </h1>
          </div>
          
          <div className="animate-fade-in-up animate-delay-300">
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto px-4">
              We provide comprehensive business solutions that drive growth, optimize operations, and maximize your return on investment. Our strategic approach helps businesses scale efficiently and sustainably.
            </p>
          </div>
          
          <div className="animate-fade-in-up animate-delay-400 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105">
              Get a Free Consultation
            </button>
            <button className="bg-white hover:bg-gray-50 text-blue-600 border-2 border-blue-600 px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105">
              Our Services
            </button>
          </div>
        </div>

        {/* Content & Image Section */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center mb-12 sm:mb-16">
          <div className="animate-fade-in-left animate-delay-500 order-2 lg:order-1">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              Transform Your Business with Innovative Solutions
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8">
              Our team of experts specializes in delivering cutting-edge business solutions that drive measurable results. We combine industry expertise with innovative technology to help your business thrive in today's competitive landscape.
            </p>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-center text-sm sm:text-base text-gray-700">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 sm:mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Strategic Planning & Implementation
              </li>
              <li className="flex items-center text-sm sm:text-base text-gray-700">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 sm:mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Digital Transformation Solutions
              </li>
              <li className="flex items-center text-sm sm:text-base text-gray-700">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 sm:mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Performance Optimization
              </li>
            </ul>
          </div>
          
          <div className="animate-fade-in-right animate-delay-600 relative order-1 lg:order-2 mb-8 lg:mb-0">
            <div className="relative">
              <img 
                src={teamMeetingImage} 
                alt="Team collaboration meeting in modern office" 
                className="w-full h-auto rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl"
              />
              <div className="absolute -bottom-3 -right-3 sm:-bottom-6 sm:-right-6 bg-white rounded-lg shadow-lg p-2 sm:p-4">
                <div className="text-center">
                  <div className="text-lg sm:text-xl md:text-2xl font-bold text-blue-600">15+</div>
                  <div className="text-xs sm:text-sm text-gray-600">Years Experience</div>
                </div>
              </div>
              <div className="absolute -top-3 -left-3 sm:-top-6 sm:-left-6 bg-blue-600 text-white rounded-lg shadow-lg p-2 sm:p-4">
                <div className="text-center">
                  <div className="text-xs sm:text-sm font-semibold">Expert Team</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="animate-fade-in-scale animate-delay-700">
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl p-6 sm:p-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center">
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1 sm:mb-2">15+</div>
                <div className="text-sm sm:text-base text-gray-600">Years Experience</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1 sm:mb-2">500+</div>
                <div className="text-sm sm:text-base text-gray-600">Clients Worldwide</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1 sm:mb-2">98%</div>
                <div className="text-sm sm:text-base text-gray-600">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainContent; 