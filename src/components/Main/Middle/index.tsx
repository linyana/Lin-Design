import React from "react";
import { Outlet } from "react-router-dom";

import topSrc from "@/assets/images/normal/top.png"

import "./index.css";

const App = () => {
	return (
		<>
      <div className="to_top" onClick={() => {
        window.scrollTo(0,0)
      }}>
        <img src={topSrc} alt="" />
      </div>
			<div className="middle_content middle_padding">
				<Outlet></Outlet>
			</div>
		</>
	);
};

export default App;
