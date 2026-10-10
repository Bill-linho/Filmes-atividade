import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/home.jsx";
import { DEFAULT_ROUTE } from "./constants/defaultRoute.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Navigate to={DEFAULT_ROUTE} replace />}
        />

        <Route
          path="/year/:yearId/category/:categoryId"
          element={<Home />}
        />

        <Route
          path="*"
          element={<Navigate to={DEFAULT_ROUTE} replace />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;