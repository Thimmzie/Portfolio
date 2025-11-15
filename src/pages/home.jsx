import React from 'react';
import Navbar from '../components/navbar';
import Hero from '../components/hero';
import Cloud from '../components/cloud';
import Project from '../components/projects';

const home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Cloud />
      <Project />
    </div>
  );
};

export default home;
