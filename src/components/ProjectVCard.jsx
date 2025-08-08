import React from "react";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import "../index.css";

const ProjectVCard = ({
  image,
  title,
  description,
  tags = [],
  repoLink,
  liveLink,
  className = "",
}) => {
  return (
    <div
      className={`transition-transform duration-300 hover:scale-[1.015] sm:w-80 lg:w-full max-w-4xl mx-auto bg-[#BEDDE6] backdrop-blur-md rounded-2xl overflow-hidden border border-white hover:border-[#1e293b] shadow-md ${className} `}
    >
      {/* Image Preview */}
      <div className="w-full h-52 sm:h-64 bg-black overflow-hidden">
        <img
          src={image}
          alt={`${title} Preview`}
          className="w-full h-full object-cover object-top transition-transform duration-300 hover:scale-105 cursor-target"
        />
      </div>

      {/* Content Section */}
      <div className="p-4 sm:p-6 text-white space-y-3 sm:space-y-4">
        <span className="inline-block text-black text-lg sm:text-xl">
          {"< />"}
        </span>
        <h2 className="text-xl sm:text-3xl text-black font-bold font-goldman cursor-target">
          {title}
        </h2>
        <p className="text-black text-sm sm:text-base font-intel">
          {description}
        </p>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-2 ">
          {tags.map((tech) => (
            <span
              key={tech}
              className="bg-[#1e293b] px-3 py-1 rounded-full text-xs sm:text-sm font-intel cursor-target"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2">
          {repoLink && (
            <a
              href={repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-black hover:text-gray-700 text-sm sm:text-base font-intel cursor-target"
            >
              <FaGithub className="text-base sm:text-lg" />
              Code
            </a>
          )}
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#3A3480] hover:text-[#2D2376] text-sm sm:text-base font-intel cursor-target"
            >
              <FiExternalLink className="text-base sm:text-lg" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectVCard;
