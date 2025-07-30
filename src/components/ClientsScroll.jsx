import React from 'react';
import client1 from '../assets/img/clients/clients-1.webp';
import client2 from '../assets/img/clients/clients-2.webp';
import client3 from '../assets/img/clients/clients-3.webp';
import client4 from '../assets/img/clients/clients-4.webp';
import client5 from '../assets/img/clients/clients-5.webp';
import client6 from '../assets/img/clients/clients-6.webp';

const ClientsScroll = () => {
  // Array of client images - properly imported
  const clientImages = [
    client1,
    client2,
    client3,
    client4,
    client5,
    client6,
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Trusted by Leading Companies
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
            We've partnered with industry leaders and innovative startups to deliver exceptional results
          </p>
        </div>
        
        {/* Scrolling Container */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll">
            {/* First set of images */}
            {clientImages.map((image, index) => (
              <div key={index} className="flex-shrink-0 mx-4 sm:mx-6 lg:mx-8">
                <div className="w-24 h-12 sm:w-32 sm:h-16 lg:w-40 lg:h-20 bg-white rounded-lg shadow-md flex items-center justify-center p-2 sm:p-4">
                  <img 
                    src={image} 
                    alt={`Client ${index + 1}`}
                    className="max-w-full max-h-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              </div>
            ))}
            
            {/* Duplicate set for seamless loop */}
            {clientImages.map((image, index) => (
              <div key={`duplicate-${index}`} className="flex-shrink-0 mx-4 sm:mx-6 lg:mx-8">
                <div className="w-24 h-12 sm:w-32 sm:h-16 lg:w-40 lg:h-20 bg-white rounded-lg shadow-md flex items-center justify-center p-2 sm:p-4">
                  <img 
                    src={image} 
                    alt={`Client ${index + 1}`}
                    className="max-w-full max-h-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsScroll; 