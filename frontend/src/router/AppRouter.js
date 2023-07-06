import { BrowserRouter, Routes, Route, } from "react-router-dom";

import { Layout } from "../components/Layout";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { NewsLetter } from "../components/NewsLetter.js";
import { Footer } from "../pages/Footer";


export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={<Login />}
        />
        <Route
          path="/*"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/newsletter"
          element={<NewsLetter />}
        />
           <Route
          path="/footer"
          element={<Footer />}
        />
      </Routes>
    </BrowserRouter>
  )
}
