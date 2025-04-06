import React from 'react';
import { motion } from 'framer-motion';
import avatarImg from "../../assets/prof.png"; 
import TextChanger from '../TextChanger';

const Home = () => {
  return (
    <div className='text-white flex flex-col md:flex-row w-full justify-between items-center p-6 md:p-20 bg-gradient-to-b from-black via-gray-900 to-black'>

      {/* Left Section */}
      <motion.div 
        className='w-full md:w-1/2 space-y-6'
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h1 className='text-3xl md:text-6xl font-bold leading-tight tracking-tight'>
          <TextChanger />
        </h1>
        <p className='text-sm md:text-2xl tracking-tight'>
          I am a third-year B.Tech student in Information Technology at ABES Engineering College, Ghaziabad. 
          Skilled in front-end development. 
          Additionally, I am currently learning cybersecurity to expand my technical expertise.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className='mt-5 text-white py-2 px-4 text-sm md:text-lg hover:opacity-85 duration-300 font-semibold rounded-3xl bg-purple-950'
        >
        <a href="#Footer">Contact Me</a>
        </motion.button>
      </motion.div>

      {/* Right Section */}
      <motion.div 
        className='w-full md:w-1/2 mt-10 md:mt-0 flex justify-center'
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <img 
          className='w-60 h-60 md:w-96 md:h-96 object-cover rounded-full shadow-xl' 
          src={avatarImg} 
          alt="Vishal's Profile" 
        />
      </motion.div>

    </div>
  );
};

export default Home;
