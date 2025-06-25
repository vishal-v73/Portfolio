import React from 'react';
import { IoArrowForward } from 'react-icons/io5';
import { motion } from 'framer-motion';

const listItems = [
  {
    title: 'Frontend Developer',
    desc: 'Completed internship at Bharat Intern and built responsive UIs using React and Tailwind CSS.',
  },
  {
    title: 'UI/UX Designer',
    desc: '6+ months of experience in creating intuitive, user-friendly interfaces and Figma prototypes with a focus on usability and aesthetics.',
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
      className='text-white bg-gradient-to-b from-black via-gray-900 to-black mx-0 md:mx-20 rounded-lg p-8 md:p-16 my-10 flex flex-col items-center justify-center'
    >
      <motion.h2
        className='text-3xl md:text-4xl font-bold mb-10 text-center'
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>

      <motion.div
        className='w-full max-w-3xl space-y-8 text-gray-300'
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div>
          <h3 className='text-xl md:text-2xl font-semibold text-white mb-1'>Bio</h3>
          <p className='text-sm md:text-base leading-relaxed'>
            I am a third-year B.Tech student in Information Technology at ABES Engineering College, Ghaziabad.
            Skilled in front-end development, I have completed an internship at Bharat Intern as a Front-End Developer.
            I’m also exploring cybersecurity to expand my technical expertise.
          </p>
        </div>

        <div className="border-t border-gray-700 pt-6">
          <h3 className='text-xl md:text-2xl font-semibold text-white mb-1'>Education</h3>
          <p className='text-sm md:text-base leading-relaxed'>
            <strong>Bachelor of Technology (B.Tech)</strong> - Information Technology<br />
            ABES Engineering College, Ghaziabad<br />
            <em>Expected Graduation: 2026</em>
          </p>
        </div>

        <motion.ul
          className='mt-8 flex flex-col gap-6'
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
              className='flex items-start gap-3'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <IoArrowForward size={24} className='mt-1 text-purple-400' />
              <div>
                <h4 className='text-lg md:text-xl font-semibold text-white'>{item.title}</h4>
                <p className='text-sm md:text-base leading-tight'>{item.desc}</p>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </div>
  );
};

export default About;
