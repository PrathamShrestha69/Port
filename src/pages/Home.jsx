import React from "react";
import Waves from "../utils/Waves";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

const Home = () => {
  useGSAP(() => {
    const textH1 = new SplitText(".title", { type: "chars, words" });

    const text2 = new SplitText(".text", {
      type: "lines",
    });

    gsap.from(text2.lines, {
      opacity: 0,
      yPercent: 200,
      duration: 1.8,
      ease: "expo.inOut",
      stagger: 0.05,
      delay: 1.5,
    });
    gsap.from(textH1.chars, {
      x: 100,
      scale: 0.3,
      duration: 1.8,
      ease: "power2.out",
      stagger: 0.05,
      opacity: 0,
      delay: 0.5,
    });
    gsap.from("#katanaLeft", {
      x: 500,
      duration: 1,
      ease: "bounce.out",
    });
    gsap.from("#katanaRight", {
      x: -500,
      duration: 1,
      ease: "bounce.out",
    });
  });

  return (
    <div className="realtive overflow-x-hidden overflow-y-hidden">
      <Waves
        lineColor="#000000"
        backgroundColor="rgba(255, 255, 255, 0.2)"
        waveSpeedX={0.02}
        waveSpeedY={0.01}
        waveAmpX={40}
        waveAmpY={40}
        friction={0.2}
        tension={0.01}
        maxCursorMove={2}
        xGap={36}
        yGap={50}
      />

      <img
        src="./sticker/katanaLeft.png"
        alt="katanaLeft"
        id="katanaLeft"
        className="-left-5 lg:left-44 lg:block absolute h-80 lg:h-100 cursor-target"
      />

      <img
        src="./sticker/katanaRight.png"
        alt="katanaRight"
        id="katanaRight"
        className="hidden lg:block absolute h-100 right-44"
      />

      <div className="relative h-60 flex flex-col justify-center items-end sm:items-center text-right sm:text-center sm:pr-0 z-5">
        <h1 className="title text-4xl lg:text-6xl font-extrabold text-slate-800 font-goldman translate-y-10 cursor-target">
          Pratham Shrestha
        </h1>
      </div>
      <div className="relative font-intel text-xl py-12 lg:py-28 text text-shadow-2xs font-semibold">
        A passionate front-end developer who thrives on turning ideas into
        sleek, interactive, and responsive web experiences. I specialize in
        modern tools like React, Tailwind CSS, and GSAP, with a strong eye for
        design, performance, and smooth user interaction. Always curious. Always
        building.
      </div>
    </div>
  );
};

export default Home;
