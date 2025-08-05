import React from "react";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const ProjectCard = () => {
  return (
    <div className="w-full flex flex-col md:flex-row bg-[#111827] rounded-xl overflow-hidden border border-[#1f2937]">
      {/* Left: Image / Preview */}
      <div className="md:w-1/2 w-full bg-black p-6 flex items-center justify-center">
        <div className="text-white w-full">
          <h2 className="text-lg font-semibold mb-4">Smart AI</h2>
          <p className="text-center text-xl font-light mb-6">
            What can I help with ?
          </p>
          <div className="flex gap-3 justify-center mb-4">
            <button className="border border-green-500 text-green-400 px-4 py-1 rounded-full text-sm">
              📤 Upload Image
            </button>
            <button className="border border-yellow-500 text-yellow-400 px-4 py-1 rounded-full text-sm">
              🎨 Generate Image
            </button>
            <button className="border border-orange-400 text-orange-300 px-4 py-1 rounded-full text-sm">
              💬 Let’s Chat
            </button>
          </div>
          <input
            type="text"
            placeholder="Ask Something..."
            className="w-full bg-[#0f0f0f] border border-[#2a2a2a] rounded-full px-4 py-2 text-sm text-white mt-4"
          />
        </div>
      </div>

      {/* Right: Text Content */}
      <div className="md:w-1/2 w-full p-6 text-white flex flex-col justify-between">
        <div>
          <span className="text-sm text-blue-400 font-medium bg-[#1e293b] px-2 py-1 rounded-md mb-2 inline-block">
            Featured
          </span>
          <h2 className="text-2xl font-bold mb-2">Smart AI</h2>
          <p className="text-gray-300 mb-4">
            Full-stack Smart AI with React, Node.js, and PostgreSQL
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {["React", "Node.js", "PostgreSQL", "Stripe"].map((tech) => (
              <span
                key={tech}
                className="bg-[#1f2937] text-sm px-3 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-white hover:text-gray-400 transition"
          >
            <FaGithub className="text-lg" />
            Code
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition"
          >
            <FiExternalLink className="text-lg" />
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
