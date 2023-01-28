import React from "react";
import ShowCode from "@/components/Components/ShowCode";
import { codeState } from "@/store/Code";

import rightSrc from "@/assets/svg/normal/right.svg";
import wrongSrc from "@/assets/svg/normal/wrong.svg";

import "./index.css";

import img from "@/assets/images/normal/img2.jpg";

const Component1 = () => {
	const code: codeState = {
		element: () => (
			<div className="component_content_content1">
				<img src={img} alt="请添加图片" />
				<div className="text">
					<h2>内容</h2>
					<p>
						我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容。
					</p>
				</div>
			</div>
		),
		HTMLCode: (className: string) => `<div${
			className.trim() ? ` class="${className.replace(".", "")}"` : ""
		}>
  <img src="" alt="请添加图片" />
  <div class="text">
    <h2>内容</h2>
    <p>
    我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容。
    </p>
  </div>
</div>`,
		CSSCode: (
			className: string,
			bgColor: string,
			color: string,
			hoverColor: string
		) => {
			return `${className === "" ? "div" : className} {
  overflow: hidden;
  margin: 20px 0;
  padding: 30px;
	background-color: ${bgColor}
}

${className === "" ? "div" : className} img {
  width: 40%;
  float: left;
}

${className === "" ? "div" : className} .text {
  /* 这个60px为padding第二个值的双倍 */
  padding-left: 30px;
  width: calc(60% - 30px);
  float: left;
}

${className === "" ? "div" : className} h2 {
  margin-bottom: 10px;
  color: ${color};
}

${className === "" ? "div" : className} p {
  text-indent: 2em;
  line-height: 28px;
  letter-spacing: 1px;
  color: ${color};
}`;
		},
		JSCode: () => `暂无`,
		VueHTMLCode: (className: string) => `<div${
			className.trim() ? ` class="${className.replace(".", "")}"` : ""
		}>
  <img src="" alt="请添加图片" />
  <div class="text">
    <h2>内容</h2>
    <p>
    我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容。
    </p>
  </div>
</div>`,
		VueJSCode: () => `暂无`,
		ReactHTMLCode: (className: string) => `<div${
			className.trim() ? ` className="${className.replace(".", "")}"` : ""
		}>
    <img src="" alt="请添加图片" />
    <div className="text">
      <h2>内容</h2>
      <p>
      我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容。
      </p>
    </div>
  </div>
</div>`,
		ReactJSCode: () => `暂无`,
		TSCode: () => `暂无`,
		VueTSCode: () => `暂无`,
		ReactTSCode: () => `暂无`,
	};

	return (
		<>
			<div className="compontent_title" id="content-anchor1">
				图文1
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
				<img src={wrongSrc} alt="" />
			</p>
			<div className="component_box">
				<div className="compontent_box_content1">
					<div
						className="component_content_content1"
						style={{ backgroundColor: "#fff" }}
					>
						<img src={img} alt="请添加图片" />
						<div className="text">
							<h2 style={{ color: "rgb(73,80,87)" }}>内容</h2>
							<p style={{ color: "rgb(73,80,87)" }}>
								我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容。
							</p>
						</div>
					</div>
				</div>
				<ShowCode code={code} />
			</div>
		</>
	);
};

export default Component1;
