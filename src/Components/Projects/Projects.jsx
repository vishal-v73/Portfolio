import React from 'react';
import ProjectCard from './ProjectCard';
import BloodlineImage from "../../assets/bloodline.jpeg";
import PortfolioImage from '../../assets/portfolio.jpeg';
import Codex from "../../assets/Codex.jpeg";
const Projects = () => {
  return (
    <div id='Projects' className='p-10 md:p-24 text-white bg-black'>
      <h1 className='text-3xl md:text-4xl font-bold text-center mb-10'>Projects</h1>
      
      <div className='flex flex-wrap justify-center gap-8'>
        <ProjectCard 
          title="BloodLine" 
          main=" location-based blood donation platform where donors can register and recipients can search for donors. Technologies Used: Node.js, HTML, CSS, Firebase." 
          image={BloodlineImage}
        />
        <ProjectCard 
          title="Portfolio Website" 
          main="A sleek and responsive personal portfolio built with React and styled using Tailwind CSS, enhanced with smooth animations powered by Framer Motion. Showcases projects, skills, and experience with a clean, modern UI.." 
          image={PortfolioImage}
        />
        <ProjectCard 
          title="CodexReview" 
          main="Code Reviewer is a full-stack React app that uses the Gemini API to analyze and review code snippets, enabling collaborative feedback and clean code practices." 
          image={Codex}
        />
      </div>
    </div>
  );
};

export default Projects;
