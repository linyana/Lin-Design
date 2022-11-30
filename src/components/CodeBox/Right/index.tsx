import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

import "./index.css";

const Right = () => {
  const code = useSelector((state: RootState) => state.codeBox);

  // 初始化copy选项
  useEffect(() => {
    const copys = document.querySelectorAll(".copy");
    for (let i = 0; i < copys.length; i++) {
      copys[i].innerHTML = "复制";
    }
  });

  // 点击复制
  const getCopyText = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    content: string
  ) => {
    navigator.clipboard.writeText(content);
    const box = event.target as HTMLElement;
    box.innerHTML = "已复制";
  };

  return (
    <div className="code_box_right">
      <pre className="HTML">
        <div
          className="copy"
          onClick={(event) => {
            getCopyText(event, code.HTMLCode);
          }}
        >
          复制
        </div>
        {code.HTMLCode}
      </pre>
      <pre className="CSS">
        <div
          className="copy"
          onClick={(event) => {
            getCopyText(event, code.CSSCode);
          }}
        >
          复制
        </div>
        {code.CSSCode}
      </pre>
      <pre className="JS">
        <div
          className="copy"
          onClick={(event) => {
            getCopyText(event, code.JSCode);
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
