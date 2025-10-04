import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-black shadow-lg">
      <nav className="container mx-auto max-w-6xl px-4 py-6 md:py-7">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="focus:outline-none" aria-label="Go to home">
              <img
                src="/assets/Group 475.png"
                alt="QuickShaw Logo"
                className="h-12 w-auto"
              />
            </Link>
          </div>

          <div className="hidden md:flex space-x-8">
            <Link
              to="/"
              className={`text-white hover:text-primary-400 transition-colors duration-200 md:text-lg lg:text-xl ${
                location.pathname === "/" ? "text-primary-400" : ""
              }`}
            >
              Home
            </Link>
            <Link
              to="#"
              className="text-white hover:text-primary-400 transition-colors duration-200 md:text-lg lg:text-xl"
            >
              Offerings
            </Link>
            <Link
              to="#"
              className="text-white hover:text-primary-400 transition-colors duration-200 md:text-lg lg:text-xl"
            >
              Social
            </Link>
            <Link
              to="/safety-landing"
              className={`text-white hover:text-primary-400 transition-colors duration-200 md:text-lg lg:text-xl ${
                location.pathname === "/safety-landing"
                  ? "text-primary-400"
                  : ""
              }`}
            >
              Report a Problem
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-primary-400 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-700">
            <div className="flex flex-col space-y-3 mt-4">
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className={`text-left text-white hover:text-primary-400 transition-colors duration-200 py-2 ${
                  location.pathname === "/" ? "text-primary-400" : ""
                }`}
              >
                Home
              </Link>
              <Link
                to="#"
                onClick={() => setIsMenuOpen(false)}
                className="text-left text-white hover:text-primary-400 transition-colors duration-200 py-2"
              >
                Offerings
              </Link>
              <Link
                to="#"
                onClick={() => setIsMenuOpen(false)}
                className="text-left text-white hover:text-primary-400 transition-colors duration-200 py-2"
              >
                Social
              </Link>
              <Link
                to="/safety-landing"
                onClick={() => setIsMenuOpen(false)}
                className={`text-left text-white hover:text-primary-400 transition-colors duration-200 py-2 ${
                  location.pathname === "/safety-landing"
                    ? "text-primary-400"
                    : ""
                }`}
              >
                Report a Problem
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;
