import React, { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import Routes from "@/router";
import { useSelector } from "react-redux";
import { RootState } from "./store";

import Loading from "@/components/Loading";
import CodeBox from "@/components/CodeBox";

import "./App.css";

const App = () => {
  const route = useRoutes(Routes);
  const isCodeBoxShow = useSelector(
    (state: RootState) => state.isCodeBoxShow.isCodeBoxShow
  );
  return (
    <>
      <div style={{ display: isCodeBoxShow ? "block" : "none" }}>
        <CodeBox></CodeBox>
      </div>
      <Suspense fallback={<Loading />}>{route}</Suspense>
    </>
  );
};

export default App;
