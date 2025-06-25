import React from 'react';
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div id='Footer' className='flex justify-around bg-purple-950 text-white p-10 md:p-12 items-center'>
      <div>
        <h1 className='text-2xl md:text-6xl font-bold'>Contact</h1>
        <h3 className='text-sm md:text-2xl font-normal'>Feel Free to reach out!</h3>
      </div>
      <ul className='text-sm md:text-xl'>
        <li className='flex gap-1 items-center'><MdOutlineEmail size={20}/> visu835483@gmail.com</li>
        <li className='flex gap-1 items-center'><CiLinkedin size={20}/><a href="https://www.linkedin.com/in/vishal-verma-4160b8257 ">Linkedin</a></li>
        <li className='flex gap-1 items-center'><FaGithub size={20}/><a href="">Github</a></li>
      </ul>
    </div>
  );
};

export default Footer;
