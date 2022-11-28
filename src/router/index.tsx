import { lazy } from "react";
import { RouteObject, Navigate } from "react-router-dom";

const Home = lazy(() => import("@/pages/Home"));
const Main = lazy(() => import("@/pages/Main"));

const routes: RouteObject[] = [
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/components",
    element: <Main />,
  },
  {
    path: "/",
    element: <Navigate to={"/home"} />,
  },
];

export default routes;
