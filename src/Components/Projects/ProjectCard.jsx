import React from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ title, main, image }) => {
  return (
    <motion.div
      className='p-4 md:p-6 w-full md:w-80 bg-gradient-to-b from-black via-gray-900 to-black shadow-xl shadow-slate-900 rounded-2xl flex flex-col'
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <img className='rounded-xl mb-4' src={image} alt={`${title}-banner`} />

      <h3 className='text-xl md:text-2xl font-bold px-2'>{title}</h3>
      <p className='text-sm md:text-base text-gray-300 px-2 py-2'>{main}</p>

      <div className='mt-auto flex gap-4 px-2 pt-4'>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className='text-white text-sm md:text-base py-2 px-4 bg-purple-800 rounded-full font-semibold'
        >
          Demo
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className='text-white text-sm md:text-base py-2 px-4 bg-purple-800 rounded-full font-semibold'
        >
          Source Code
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
