//  import { Button } from "@mui/material";
import React from "react";
import Login from "./pages/Login";

import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
  useNavigate,
} from "react-router-dom";
import { useAuthContext } from "./providers/auth/useAuthContext";
import Home from "./pages/Home";

const Profile = () => {
  return <>This is profile</>;
};
const Register = () => {
  return <>This is register</>;
};

function App() {
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
      return <Navigate to="/login" />;
    }

    return children;
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/profile/:id",
          element: <Profile />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
