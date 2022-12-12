import React from "react";
import ShowCode from "@/components/Components/ShowCode";
import { codeState } from "@/store/Code";

import "./index.css";

const Component1 = () => {
  const code: codeState = {
    element: () => (
      <div className="layout_component2">
        <div className="head">nav</div>
        <div className="content">content</div>
        <div className="foot">footer</div>
      </div>
    ),
    HTMLCode: (className: string) => `<div${
      className.trim() ? ` class="${className.replace(".", "")}"` : ""
    }>
  <div className="head">nav</div>
  <div className="content">content</div>
  <div className="foot">footer</div>
</div>`,
    CSSCode: (bgColor: string, color: string, hoverColor: string) => {
      return `div${localStorage.getItem("class")} {
  width: 100%;
  height: 400px;
}

div${localStorage.getItem("class")}.layout_component2_content1 {
  height: 25%;
  background-color: rgb(215, 217, 228);
}

div${localStorage.getItem("class")} .layout_component2_content2 {
  height: 50%;
  background-color: rgb(225, 227, 238);
}

div${localStorage.getItem("class")} .layout_component2_content3 {
  height: 25%;
  background-color: rgb(215, 217, 228);
}
        `;
    },
    JSCode: `暂无`,
    VueHTMLCode: (className: string) => `<div${
      className.trim() ? ` class="${className.replace(".", "")}"` : ""
    }>
  <div className="head">nav</div>
  <div className="content">content</div>
  <div className="foot">footer</div>
</div>`,
    VueJSCode: `暂无`,
    ReactHTMLCode: (className: string) => `<div${
      className.trim() ? ` className="${className.replace(".", "")}"` : ""
    }>
  <div className="head">nav</div>
  <div className="content">content</div>
  <div className="foot">footer</div>
</div>`,
    ReactJSCode: `暂无`,
    TSCode: `暂无`,
    VueTSCode: `暂无`,
    ReactTSCode: `暂无`,
  };

  return (
    <>
      <div className="compontent_title" id="basic_button">
        基本布局2
      </div>
      <p className="compontent_p">
        利用margin来进行居中,可以给他添加宽度,划分了头部和底部。
      </p>
      <div className="component_box">
        <div className="compontent_box_content">
          <div className="layout_component2">
            <div className="head">nav</div>
            <div className="content">content</div>
            <div className="foot">footer</div>
          </div>
        </div>
        <ShowCode code={code} />
      </div>
    </>
  );
};

export default Component1;
