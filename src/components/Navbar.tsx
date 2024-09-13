import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-transparent sticky top-0 z-50 w-full bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link
            to="/"
            className="text-3xl sm:text-4xl"
            style={{ fontFamily: "Righteous, cursive" }}
          >
            Zepheon
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <NavItem to="/clients" title="Clients" />
            <NavItem to="/about" title="About Us" />
            <NavItem to="/contact" title="Contact" />
          </div>
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {/* Hamburger icon */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="flex flex-col">
            <MobileNavItem to="/clients" title="Clients" />
            <MobileNavItem to="/about" title="About Us" />
            <MobileNavItem to="/contact" title="Contact" />
          </div>
        </div>
      )}
    </nav>
  );
};

interface NavItemProps {
  to: string;
  title: string;
}

const NavItem: React.FC<NavItemProps> = ({ to, title }) => (
  <Link
    to={to}
    className="hover:text-[#838383] text-md transition duration-300 font-playfair"
  >
    {title}
  </Link>
);

const MobileNavItem: React.FC<NavItemProps> = ({ to, title }) => (
  <Link
    to={to}
    className="hover:text-[#838383] text-md transition duration-300 font-playfair py-4 px-4 border-b"
  >
    {title}
  </Link>
);

export default Navbar;
