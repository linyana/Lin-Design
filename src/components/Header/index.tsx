import React from "react";
import HeaderNavLink from "@/components/HeaderNavLink";

import logo from "@/assets/svg/normal/logo.svg";
import github from "@/assets/svg/normal/github.svg";

import "./index.css";

const Header = () => {
  return (
    <div className="header">
      {/* 导航栏左侧--logo */}
      <div className="header_left left_padding">
        <div className="logo flex_between">
          <img src={logo} alt="logo" className="header_logo" />{" "}
          <span>LinUI</span>
        </div>
      </div>
      {/* 导航栏中部--搜索框+导航栏 */}
      <div className="header_middle middle_padding flex_between">
        <div className="search"></div>
        <div className="nav">
          <ul className="nav_ul flex_between">
            <li>
              <HeaderNavLink to={"/home"}>首页</HeaderNavLink>
            </li>
            <li>
              <HeaderNavLink to={"/components"}> 组件</HeaderNavLink>
            </li>
          </ul>
        </div>
      </div>
      {/* 导航栏右侧--github */}
      <div className="header_right right_padding">
        <img src={github} alt="github" className="header_logo" />
      </div>
    </div>
  );
};

export default Header;
