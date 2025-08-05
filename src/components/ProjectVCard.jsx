import React from "react";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const ProjectVCard = () => {
  return (
    <div className="w-lg max-w-4xl mx-auto bg-[#0f172a] rounded-2xl overflow-hidden border border-[#1e293b] shadow-md">
      {/* Image Preview */}
      <div className="w-full h-64 bg-black overflow-hidden">
        <img
          src="/images/sharedrop-preview.png" // Change to your actual image path
          alt="ShareDrop Preview"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="p-6 text-white space-y-4">
        <span className="inline-block text-blue-400 text-xl">{"< />"}</span>
        <h2 className="text-2xl font-bold">File Sharing App</h2>
        <p className="text-gray-400 text-sm">
          file sharing app within the same network
        </p>

        <div className="flex flex-wrap gap-2">
          {["React", "TypeScript", "Next.js", "Socket"].map((tech) => (
            <span
              key={tech}
              className="bg-[#1e293b] px-3 py-1 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-6 pt-2">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white hover:text-gray-300"
          >
            <FaGithub className="text-lg" />
            Code
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-400 hover:text-blue-300"
          >
            <FiExternalLink className="text-lg" />
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectVCard;
