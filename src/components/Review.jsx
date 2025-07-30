import React from 'react';
import person1 from '../assets/img/person/person-m-2.webp';
import person2 from '../assets/img/person/person-f-8.webp';
import person3 from '../assets/img/person/person-f-3.webp';

const Review = () => {
  const stats = [
    { number: "500+", label: "Happy Clients" },
    { number: "1000+", label: "Projects Completed" },
    { number: "99%", label: "Client Satisfaction" }
  ];

  return (
    <section id="review" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
        {/* Review Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4 sm:mb-6">
            What Our Clients Say
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
            Don't just take our word for it. Here's what our satisfied clients have to say about 
            their experience working with our team and the results we've delivered.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 animate-fade-in-up">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 sm:p-8 bg-gray-50 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-600 mb-2 sm:mb-3">
                {stat.number}
              </div>
              <div className="text-sm sm:text-base lg:text-lg text-gray-700 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 animate-fade-in-up">
          <div className="bg-gray-50 rounded-xl p-4 sm:p-6 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center mb-3 sm:mb-4">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4">"The analytics platform transformed our decision-making process. We now have insights we never had before."</p>
            <div className="flex items-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden mr-3">
                <img 
                  src={person1} 
                  alt="John Smith" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-semibold text-gray-900 text-sm sm:text-base">John Smith</p>
                <p className="text-xs sm:text-sm text-gray-600">Data Analyst</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-4 sm:p-6 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center mb-3 sm:mb-4">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4">"Incredible insights and user-friendly interface. This has revolutionized how we approach data analysis."</p>
            <div className="flex items-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden mr-3">
                <img 
                  src={person2} 
                  alt="Sarah Johnson" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-semibold text-gray-900 text-sm sm:text-base">Sarah Johnson</p>
                <p className="text-xs sm:text-sm text-gray-600">Marketing Director</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-4 sm:p-6 hover:shadow-lg transition-all duration-300 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center mb-3 sm:mb-4">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4">"The real-time monitoring capabilities have given us unprecedented visibility into our operations."</p>
            <div className="flex items-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden mr-3">
                <img 
                  src={person3} 
                  alt="Michael Chen" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-semibold text-gray-900 text-sm sm:text-base">Michael Chen</p>
                <p className="text-xs sm:text-sm text-gray-600">Operations Manager</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center animate-fade-in-up">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-12 text-white">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6">
              Ready to Transform Your Data Strategy?
            </h3>
            <p className="text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto opacity-90">
              Join thousands of businesses that have revolutionized their decision-making with our advanced analytics platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <button className="bg-white text-blue-600 hover:bg-gray-100 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 transform hover:scale-105">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review; 