import React from "react";
import ShowCode from "@/components/Components/ShowCode";

import { codeState } from "@/store/Code";

import "./index.css";

const code: codeState = {
  element: () => (
    <div className="compontent_box_content">
      <button className="button_compontent_button3">圆角按钮</button>
    </div>
  ),
  HTMLCode: `<div className="compontent_box_content">
  <button className="button_compontent_button3">圆角按钮</button>
</div>`,
  CSSCode: `button.button_compontent_button3 {
  cursor: pointer;
  padding: 12px 40px;
  background-color: rgb(47, 121, 206);
  border: none;
  outline: none;
  border-radius: 100px;
  color: white;
  box-shadow: 0 0 5px rgba(32, 105, 189, 0.3);
  transition: all 0.8s;
}

button.button_compontent_button3:hover {
  background-color: rgb(56, 137, 230);
}
`,
  JSCode: `暂无`,
  VueHTMLCode: `<div className="compontent_box_content">
  <button className="button_compontent_button3">圆角按钮</button>
</div>`,
  VueJSCode: `暂无`,
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
