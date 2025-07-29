import React from "react";
import "../index.css"; // Ensure you import your CSS file

const Navbar = () => {
  return (
    <div>
      <header className="sticky top-0 z-2 backdrop-blur-md px-16">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* name */}
            <a
              href="/home"
              className="font-[var(--font-playwrite)] text-2xl text-slate-800 transition hover:text-teal-600"
            >
              Pratham Shrestha
            </a>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
