import React from "react";

import showSrc from "@/assets/svg/normal/show.svg";

const Component1 = () => {
  return (
    <>
      <div className="compontent_title">
        基本按钮
      </div>
      <p className="compontent_p">
        最基本的按钮样式
      </p>
      <div className="component_box">
        <div className="compontent_box_content"></div>
        <div className="compontent_box_menu">
          查看代码
          <img src={showSrc} alt="" className="icon" />
        </div>
      </div>
    </>
  );
};

export default Component1;
