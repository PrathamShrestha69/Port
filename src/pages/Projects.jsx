import React, { useRef } from "react";
import Button from "../components/Button.jsx";
import ProjectVCard from "../components/ProjectVCard.jsx";
import project from "../constant/project.js";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { div } from "motion/react-client";

const Projects = () => {
  const ScrollRef = useRef();
  useGSAP(() => {
    const everything = gsap.utils.toArray(ScrollRef.current.children);
    const SplitH1 = new SplitText("#title", { type: "lines" });
    const Splitspan = new SplitText("#span", { type: "lines" });
    gsap.from(SplitH1.lines, {
      opacity: 1,
      yPercent: 200,
      duration: 1.8,
      ease: "back.inOut",
      stagger: 0.05,
      scale: 1.8,
    });
    gsap.from(Splitspan.lines, {
      opacity: 0,
      yPercent: 200,
      duration: 1.8,
      ease: "expo.inOut",
      stagger: 0.05,
      scale: 1.8,
    });

    everything.forEach(
      (every) => {
        gsap.fromTo(
          every,
          {
            opacity: 0,
            yPercent: 200,
          },
          {
            yPercent: 0,
            opacity: 1,
            delay: 1.5,
            ease: "back.inOut",
          }
        );
      },
      { scope: ScrollRef }
    );
  });

  return (
    <div className=" relative overflow-y-hidden">
      <div>
        <h1
          id="title"
          className="text-3xl lg:text-3xl font-goldman font-extrabold"
        >
          My Projects
        </h1>
        <span
          id="span"
          className="font-intel text-sm lg:text-xl text-justify lg:text-justify"
        >
          Each project below reflects my passion for building sleek, responsive,
          and performance-focused web applications. From interactive UI
          components to full-stack solutions, I've focused on clean code, smooth
          animations, and real-world usability using React, Tailwind CSS, GSAP,
          Nodejs, MongoDB and more.
        </span>
      </div>
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-7 lg:gap-20 py-10 max-w-6xl mx-auto "
        ref={ScrollRef}
      >
        {project.map((proj, index) => (
          <div key={index}>
            <ProjectVCard
              image={proj.image}
              title={proj.name}
              description={proj.projectDesc}
              tags={proj.tags}
              repoLink={proj.repo}
              liveLink={proj.web}
              className={"h-full "}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
