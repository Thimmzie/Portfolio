import React from 'react';
import Navbar from '../components/navbar';
import Hero from '../components/hero';
import Cloud from '../components/cloud';
import Project from '../components/projects';
import Tool from '../components/tools';
import Faq from '../components/faq';

const home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Cloud />
      <Project />
      <Tool />
      <Faq />
    </div>
  );
};

export default home;
