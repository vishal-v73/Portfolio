import React from 'react';
import { IoArrowForward } from 'react-icons/io5';
import AboutImg from '../../assets/About.png';
import { motion } from 'framer-motion';

const listItems = [
  {
    title: 'Frontend Developer',
    desc: 'Completed internship at Bharat Intern and built responsive UIs using React and Tailwind CSS.',
  },
  {
    title: 'Cybersecurity Enthusiast',
    desc: 'Currently learning cybersecurity to expand my technical expertise.',
  },
  {
    title: 'Problem Solver',
    desc: 'Solved 200+ problems on LeetCode, enhancing data structures and algorithm skills.',
  },
];

const About = () => {
  return (
    <div
      id='About'
      className='text-white bg-gradient-to-b from-black via-gray-900 to-black bg-opacity-60 shadow-xl mx-0 md:mx-20 rounded-lg p-12 my-10 flex flex-col items-center justify-center'
    >
      <motion.h2
        className='text-2xl md:text-4xl font-bold mb-8 text-center'
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>

      <div className='flex flex-col md:flex-row items-center justify-center gap-10'>
        <motion.img
          className='md:h-80 rounded-lg shadow-md'
          src={AboutImg}
          alt='About'
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        />

        <motion.div
          className='flex flex-col gap-6 mt-8 md:mt-0 w-full md:w-[500px]'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="space-y-2">
            <h3 className="text-xl md:text-2xl font-semibold">Bio</h3>
            <p className="text-sm md:text-md leading-tight text-gray-300">
              I am a third-year B.Tech student in Information Technology at ABES Engineering College, Ghaziabad. Skilled in front-end development, I have completed an internship at Bharat Intern as a Front-End Developer. Additionally, I am currently learning cybersecurity to expand my technical expertise.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl md:text-2xl font-semibold">Education</h3>
            <p className="text-sm md:text-md leading-tight text-gray-300">
              <strong>Bachelor of Technology (B.Tech)</strong> - Information Technology<br />
              ABES Engineering College, Ghaziabad<br />
              <em>Expected Graduation: 2026</em>
            </p>
          </div>

          <div className="space-y-2">
          </div>
        </motion.div>
      </div>

      <motion.ul
        className='flex flex-col gap-6 mt-12 w-full max-w-3xl'
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        {listItems.map((item, index) => (
          <motion.li
            key={index}
            className='flex gap-3'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <IoArrowForward size={30} className='mt-1 text-green-400' />
            <div>
              <h3 className='text-xl md:text-2xl font-semibold'>{item.title}</h3>
              <p className='text-sm md:text-md leading-tight text-gray-300'>{item.desc}</p>
            </div>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default About;
