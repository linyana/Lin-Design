import React from "react";

import { useDispatch } from "react-redux";
import { changeShowCodeBox } from "@/store/IsCodeBoxShow";
import { setCode, codeState } from "@/store/Code";

import showSrc from "@/assets/svg/normal/show.svg";

interface propsTypes {
  code: codeState;
}

const ShowCode = (props: propsTypes) => {
  const dispatch = useDispatch();
  return (
    <div
      className="compontent_box_menu"
      onClick={() => {
        dispatch(setCode(props.code));
        dispatch(changeShowCodeBox());
      }}
    >
      <span>查看代码</span>
      <img src={showSrc} alt="查看代码" className="icon" />
    </div>
  );
};

export default ShowCode;
