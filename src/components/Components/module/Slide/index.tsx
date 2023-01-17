import React from "react";

import Component3 from "./Component3";
import Component4 from "./Component4"

import "@/components/Components/index.css";

const Button = () => {
  return (
    <div>
      <div className="component_big_title">
        轮播图 <span>Slide</span>
      </div>
      <Component3 />
      <Component4 />
    </div>
  );
};

export default Button;