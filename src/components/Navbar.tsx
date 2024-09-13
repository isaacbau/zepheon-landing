import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-transparent sticky top-0 z-50 w-full bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link
            to="/"
            className="text-4xl"
            style={{ fontFamily: "Righteous, cursive" }}
          >
            Zepheon
          </Link>
          <div className="flex items-center space-x-8">
            <NavItem to="/clients" title="Clients" />
            <NavItem to="/about" title="About Us" />
            <NavItem to="/contact" title="Contact" />
          </div>
        </div>
      </div>
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

export default Navbar;
