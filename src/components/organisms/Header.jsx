import React from "react";
import { Link } from "react-router-dom";

const Header = ({ title }) => {
  return (
    <header className="bg-gray-800 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">{title}</h1>
      <nav>
        <Link to="/" className="mr-4 hover:underline">
          Home
        </Link>
        <Link to="/about" className="hover:underline">
          About
        </Link>
      </nav>
    </header>
  );
};

export default Header;
