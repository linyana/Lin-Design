import React from "react";
import ShowCode from "@/components/Components/ShowCode";

import "./index.css";

const Component1 = () => {
  return (
    <>
      <div className="compontent_title" id="basic_button">
        基本按钮
      </div>
      <p className="compontent_p">最基本的按钮样式</p>
      <div className="component_box">
        <div className="compontent_box_content">
          <button className="button_compontent_button1">基本按钮</button>
        </div>
        <ShowCode />
      </div>
    </>
  );
};

export default Component1;
