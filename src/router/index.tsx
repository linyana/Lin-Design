import { lazy } from "react";
import { RouteObject, Navigate } from "react-router-dom";

// 一级菜单
const Home = lazy(() => import("@/pages/Home"));
const Main = lazy(() => import("@/pages/Main"));

// 二级菜单
const Overview = lazy(() => import("@/components/Components/module/Overview"));
const Input = lazy(() => import("@/components/Components/module/Input"));
const Button = lazy(() => import("@/components/Components/module/Button"));
const Card = lazy(() => import("@/components/Components/module/Card"));
const Plate = lazy(() => import("@/components/Components/module/Plate"));
const Layout = lazy(() => import("@/components/Components/module/Layout"));
const Content = lazy(() => import("@/components/Components/module/Content"));
const Title = lazy(() => import("@/components/Components/module/Title"));
const Slide = lazy(() => import("@/components/Components/module/Slide"));
const Switch = lazy(() => import("@/components/Components/module/Switch"));


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
        path: "overview",
        element: <Overview />
      },
      {
       path: "input",
       element: <Input />, 
      },
      {
        path: "button",
        element: <Button />,
      },
      {
        path: "plate",
        element: <Plate />,
      },
      {
        path: "card",
        element: <Card />,
      },
      {
        path: "layout",
        element: <Layout />,
      },
      {
        path: "content",
        element: <Content />
      },
      {
        path: "title",
        element: <Title />
      },
      {
        path: "slide",
        element: <Slide />
      },
      {
        path: "switch",
        element: <Switch />
      }
    ]
  },
  {
    path: "/",
    element: <Navigate to={"/home"} />,
  },
];

export default routes;
