import React from "react";

import Component1 from "./Component1";

import "@/components/Components/index.css";

const Button = () => {
  return (
    <div>
      <div className="component_big_title">
        返回顶部 <span>BackTop</span>
      </div>
      <Component1 />
    </div>
  );
};

export default Button;
