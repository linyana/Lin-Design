import React from "react";

import "@/components/Components/index.css";
import "./index.css";

import buttonSrc from "@/assets/images/summary/button.png";
import layoutSrc from "@/assets/images/summary/layout.png";
import inputSrc from "@/assets/images/summary/input.png";

const Button = () => {
	return (
		<div>
			<div className="component_big_title">
				综述 <span>Summary</span>
			</div>
			<div className="compontent_title" id="summary-anchor">
				通用
			</div>
			<div className="summary_cards">
				<div className="summary_card">
					<div className="summary_content">
						<div className="summary_title">布局</div>
						<div className="summary_img_content">
							<div className="summary_img">
								<img src={layoutSrc} alt="" />
							</div>
						</div>
						<div className="summary_text">Layout</div>
					</div>
				</div>
				<div className="summary_card">
					<div className="summary_content">
						<div className="summary_title">按钮</div>
						<div className="summary_img_content">
							<div className="summary_img">
								<img src={buttonSrc} alt="" />
							</div>
						</div>
						<div className="summary_text">Button</div>
					</div>
				</div>
        <div className="summary_card">
					<div className="summary_content">
						<div className="summary_title">输入框</div>
						<div className="summary_img_content">
							<div className="summary_img">
								<img src={inputSrc} alt="" />
							</div>
						</div>
						<div className="summary_text">Input</div>
					</div>
				</div>
        <span></span>
        <span></span>
			</div>
		</div>
	);
};

export default Button;
