import React from "react";

import Header from "@/components/Header";
import Left from "@/components/Main/Left";
import Middle from "@/components/Main/Middle";
import Right from "@/components/Main/Right";

import "./index.css";

const Main = () => {
  return (
    <>
      <Header />
      <div className="main_content flex_between">
        <Left />
        <Middle />
        <Right />
      </div>
    </>
  );
};

export default Main;
