import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Layout } from "../components/Layout/Layout";
import { Destino } from "../Views/Destino";
import { Home } from "../Views/Home";

export const AppRoutes = () => {
  return (
    // <Login />
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/destinos"
          element={
            <Layout>
              <Destino />
            </Layout>
          }
        />
        <Route />
      </Routes>
    </Router>
  );
};
