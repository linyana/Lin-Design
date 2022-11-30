import { spawn } from "child_process";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

import "./index.css";

const Right = () => {
  const code = useSelector((state: RootState)=>state.codeBox)
  return (
    <div className="code_box_right">
      <div className="copy"></div>
      <pre className="HTML">
        {code.HCode}
      </pre>
    </div>
  );
};

export default Right;
