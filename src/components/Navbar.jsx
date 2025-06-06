import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md px-4 py-3 flex justify-between items-center">
      <h1 className="text-pink-600 text-2xl font-bold">GlamZone</h1>
      <div className="space-x-4">
        <Link to="/" className="text-gray-600 hover:text-pink-600">Home</Link>
        <Link to="/dashboard" className="text-gray-600 hover:text-pink-600">Dashboard</Link>
        <Link to="/login" className="text-gray-600 hover:text-pink-600">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;
