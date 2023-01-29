
import React from "react";

import Component1 from "./Component1";

import "@/components/Components/index.css";

const ScrollBar = () => {
  return (
    <div>
      <div className="component_big_title">
        滚动条 <span>ScrollBar</span>
      </div>
      <Component1 />
    </div>
  );
};

export default ScrollBar;
