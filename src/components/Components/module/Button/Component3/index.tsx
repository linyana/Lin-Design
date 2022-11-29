import React from "react";
import ShowCode from "@/components/Components/ShowCode";

import "./index.css";

const Component3 = () => {
  return (
    <>
      <div className="compontent_title" id="rounded_corners_button">
        圆角按钮
      </div>
      <p className="compontent_p">圆角按钮样式</p>
      <div className="component_box">
        <div className="compontent_box_content">
          <button className="button_compontent_button3">圆角按钮</button>
        </div>
        <ShowCode />
      </div>
    </>
  );
};

export default Component3;
