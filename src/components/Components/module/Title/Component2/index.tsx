import React from "react";
import ShowCode from "@/components/Components/ShowCode";
import { codeState } from "@/store/Code";

import rightSrc from "@/assets/svg/normal/right.svg";

import "./index.css";

const Component1 = () => {
	const code: codeState = {
		element: () => (
			<div className="title_component2_content">
				标题
				<div className="title_line"></div>
			</div>
		),
		HTMLCode: (className: string) => `<div${
			className.trim() ? ` class="${className.replace(".", "")}"` : ""
		}>
  	标题
	<div class="title_line"></div>
</div>`,
		CSSCode: (
			className: string,
			bgColor: string,
			color: string,
			hoverColor: string
		) => {
			return `${className === "" ? "div" : className} {
  text-align: center;
  font-size: 26px;
  font-weight: 700;
  line-height: 30px;
  color: ${color};
  margin-top: 30px;
}

${className === "" ? "div" : className}:hover {
  color: ${hoverColor};
}

${className === "" ? "div" : className} .title_line {
  height: 3px;
  width: 100px;
  margin: 20px auto;
  background-color: ${bgColor};
  border-radius: 50%;
}
        `;
		},
		JSCode: () => `暂无`,
		VueHTMLCode: (className: string) => `<div${
			className.trim() ? ` class="${className.replace(".", "")}"` : ""
		}>
  标题
  <div class="title_line"></div>
</div>`,
		VueJSCode: () => `暂无`,
		ReactHTMLCode: (className: string) => `<div${
			className.trim() ? ` className="${className.replace(".", "")}"` : ""
		}>
  标题
	<div className="title_line"></div>
</div>`,
		ReactJSCode: () => `暂无`,
		TSCode: () => `暂无`,
		VueTSCode: () => `暂无`,
		ReactTSCode: () => `暂无`,
	};

	return (
		<>
			<div className="compontent_title" id="title-anchor2">
				居中下划线
			</div>
			<p className="compontent_p">下划线的颜色根据背景颜色变化。</p>
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
					<div
						className="title_component2_content"
						style={{
							color: "#495057",
						}}
					>
						标题
						<div
							className="title_line"
							style={{
								backgroundColor: "#495057",
							}}
						></div>
					</div>
				</div>
				<ShowCode code={code} />
			</div>
		</>
	);
};

export default Component1;
