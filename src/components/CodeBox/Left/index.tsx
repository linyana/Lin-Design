import React from "react";

import "./index.css";

const Left = () => {
  return (
    <div className="code_box_left">
      <div className="code_box_left_content">
        <input type="color" className="color_input" />
        <div className="flex_between code_box_left_color_boxes">
          <div
            className="code_box_left_color_box"
            style={{ background: "#2c2e33" }}
          ></div>
          <div
            className="code_box_left_color_box"
            style={{ background: "#adb5bd" }}
          ></div>
          <div
            className="code_box_left_color_box"
            style={{ background: "rgb(74, 211, 85)" }}
          ></div>
          <div
            className="code_box_left_color_box"
            style={{ background: "rgb(209, 211, 74)" }}
          ></div>
          <div
            className="code_box_left_color_box"
            style={{ background: "rgb(230, 147, 53)" }}
          ></div>
        </div>
        <div className="flex_between">
          <div
            className="code_box_left_color_box"
            style={{ backgroundColor: "#ff6b6b" }}
          ></div>
          <div
            className="code_box_left_color_box"
            style={{ background: "#22b8cf" }}
          ></div>
          <div
            className="code_box_left_color_box"
            style={{ background: "#845ef7" }}
          ></div>
          <div
            className="code_box_left_color_box"
            style={{ background: "rgb(224, 53, 230)" }}
          ></div>
          <div
            className="code_box_left_color_box"
            style={{ background: "#fcc419" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Left;
