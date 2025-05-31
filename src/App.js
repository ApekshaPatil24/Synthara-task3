import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css'; // Import global styles here


import HeroSection from './Components/HeroSection';
import FeaturesSection from './Components/FeaturesSection';
import GallerySection from './Components/GallerySection';
import TestimonialsSection from './Components/TestimonialsSection';
import ContactForm from './Components/ContactForm';
import Calltoaction from './Components/Calltoaction';
import Footer from './Components/Footer';


function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // Smooth scroll handler
  const scrollToSection = id => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
   
  
      <main>
        <section id="hero"><HeroSection /></section>
        <section id="features"><FeaturesSection /></section>
        <section id="visuals"><GallerySection /></section>
        <section id="feedback"><TestimonialsSection /></section>
        <section id="contact"><ContactForm/></section>
        <section id="calltoaction"><Calltoaction/></section>
        <Footer/>
      </main>

      
    </>
  );
}

export default App;
