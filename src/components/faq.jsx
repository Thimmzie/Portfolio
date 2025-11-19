import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa6';
import { questions } from '../../constants';
import { AnimatePresence, motion } from 'framer-motion';

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

const Faq = () => {
  const [activeQuestion, setActiveQuestion] = useState('');

  const handleclick = (id) => {
    setActiveQuestion(activeQuestion === id ? '' : id);
  };

  return (
    <div className="mb-[5rem] flex flex-col items-center">
      <h1 className="text-[#000000] text-[1.5rem] font-[600] mb-[2rem]">FAQ</h1>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ amount: 0.2 }}
        className="w-[92%] m-auto max-w-[1400px] bg-gray-300 px-6 py-7 shadow-md rounded-lg border border-[#bbbbbb] lg:w-[60%]"
      >
        {questions.map((qst) => (
          <motion.div
            variants={itemVariants}
            key={qst.id}
            className="mb-5 last:mb-0"
          >
            <button
              className="w-full text-left text-[1rem] focus:outline-none p-4 bg-[#f3f3f3] rounded-lg border border-[#bbbbbb] flex justify-between items-center cursor-pointer"
              onClick={() => handleclick(qst.id)}
            >
              <p className="text-[0.9rem] text-[#222222] leading-5">
                {qst.question}
              </p>
              {activeQuestion === qst.id ? <FaMinus /> : <FaPlus />}
            </button>

            <AnimatePresence>
              {activeQuestion === qst.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                >
                  <p className="text-[0.9rem] text-[#3d3d3d] leading-7 max-w-full p-4">
                    {qst.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Faq;
