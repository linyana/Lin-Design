import React from "react";
import ShowCode from "@/components/Components/ShowCode";
import { codeState } from "@/store/Code";

import rightSrc from "@/assets/svg/normal/right.svg";

import "./index.css";

const Component1 = () => {
	const code: codeState = {
		element: () => (
			<button className="button_compontent_button1">基本按钮</button>
		),
		HTMLCode: (className: string) => `<button${
			className.trim() ? ` class="${className.replace(".", "")}"` : ""
		}>
  基本按钮
</button>`,
		CSSCode: (
			className: string,
			bgColor: string,
			color: string,
			hoverColor: string
		) => {
			return `button${className} {
	cursor: pointer;
	padding: 0 30px;
	height: 36px;
	background-color: ${bgColor};
	border: none;
	outline: none;
	border-radius: 6px;
	color: ${color};
	box-shadow: 0 0 5px ${bgColor.replace(")", ", 0.3)")};
	transition: all 0.5s;
}

button${className}:hover {
	background-color:${hoverColor};
}
	`;
		},
		JSCode: () => `暂无`,
		VueHTMLCode: (className: string) => `<button${
			className.trim() ? ` class="${className.replace(".", "")}"` : ""
		}>
  基本按钮
</button>`,
		VueJSCode: () => `暂无`,
		ReactHTMLCode: (className: string) => `<button${
			className.trim() ? ` className="${className.replace(".", "")}"` : ""
		}>
  基本按钮
</button>`,
		ReactJSCode: () => `暂无`,
		TSCode: () => `暂无`,
		VueTSCode: () => `暂无`,
		ReactTSCode: () => `暂无`,
	};

	return (
		<>
			<div className="compontent_title" id="button-anchor1">
				基本按钮
			</div>
			<p className="compontent_p">最基本的按钮样式</p>
			<p className="function_p">
				背景颜色：
				<img src={rightSrc} alt="" />
			</p>
			<p className="function_p">
				字体颜色：
				<img src={rightSrc} alt="" />
			</p>
			<p className="function_p">
				悬浮颜色：
				<img src={rightSrc} alt="" />
			</p>
			<div className="component_box">
				<div className="compontent_box_content">
					<button
						className="button_compontent_button1 button_compontent_button1_hover"
						style={{
							backgroundColor: "rgb(47, 121, 206)",
							color: "rgb(248, 248, 248)",
						}}
					>
						基本按钮
					</button>
				</div>
				<ShowCode code={code} />
			</div>
		</>
	);
};

export default Component1;
