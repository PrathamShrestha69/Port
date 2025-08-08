import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    role: "Frontend Developer",
    company: "TechCorp",
    duration: "Jan 2022 - Present",
    description: "Built interactive UIs using React and Tailwind CSS.",
  },
  {
    role: "Web Developer Intern",
    company: "StartUpX",
    duration: "May 2021 - Dec 2021",
    description: "Created responsive websites and dashboards.",
  },
  // Add more if you like...
];

const Experience = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Animate heading
      gsap.from(sectionRef.current, {
        opacity: 0,
        y: 50,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
          markers: true,
        },
      });

      // Animate each card
      cardsRef.current.forEach((card) => {
        gsap.from(card, {
          opacity: 0,
          y: 100,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      });
    });

    return () => {
      // Clean up ScrollTrigger instances and GSAP context on unmount
      ctx.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="py-16 px-4 bg-white">
      <h2
        ref={sectionRef}
        className="text-4xl font-bold text-center mb-12 font-goldman"
      >
        My Experience
      </h2>

      <div className="max-w-4xl mx-auto space-y-10">
        {experiences.map((exp, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className="p-6 border rounded-lg shadow-md bg-gray-100"
          >
            <h3 className="text-xl font-semibold">{exp.role}</h3>
            <p className="text-gray-700">{exp.company}</p>
            <p className="text-sm text-gray-500">hello</p>
            <p className="mt-2 text-gray-600">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
