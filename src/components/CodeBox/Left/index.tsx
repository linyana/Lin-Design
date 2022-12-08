import React, { MutableRefObject, useRef } from "react";
import { setBgColor } from "@/store/Setting";
import { useDispatch } from "react-redux";

import "./index.css";

const colorList = [
  "rgb(47, 121, 206)",
  "rgb(173,181,189)",
  "rgb(74, 211, 85)",
  "rgb(209, 211, 74)",
  "rgb(230, 147, 53)",
];

const colorList2 = [
  "rgb(255,107,107)",
  "rgb(34,184,207)",
  "rgb(132,94,247)",
  "rgb(224, 53, 230)",
  "rgb(252,196,25)",
];

const Left = () => {
  const dispatch = useDispatch();

  const handleClickColorBox = (event: any) => {
    dispatch(setBgColor(event.target.style.backgroundColor));
    colorInput.current.value = setRgbtoHex(event.target.style.backgroundColor);
  };

  const setRgbtoHex = (color: string) => {
    const rgb = color.split(",");
    const r = parseInt(rgb[0].split("(")[1]);
    const g = parseInt(rgb[1]);
    const b = parseInt(rgb[2]);
    return "#" + ((r << 16) + (g << 8) + b).toString(16).padStart(6, "0");
  };

  const setHexToRgb = (str: string) => {
    var reg = /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/;
    if (!reg.test(str)) {
      return;
    }
    let newStr = str.toLowerCase().replace(/\#/g, "");
    let len = newStr.length;
    if (len == 3) {
      let t = "";
      for (var i = 0; i < len; i++) {
        t += newStr.slice(i, i + 1).concat(newStr.slice(i, i + 1));
      }
      newStr = t;
    }
    let arr = [];
    for (var i = 0; i < 6; i = i + 2) {
      let s = newStr.slice(i, i + 2);
      arr.push(parseInt("0x" + s));
    }
    return "rgb(" + arr.join(",") + ")";
  };

  const colorInput: MutableRefObject<any> = useRef(null);

  return (
    <div className="code_box_left">
      <div className="code_box_left_content">
        <input
          type="color"
          className="color_input"
          onChange={(e) => {
            dispatch(setBgColor(setHexToRgb(e.target.value)));
          }}
          ref={colorInput}
        />
        <div className="flex_between code_box_left_color_boxes">
          {colorList.map((item) => {
            return (
              <div
                className="code_box_left_color_box"
                style={{ background: item }}
                onClick={(event) => handleClickColorBox(event)}
              ></div>
            );
          })}
        </div>
        <div className="flex_between">
          {colorList2.map((item) => {
            return (
              <div
                className="code_box_left_color_box"
                style={{ background: item }}
                onClick={(event) => handleClickColorBox(event)}
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Left;
