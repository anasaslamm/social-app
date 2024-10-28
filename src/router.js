//  import { Button } from "@mui/material";
import React from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";

import {
  BrowserRouter as Router,
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import { useAuthContext } from "./providers/auth/useAuthContext";
import Home from "./pages/Home";
import ForgetPassword from "./pages/ForgetPassword";
import LandingPage from "./pages/LandingPage";
import { Typography } from "@mui/material";
import ErrorPage from "./pages/error-page";

const Profile = () => {
  return <>This is profile</>;
};

function MyApp() {
  const { user, isLoaded } = useAuthContext();
  console.log(user);
  const Layout = () => {
    return (
      <div>
        <Outlet />
      </div>
    );
  };

  const ProtectedRoute = ({ children }) => {
    console.log("p.route", user);
    if (!user) {
      return <Navigate to="/auth/login" />;
    }

    return children;
  };

  const GuestRoute = ({ children }) => {
    console.log("p.route", user);
    if (user) {
      return <Navigate to="/app/home" />;
    }

    return children;
  };

  const PublicRoute = ({ children }) => {
    console.log("p.route", user);
    if (user) {
      return <Navigate to="/app/home" />;
    }

    return children;
  };

  const router = createBrowserRouter([
    {
      path: "/app",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      errorElement: <ErrorPage />,
      children: [
        {
          path: "home",
          element: <Home />,
        },
        {
          path: "profile/:id",
          element: <Profile />,
        },
      ],
    },
    {
      path: "/auth",
      element: (
        <GuestRoute>
          <Layout />
        </GuestRoute>
      ),
      errorElement: <ErrorPage />,
      children: [
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "register",
          element: <Register />,
        },
        {
          path: "forgetpassword",
          element: <ForgetPassword />,
        },
      ],
    },
    {
      path: "/",
      element: (
        <PublicRoute>
          <Layout />
        </PublicRoute>
      ),
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <LandingPage />,
        },
      ],
    },
  ]);

  const AppRouter = () => {
    return (
      <Router>
        <Routes>
          <Route
            path="/app/*"
            element={
              <ProtectedRoute>
                <Routes>
                  <Route path="home" element={<Home />} />
                  <Route path="profile/:id" element={<Profile />} />
                </Routes>
              </ProtectedRoute>
            }
          />

          <Route
            path="/auth/*"
            element={
              <GuestRoute>
                <Routes>
                  <Route path="login" element={<Login />} />
                  <Route path="register" element={<Register />} />
                  <Route path="forgetpassword" element={<ForgetPassword />} />
                </Routes>
              </GuestRoute>
            }
          />

          <Route path="/" element={<LandingPage />} />
        </Routes>
      </Router>
    );
  };

  return (
    <div>
      {/* <RouterProvider router={router} /> */}
      <AppRouter />
    </div>
  );
}

export default MyApp;
