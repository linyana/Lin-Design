import { lazy } from "react";
import { RouteObject, Navigate } from "react-router-dom";

// 一级菜单
const Home = lazy(() => import("@/pages/Home"));
const Main = lazy(() => import("@/pages/Main"));

// 二级菜单
const Input = lazy(() => import("@/components/Components/module/Input"));
const Button = lazy(() => import("@/components/Components/module/Button"));
const Card = lazy(() => import("@/components/Components/module/Card"));
const Typography = lazy(() => import("@/components/Components/module/Typography"));
const Layout = lazy(() => import("@/components/Components/module/Layout"));

const routes: RouteObject[] = [
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/components",
    element: <Main />,
    children: [
      {
       path: "input",
       element: <Input/>, 
      },
      {
        path: "button",
        element: <Button />,
      },
      {
        path: "typography",
        element: <Typography/>,
      },
      {
        path: "card",
        element: <Card />,
      },
      {
        path: "layout",
        element: <Layout />,
      }
    ]
  },
  {
    path: "/",
    element: <Navigate to={"/home"} />,
  },
];

export default routes;
