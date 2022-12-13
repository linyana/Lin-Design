import React from "react";
import ShowCode from "@/components/Components/ShowCode";
import { codeState } from "@/store/Code";

import "./index.css";

import img from "@/assets/images/normal/img2.jpg";

const Component1 = () => {
  const code: codeState = {
    element: () => (
      <div className="component_content_content1">
        <img src={img} alt="请添加图片" />
        <div className="text">
          <h2>内容</h2>
          <p>
            我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容。
          </p>
        </div>
      </div>
    ),
    HTMLCode: (className: string) => `<div${
      className.trim() ? ` class="${className.replace(".", "")}"` : ""
    }>
  <img src={img} alt="请添加图片" />
  <div className="text">
    <h2>内容</h2>
    <p>
      我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容。
    </p>
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
  overflow: hidden;
  margin: 20px 0;
}

div${className} img {
  width: 40%;
  float: left;
}

div${className} .text {
  /* 这个60px为padding第二个值的双倍 */
  width: calc(60% - 60px);
  padding: 0 30px;
  float: left;
}

div${className} h2 {
  margin-bottom: 20px;
  color: ${color};
}

div${className} p {
  text-indent: 2em;
  line-height: 28px;
  letter-spacing: 1px;
  color: ${color};
}`;
    },
    JSCode: `暂无`,
    VueHTMLCode: (className: string) => `<div${
      className.trim() ? ` class="${className.replace(".", "")}"` : ""
    }>
  <img src={img} alt="请添加图片" />
  <div className="text">
    <h2>内容</h2>
    <p>
      我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容。
    </p>
    <p>
      我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容。
    </p>
  </div>
</div>`,
    VueJSCode: `暂无`,
    ReactHTMLCode: (className: string) => `<div${
      className.trim() ? ` className="${className.replace(".", "")}"` : ""
    }>
    <img src={img} alt="请添加图片" />
    <div className="text">
      <h2>内容</h2>
      <p>
        我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容。
      </p>
      <p>
        我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容。
      </p>
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
        图文1
      </div>
      <p className="compontent_p">图文</p>
      <div className="component_box">
        <div className="compontent_box_content1">
          <div className="component_content_content1">
            <img src={img} alt="请添加图片" />
            <div className="text">
              <h2>内容</h2>
              <p>
                我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容。
              </p>
              <p>
                我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容。
              </p>
            </div>
          </div>
        </div>
        <ShowCode code={code} />
      </div>
    </>
  );
};

export default Component1;
