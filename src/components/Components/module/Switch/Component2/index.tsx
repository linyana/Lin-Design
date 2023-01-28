import React, { useState } from "react";
import ShowCode from "@/components/Components/ShowCode";
import { codeState } from "@/store/Code";

import wrongSrc from "@/assets/svg/normal/wrong.svg";
import rightSrc from "@/assets/svg/normal/right.svg";

import "./index.css";

const Switch2 = () => {
	const code: codeState = {
		element: () => <Component></Component>,
		HTMLCode: (className: string) => `<div${
			className.trim() ? ` class="${className.replace(".", "")}"` : ""
		}>
  content
</div>`,
		CSSCode: (
			className: string,
			bgColor: string,
			color: string,
			hoverColor: string
		) => {
			return `
${className === "" ? "div" : className}  {
  display: flex;
}

${className === "" ? "div" : className}  {
  cursor: pointer;
  position: relative;
  width: 40px;
  height: 20px;
  border-radius: 10px;
  border: 1px solid rgb(187, 183, 183);
  background-color: #bfbfbf;
  transition: all 0.3s;
  margin: 0 16px;
}

${className === "" ? "div" : className}  .switch_circle {
  position: absolute;
  left: 0;
  top: 0;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background-color: #fff;
  transition: all 0.3s;
}

${className === "" ? "div" : className}  .is_switch_box {
  background-color: ${bgColor}
}

${className === "" ? "div" : className}  .is_switch_box .switch_circle {
  left: 20px;
}

${className === "" ? "div" : className}  .is_switch_text {
  color: ${hoverColor}
}
        `;
		},
		JSCode: () => `暂无`,
		VueHTMLCode: (className: string) => `<div${
			className.trim() ? ` class="${className.replace(".", "")}"` : ""
		}>
  content
</div>`,
		VueJSCode: () => `暂无`,
		ReactHTMLCode: (className: string) => `<div${
			className.trim() ? ` className="${className.replace(".", "")}"` : ""
		}>
  content
</div>`,
		ReactJSCode: () => `暂无`,
		TSCode: () => `暂无`,
		VueTSCode: () => `暂无`,
		ReactTSCode: () => `暂无`,
	};

	const [isSwitch, setIsSwitch] = useState<boolean>(false);

	return (
		<>
			<div className="compontent_title" id="switch-anchor1">
				文字开关
			</div>
			<p className="function_p">
				背景颜色：
				<img src={rightSrc} alt="" />
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
					<div className="switch_component2_content">
						<div
							className={
								isSwitch ? "switch_text" : "is_switch_text switch_text"
							}
						>
							男
						</div>
						<div
							className={isSwitch ? "is_switch_box switch_box" : "switch_box"}
							onClick={() => {
								setIsSwitch(!isSwitch);
							}}
						>
							<div className="switch_circle"></div>
						</div>
						<div
							className={
								isSwitch ? "is_switch_text switch_text" : "switch_text"
							}
						>
							女
						</div>
					</div>
				</div>
				<ShowCode code={code} />
			</div>
		</>
	);
};

const Component = () => {
	const [isSwitch, setIsSwitch] = useState<boolean>(false);
	return (
		<div className="switch_component2_content">
			<div className={isSwitch ? "switch_text" : "is_switch_text switch_text"}>
				男
			</div>
			<div
				className={isSwitch ? "is_switch_box switch_box" : "switch_box"}
				onClick={() => {
					setIsSwitch(!isSwitch);
				}}
			>
				<div className="switch_circle"></div>
			</div>
			<div className={isSwitch ? "is_switch_text switch_text" : "switch_text"}>
				女
			</div>
		</div>
	);
};

export default Switch2;
