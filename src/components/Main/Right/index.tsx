import React, { useEffect, useState } from "react";

import { NavLink } from "react-router-dom";
import { nanoid } from "nanoid";

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

interface AnchorTypes {
  id?: string;
  content?: string;
}

const Right = () => {
  const [update, setUpdate] = useState([]);

  // 更新组件
  useEffect(() => {
    setTimeout(() => {
      setUpdate([]);
    }, 0);
  }, []);

  return (
    <div className="right_padding">
      {[...document.querySelectorAll(".compontent_title")].map((item: any) => {
        return (
          <div key={nanoid()} onClick={() => scrollToAnchor(item.id)}>
            {item.innerHTML}
          </div>
        );
      })}
    </div>
  );
};

export default Right;
