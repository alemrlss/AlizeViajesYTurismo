import { BrowserRouter, Routes, Route, } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { NewsLetter } from "./components/NewsLetter";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/*"
          element={<Home />}
        />
        <Route
          path="/*"
          element={<Home />}
        />
      </Routes>
    </BrowserRouter>
  )
}
