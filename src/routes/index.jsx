import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "../components/templates/MainLayout";
import HomePage from "../components/pages/HomePage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout><HomePage /></MainLayout>} />
    </Routes>
  );
};

export default Router;