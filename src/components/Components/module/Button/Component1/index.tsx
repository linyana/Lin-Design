import React from "react";
import ShowCode from "@/components/Components/ShowCode";
import { codeState } from "@/store/Code";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

import "./index.css";

const Component1 = () => {

  const bgColor = useSelector((state: RootState) => state.setting.bgColor)

  const code: codeState = {
    element: () => (
      <button
        className="button_compontent_button1"
        style={{ backgroundColor: 'var(--bgColor)', boxShadow: 'var(--bgColor03)' }}
      >
        基本按钮
      </button>
    ),
    HTMLCode: `<button class="button_compontent_button1">
  基本按钮
</button>`,
    CSSCode: (bgColor: string) => {
      return `button.button_compontent_button1 {
        cursor: pointer;
        padding: 12px 40px;
        background-color: ${bgColor};
        border: none;
        outline: none;
        border-radius: 6px;
        color: white;
        box-shadow: 0 0 5px ${bgColor.replace(')',', 0.3)')};
        transition: all 0.5s;
      }
      
      button.button_compontent_button1:hover {
        background-color: rgb(56, 137, 230);
      }
        `
    },
    JSCode: `暂无`,
    VueHTMLCode: `<button class="button_compontent_button1">
  基本按钮
</button>`,
    VueJSCode: `暂无`,
    ReactHTMLCode: `<button className="button_compontent_button1">
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
