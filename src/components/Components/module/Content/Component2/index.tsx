import React from "react";
import ShowCode from "@/components/Components/ShowCode";
import { codeState } from "@/store/Code";

import "./index.css";

import img from "@/assets/images/normal/img.jpg";

const Component1 = () => {
  const code: codeState = {
    element: () => (
      <div className="component_content_content2">
        <img src={img} alt="请添加图片" />
        <div className="text">
          <div className="text_content">
            <h2>内容</h2>
            <p>
              我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容。
            </p>
          </div>
        </div>
      </div>
    ),
    HTMLCode: (className: string) => `<div${
      className.trim() ? ` class="${className.replace(".", "")}"` : ""
    }>
  <img src={img} alt="请添加图片" />
  <div class="text">
    <h2>内容</h2>
    <p>
      我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容。
    </p>
  </div>
</div>`,
    CSSCode: (
      className: string,
      bgColor: string,
      color: string,
      hoverColor: string
    ) => {
      return `div${className} {
  position: relative;
}

div${className} img {
  width: 70%;
}

div${className} .text {
  position: absolute;
  right: 5%;
  top: 5%;
  width: 50%;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${bgColor};
}

div${className} .text_content {
  padding: 0 10%;
}

div${className} h2 {
  text-align: center;
  margin-bottom: 30px;
  color: ${color};
}

div${className} p {
  text-indent: 2em;
  line-height: 28px;
  letter-spacing: 0.3px;
  color: ${color};
}`;
    },
    JSCode: `暂无`,
    VueHTMLCode: (className: string) => `<div${
      className.trim() ? ` class="${className.replace(".", "")}"` : ""
    }>
  <img src={img} alt="请添加图片" />
  <div class="text">
    <div class="text_content">
      <h2>内容</h2>
      <p>
        我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容。
      </p>
    </div>
  </div>
</div>`,
    VueJSCode: `暂无`,
    ReactHTMLCode: (className: string) => `<div${
      className.trim() ? ` className="${className.replace(".", "")}"` : ""
    }>
    <img src={img} alt="请添加图片" />
    <div className="text">
      <div className="text_content">
        <h2>内容</h2>
        <p>
          我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容。
        </p>
      </div>
    </div>
  </div>
</div>`,
    ReactJSCode: `暂无`,
    TSCode: `暂无`,
    VueTSCode: `暂无`,
    ReactTSCode: `暂无`,
  };

  return (
    <>
      <div className="compontent_title" id="basic_button">
        图文2
      </div>
      <div className="component_box">
        <div className="compontent_box_content1">
          <div className="component_content_content2">
            <img src={img} alt="请添加图片" />
            <div className="text" style={{backgroundColor: 'rgb(224,184,120)'}}>
              <div className="text_content">
                <h2 style={{color: 'rgb(248, 248, 248)'}}>内容</h2>
                <p style={{color: 'rgb(248, 248, 248)'}}>
                  我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容。
                </p>
              </div>
            </div>
          </div>
        </div>
        <ShowCode code={code} />
      </div>
    </>
  );
};

export default Component1;
