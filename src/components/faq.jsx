import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa6';
import { questions } from '../../constants';
import { AnimatePresence, motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 1 },
  show: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 20,
    },
  },
};

const Faq = () => {
  const [activeQuestion, setActiveQuestion] = useState('');

  const handleclick = (id) => {
    setActiveQuestion(activeQuestion === id ? '' : id);
  };

  return (
    <div className="faq-footer-wrapper">
      <div className="mb-[5rem] flex flex-col items-center bg-[#000000] faq-section">
        <h1 className="text-[#ffffff] text-[1.5rem] font-[600] mb-[2rem]">
          FAQ
        </h1>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: 'true' }}
          className="w-[92%] m-auto max-w-[1400px] bg-black px-6 py-7 shadow-md lg:w-[60%]"
        >
          {questions.map((qst) => (
            <motion.div
              variants={itemVariants}
              key={qst.id}
              className="mb-5 last:mb-0"
            >
              <button
                className="w-full text-left text-[1rem] focus:outline-none p-4 bg-[#16161a] rounded-lg border border-[#bbbbbb] flex justify-between items-center cursor-pointer"
                onClick={() => handleclick(qst.id)}
              >
                <p className="text-[0.9rem] text-[#e0e0e0] leading-5">
                  {qst.question}
                </p>
                {activeQuestion === qst.id ? (
                  <FaMinus className="text-white" />
                ) : (
                  <FaPlus className="text-white" />
                )}
              </button>

              <AnimatePresence>
                {activeQuestion === qst.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                  >
                    <p className="text-[0.9rem] text-[#f1f1f1] leading-7 max-w-full p-4">
                      {qst.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Faq;
