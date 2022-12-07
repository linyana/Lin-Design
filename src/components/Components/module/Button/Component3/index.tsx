import React from "react";
import ShowCode from "@/components/Components/ShowCode";

import { codeState } from "@/store/Code";

import "./index.css";

const code: codeState = {
  element: () => (
    <button
      className="button_compontent_button3"
      style={{ backgroundColor: "var(--bgColor)", boxShadow: "var(--bgColor03)"}}
    >
      圆角按钮
    </button>
  ),
  HTMLCode: `<div className="compontent_box_content">
  <button className="button_compontent_button3">圆角按钮</button>
</div>`,
  CSSCode: (bgColor: string) => `button.button_compontent_button3 {
  cursor: pointer;
  padding: 12px 40px;
  background-color: ${bgColor};
  border: none;
  outline: none;
  border-radius: 100px;
  color: white;
  box-shadow: 0 0 5px ${bgColor.replace(')',', 0.3)')};
  transition: all 0.5s;
}
    
button.button_compontent_button3:hover {
  background-color: ${bgColor.replace(')',', 0.8)')};
}`,
  JSCode: `暂无`,
  VueHTMLCode: `<div class="compontent_box_content">
  <button class="button_compontent_button3">圆角按钮</button>
</div>`,
  VueJSCode: `暂无`,
  ReactHTMLCode: `<div class="compontent_box_content">
  <button class="button_compontent_button3">基本按钮</button>
</div>`,
  ReactJSCode: `暂无`,
  TSCode: `暂无`,
  VueTSCode: `暂无`,
  ReactTSCode: `暂无`,
};

const Component3 = () => {
  return (
    <>
      <div className="compontent_title" id="rounded_corners_button">
        圆角按钮
      </div>
      <p className="compontent_p">圆角按钮样式</p>
      <div className="component_box">
        <div className="compontent_box_content">
          <button className="button_compontent_button3">圆角按钮</button>
        </div>
        <ShowCode code={code} />
      </div>
    </>
  );
};

export default Component3;
