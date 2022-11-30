import React from "react";

import Header from "./Header";
import Left from "./Left";
import Middle from "./Middle";
import Right from "./Right";

import "./index.css";

const CodeBox = () => {
  
  return (
    <div className="code_page">
      <div className="code_box">
        <div className="code_box_content">
          <Header></Header>
          <div className="flex_between" style={{height: "100%"}}>
            <Left></Left>
            <Middle></Middle>
            <Right></Right>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeBox;
