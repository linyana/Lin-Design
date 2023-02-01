import React from "react";
import ShowCode from "@/components/Components/ShowCode";
import { codeState } from "@/store/Code";

import wrongSrc from "@/assets/svg/normal/wrong.svg";
import rightSrc from "@/assets/svg/normal/right.svg";

import "./index.css";

const Component1 = () => {
	const code: codeState = {
		element: () => (
			<button className="button_compontent_button5">
				<span>填充按钮</span>
			</button>
		),
		HTMLCode: (className: string) => `<button${
			className.trim() ? ` class="${className.replace(".", "")}"` : ""
		}>
  <span>填充按钮</span>
</button>`,
		CSSCode: (
			className: string,
			bgColor: string,
			color: string,
			hoverColor: string
		) => {
			return `button${className} {
  position: relative;
	cursor: pointer;
	padding: 0 30px;
	height: 36px;
	background-color: transparent;
	border: 1px solid rgb(194, 196, 196);
	outline: none;
	border-radius: 6px;
	box-shadow: 0 0 3px rgb(73, 80, 87, 0.3);
	transition: all 0.5s;
  overflow: hidden;
}

button${className} span {
  position: relative;
  z-index: 3;
  color: #464646;
  transition: all 0.5s;
}
  
button${className}::after {
  z-index: 2;
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 300px;
  height: 300px;
  transform: rotate(45deg) translateX(-500px);
  background-color: ${hoverColor};
  transition: all 0.5s;
}

button${className}:hover::after {
  transform: rotate(45deg) translateX(-200px);
}

button${className}:hover span {
  color: #f8f8f8;
}
	`;
		},
		JSCode: () => `暂无`,
		VueHTMLCode: (className: string) => `<button${
			className.trim() ? ` class="${className.replace(".", "")}"` : ""
		}>
  <span>填充按钮</span>
</button>`,
		VueJSCode: () => `暂无`,
		ReactHTMLCode: (className: string) => `<button${
			className.trim() ? ` className="${className.replace(".", "")}"` : ""
		}>
  <span>填充按钮</span>
</button>`,
		ReactJSCode: () => `暂无`,
		TSCode: () => `暂无`,
		VueTSCode: () => `暂无`,
		ReactTSCode: () => `暂无`,
	};

	return (
		<>
			<div className="compontent_title" id="button-anchor5">
				填充动画
			</div>
			<p className="compontent_p">鼠标经过时增加填充动画。</p>
			<p className="function_p">
				背景颜色：
				<img src={wrongSrc} alt="" />
			</p>
			<p className="function_p">
				字体颜色：
				<img src={wrongSrc} alt="" />
			</p>
			<p className="function_p">
				悬浮颜色：
				<img src={rightSrc} alt="" />
			</p>
			<div className="component_box">
				<div className="compontent_box_content">
					<button className="button_compontent_button5 button_compontent_button5_hover">
						<span>填充按钮</span>
					</button>
				</div>
				<ShowCode code={code} />
			</div>
		</>
	);
};

export default Component1;
