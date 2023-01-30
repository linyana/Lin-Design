import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";

import topSrc from "@/assets/images/normal/top.png";

import "./index.css";

const Middle = () => {
	useEffect(() => {
		const BackTop = document.querySelector(".to_top") as HTMLElement;
		window.addEventListener("scroll", () => {
			if (document.documentElement.scrollTop > 300) {
				BackTop.style.opacity = "1";
				BackTop.style.cursor = "pointer";
			} else {
				BackTop.style.opacity = "0";
				BackTop.style.cursor = "auto";
			}
		});
		BackTop.style.opacity = "0";
		BackTop.style.cursor = "auto";
	}, []);

	return (
		<>
			<div
				className="to_top"
				onClick={() => {
					window.scrollTo(0, 0);
				}}
			>
				<img src={topSrc} alt="" />
			</div>
			<div className="middle_content middle_padding">
				<Outlet></Outlet>
			</div>
		</>
	);
};

export default Middle;
