import React from "react";

import Header from "@/components/Header";
import HomeMiddle from "@/components/HomeMiddle";

import "./index.css";

const Home = () => {
  return (
    <>
      <Header></Header>
      <div className="home_content">
        <HomeMiddle></HomeMiddle>
      </div>
    </>
  );
};

export default Home;
