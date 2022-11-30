import React from "react";
import ShowCode from "@/components/Components/ShowCode";
import { codeState } from "@/store/Code";

import "./index.css";

const code: codeState = {
  element: () => (
    <div className="compontent_box_content">
      <button className="button_compontent_button2">简洁按钮</button>
    </div>
  ),
  HTMLCode: `<div className="compontent_box_content">
  <button className="button_compontent_button2">简洁按钮</button>
</div>  
`,
  CSSCode: `button.button_compontent_button2 {
  cursor: pointer;
  padding: 12px 40px;
  background-color: transparent;
  border: 1px solid rgb(174, 200, 230);
  outline: none;
  border-radius: 6px;
  box-shadow: 0 0 5px rgba(127, 173, 226, 0.3);
  transition: all 0.8s;
  color: rgb(47, 121, 206);
  background-color: rgba(92, 154, 226, 0.1);
}

button.button_compontent_button2:hover {
  border: 1px solid rgb(56, 137, 230);
}
`,
  JSCode: `暂无`,
  VueHTMLCode: `<div className="compontent_box_content">
  <button className="button_compontent_button2">简洁按钮</button>
</div>
`,
  VueJSCode: `暂无`,
  ReactHTMLCode: `<div className="compontent_box_content">
  <button className="button_compontent_button2">基本按钮</button>
</div>`,
  ReactJSCode: `暂无`,
  JSESCode: `暂无`,
  VueJSESCode: `暂无`,
  ReactJSESCode: `暂无`,
};

const Component2 = () => {
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
