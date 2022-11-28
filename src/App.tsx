import React, { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import Routes from "@/router";

import Loading from "@/components/Loading";

import "./App.css";

const App = () => {
  const route = useRoutes(Routes);
  return (
    <>
      <Suspense fallback={<Loading />}>{route}</Suspense>
    </>
  );
};

export default App;
