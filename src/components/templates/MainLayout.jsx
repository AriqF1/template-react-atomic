import React from "react";
import Header from "../organisms/Header";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="p-6">{children}</main>
    </>
  );
};

export default MainLayout;