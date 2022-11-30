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

  // 判断应该显示的代码
  const setCodeContent = ():void => {
    if (setting.kind === "HTML") {
      sethtml(code.HTMLCode);
      if (setting.version === "Normal") {
        setjs(code.JSCode);
      } else {
        setjs(code.JSESCode);
      }
    } else if (setting.kind === "Vue") {
      sethtml(code.VueHTMLCode);
      if (setting.version === "Normal") {
        setjs(code.VueJSCode);
      } else {
        setjs(code.VueJSESCode);
      }
    } else {
      if (setting.kind === "React") {
        sethtml(code.ReactHTMLCode);
        if (setting.version === "Normal") {
          setjs(code.ReactJSCode);
        } else {
          setjs(code.ReactJSESCode);
        }
      }
    }
    setcss(code.CSSCode);
  };

  // 初始化copy选项
  useEffect(() => {
    const copys = document.querySelectorAll(".copy");
    for (let i = 0; i < copys.length; i++) {
      copys[i].innerHTML = "复制";
    }

    setCodeContent();
  },[setting.kind,setting.version,[]]);

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
