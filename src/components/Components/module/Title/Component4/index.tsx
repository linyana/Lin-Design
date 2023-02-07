import React from "react";
import ShowCode from "@/components/Components/ShowCode";
import { codeState } from "@/store/Code";

import rightSrc from "@/assets/svg/normal/right.svg";

import "./index.css";

const Component4 = () => {
	const code: codeState = {
		element: () => (
			<div className="title_component4_content">
				<div className="title_box">
					<div className="title_left_box"></div>
					关于我们
					<div className="title_right_box"></div>
				</div>
			</div>
		),
		HTMLCode: (className: string) => `<div${
			className.trim() ? ` class="${className.replace(".", "")}"` : ""
		}>
  <div class="${className.replace(".", "")}_box">
    <div class="${className.replace(".", "")}_left_box"></div>
    关于我们
    <div class="${className.replace(".", "")}_right_box"></div>
  </div>
</div>`,
		CSSCode: (
			className: string,
			bgColor: string,
			color: string,
			hoverColor: string
		) => {
			return `${className === "" ? "div" : className} {
  position: relative;
  text-align: center;
}

${className === "" ? "div" : className} .${className.replace(".", "")}_box {
  display: inline-block;
  text-align: center;
  position: relative;
  font-size: 28px;
  font-weight: 700;
  padding: 8px 16px;
  transition: all 0.3s;
  color: ${color};
}

${className === "" ? "div" : className} .${className.replace(".", "")}_left_box {
  position: absolute;
  left: 0;
  top: 0;
  width: 45%;
  height: 40%;
  border-left: 2px solid ${bgColor};
  border-top: 2px solid ${bgColor};
}

${className === "" ? "div" : className} .${className.replace(".", "")}_right_box {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 45%;
  height: 40%;
  border-right: 2px solid ${bgColor};
  border-bottom: 2px solid ${bgColor};
}

${className === "" ? "div" : className} .${className.replace(".", "")}_box:hover {
  color: ${hoverColor};
}
`;
		},
		JSCode: () => `暂无`,
		VueHTMLCode: (className: string) => `<div${
			className.trim() ? ` class="${className.replace(".", "")}"` : ""
		}>
  <div class="${className.replace(".", "")}_box">
    <div class="${className.replace(".", "")}_left_box"></div>
    关于我们
    <div class="${className.replace(".", "")}_right_box"></div>
  </div>
</div>`,
		VueJSCode: () => `暂无`,
		ReactHTMLCode: (className: string) => `<div${
			className.trim() ? ` className="${className.replace(".", "")}"` : ""
		}>
  <div className="${className.replace(".", "")}_box">
    <div className="${className.replace(".", "")}_left_box"></div>
    关于我们
    <div className="${className.replace(".", "")}_right_box"></div>
  </div>
</div>`,
		ReactJSCode: () => `暂无`,
		TSCode: () => `暂无`,
		VueTSCode: () => `暂无`,
		ReactTSCode: () => `暂无`,
	};

	return (
		<>
			<div className="compontent_title" id="title-anchor4">
				边框环绕
			</div>
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
				<div
					className="compontent_box_content"
					style={{ backgroundColor: "white" }}
				>
					<div className="title_component4_content title_component4_content_color">
						<div className="title_box">
							<div className="title_left_box"></div>
							关于我们
							<div className="title_right_box"></div>
						</div>
					</div>
				</div>
				<ShowCode code={code} />
			</div>
		</>
	);
};

export default Component4;
