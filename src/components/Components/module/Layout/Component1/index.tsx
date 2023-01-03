import React from "react";
import ShowCode from "@/components/Components/ShowCode";
import { codeState } from "@/store/Code";

import "./index.css";

const Component1 = () => {
  const code: codeState = {
    element: () => <div className="layout_component1_content1">content</div>,
    HTMLCode: (className: string) => `<div${
      className.trim() ? ` class="${className.replace(".", "")}"` : ""
    }>
  content
</div>`,
    CSSCode: (
      className: string,
      bgColor: string,
      color: string,
      hoverColor: string
    ) => {
      return `${className === ''?'div':className} {
  margin: auto;
  min-height: 200px;
  background-color: rgb(225, 227, 238);
  padding: 10px;
}
        `;
    },
    JSCode: () => `暂无`,
    VueHTMLCode: (className: string) => `<div${
      className.trim() ? ` class="${className.replace(".", "")}"` : ""
    }>
  content
</div>`,
    VueJSCode: () => `暂无`,
    ReactHTMLCode: (className: string) => `<div${
      className.trim() ? ` className="${className.replace(".", "")}"` : ""
    }>
  content
</div>`,
    ReactJSCode: () => `暂无`,
    TSCode: () => `暂无`,
    VueTSCode: () => `暂无`,
    ReactTSCode: () => `暂无`,
  };

  return (
    <>
      <div className="compontent_title" id="basic_button">
        基本布局
      </div>
      <p className="compontent_p">利用margin来进行居中,建议自行设置宽度。</p>
      <div className="component_box">
        <div className="compontent_box_content">
          <div className="layout_component1_content1">content</div>
        </div>
        <ShowCode code={code} />
      </div>
    </>
  );
};

export default Component1;
