import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

import "./index.css";

const Middle = () => {
  const element = useSelector((state: RootState) => state.codeBox.element);
  return (
    <div className="code_box_middle">
      <div className="code_box_middle_content">
        {element()}
      </div>
    </div>
  );
};

export default Middle;
