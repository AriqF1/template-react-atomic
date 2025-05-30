import React from "react";
import Header from "../organisms/Header";
import Footer from "../organisms/Footer";

const MainLayout = ({ children }) => {
  return (
    <>
      <div className="bg-gray-100 min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
