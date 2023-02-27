import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Layout } from "../components/Layout/Layout";
import {
  Home,
  Destino,
  Beneficios,
  Alquiler,
  Devolucion,
  Info,
  Club
} from "../Views";

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
        <Route
          path="/beneficios"
          element={
            <Layout>
              <Beneficios />
            </Layout>
          }
        />
        <Route />
        <Route
          path="/alquiler"
          element={
            <Layout>
              <Alquiler />
            </Layout>
          }
        />
        <Route />
        <Route
          path="/info"
          element={
            <Layout>
              <Info />
            </Layout>
          }
        />
        <Route />
        <Route
          path="/devolucion"
          element={
            <Layout>
              <Devolucion />
            </Layout>
          }
        />
        <Route />
        <Route
          path="/club"
          element={
            <Layout>
              <Club />
            </Layout>
          }
        />
        <Route />
      </Routes>
    </Router>
  );
};
