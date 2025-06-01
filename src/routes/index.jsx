import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "../components/templates/MainLayout";
import HomePage from "../components/pages/HomePage";
import NotFoundPage from "../components/pages/NotFoundPage";

const Router = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <MainLayout>
            <HomePage />
          </MainLayout>
        }
      />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default Router;
