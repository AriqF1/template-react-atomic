import React from "react";

const Footer = ({ title, note }) => {
  return (
    <footer className="bg-gray-800 text-white px-6 py-4 mt-8">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} {title}. All rights reserved.
        </p>
        <p className="text-xs mt-2">{note}</p>
      </div>
    </footer>
  );
};
export default Footer;
