
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';
import ClientsScroll from './components/ClientsScroll';
import About from './components/About';
import Review from './components/Review';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Team from './components/Team';
import Contact from './components/Contact';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <div className="pt-16 sm:pt-20">
        <MainContent />
        <ClientsScroll />
        <About />
        <Review />
        <Services />
        <Portfolio />
        <Pricing />
        <FAQ />
        <Team />
        <Contact />
        <Newsletter />
        <Footer />
      </div>
    </div>
  );
}

export default App;
