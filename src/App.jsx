import React from "react";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="px-4 md:px-8 lg:px-20">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default App;
