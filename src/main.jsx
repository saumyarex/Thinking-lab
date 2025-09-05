import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import HomePage from "./pages/HomePage.jsx";
import SignupPage from "./pages/SignupPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import AddPostPage from "./pages/AddPostPage.jsx";
import EditPostPage from "./pages/EditPostPage.jsx";
import EditUserDetailsPage from "./pages/EditUserDetailsPage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import { Provider } from "react-redux";
import store from "./store/store.js";
import ReadPostPage from "./pages/ReadPostPage.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AuthLayout from "./components/AuthLayout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: "",
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "login",
        element: (
          <AuthLayout authentication={false}>
            <LoginPage />
          </AuthLayout>
        ),
      },
      {
        path: "register",
        element: (
          <AuthLayout authentication={false}>
            <SignupPage />
          </AuthLayout>
        ),
      },
      {
        path: "user/:username/:userID",
        element: <ProfilePage />,
      },
      {
        path: "user-update",
        element: (
          <AuthLayout authentication={true}>
            <EditUserDetailsPage />
          </AuthLayout>
        ),
      },
      {
        path: "add-post",
        element: (
          <AuthLayout authentication={true}>
            <AddPostPage />
          </AuthLayout>
        ),
      },
      {
        path: "edit-post/:postId",
        element: (
          <AuthLayout authentication={true}>
            <EditPostPage />
          </AuthLayout>
        ),
      },
      {
        path: "post/:slug/:postId",
        element: <ReadPostPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);

{
  /* <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="register" element={<SignupPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="user/:username/:userID" element={<ProfilePage />} />
          <Route path="user-update" element={<EditUserDetailsPage />} />
          <Route path="add-post" element={<AddPostPage />} />
          <Route path="edit-post/:postId" element={<EditPostPage />} />
          <Route path="post/:slug/:postId" element={<ReadPostPage />} />
        </Routes>
      </BrowserRouter> */
}
