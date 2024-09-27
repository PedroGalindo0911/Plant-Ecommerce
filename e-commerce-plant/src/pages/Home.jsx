import React from 'react';
import HeroSection from '../components/HeroSection';
import FeaturedProducts from '../components/FeaturedProducts';
import BlogPreview from '../components/BlogPreview';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <FeaturedProducts />
      <BlogPreview />
    </div>
  );
};

export default Home;
