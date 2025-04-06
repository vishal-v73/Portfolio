import React, { useEffect, useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useInView } from 'react-intersection-observer';
import { FaHtml5, FaCss3, FaReact } from 'react-icons/fa';
import { SiMongodb, SiTailwindcss, SiVite, SiJavascript, SiGeeksforgeeks, SiLeetcode, SiHackerrank, SiUdemy } from 'react-icons/si';
import { motion } from 'framer-motion';
import { SiFramer } from 'react-icons/si';


const TechIcon = ({ icon, label, bg, percentage }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (inView) {
      let start = 0;
      const step = Math.ceil(percentage / (1000 / 20));
      const interval = setInterval(() => {
        start += step;
        if (start >= percentage) {
          start = percentage;
          clearInterval(interval);
        }
        setProgress(start);
      }, 20);
    }
  }, [inView, percentage]);

  return (
    <motion.div
      className="flex flex-col items-center"
      ref={ref}
      whileHover={{ scale: 1.1 }}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      <div className="relative w-20 h-20">
        <CircularProgressbar
          value={progress}
          styles={buildStyles({
            pathColor: '#8b5cf6',
            trailColor: '#2d2d2d',
          })}
        />
        <span className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-2 ${bg} rounded-lg`}>
          {icon}
        </span>
      </div>
      <p className="text-white text-sm mt-2">{label}</p>
    </motion.div>
  );
};

const InfoCard = ({ icon, title, subtitle }) => (
  <motion.div
    className="flex items-center gap-4 bg-gradient-to-b from-[#121212] via-[#1f1f1f] to-[#121212] border border-white/10 rounded-xl p-4 backdrop-blur-lg shadow-2xl hover:shadow-purple-900/50 transition duration-300"
    whileHover={{ scale: 1.05 }}
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6 }}
  >
    <span className="p-2 bg-black rounded-lg shadow-inner">{icon}</span>
    <div>
      <p className="text-white font-semibold">{title}</p>
      <p className="text-gray-400 text-sm">{subtitle}</p>
    </div>
  </motion.div>
);

const Experience = () => {
  return (
    <div id="Experience" className="p-10 md:p-24 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white mb-2">Experience</h1>
        <p className="text-gray-400">Technologies I’ve worked with</p>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-start gap-10 max-w-6xl mx-auto">
        {/* Tech Icons */}
        <motion.div className="w-full md:w-1/2"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-[#0f0f0f] p-8 rounded-2xl shadow-2xl grid grid-cols-2 md:grid-cols-3 gap-6 place-items-center border border-white/10 backdrop-blur-sm">
          <TechIcon icon={<FaHtml5 color="#E34F26" size={30} />} label="HTML" bg="bg-white" percentage={70} />
<TechIcon icon={<FaCss3 color="#1572B6" size={30} />} label="CSS" bg="bg-white" percentage={70} />
<TechIcon icon={<SiJavascript color="#000" size={30} />} label="JavaScript" bg="bg-yellow-300" percentage={60} />
<TechIcon icon={<SiMongodb color="#47A248" size={30} />} label="MongoDB" bg="bg-zinc-800" percentage={50} />
<TechIcon icon={<FaReact color="#61DAFB" size={30} />} label="React" bg="bg-white" percentage={70} />
<TechIcon icon={<SiTailwindcss color="#38BDF8" size={30} />} label="Tailwind" bg="bg-zinc-800" percentage={30} />
<TechIcon icon={<SiVite color="#646CFF" size={30} />} label="Vite" bg="bg-zinc-800" percentage={50} />
<TechIcon icon={<SiFramer size={30} color="#ffffff" />} label="Framer Motion" bg="bg-purple-800" percentage={10} />

          </div>
        </motion.div>

        {/* Achievements */}
        <div className="flex flex-col gap-4 w-full md:w-1/2">
          <InfoCard
            icon={<SiLeetcode size={30} color="#FFA116" />}
            title="250+ LeetCode Questions"
            subtitle="Solved using JS, C++, and C"
          />
          <InfoCard
            icon={<SiGeeksforgeeks size={30} color="#2F8D46" />}
            title="Active on GFG"
            subtitle="Problem-solving and coding practice"
          />
          <InfoCard
            icon={<SiHackerrank size={30} color="#2EC866" />}
            title="5⭐ HackerRank in C++"
            subtitle="Certified in core programming"
          />
          <InfoCard
            icon={<SiUdemy size={30} color="#A435F0" />}
            title="Udemy DSA Course"
            subtitle="Completed Java DSA Bootcamp"
          />
        </div>
      </div>
    </div>
  );
};

export default Experience;
