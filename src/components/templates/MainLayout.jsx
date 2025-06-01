import React from "react";
import Header from "../organisms/Header";
import Footer from "../organisms/Footer";

const MainLayout = ({ children }) => {
  return (
    <>
      <div className="bg-gray-100 min-h-screen flex flex-col">
        <Header title="MyApp" />
        <main className="flex-grow">{children}</main>
        <Footer
          title="MyApp"
          note="build with reactjs atomic component design"
        />
      </div>
    </>
  );
};

export default MainLayout;
