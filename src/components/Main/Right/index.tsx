import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { nanoid } from "nanoid";

import "./index.css";

const scrollToAnchor = (anchorName: string) => {
  if (anchorName) {
    // 找到锚点
    let anchorElement = document.getElementById(anchorName);
    // 如果对应id的锚点存在，就跳转到锚点
    if (anchorElement) {
      anchorElement.scrollIntoView();
    }
  }
};

const Right = () => {
  const [anthor,setAnthor] = useState<Element[]>([]);

  // 获取当前url
  const location = useLocation();
  // 当url变化时，更新锚点列表
  useEffect(() => {
    setAnthor([...document.querySelectorAll(".compontent_title")]);
  }, [location]);

  return (
    <div className="right_content right_padding">
      {anthor.map((item: any) => {
        return (
          <div className="right_menu_line" key={nanoid()} onClick={() => scrollToAnchor(item.id)}>
            {item.innerHTML}
          </div>
        );
      })}
    </div>
  );
};

export default Right;
