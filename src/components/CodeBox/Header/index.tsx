import React from "react";
import { useDispatch } from "react-redux";
import { changeShowCodeBox } from "@/store/isCodeBoxShow";

import closeSrc from "@/assets/svg/codeBox/close.svg";

import "./index.css";

const Header = () => {
  const dispatch = useDispatch();
  return (
    <div className="code_box_header">
      <div className="code_box_header_selects">
        <select name="" id="">
          <option value="HTML">HTML</option>
        </select>
        <select name="" id="">
          <option value="基础">基础</option>
        </select>
        <select name="" id="">
          <option value="分离">分离</option>
        </select>
      </div>
      <img src={closeSrc} alt="关闭" className="close"  onClick={()=>{dispatch(changeShowCodeBox())}}/>
    </div>
  );
};

export default Header;
