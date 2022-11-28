import React from "react";

import "./index.css";

import banner from "@/assets/svg/normal/banner.svg";

const Middle = () => {
  return (
    <div className="middle_padding box">
      <div className="home_banner">
        <div className="home_banner_img">
          <img src={banner} alt="banner" />
        </div>
        <div className="home_banner_text">
          <div className="home_banner_title">{/* 零封装组件库 */}</div>
          <div className="home_banner_title2">
            {/* 无需阅读文档也能快速上手的组件库 */}
          </div>
          <button>快速上手</button>
        </div>
      </div>
    </div>
  );
};

export default Middle;
