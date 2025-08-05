"use client";
import React from "react";
import { HoverBorderGradient } from "../utils/hover-border-gradient.jsx";

function Button({ text }) {
  return (
    <div className="justify-center text-center">
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 cursor-target"
      >
        <span>{text}</span>
      </HoverBorderGradient>
    </div>
  );
}

export default Button;
