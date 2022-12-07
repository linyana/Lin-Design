import { setCode } from "@/store/Code";
import { setBgColor } from "@/store/Setting";
import React from "react";
import { useDispatch } from "react-redux";

import "./index.css";

const Left = () => {
  const dispatch = useDispatch();

  const handleClickColorBox = (event: any) => {
    dispatch(setBgColor(event.target.style.backgroundColor));
  };

  return (
    <div className="code_box_left">
      <div className="code_box_left_content">
        <input type="color" className="color_input" />
        <div className="flex_between code_box_left_color_boxes">
          <div
            className="code_box_left_color_box"
            style={{ background: "rgb(47, 121, 206)" }}
            onClick={(event) => handleClickColorBox(event)}
          ></div>
          <div
            className="code_box_left_color_box"
            style={{ background: "#adb5bd" }}
            onClick={(event) => handleClickColorBox(event)}
          ></div>
          <div
            className="code_box_left_color_box"
            style={{ background: "rgb(74, 211, 85)" }}
            onClick={(event) => handleClickColorBox(event)}
          ></div>
          <div
            className="code_box_left_color_box"
            style={{ background: "rgb(209, 211, 74)" }}
            onClick={(event) => handleClickColorBox(event)}
          ></div>
          <div
            className="code_box_left_color_box"
            style={{ background: "rgb(230, 147, 53)" }}
            onClick={(event) => handleClickColorBox(event)}
          ></div>
        </div>
        <div className="flex_between">
          <div
            className="code_box_left_color_box"
            style={{ backgroundColor: "#ff6b6b" }}
            onClick={(event) => handleClickColorBox(event)}
          ></div>
          <div
            className="code_box_left_color_box"
            style={{ background: "#22b8cf" }}
            onClick={(event) => handleClickColorBox(event)}
          ></div>
          <div
            className="code_box_left_color_box"
            style={{ background: "#845ef7" }}
            onClick={(event) => handleClickColorBox(event)}
          ></div>
          <div
            className="code_box_left_color_box"
            style={{ background: "rgb(224, 53, 230)" }}
            onClick={(event) => handleClickColorBox(event)}
          ></div>
          <div
            className="code_box_left_color_box"
            style={{ background: "#fcc419" }}
            onClick={(event) => handleClickColorBox(event)}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Left;
