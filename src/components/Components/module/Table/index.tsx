import React from "react";

import Component1 from "./Component1";
import Component2 from "./Component2";

import "@/components/Components/index.css";

const Table = () => {
  return (
    <div>
      <div className="component_big_title">
        表格 <span>Table</span>
      </div>
      <Component1 />
      <Component2 />
    </div>
  );
};

export default Table;
