import React from 'react';
import { useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";

import leftMenu from "@/router/LeftMenu";

import "./index.css";

const Left = () => {
  const navigate = useNavigate();
  return (
    <div className="left_menu">
      {
        leftMenu.map(item => {
         return (
          <div className="left_menu_line left_padding" key={nanoid()} onClick={()=>{
            navigate(item.to,{replace:false})
          }}>
            {item.name}
            <span>
              {item.smallName}
            </span>
          </div>
         )
        })
      }
    </div>
  )
}

export default Left;