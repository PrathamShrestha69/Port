import React, { useState } from "react";
import "../index.css";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <header className="sticky top-0 z-2 backdrop-blur-md">
        <nav className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* name */}
            <Link
              to="/"
              className="font-playwrite-pl font-extrabold text-2xl text-slate-800 transition hover:text-teal-600 text-flicker-in-glow-normal hover:text-flicker-in-glow-normal "
            >
              Pratham Shrestha
            </Link>

            {/* Desktop */}
            <ul className="hidden md:flex items-center space-x-8 font-intel">
              <li>
                <Link
                  to="/"
                  className="text-lg font-semibold  text-slate-700 transition-colors hover:bg-[#87f8e9] rounded-3xl p-3"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/project"
                  className="text-lg font-semibold  text-slate-700 transition-colors hover:bg-[#87f8e9] rounded-3xl p-3"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/exp"
                  className="text-lg font-semibold  text-slate-700 transition-colors hover:bg-[#87f8e9] rounded-3xl p-3"
                >
                  Experience
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-lg font-semibold  text-slate-700 transition-colors hover:bg-[#87f8e9] rounded-3xl p-3"
                >
                  Contact
                </Link>
              </li>
            </ul>

            {/* Mobile view */}
            {/* button */}
            <div className="md:hidden">
              <button
                onClick={() => setOpen(!open)}
                className="text-slate-700 hover:text:teal-600"
                aria-label="Toggle menu"
              >
                {open ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
          {open && (
            <ul className="md:hidden pb-4 space-x-2 font-intel">
              <li>
                <Link
                  onClick={() => setOpen(false)}
                  to="/"
                  className="block px-3 py-2 rounded-md tet-base font-medium text-slate-700"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setOpen(false)}
                  to="/project"
                  className="block px-3 py-2 rounded-md tet-base font-medium text-slate-700"
                >
                  {" "}
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setOpen(false)}
                  to="/exp"
                  className="block px-3 py-2 rounded-md tet-base font-medium text-slate-700"
                >
                  {" "}
                  Experience
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setOpen(false)}
                  to="/contact"
                  className="block px-3 py-2 rounded-md tet-base font-medium text-slate-700"
                >
                  {" "}
                  Contact
                </Link>
              </li>
            </ul>
          )}
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
