import React from "react";

import Component1 from "./Component1";
import Component2 from "./Component2";

import "@/components/Components/index.css";

const Button = () => {
  return (
    <div>
      <div className="component_big_title">
        内容 <span>Layout</span>
      </div>
      <Component1 />
      <Component2 />
    </div>
  );
};

export default Button;
