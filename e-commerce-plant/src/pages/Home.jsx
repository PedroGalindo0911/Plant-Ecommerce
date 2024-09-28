import React from 'react';
import HeroSection from '../components/HeroSection';
import FeaturedProducts from '../components/FeaturedProducts';
import Testimonials from '../components/Testimonials';
import AboutUs from '../components/AboutUs';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer'
const Home = () => {
  return (
    <div>
      <HeroSection />
      <FeaturedProducts />
      <AboutUs/>
      <Testimonials/>
      <FAQ/>
      <Footer/>
    </div>
  );
};

export default Home;
