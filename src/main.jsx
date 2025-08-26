import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import HomePage from "./pages/HomePage.jsx";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignupPage from "./pages/SignupPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import AddPostPage from "./pages/AddPostPage.jsx";
import EditPostPage from "./pages/EditPostPage.jsx";
import EditUserDetailsPage from "./pages/EditUserDetailsPage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import { Provider } from "react-redux";
import store from "./store/store.js";
import ReadPostPage from "./pages/ReadPostPage.jsx";

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
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="register" element={<SignupPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="user-update" element={<EditUserDetailsPage />} />
          <Route path="add-post" element={<AddPostPage />} />
          <Route path="edit-post/:postId" element={<EditPostPage />} />
          <Route path="post/:post-slug" element={<ReadPostPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
