import React from 'react';
import Navbar from '../components/navbar';
import Article from '../components/myarticle';
import Footer from '../components/footer';

const article = () => {
  return (
    <div className="page-content">
      <Navbar />
      <Article />
      <Footer />
    </div>
  );
};

export default article;
