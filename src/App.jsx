import React from "react";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import TargetCursor from "./utils/TargetCursor";
import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <div className="px-4 md:px-8 lg:px-20 ">
      <TargetCursor spinDuration={2} hideDefaultCursor={true} />
      <Navbar />
      <div className="px-4 md:px-8 lg:px-20">
        <Outlet />
      </div>
    </div>
  );
};

export default App;
