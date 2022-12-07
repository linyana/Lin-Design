import React from "react";
import ShowCode from "@/components/Components/ShowCode";
import { codeState } from "@/store/Code";

import "./index.css";

const code: codeState = {
  element: () => (
    <button
      className="button_compontent_button2"
      style={{ border: "1px solid var(--bgColor)",backgroundColor: "var(--bgColor01)",color: "var(--bgColor)", boxShadow: "var(--bgColor03)" }}
    >
      简洁按钮
    </button>
  ),
  HTMLCode: `<button class="button_compontent_button2">
  简洁按钮
</button>`,
  CSSCode: (bgColor: string) => `button.button_compontent_button2 {
      cursor: pointer;
      padding: 12px 40px;
      background-color: transparent;
      border: 1px solid ${bgColor};
      outline: none;
      border-radius: 6px;
      box-shadow: 0 0 5px ${bgColor.replace(')',', 0.3)')};
      transition: all 0.5s;
      color: ${bgColor};
      background-color:  ${bgColor.replace(')',', 0.1)')};
    }
    
    button.button_compontent_button2:hover {
      border: 1px solid ${bgColor.replace(')',', 0.8)')}';
    }
    `,
  JSCode: `暂无`,
  VueHTMLCode: `<button class="button_compontent_button2">
  简洁按钮
</button>`,
  VueJSCode: `暂无`,
  ReactHTMLCode: `<button className="button_compontent_button2">
  基本按钮
</button>`,
  ReactJSCode: `暂无`,
  TSCode: `暂无`,
  VueTSCode: `暂无`,
  ReactTSCode: `暂无`,
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
