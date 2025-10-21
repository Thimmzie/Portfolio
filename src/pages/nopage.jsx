import React from 'react';
import Navbar from '../components/navbar';

const nopage = () => {
  return (
    <div>
      <Navbar />
      <h1 className="mt-[5rem] ml-5 text-[black] text-[3rem]">
        Error 404: Not found
      </h1>
    </div>
  );
};

export default nopage;
