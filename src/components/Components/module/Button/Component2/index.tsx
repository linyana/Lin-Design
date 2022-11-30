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
  HCode: `\t<span class="component_box_content">\n\t\t<span class="button_compontent_button2">基本按钮</span></span>`,
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
