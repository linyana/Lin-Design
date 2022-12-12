import React from "react";
import ShowCode from "@/components/Components/ShowCode";
import { codeState } from "@/store/Code";

import "./index.css";

const Component1 = () => {
  const code: codeState = {
    element: () => (
      <button className="button_compontent_button1">基本按钮</button>
    ),
    HTMLCode: (className: string) => `<button${
      className.trim() ? ` class="${className.replace(".", "")}"` : ""
    }>
  基本按钮
</button>`,
    CSSCode: (bgColor: string, color: string, hoverColor: string) => {
      return `button${localStorage.getItem("class")} {
        cursor: pointer;
        padding: 12px 40px;
        background-color: ${bgColor};
        border: none;
        outline: none;
        border-radius: 6px;
        color: ${color};
        box-shadow: 0 0 5px ${bgColor.replace(")", ", 0.3)")};
        transition: all 0.5s;
      }
      
      button${localStorage.getItem("class")}:hover {
        background-color:${hoverColor};
      }
        `;
    },
    JSCode: `暂无`,
    VueHTMLCode: (className: string) => `<button${
      className.trim() ? ` class="${className.replace(".", "")}"` : ""
    }>
  基本按钮
</button>`,
    VueJSCode: `暂无`,
    ReactHTMLCode: (className: string) => `<button${
      className.trim() ? ` className="${className.replace(".", "")}"` : ""
    }>
  基本按钮
</button>`,
    ReactJSCode: `暂无`,
    TSCode: `暂无`,
    VueTSCode: `暂无`,
    ReactTSCode: `暂无`,
  };

  return (
    <>
      <div className="compontent_title" id="basic_button">
        基本按钮
      </div>
      <p className="compontent_p">最基本的按钮样式</p>
      <div className="component_box">
        <div className="compontent_box_content">
          <button className="button_compontent_button1">基本按钮</button>
        </div>
        <ShowCode code={code} />
      </div>
    </>
  );
};

export default Component1;
