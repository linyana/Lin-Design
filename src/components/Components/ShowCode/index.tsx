import React from "react";

import { useDispatch } from "react-redux";
import { changeShowCodeBox } from "@/store/isCodeBoxShow";

import showSrc from "@/assets/svg/normal/show.svg";

const ShowCode = () => {
  const dispatch = useDispatch();
  return (
    <div
      className="compontent_box_menu"
      onClick={() => {
        dispatch(changeShowCodeBox());
      }}
    >
      查看代码
      <img src={showSrc} alt="" className="icon" />
    </div>
  );
};

export default ShowCode;
