import { Link } from "react-router-dom";

const DesktopLink = () => {
  return (
    <div className="hidden md:flex space-x-6">
      <Link to="/" className="text-gray-700 hover:text-blue-600">
        Home
      </Link>
      <Link to="/Browse" className="text-gray-700 hover:text-blue-600">
        Browse By
      </Link>
      <Link to="/Stories" className="text-gray-700 hover:text-blue-600">
        Stories
      </Link>
      <Link to="/Agents" className="text-gray-700 hover:text-blue-600">
        Agents
      </Link>
    </div>
  );
};

export default DesktopLink;
