import React from 'react';
import ProjectCard from './ProjectCard';
import BloodlineImage from "../../assets/bloodline.jpeg";
import PortfolioImage from '../../assets/portfolio.jpeg';
import payment from '../../assets/payment.png';
import Codex from "../../assets/Codex.jpeg";
import rental from "../../assets/rental.png";
import Mover from "../../assets/Mover.png";
import MNC from "../../assets/MNC.png";
import cc from "../../assets/cc.png";

const Projects = () => {
  return (
    <div id='Projects' className='p-10 md:p-24 text-white bg-black'>
      <h1 className='text-3xl md:text-4xl font-bold text-center mb-10'>Projects</h1>

      {/* UI/UX Projects */}
      <span className="text-center text-sm text-purple-400 font-medium block mb-2">
        UI/UX Prototypes
      </span>
      <div className='flex flex-wrap justify-center gap-8 mb-16'>
        <ProjectCard 
          title="MNC Website"
          main="A conceptual corporate website UI for a multinational company, focusing on clean layout and intuitive navigation."
          image={MNC}
          demoLink="https://www.figma.com/design/6uzFYb4o3Qfd5U62dXRWrH/Untitled?node-id=0-1&t=2D1oVeJ3I4w5rsS5-1"
        />
        <ProjectCard 
          title="Packer and Mover (Desktop)"
          main="A modern desktop UI prototype for a packing and moving service with clear CTAs and organized service info."
          image={Mover}
          demoLink="https://www.figma.com/proto/7q0URw01RXEMvi9pJnoHXB/Untitled?node-id=1-5&starting-point-node-id=1%3A5"
        />
        <ProjectCard 
          title="College Campus UI"
          main="A concept UI design for a college website portal focusing on accessibility and student-first navigation."
          image={cc}
          demoLink="https://www.figma.com/design/VcKa4PsC5fxNlQzNwMr4GO/Untitled?node-id=0-1&t=JQTEPSZTrCyodp7v-1"
        />
        <ProjectCard 
          title="Rental App (UI/UX)"
          main="A conceptual mobile app UI for booking rental properties with filter options, clean layout, and map integration."
          image={rental}
          demoLink="https://www.figma.com/proto/7q0URw01RXEMvi9pJnoHXB/Untitled?node-id=1-5&starting-point-node-id=1%3A5"
        />
        <ProjectCard 
          title="Payment App (UI/UX)"
          main="Minimal and fluid UI for a modern payment app focused on accessibility, onboarding flow, and user trust."
          image={payment}
          demoLink="https://www.figma.com/proto/hmyDRgmV6LYUQgO8ACp0r3/Untitled?node-id=1-2115&starting-point-node-id=1%3A2115"
        />
      </div>

      {/* Development Projects */}
      <span className="text-center text-sm text-purple-400 font-medium block mb-2">
        Web Development Projects
      </span>

      <div className='flex flex-wrap justify-center gap-8'>
        <ProjectCard 
          title="BloodLine" 
          main="Location-based blood donation platform. Donors can register and recipients can search nearby. Tech stack: Node.js, Firebase, HTML, CSS." 
          image={BloodlineImage}
          demoLink="https://bloodline-app.netlify.app"
          codeLink="https://github.com/vishal-v73/BloodLine"
        />
        <ProjectCard 
          title="Portfolio Website" 
          main="Personal portfolio built with React and Tailwind CSS. Features project showcase, skills, and smooth animations via Framer Motion." 
          image={PortfolioImage}
          demoLink="https://yourportfolio.netlify.app"
          codeLink="https://github.com/vishal-v73/Portfolio"
        />
        <ProjectCard 
          title="CodexReview" 
          main="A full-stack app using Gemini API to analyze code snippets and provide AI-powered suggestions. Built with React." 
          image={Codex}
          demoLink="https://codexreview.netlify.app"
          codeLink="https://github.com/vishal-v73/codeXreview"
        />
      </div>
    </div>
  );
};

export default Projects;
