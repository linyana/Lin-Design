import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";

import leftMenu from "@/router/LeftMenu";

import "./index.css";

const MobileNav = () => {
	const [showMobile, setShowMobile] = useState<boolean>(false);
	const navigate = useNavigate();

	return (
		<div className="mobile_box">
			<div
				className={showMobile ? "mobile_nav_box2" : "mobile_nav_box"}
				onClick={() => {
					setShowMobile(!showMobile);
				}}
			>
				<span className="mobile_span1"></span>
				<span className="mobile_span2"></span>
				<span className="mobile_span3"></span>
			</div>
			<div className={showMobile ? "mobile_nav" : "mobile_nav_none"}>
				<div className="mobile_nav_content">
					<div
						className="left_menu_line left_padding"
						onClick={() => {
							navigate("home", { replace: false });
							setShowMobile(!showMobile);
						}}
					>
						主页
						<span>Home</span>
					</div>
					{leftMenu.map((item) => {
						return (
							<div
								className="left_menu_line left_padding"
								key={nanoid()}
								onClick={() => {
									navigate(`/components/${item.to}`, { replace: false });
									setShowMobile(!showMobile);
								}}
							>
								{item.name}
								<span>{item.smallName}</span>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default MobileNav;
