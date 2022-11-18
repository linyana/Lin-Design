import React from "react";

import Header from "@/components/Header";
import Middle from "@/components/Middle";

import "./index.css";

const Home = () => {
  return (
    <>
      <Header></Header>
      <div className="home_content">
        <Middle></Middle>
      </div>
    </>
  );
};

export default Home;
