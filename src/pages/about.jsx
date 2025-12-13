import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Aboutsection from '../components/aboutdeji';

const about = () => {
  return (
    <div className="page-content">
      <Navbar />
      <Aboutsection />
      <Footer />
    </div>
  );
};

export default about;
