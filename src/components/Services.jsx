import React from 'react';
import services1 from '../assets/img/services/services-1.webp';
import services2 from '../assets/img/services/services-2.webp';
import services3 from '../assets/img/services/services-3.webp';
import services4 from '../assets/img/services/services-4.webp';

const Services = () => {
  const smoothScrollToMainContent = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="animate-fade-in-up animate-delay-100">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Services
            </h2>
          </div>
          <div className="animate-fade-in-up animate-delay-200">
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              We offer comprehensive business solutions designed to drive growth, enhance efficiency, and maximize your return on investment. Our expert team delivers innovative strategies tailored to your unique business needs.
            </p>
          </div>
        </div>

        {/* Main Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20">
          {/* Service Card 1 */}
          <div className="animate-fade-in-up animate-delay-300 p-4 sm:p-6 rounded-lg hover:shadow-lg transition-all duration-300 flex flex-col h-full">
            <div className="text-blue-600 mb-3 sm:mb-4">
              <svg className="w-10 h-10 sm:w-12 sm:h-12" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Creative Branding</h3>
            <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 flex-grow">
              Develop a distinctive brand identity that resonates with your target audience and sets you apart from competitors.
            </p>
            <ul className="space-y-1 sm:space-y-2 mb-3 sm:mb-4">
              <li className="flex items-center text-xs sm:text-sm text-gray-600">
                <svg className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mr-1 sm:mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Logo & Visual Identity
              </li>
              <li className="flex items-center text-xs sm:text-sm text-gray-600">
                <svg className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mr-1 sm:mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Brand Strategy
              </li>
              <li className="flex items-center text-xs sm:text-sm text-gray-600">
                <svg className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mr-1 sm:mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Marketing Materials
              </li>
            </ul>
            <button className="text-blue-600 hover:text-blue-700 font-semibold flex items-center mt-auto text-sm sm:text-base">
              Learn More
              <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Service Card 2 */}
          <div className="animate-fade-in-up animate-delay-400 p-4 sm:p-6 rounded-lg hover:shadow-lg transition-all duration-300 flex flex-col h-full">
            <div className="text-blue-600 mb-3 sm:mb-4">
              <svg className="w-10 h-10 sm:w-12 sm:h-12" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Design Systems</h3>
            <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 flex-grow">
              Create scalable design systems that ensure consistency across all your digital platforms and marketing materials.
            </p>
            <ul className="space-y-1 sm:space-y-2 mb-3 sm:mb-4">
              <li className="flex items-center text-xs sm:text-sm text-gray-600">
                <svg className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mr-1 sm:mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                UI/UX Design
              </li>
              <li className="flex items-center text-xs sm:text-sm text-gray-600">
                <svg className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mr-1 sm:mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Component Libraries
              </li>
              <li className="flex items-center text-xs sm:text-sm text-gray-600">
                <svg className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mr-1 sm:mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Style Guides
              </li>
            </ul>
            <button className="text-blue-600 hover:text-blue-700 font-semibold flex items-center mt-auto text-sm sm:text-base">
              Learn More
              <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Service Card 3 */}
          <div className="animate-fade-in-up animate-delay-500 p-4 sm:p-6 rounded-lg hover:shadow-lg transition-all duration-300 flex flex-col h-full">
            <div className="text-blue-600 mb-3 sm:mb-4">
              <svg className="w-10 h-10 sm:w-12 sm:h-12" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Performance Optimization</h3>
            <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 flex-grow">
              Optimize your digital presence for maximum speed, efficiency, and user experience across all platforms.
            </p>
            <ul className="space-y-1 sm:space-y-2 mb-3 sm:mb-4">
              <li className="flex items-center text-xs sm:text-sm text-gray-600">
                <svg className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mr-1 sm:mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Speed Optimization
              </li>
              <li className="flex items-center text-xs sm:text-sm text-gray-600">
                <svg className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mr-1 sm:mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                SEO Enhancement
              </li>
              <li className="flex items-center text-xs sm:text-sm text-gray-600">
                <svg className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mr-1 sm:mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Analytics & Monitoring
              </li>
            </ul>
            <button className="text-blue-600 hover:text-blue-700 font-semibold flex items-center mt-auto text-sm sm:text-base">
              Learn More
              <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Service Card 4 */}
          <div className="animate-fade-in-up animate-delay-600 p-4 sm:p-6 rounded-lg hover:shadow-lg transition-all duration-300 flex flex-col h-full">
            <div className="text-blue-600 mb-3 sm:mb-4">
              <svg className="w-10 h-10 sm:w-12 sm:h-12" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Digital Marketing</h3>
            <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 flex-grow">
              Comprehensive digital marketing strategies to increase your online presence and drive business growth.
            </p>
            <ul className="space-y-1 sm:space-y-2 mb-3 sm:mb-4">
              <li className="flex items-center text-xs sm:text-sm text-gray-600">
                <svg className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mr-1 sm:mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Social Media Marketing
              </li>
              <li className="flex items-center text-xs sm:text-sm text-gray-600">
                <svg className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mr-1 sm:mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Content Strategy
              </li>
              <li className="flex items-center text-xs sm:text-sm text-gray-600">
                <svg className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mr-1 sm:mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Email Campaigns
              </li>
            </ul>
            <button className="text-blue-600 hover:text-blue-700 font-semibold flex items-center mt-auto text-sm sm:text-base">
              Learn More
              <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Service Card 5 */}
          <div className="animate-fade-in-up animate-delay-700 p-4 sm:p-6 rounded-lg hover:shadow-lg transition-all duration-300 flex flex-col h-full">
            <div className="text-blue-600 mb-3 sm:mb-4">
              <svg className="w-10 h-10 sm:w-12 sm:h-12" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Web Development</h3>
            <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 flex-grow">
              Custom web development solutions tailored to your business needs and user experience requirements.
            </p>
            <ul className="space-y-1 sm:space-y-2 mb-3 sm:mb-4">
              <li className="flex items-center text-xs sm:text-sm text-gray-600">
                <svg className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mr-1 sm:mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Custom Websites
              </li>
              <li className="flex items-center text-xs sm:text-sm text-gray-600">
                <svg className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mr-1 sm:mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                E-commerce Solutions
              </li>
              <li className="flex items-center text-xs sm:text-sm text-gray-600">
                <svg className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mr-1 sm:mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                API Integration
              </li>
            </ul>
            <button className="text-blue-600 hover:text-blue-700 font-semibold flex items-center mt-auto text-sm sm:text-base">
              Learn More
              <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Service Card 6 */}
          <div className="animate-fade-in-up animate-delay-800 p-4 sm:p-6 rounded-lg hover:shadow-lg transition-all duration-300 flex flex-col h-full">
            <div className="text-blue-600 mb-3 sm:mb-4">
              <svg className="w-10 h-10 sm:w-12 sm:h-12" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Mobile Development</h3>
            <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 flex-grow">
              Native and cross-platform mobile applications that deliver exceptional user experiences.
            </p>
            <ul className="space-y-1 sm:space-y-2 mb-3 sm:mb-4">
              <li className="flex items-center text-xs sm:text-sm text-gray-600">
                <svg className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mr-1 sm:mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                iOS Development
              </li>
              <li className="flex items-center text-xs sm:text-sm text-gray-600">
                <svg className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mr-1 sm:mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Android Development
              </li>
              <li className="flex items-center text-xs sm:text-sm text-gray-600">
                <svg className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mr-1 sm:mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Cross-Platform Apps
              </li>
            </ul>
            <button className="text-blue-600 hover:text-blue-700 font-semibold flex items-center mt-auto text-sm sm:text-base">
              Learn More
              <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center animate-fade-in-up animate-delay-900">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-6 sm:p-8 lg:p-12 text-white">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6">
              Ready to Transform Your Business?
            </h3>
            <p className="text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto opacity-90">
              Let's discuss how our comprehensive services can help you achieve your business goals and drive sustainable growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <button 
                onClick={smoothScrollToMainContent}
                className="bg-white text-blue-600 hover:bg-gray-100 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 transform hover:scale-105">
                View Our Portfolio
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services; 