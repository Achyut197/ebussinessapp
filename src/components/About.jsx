import React from 'react';
import person1 from '../assets/img/person/person-m-2.webp';
import aboutImage from '../assets/img/about/about-1.webp';

const About = () => {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
        {/* About Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4 sm:mb-6">
            About Our Company
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
            We are a team of passionate professionals dedicated to delivering innovative solutions 
            that drive business growth and success. With years of experience and cutting-edge expertise, 
            we help businesses transform their digital presence and achieve their goals.
          </p>
        </div>

        {/* About Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left Side - Content */}
          <div className="animate-fade-in-left">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
              Transforming Businesses Through Innovation
            </h3>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
              Our mission is to empower businesses with cutting-edge technology solutions that drive 
              growth, efficiency, and competitive advantage. We combine deep industry knowledge with 
              innovative approaches to deliver exceptional results for our clients.
            </p>
            
            {/* Features List */}
            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              <div className="flex items-start space-x-2 sm:space-x-3 group hover:transform hover:scale-105 transition-all duration-300">
                <div className="flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 bg-blue-600 rounded-full flex items-center justify-center mt-1 group-hover:bg-blue-700 transition-colors duration-300">
                  <svg className="w-2 h-2 sm:w-3 sm:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-sm sm:text-base text-gray-700 group-hover:text-blue-600 transition-colors duration-300">Custom Software Development</span>
              </div>
              
              <div className="flex items-start space-x-2 sm:space-x-3 group hover:transform hover:scale-105 transition-all duration-300">
                <div className="flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 bg-blue-600 rounded-full flex items-center justify-center mt-1 group-hover:bg-blue-700 transition-colors duration-300">
                  <svg className="w-2 h-2 sm:w-3 sm:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-sm sm:text-base text-gray-700 group-hover:text-blue-600 transition-colors duration-300">Web & Mobile Applications</span>
              </div>
              
              <div className="flex items-start space-x-2 sm:space-x-3 group hover:transform hover:scale-105 transition-all duration-300">
                <div className="flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 bg-blue-600 rounded-full flex items-center justify-center mt-1 group-hover:bg-blue-700 transition-colors duration-300">
                  <svg className="w-2 h-2 sm:w-3 sm:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-sm sm:text-base text-gray-700 group-hover:text-blue-600 transition-colors duration-300">Mobile App Solutions</span>
              </div>
              
              <div className="flex items-start space-x-2 sm:space-x-3 group hover:transform hover:scale-105 transition-all duration-300">
                <div className="flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 bg-blue-600 rounded-full flex items-center justify-center mt-1 group-hover:bg-blue-700 transition-colors duration-300">
                  <svg className="w-2 h-2 sm:w-3 sm:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-sm sm:text-base text-gray-700 group-hover:text-blue-600 transition-colors duration-300">Digital Marketing Strategy</span>
              </div>
              
              <div className="flex items-start space-x-2 sm:space-x-3 group hover:transform hover:scale-105 transition-all duration-300">
                <div className="flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 bg-blue-600 rounded-full flex items-center justify-center mt-1 group-hover:bg-blue-700 transition-colors duration-300">
                  <svg className="w-2 h-2 sm:w-3 sm:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-sm sm:text-base text-gray-700 group-hover:text-blue-600 transition-colors duration-300">Cloud Infrastructure</span>
              </div>
              
              <div className="flex items-start space-x-2 sm:space-x-3 group hover:transform hover:scale-105 transition-all duration-300">
                <div className="flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 bg-blue-600 rounded-full flex items-center justify-center mt-1 group-hover:bg-blue-700 transition-colors duration-300">
                  <svg className="w-2 h-2 sm:w-3 sm:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-sm sm:text-base text-gray-700 group-hover:text-blue-600 transition-colors duration-300">UI/UX Design Excellence</span>
              </div>
              
              <div className="flex items-start space-x-2 sm:space-x-3 group hover:transform hover:scale-105 transition-all duration-300">
                <div className="flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 bg-blue-600 rounded-full flex items-center justify-center mt-1 group-hover:bg-blue-700 transition-colors duration-300">
                  <svg className="w-2 h-2 sm:w-3 sm:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-sm sm:text-base text-gray-700 group-hover:text-blue-600 transition-colors duration-300">24/7 Technical Support</span>
              </div>
            </div>

            {/* Contact Cards */}
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-4 sm:pt-6 animate-fade-in-up">
              <div className="bg-white rounded-lg shadow-lg p-3 sm:p-4 flex items-center space-x-3 hover:shadow-xl hover:transform hover:scale-105 transition-all duration-300 cursor-pointer">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-200 rounded-full flex items-center justify-center">
                  <img 
                    src={person1} 
                    alt="Mario Smith" 
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm sm:text-base">Mario Smith</p>
                  <p className="text-xs sm:text-sm text-gray-600">CEO & Founder</p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-3 sm:p-4 flex items-center space-x-3 hover:shadow-xl hover:transform hover:scale-105 transition-all duration-300 cursor-pointer">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-300">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm sm:text-base">Call Us</p>
                  <p className="text-xs sm:text-sm text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Side - Image */}
          <div className="animate-fade-in-right animate-delay-600 relative">
            <div className="relative">
              <img 
                src={aboutImage} 
                alt="Team collaboration" 
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
      </div>
    </section>
  );
};

export default About; 