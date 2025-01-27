import React from "react";
import { Link } from "react-router-dom";

interface MobileViewProps {
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
}

const MobileView: React.FC<MobileViewProps> = ({
  isMobileMenuOpen,
  toggleMobileMenu,
}) => {
  return (
    isMobileMenuOpen && (
      <div className="md:hidden bg-white border-t border-gray-200 mt-2">
        <div className="flex flex-col space-y-4 p-4">
          <Link
            to="/"
            className="text-gray-700 hover:text-blue-600"
            onClick={toggleMobileMenu}
          >
            Home
          </Link>
          <Link
            to="/Browse"
            className="text-gray-700 hover:text-blue-600"
            onClick={toggleMobileMenu}
          >
            Browse By
          </Link>
          <Link
            to="/Stories"
            className="text-gray-700 hover:text-blue-600"
            onClick={toggleMobileMenu}
          >
            Stories
          </Link>
          <Link
            to="/Agents"
            className="text-gray-700 hover:text-blue-600"
            onClick={toggleMobileMenu}
          >
            Agents
          </Link>
        </div>
      </div>
    )
  );
};

export default MobileView;
