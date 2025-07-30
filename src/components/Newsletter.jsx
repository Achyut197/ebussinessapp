import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4 sm:mb-6">
            Stay Updated
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-6 sm:mb-8 px-4">
            Subscribe to our newsletter and get the latest updates, insights, and exclusive offers 
            delivered directly to your inbox. Never miss out on important business opportunities.
          </p>
          
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter your email address"
                className="flex-1 px-4 sm:px-6 py-3 sm:py-4 rounded-lg border-0 focus:ring-4 focus:ring-blue-300 focus:outline-none text-sm sm:text-base lg:text-lg"
              />
              <button
                type="submit"
                className="bg-white text-blue-600 font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
              >
                Subscribe
              </button>
            </div>
          </form>
          
          <p className="text-blue-200 text-xs sm:text-sm mt-3 sm:mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter; 