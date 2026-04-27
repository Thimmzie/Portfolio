import React from 'react';
import { Skills } from '../../constants/index.js';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 1 },
  show: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    scale: 0.3,
    y: 50,
  },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 20,
    },
  },
};

const skills = () => {
  return (
    <div className="mb-[5rem] px-3 sm:px-6 md:px-10 lg:px-56">
      <h1 className="text-[#ffffff] text-[1.5rem] font-[600] text-center">
        Constraints Resolved
      </h1>
      <motion.div
        className="flex flex-wrap gap-2 sm:gap-4 mt-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
      >
        {Skills.map((skill) => {
          return (
            <motion.div
              key={skill.id}
              variants={itemVariants}
              className="flex gap-2 py-1.5 sm:py-1"
            >
              <p className="text-white text-[0.8rem] px-4 py-3 lg:px-6 lg:py-5 lg:text-[1rem] rounded-4xl border border-[#f0eeee] bg-black  max-w-full break-words">
                {skill.problem}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default skills;
