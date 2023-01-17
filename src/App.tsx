import React, { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import Routes from "@/router";


import Loading from "@/components/Loading";
import CodeBox from "@/components/CodeBox";

import "./App.css";

const App = () => {
  const route = useRoutes(Routes);
  return (
    <>
      <div >
        <CodeBox></CodeBox>
      </div>
      <Suspense fallback={<Loading />}>{route}</Suspense>
    </>
  );
};

export default App;
