import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Opportunity from '../components/opportunity';
import Sight from '../components/sight';
import Educator from '../components/educator';
import Course from '../components/home-course';
import HomeTestimonials from '../components/hometestimonial';

export const HomePage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Course />
      <Opportunity />
      <Educator />
      <Sight />
      <HomeTestimonials />
      <Footer />
    </div>
  );
};

export default HomePage;