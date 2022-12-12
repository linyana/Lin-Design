import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

import "./index.css";

const Right = () => {
  const code = useSelector((state: RootState) => state.codeBox);
  const setting = useSelector((state: RootState) => state.setting);

  const [html, sethtml] = useState<string>(code.HTMLCode);
  const [css, setcss] = useState(
    code.CSSCode(setting.bgColor, setting.color, setting.hoverColor)
  );
  const [js, setjs] = useState<string>(code.JSCode);

  // 判断应该显示的代码
  const setCodeContent = (): void => {
    if (setting.kind === "HTML") {
      sethtml(code.HTMLCode);
      if (setting.format === "JavaScript") {
        setjs(code.JSCode);
      } else {
        setjs(code.TSCode);
      }
    } else if (setting.kind === "Vue") {
      sethtml(code.VueHTMLCode);
      if (setting.format === "JavaScript") {
        setjs(code.VueJSCode);
      } else {
        setjs(code.VueTSCode);
      }
    } else {
      if (setting.kind === "React") {
        sethtml(code.ReactHTMLCode);
        if (setting.format === "JavaScript") {
          setjs(code.ReactJSCode);
        } else {
          setjs(code.ReactTSCode);
        }
      }
    }
    setcss(code.CSSCode(setting.bgColor, setting.color, setting.hoverColor));
  };

  // 初始化copy选项
  useEffect(() => {
    const copys = document.querySelectorAll(".copy");
    for (let i = 0; i < copys.length; i++) {
      copys[i].innerHTML = "复制";
    }

    setCodeContent();
  }, [setting.kind, setting.format, []]);

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
      <div className="pre">
        <div
          className="copy"
          onClick={(event) => {
            getCopyText(event, code.HTMLCode);
          }}
        >
          复制
        </div>
        <pre className="HTML">{html}</pre>
      </div>
      <div className="pre">
        <div
          className="copy"
          onClick={(event) => {
            getCopyText(event, code.CSSCode(setting.bgColor, setting.color, setting.hoverColor));
          }}
        >
          复制
        </div>
        <pre className="CSS">{css}</pre>
      </div>
      <div className="pre">
        <div
          className="copy"
          onClick={(event) => {
            getCopyText(event, code.JSCode);
          }}
        >
          复制
        </div>
        <pre className="JS">{js}</pre>
      </div>
    </div>
  );
};

export default Right;
