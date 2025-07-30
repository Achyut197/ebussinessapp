import React, { useState } from 'react';

const FAQ = () => {
  const [openQuestion, setOpenQuestion] = useState(0);

  const faqData = [
    {
      question: "What services do you offer?",
      answer: "We offer a comprehensive range of digital services including web development, mobile app development, UI/UX design, digital marketing, branding, and consulting services. Our team specializes in creating custom solutions tailored to your business needs."
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary depending on complexity and scope. A simple website might take 2-4 weeks, while complex applications can take 3-6 months. We provide detailed timelines during our initial consultation and keep you updated throughout the process."
    },
    {
      question: "Do you provide ongoing support?",
      answer: "Yes, we offer various support packages including maintenance, updates, and technical support. Our team is available to help with any issues or questions you may have after project completion. We also offer retainer services for ongoing development needs."
    },
    {
      question: "What is your pricing structure?",
      answer: "Our pricing is project-based and depends on the scope, complexity, and requirements. We offer transparent pricing with detailed quotes and no hidden fees. We also provide flexible payment plans and can work within your budget constraints."
    },
    {
      question: "Can you work with existing systems?",
      answer: "Absolutely! We have extensive experience integrating with existing systems and platforms. Whether you need to enhance current functionality, migrate data, or build new features, we can work with your existing infrastructure and ensure seamless integration."
    }
  ];

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? -1 : index);
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
          {/* Left Side - FAQ Header */}
          <div className="lg:sticky lg:top-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4 sm:mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed mb-6 sm:mb-8">
              Get answers to the most common questions about our services, 
              processes, and what makes us the right choice for your digital needs.
            </p>
            <div className="bg-blue-600 text-white p-4 sm:p-6 rounded-lg">
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Still have questions?</h3>
              <p className="text-blue-100 mb-3 sm:mb-4 text-sm sm:text-base">
                Can't find the answer you're looking for? Our team is here to help.
              </p>
              <button className="bg-white text-blue-600 px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 text-sm sm:text-base">
                Contact Us
              </button>
            </div>
          </div>

          {/* Right Side - FAQ Questions */}
          <div className="space-y-3 sm:space-y-4">
            {faqData.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <button
                  onClick={() => toggleQuestion(index)}
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-all duration-300"
                >
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 pr-3 sm:pr-4">
                    {faq.question}
                  </h3>
                  <svg
                    className={`w-4 h-4 sm:w-5 sm:h-5 text-gray-500 transition-transform duration-300 flex-shrink-0 ${
                      openQuestion === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openQuestion === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-4 sm:px-6 pb-3 sm:pb-4">
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12 sm:mt-16 animate-fade-in-up">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-12 text-white">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6">
              Ready to Get Started?
            </h3>
            <p className="text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto opacity-90">
              Have more questions or ready to start your project? Let's discuss how we can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <button className="bg-white text-blue-600 hover:bg-gray-100 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 transform hover:scale-105">
                Start Your Project
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 transform hover:scale-105">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ; 