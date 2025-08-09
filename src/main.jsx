import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Experience from "./pages/Experience.jsx";
import Projects from "./pages/Projects.jsx";
import Contact from "./pages/Contact.jsx";
import { StrictMode, useEffect, useState } from "react";
import Resume from "./pages/Resume.jsx";
import React from "react";

const LoadingScreen = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onFinish, 300);
          return 100;
        }
        return prev + 2;
      });
    }, 20);

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50"
      style={{ backgroundColor: "#d8fffa" }}
    >
      <div
        style={{
          width: "200px",
          height: "5px",
          backgroundColor: "#c0e6e1",
          borderRadius: "6px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: `${progress}%`,
            height: "100%",
            background: "linear-gradient(90deg, #00c6ff, #0072ff)",
            transition: "width 0.15s ease-in-out",
          }}
        />
      </div>
    </div>
  );
};

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/exp", element: <Experience /> },
      { path: "/project", element: <Projects /> },
      { path: "/re", element: <Resume /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);

const Root = () => {
  const [loading, setLoading] = useState(true);

  return loading ? (
    <LoadingScreen onFinish={() => setLoading(false)} />
  ) : (
    <RouterProvider router={router} />
  );
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Root />
  </StrictMode>
);
