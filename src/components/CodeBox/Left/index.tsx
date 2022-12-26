import React, { MutableRefObject, useRef, useState } from "react";
import { setBgColor, setColor, setHoverColor, setClass } from "@/store/Setting";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";

import "./index.css";

const colorList = [
  "rgb(73,80,87)",
  "rgb(248, 248, 248)",
  "rgb(47, 121, 206)",
  "rgb(74, 211, 85)",
  "rgb(230, 147, 53)",
];

const colorList2 = [
  "rgb(255,107,107)",
  "rgb(34,184,207)",
  "rgb(132,94,247)",
  "rgb(224, 53, 230)",
  "rgb(224,184,120)",
];

const Left = () => {
  const setting = useSelector((state: RootState) => state.setting);

  const dispatch = useDispatch();
  const [hoverBoxPosition, setHoverBoxPosition] = useState<string>("0");
  const [hoverBoxTruePosition, setHoverBoxTruePosition] = useState<string>("0");
  const [colorKind, setColorKind] = useState<string>("bgColor");

  const bgColorInput: MutableRefObject<any> = useRef(null);
  const colorInput: MutableRefObject<any> = useRef(null);
  const hoverColorInput: MutableRefObject<any> = useRef(null);
  const classInput: MutableRefObject<any> = useRef(null);

  if (classInput.current !== null) {
    classInput.current.value = setting.class.replace(".", "");
  }

  const handleClickColorBox = (event: any) => {
    if (colorKind == "bgColor") {
      dispatch(setBgColor(event.target.style.backgroundColor));
      bgColorInput.current.value = setRgbtoHex(
        event.target.style.backgroundColor
      );
    } else if (colorKind === "color") {
      dispatch(setColor(event.target.style.backgroundColor));
      colorInput.current.value = setRgbtoHex(
        event.target.style.backgroundColor
      );
    } else {
      dispatch(setHoverColor(event.target.style.backgroundColor));
      hoverColorInput.current.value = setRgbtoHex(
        event.target.style.backgroundColor
      );
    }
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

  return (
    <div className="code_box_left">
      <div className="code_box_left_content">
        <div className="left_content_title">类名</div>
        <div className="left_content_input">
          <input
            type="text"
            ref={classInput}
            onChange={(v) => {
              if (v.target.value.trim() === "") {
                dispatch(setClass(""));
              } else {
                dispatch(setClass("." + v.target.value.trim()));
              }
            }}
          />
        </div>
        <div className="left_content_title">颜色</div>
        <div className="color_nav">
          <div
            className="color_hover_box"
            style={{ left: hoverBoxPosition }}
          ></div>
          <div
            className="color_nav_box"
            onMouseEnter={() => {
              setHoverBoxPosition("0");
            }}
            onMouseLeave={() => {
              setHoverBoxPosition(hoverBoxTruePosition);
            }}
            onClick={() => {
              setColorKind("bgColor");
              setHoverBoxTruePosition("0");
              setTimeout(() => {
                bgColorInput.current.value = setRgbtoHex(setting.bgColor);
              }, 0);
            }}
          >
            <span>背景</span>
          </div>
          <div
            className="color_nav_box"
            onMouseEnter={() => {
              setHoverBoxPosition("32%");
            }}
            onMouseLeave={() => {
              setHoverBoxPosition(hoverBoxTruePosition);
            }}
            onClick={() => {
              setColorKind("color");
              setHoverBoxTruePosition("32%");
              setTimeout(() => {
                colorInput.current.value = setRgbtoHex(setting.color);
              }, 0);
            }}
          >
            <span>字体</span>
          </div>
          <div
            className="color_nav_box"
            onMouseEnter={() => {
              setHoverBoxPosition("64.7%");
            }}
            onMouseLeave={() => {
              setHoverBoxPosition(hoverBoxTruePosition);
            }}
            onClick={() => {
              setColorKind("hoverColor");
              setHoverBoxTruePosition("64.7%");
              setTimeout(() => {
                hoverColorInput.current.value = setRgbtoHex(setting.hoverColor);
              }, 0);
            }}
          >
            <span>悬浮</span>
          </div>
        </div>
        {colorKind === "bgColor" && (
          <input
            type="color"
            className="color_input"
            onChange={(e) => {
              dispatch(setBgColor(setHexToRgb(e.target.value)));
            }}
            ref={bgColorInput}
          />
        )}
        {colorKind === "color" && (
          <input
            type="color"
            className="color_input"
            onChange={(e) => {
              dispatch(setColor(setHexToRgb(e.target.value)));
            }}
            ref={colorInput}
          />
        )}
        {colorKind === "hoverColor" && (
          <input
            type="color"
            className="color_input"
            onChange={(e) => {
              dispatch(setHoverColor(setHexToRgb(e.target.value)));
            }}
            ref={hoverColorInput}
          />
        )}
        <div className="flex_between code_box_left_color_boxes">
          {colorList.map((item) => {
            return (
              <div
                key={item}
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
                key={item}
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
