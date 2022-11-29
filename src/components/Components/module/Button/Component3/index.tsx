import React from "react";

import showSrc from "@/assets/svg/normal/show.svg";

import "./index.css";

const Component3 = () => {
  return (
    <>
      <div className="compontent_title" id="rounded_corners_button">圆角按钮</div>
      <p className="compontent_p">圆角按钮样式</p>
      <div className="component_box">
        <div className="compontent_box_content">
          <button className="button_compontent_button3">圆角按钮</button>
        </div>
        <div className="compontent_box_menu">
          查看代码
          <img src={showSrc} alt="" className="icon" />
        </div>
      </div>
    </>
  );
};

export default Component3;
