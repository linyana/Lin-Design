import React, { MutableRefObject, useRef } from "react";
import { setBgColor } from "@/store/Setting";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";

import "./index.css";

const Left = () => {
  const dispatch = useDispatch();
  const setting = useSelector((state: RootState) => state.setting);

  const handleClickColorBox = (event: any) => {
    dispatch(setBgColor(event.target.style.backgroundColor));
    colorInput.current.value = setRgbtoHex(event.target.style.backgroundColor);
  };

  const setRgbtoHex = (color: string) => {
    const rgb = color.split(",");
    const r = parseInt(rgb[0].split('(')[1]);
    const g = parseInt(rgb[1]);
    const b = parseInt(rgb[2]);
    return "#" + ((r << 16) + (g << 8) + b).toString(16).padStart(6, '0');
  }

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
    let arr = []; //将字符串分隔，两个两个的分隔
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
