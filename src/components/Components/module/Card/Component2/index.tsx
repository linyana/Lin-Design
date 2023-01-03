import React from "react";
import ShowCode from "@/components/Components/ShowCode";
import { codeState } from "@/store/Code";

import "./index.css";

import img from "@/assets/images/normal/img.jpg";

const Component1 = () => {
	const code: codeState = {
		element: () => (
			<div className="card_component2_content">
				<div className="card_title">标题</div>
				<div className="card_img">
					<img src={img} alt="请添加图片" />
				</div>
			</div>
		),
		HTMLCode: (className: string) => `<div${
			className.trim() ? ` class="${className.replace(".", "")}"` : ""
		}>
  <div class="card_title">标题</div>
  <div class="card_img">
    <img src="" alt="请添加图片" />
  </div>
</div>`,
		CSSCode: (
			className: string,
			bgColor: string,
			color: string,
			hoverColor: string
		) => {
			return `${className === ''?'div':className} {
  cursor: pointer;
  width: 260px;
  background-color: ${bgColor};
  transition: all 0.1s;
  border-radius: 10px;
}

${className === ''?'div':className}:hover {
  box-shadow: 0 0 8px rgba(0,0,0,0.1);
}

${className === ''?'div':className} .card_title {
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border: 1px solid rgba(148, 146, 146, 0.3);
  padding: 15px 30px;
  font-size: 28px;
  font-weight: 500;
  border-bottom: 2px solid rgba(148, 146, 146, 0.3);
  color: ${color}
}

${className === ''?'div':className} .card_img img {
  width: 100%;
  vertical-align: bottom;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}
        `;
		},
		JSCode: () => `暂无`,
		VueHTMLCode: (className: string) => `<div${
			className.trim() ? ` class="${className.replace(".", "")}"` : ""
		}>
  <div class="card_title">标题</div>
  <div class="card_img">
    <img src="" alt="请添加图片" />
  </div>
</div>`,
		VueJSCode: () => `暂无`,
		ReactHTMLCode: (className: string) => `<div${
			className.trim() ? ` className="${className.replace(".", "")}"` : ""
		}>
  <div className="card_title">标题</div>
  <div className="card_img">
    <img src="" alt="请添加图片" />
  </div>
</div>`,
		ReactJSCode: () => `暂无`,
		TSCode: () => `暂无`,
		VueTSCode: () => `暂无`,
		ReactTSCode: () => `暂无`,
	};

	return (
		<>
			<div className="compontent_title" id="basic_button">
				带图片的卡片
			</div>
			<p className="compontent_p">用于有图片的情况，如有多个尺度不一的图片会导致高度不一致，请在css中统一图片的高度。</p>
			<div className="component_box">
				<div className="compontent_box_content">
					<div
						className="card_component2_content"
						style={{ backgroundColor: "white" }}
					>
						<div className="card_title" style={{ color: "#495057" }}>
							标题
						</div>
						<div className="card_img">
							<img src={img} alt="请添加图片" />
						</div>
					</div>
				</div>
				<ShowCode code={code} />
			</div>
		</>
	);
};

export default Component1;
