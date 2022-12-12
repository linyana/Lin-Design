import React from "react";
import ShowCode from "@/components/Components/ShowCode";
import { useSelector } from "react-redux";
import { codeState } from "@/store/Code";
import { RootState } from "@/store";

import "./index.css";

const Component2 = () => {
  const setting = useSelector((state: RootState) => state.setting);

  const code: codeState = {
    element: () => (
      <button
        className="button_compontent_button2"
        style={{
          border: "1px solid var(--bgColor01)",
          backgroundColor: "var(--bgColor01)",
          color: "var(--bgColor)",
          boxShadow: " 0 0 3px var(--bgColor03)",
        }}
      >
        简洁按钮
      </button>
    ),
    HTMLCode: (className: string) => `<button${
      className.trim() ? ` class="${className.replace(".", "")}"` : ""
    }>
  简洁按钮
</button>`,
    CSSCode: (
      bgColor: string,
      _color: string,
      hoverColor: string
    ) => `button${localStorage.getItem("class")} {
    cursor: pointer;
    padding: 12px 40px;
    background-color: transparent;
    border: 1px solid ${bgColor.replace(")", ", 0.1)")};
    outline: none;
    border-radius: 6px;
    box-shadow: 0 0 3px ${bgColor.replace(")", ", 0.3)")};
    transition: all 0.5s;
    color: ${bgColor};
    background-color: ${bgColor.replace(")", ", 0.1)")};
  }
  
  button${localStorage.getItem("class")}:hover {
    border: 1px solid ${hoverColor};
  }`,
    JSCode: `暂无`,
    VueHTMLCode: (className: string) => `<button${
      className.trim() ? ` class="${className.replace(".", "")}"` : ""
    }>
  简洁按钮
</button>`,
    VueJSCode: `暂无`,
    ReactHTMLCode: (
      className: string
    ) => `<button${
      className.trim() ? ` className="${className.replace(".", "")}"` : ""
    }>
  简洁按钮
</button>`,
    ReactJSCode: `暂无`,
    TSCode: `暂无`,
    VueTSCode: `暂无`,
    ReactTSCode: `暂无`,
  };

  return (
    <>
      <div className="compontent_title" id="concise_button">
        简洁按钮
      </div>
      <p className="compontent_p">颜色更简洁的按钮</p>
      <div className="component_box">
        <div className="compontent_box_content">
          <button className="button_compontent_button2">简洁按钮</button>
        </div>
        <ShowCode code={code} />
      </div>
    </>
  );
};

export default Component2;
