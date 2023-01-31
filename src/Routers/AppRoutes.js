import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "../Views/Home";
import { Layout } from "../components/Layout/Layout";
// import { Login } from "../Views/Login";


export const AppRoutes = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home/>} />
          
        </Routes>
      </Layout>
    </Router>
  );
};
