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
      return <Navigate to="/" />;
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
      children: [
        {
          path: "/",
          element: <LandingPage />,
        },
      ],
    },
  ]);

  // const router2 = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Outlet />,
  //     children: [
  //       {
  //         path: "/",
  //         element: <Login />,
  //       },
  //       {
  //         path: "/home",
  //         element: <Home />,
  //       },
  //     ],
  //   },
  // ]);

  // const Main = () => {
  //   return (
  //     <React.Fragment>
  //       <Typography>Main</Typography>
  //       <Outlet />
  //     </React.Fragment>
  //   );
  // };

  // const Child = () => {
  //   return (
  //     <React.Fragment>
  //       <Typography>Child</Typography>
  //       <Outlet />
  //     </React.Fragment>
  //   );
  // };

  // const InnerChild = () => {
  //   return (
  //     <React.Fragment>
  //       <Typography variant="body1">Hello</Typography>
  //     </React.Fragment>
  //   );
  // };

  // const AppRouter = () => {
  //   return (
  //     <Router>
  //       <Routes>
  //         <Route path="/" element={<Main />} />
  //         <Route path="child" element={<Child />} />
  //         <Route path="child/innerchild" element={<InnerChild />} />
  //       </Routes>
  //     </Router>
  //   );
  // };

  return (
    <div>
      <RouterProvider router={router} />
      {/* <AppRouter /> */}
    </div>
  );
}

export default MyApp;
