import React from "react";

import Component3 from "./Component3";

import "@/components/Components/index.css";

const Button = () => {
  return (
    <div>
      <div className="component_big_title">
        轮播图 <span>Slide</span>
      </div>
      <Component3 />
    </div>
  );
};

export default Button;