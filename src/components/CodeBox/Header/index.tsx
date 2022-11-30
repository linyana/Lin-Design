import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeShowCodeBox } from "@/store/isCodeBoxShow";

import closeSrc from "@/assets/svg/codeBox/close.svg";
import pullSrc from "@/assets/svg/codeBox/pull.svg";

import "./index.css";

const Header = () => {
  const [select1, setSelect1] = useState<boolean>(false);
  const [select2, setSelect2] = useState<boolean>(false);

  const codePage = document.querySelector(".code_page");
  codePage?.addEventListener("click", () => {
    if (select1) {
      setSelect1(false);
    }
    if (select2) {
      setSelect2(false);
    }
  });

  const changeSelect1 = () => {
    if (select1) {
      setSelect1(false);
    } else {
      setSelect1(true);
    }
  };

  const changeSelect2 = () => {
    if (select2) {
      setSelect2(false);
    } else {
      setSelect2(true);
    }
  };

  const dispatch = useDispatch();
  return (
    <div className="code_box_header">
      <div className="code_box_header_selects">
        <div className="select">
          <div
            className="select_title"
            onClick={() => {
              changeSelect1();
            }}
          >
            HTML
            <img src={pullSrc} alt="下拉" className="pull_img" />
          </div>
          <div
            className="options"
            style={{ display: select1 ? "block" : "none" }}
          >
            <div className="option">HTML</div>
            <div className="option">Vue</div>
            <div className="option">React</div>
          </div>
        </div>
        <div className="select">
          <div
            className="select_title"
            onClick={() => {
              changeSelect2();
            }}
          >
            基础
            <img src={pullSrc} alt="下拉" className="pull_img" />
          </div>
          <div
            className="options"
            style={{ display: select2 ? "block" : "none" }}
          >
            <div className="option">基础</div>
            <div className="option">ES6</div>
          </div>
        </div>
      </div>
      <img
        src={closeSrc}
        alt="关闭"
        className="close"
        onClick={() => {
          dispatch(changeShowCodeBox());
        }}
      />
    </div>
  );
};

export default Header;
