import React from "react";
import { useNavigate } from "react-router";

import "./index.css";

import banner from "@/assets/svg/normal/banner.svg";

const Middle = () => {
	const navigate = useNavigate();
	return (
		<div className="middle_padding box">
			<div className="home_banner">
				<div className="home_banner_img">
					<img src={banner} alt="banner" />
				</div>
				<div className="home_banner_text">
					<div className="home_banner_title_box">
						<div className="home_banner_title">零封装组件库</div>
					</div>
					<div className="home_banner_title2">
						无需阅读文档也能快速上手的组件库
					</div>
					<button
						className="home_button"
						onClick={() => {
							navigate("/components/overview", {
								replace: false,
							});
						}}
					>
						快速上手
					</button>
				</div>
			</div>
		</div>
	);
};

export default Middle;
