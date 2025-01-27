import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import staycation from "../../assets/Staycation.png";
import DesktopLink from "./layout/DesktopLink";
import MobileView from "./layout/MobileView";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white border-b border-b-[#183369] p-4 md:p-6 fixed w-full top-0 z-50 ">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to={"/"}>
          <img
            src={staycation}
            alt="Staycation Logo"
            className="w-32 h-auto cursor-pointer"
          />
        </Link>

        {/* Desktop Links */}
        <DesktopLink />

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            aria-label="Toggle Mobile Menu"
            className="text-gray-700 hover:text-blue-600 focus:outline-none"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      <MobileView
        isMobileMenuOpen={isMobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
      />
    </nav>
  );
};

export default Navbar;
