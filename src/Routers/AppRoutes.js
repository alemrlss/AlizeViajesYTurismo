import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "../Views/Home";
import { Layout } from "../components/Layout/Layout";
import { Login } from "../Views/Login";
// import { Favorites } from "../Views/Favourites";
// import { Login } from "../Views/Login";

export const AppRoutes = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* <Route path="/" element={<Favorites />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </Layout>
    </Router>
  );
};
