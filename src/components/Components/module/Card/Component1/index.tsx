import React from "react";
import ShowCode from "@/components/Components/ShowCode";
import { codeState } from "@/store/Code";

import wrongSrc from "@/assets/svg/normal/wrong.svg";
import rightSrc from "@/assets/svg/normal/right.svg";

import "./index.css";

const Component1 = () => {
	const code: codeState = {
		element: () => (
			<div className="card_component1_content">
				<div className="card_title">标题</div>
				<div className="card_text">
					我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容
				</div>
			</div>
		),
		HTMLCode: (className: string) => `<div${
			className.trim() ? ` class="${className.replace(".", "")}"` : ""
		}>
  <div class="card_title">标题</div>
  <div class="card_text">
    我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容
  </div>
</div>`,
		CSSCode: (
			className: string,
			bgColor: string,
			color: string,
			hoverColor: string
		) => {
			return `${className === "" ? "div" : className} {
  cursor: pointer;
  width: 260px;
  padding-bottom: 30px;
  min-height: 300px;
  border-radius: 15px;
  background-color: ${bgColor}
  border: 1px solid rgba(148, 146, 146, 0.3);
  transition: all 0.1s;
}

${className === "" ? "div" : className}:hover {
  box-shadow: 0 0 8px rgba(0,0,0,0.1);
}

${className === "" ? "div" : className} .card_title {
  padding: 15px 30px;
  font-size: 28px;
  font-weight: 500;
  border-bottom: 1px solid rgba(148, 146, 146, 0.3);
  color: ${color};
}

${className === "" ? "div" : className} .card_text {
  padding: 30px 30px 0;
  font-size: 18px;
  line-height: 30px;
  color: ${color};
}`;
		},
		JSCode: () => `暂无`,
		VueHTMLCode: (className: string) => `<div${
			className.trim() ? ` class="${className.replace(".", "")}"` : ""
		}>
  <div class="card_title">标题</div>
  <div class="card_text">
    我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容
  </div>
</div>`,
		VueJSCode: () => `暂无`,
		ReactHTMLCode: (className: string) => `<div${
			className.trim() ? ` className="${className.replace(".", "")}"` : ""
		}>
  <div className="card_title">标题</div>
  <div className="card_text">
    我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容
  </div>
</div>`,
		ReactJSCode: () => `暂无`,
		TSCode: () => `暂无`,
		VueTSCode: () => `暂无`,
		ReactTSCode: () => `暂无`,
	};

	return (
		<>
			<div className="compontent_title" id="card-anchor1">
				文字卡片
			</div>
			<p className="compontent_p">用于设置标题和文字</p>
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
				<img src={wrongSrc} alt="" />
			</p>
			<div className="component_box">
				<div className="compontent_box_content">
					<div
						className="card_component1_content"
						style={{ backgroundColor: "white" }}
					>
						<div className="card_title" style={{ color: "#495057" }}>
							标题
						</div>
						<div className="card_text" style={{ color: "#495057" }}>
							我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容
						</div>
					</div>
				</div>
				<ShowCode code={code} />
			</div>
		</>
	);
};

export default Component1;
