import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

import "./index.css";

const Middle = () => {

  const element = useSelector((state: RootState) => state.codeBox.element);
  const setting = useSelector((state: RootState) => state.setting);
  document.body.style.setProperty("--bgColor", setting.bgColor);
  document.body.style.setProperty("--bgColor01", setting.bgColor.replace(')',', 0.1)'));
  document.body.style.setProperty("--bgColor03", setting.bgColor.replace(')',', 0.3)'));
  document.body.style.setProperty("--bgColor08", setting.bgColor.replace(')',', 0.8)'));
  
  return (
    <div className="code_box_middle">
      <div className="code_box_middle_content">
        {element()}
      </div>
    </div>
  );
};

export default Middle;
