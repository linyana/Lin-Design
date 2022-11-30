import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

import "./index.css";

const Right = () => {
  const code = useSelector((state: RootState) => state.codeBox);

  const [html, sethtml] = useState<string>(code.HTMLCode);
  const [css, setcss] = useState<string>(code.CSSCode);
  const [js, setjs] = useState<string>(code.JSCode);

  const setting = useSelector((state: RootState) => state.setting);

  const setCodeContent = () => {
    if ((setting.kind === "HTML")) {
      sethtml(code.HTMLCode);
    }else if(setting.kind === "Vue"){
      sethtml(code.VueHTMLCode)
    }
    setcss(code.CSSCode);
    setjs(code.JSCode);
  };


  // 初始化copy选项
  useEffect(() => {
    const copys = document.querySelectorAll(".copy");
    for (let i = 0; i < copys.length; i++) {
      copys[i].innerHTML = "复制";
    }

    setCodeContent();
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
        {html}
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
        {css}
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
        {js}
      </pre>
    </div>
  );
};

export default Right;
