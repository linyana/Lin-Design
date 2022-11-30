import { spawn } from "child_process";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

import "./index.css";

const Right = () => {
  const code = useSelector((state: RootState) => state.codeBox);

  const getCopyText = (content: string) => {
    navigator.clipboard.writeText(content);
  };

  return (
    <div className="code_box_right">
      <pre className="HTML">
        <div
          className="copy"
          onClick={() => {
            getCopyText(code.HTMLCode);
          }}
        >
          复制
        </div>
        {code.HTMLCode}
      </pre>
      <pre className="CSS">
        <div
          className="copy"
          onClick={() => {
            getCopyText(code.CSSCode);
          }}
        >
          复制
        </div>
        {code.CSSCode}
      </pre>
      <pre className="JS">
        <div
          className="copy"
          onClick={() => {
            getCopyText(code.JSCode);
          }}
        >
          复制
        </div>
        {code.JSCode}
      </pre>
    </div>
  );
};

export default Right;
