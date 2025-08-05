import React from "react";
import Button from "../components/Button.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import ProjectVCard from "../components/ProjectVCard.jsx";

const Projects = () => {
  return (
    <div className="relative overflow-x-hidden overflow-y-hidden">
      <div>
        <h1>My Projects</h1>
        <span>
          Each project below reflects my passion for building sleek, responsive,
          and performance-focused web applications. From interactive UI
          components to full-stack solutions, I've focused on clean code, smooth
          animations, and real-world usability using React, Tailwind CSS, GSAP,
          and more.
        </span>
      </div>
      <div>
        <ProjectCard />
        <ProjectVCard />
      </div>
    </div>
  );
};

export default Projects;
