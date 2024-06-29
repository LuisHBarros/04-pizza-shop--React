import { createBrowserRouter } from "react-router-dom";
import { Dashboard } from "./pages/app/dashboard/dashboard";
import { SignIn } from "./pages/app/auth/sign-in";
import { AppLayout } from "./pages/_layouts/app";
import path from "path";
import { AuthLayout } from "./pages/_layouts/auth";
import { SignUp } from "./pages/app/auth/sign-up";
import { Order } from "./pages/app/orders/orders";
import { NotFound } from "./pages/404";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/orders",
        element: <Order />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "/auth/sign-in",
        element: <SignIn />,
      },
      {
        path: "/auth/sign-up",
        element: <SignUp />,
      },
    ],
  },
]);
