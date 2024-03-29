import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

import "./index.css";

const Middle = () => {
  const element = useSelector((state: RootState) => state.codeBox.element);
  const setting = useSelector((state: RootState) => state.setting);
  if (setting.bgColor) {
    document.body.style.setProperty("--bgColor", setting.bgColor);
    document.body.style.setProperty(
      "--bgColor01",
      setting.bgColor.replace(")", ", 0.1)")
    );
    document.body.style.setProperty(
      "--bgColor03",
      setting.bgColor.replace(")", ", 0.3)")
    );
    document.body.style.setProperty(
      "--bgColor08",
      setting.bgColor.replace(")", ", 0.8)")
    );
    document.body.style.setProperty(
      "--bgColor05",
      setting.bgColor.replace(")", ", 0.5)")
    );
    document.body.style.setProperty("--color", setting.color);
    document.body.style.setProperty("--hoverColor", setting.hoverColor);
    document.body.style.setProperty(
      "--hoverColor05",
      setting.hoverColor.replace(")", ", 0.5)")
    );
  }

  if (localStorage.getItem("class") === null) {
    localStorage.setItem("class", "");
  }

  return (
    <div className="code_box_middle">
     {element()}
    </div>
  );
};

export default Middle;
