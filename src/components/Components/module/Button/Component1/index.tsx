import React from "react";
import ShowCode from "@/components/Components/ShowCode";
import { codeState } from "@/store/Code";

import "./index.css";

const code: codeState = {
  element: () => (
    <div className="compontent_box_content">
      <button className="button_compontent_button1">基本按钮</button>
    </div>
  ),
  HTMLCode: `<div class="component_box_content">
  <div class="button_compontent_button1">
    基本按钮
  </div>
</div>`,
  CSSCode: `button.button_compontent_button1 {
  cursor: pointer;
  padding: 12px 40px;
  background-color: rgb(47, 121, 206);
  border: none;
  outline: none;
  border-radius: 6px;
  color: white;
  box-shadow: 0 0 5px rgba(32, 105, 189, 0.3);
  transition: all 0.8s;
}

button.button_compontent_button1:hover {
  background-color: rgb(56, 137, 230);
}
  `,
  JSCode: `暂无`,
  VueHTMLCode: `<div class="component_box_content">
  <div class="button_compontent_button1">
    基本按钮
  </div>
</div>`,
  VueJSCode: `暂无`,
  ReactHTMLCode: `<div className="compontent_box_content">
  <button className="button_compontent_button1">基本按钮</button>
</div>`,
  ReactJSCode: `暂无`,
  JSESCode: `暂无`,
  VueJSESCode: `暂无`,
  ReactJSESCode: `暂无`,
};

const Component1 = () => {
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
