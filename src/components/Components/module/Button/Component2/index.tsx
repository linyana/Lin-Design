import React from "react";
import ShowCode from "@/components/Components/ShowCode";
import "./index.css";

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
        <ShowCode />
      </div>
    </>
  );
};

export default Component2;
