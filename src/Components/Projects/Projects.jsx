import React from 'react';
import ProjectCard from './ProjectCard';
import BloodlineImage from "../../assets/bloodline.jpeg";
import PortfolioImage from '../../assets/portfolio.jpeg';
import payment from '../../assets/payment.png'
import Codex from "../../assets/Codex.jpeg";
import rental from "../../assets/rental.png";
import Mover from "../../assets/Mover.png"
const Projects = () => {
  return (
    <div id='Projects' className='p-10 md:p-24 text-white bg-black'>
      <h1 className='text-3xl md:text-4xl font-bold text-center mb-10'>Projects</h1>

      {/* UI/UX Projects */}
      <span className="text-center text-sm text-purple-400 font-medium block mb-2">
  UI/UX Prototype
</span>

      <div className='flex flex-wrap justify-center gap-8 mb-16'>
               <ProjectCard 
          title="Packer and Mover (destop)"
          main="A conceptual UI for a rental booking platform, designed with user-centric navigation and responsive components."
          image={Mover}
          demoLink="https://www.figma.com/proto/7q0URw01RXEMvi9pJnoHXB/Untitled?node-id=1-5&starting-point-node-id=1%3A5"
        />
        <ProjectCard 
          title="Rental App (UI/UX)"
          main="A conceptual UI for a rental booking platform, designed with user-centric navigation and responsive components."
          image={rental}
          demoLink="https://www.figma.com/proto/7q0URw01RXEMvi9pJnoHXB/Untitled?node-id=1-5&starting-point-node-id=1%3A5"
        />
        <ProjectCard 
          title="Payment App (UI/UX)"
          main="Minimal and smooth UI for a modern payment app with a focus on accessibility, animations, and clarity."
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
          main="Location-based blood donation platform where donors can register and recipients can search. Tech: Node.js, Firebase, HTML, CSS." 
          image={BloodlineImage}
          demoLink="https://bloodline-app.netlify.app"
          codeLink="https://github.com/vishal-v73/BloodLine"
        />
        <ProjectCard 
          title="Portfolio Website" 
          main="A personal portfolio built with React and Tailwind CSS. Showcases work, skills, and contact form with elegant animation via Framer Motion." 
          image={PortfolioImage}
          demoLink="https://yourportfolio.netlify.app"
          codeLink="https://github.com/vishal-v73/Portfolio"
        />
        <ProjectCard 
          title="CodexReview" 
          main="A full-stack React app using Gemini API to analyze code snippets and provide AI-powered code feedback. Great for collaborative reviewing." 
          image={Codex}
          demoLink="https://codexreview.netlify.app"
          codeLink="https://github.com/vishal-v73/codeXreview"
        />
      </div>
    </div>
  );
};

export default Projects;
