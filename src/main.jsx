import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import HomePage from "./pages/HomePage.jsx";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignupPage from "./pages/SignupPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import { BrowserRouter, Routes, Route } from "react-router";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     Component: <App />,
//     children: [
//       {
//         path: "/",
//         Component: <HomePage />,
//       },
//       {
//         path: "/register",
//         Component: <SignupPage />,
//       },
//       {
//         path: "/login",
//         Component: <LoginPage />,
//       },
//     ],
//   },
// ]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="register" element={<SignupPage />} />
        <Route path="login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
