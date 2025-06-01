import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Oops...</h1>
      <p className="text-xl text-gray-600 mb-6">Halaman tidak ditemukan</p>
      <Link
        to="/"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Kembali ke Beranda
      </Link>
    </div>
  );
};

export default NotFoundPage;
