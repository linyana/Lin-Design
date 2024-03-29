import React from "react";
import ShowCode from "@/components/Components/ShowCode";
import { codeState } from "@/store/Code";

import rightSrc from "@/assets/svg/normal/right.svg";
import wrongSrc from "@/assets/svg/normal/wrong.svg";
import img from "@/assets/images/normal/img.jpg";

import "./index.css";

const Component1 = () => {
	const code: codeState = {
		element: () => (
			<div className="component_content_content2">
				<img src={img} alt="请添加图片" />
				<div className="text">
					<div className="text_content">
						<h2>内容</h2>
						<p>
							我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容。
						</p>
					</div>
				</div>
			</div>
		),
		HTMLCode: (className: string) => `<div${
			className.trim() ? ` class="${className.replace(".", "")}"` : ""
		}>
  <img src="" alt="请添加图片" />
  <div class="text">
    <div class="text_content">
      <h2>内容</h2>
      <p>
        我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容。
      </p>
    </div>
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
  margin: 20px 0;
  padding-left: 30px;
}

${className === "" ? "div" : className} img {
  width: 70%;
}

${className === "" ? "div" : className} .text {
  position: absolute;
  right: 5%;
  top: 5%;
  width: 50%;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  overflow: hidden; 
  background-color: ${bgColor};
}

${className === "" ? "div" : className} .text_content {
  padding: 0 10%;
}

${className === "" ? "div" : className} h2 {
  text-align: center;
  margin-top: 10px;
  margin-bottom: 10px;
  color: ${color};
}

${className === "" ? "div" : className} p {
  text-indent: 2em;
  line-height: 28px;
  letter-spacing: 0.3px;
  color: ${color};
}`;
		},
		JSCode: () => `暂无`,
		VueHTMLCode: (className: string) => `<div${
			className.trim() ? ` class="${className.replace(".", "")}"` : ""
		}>
  <img src="" alt="请添加图片" />
  <div class="text">
    <div class="text_content">
      <h2>内容</h2>
      <p>
        我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容。
      </p>
    </div>
  </div>
</div>`,
		VueJSCode: () => `暂无`,
		ReactHTMLCode: (className: string) => `<div${
			className.trim() ? ` className="${className.replace(".", "")}"` : ""
		}>
    <img src="" alt="请添加图片" />
    <div className="text">
      <div className="text_content">
        <h2>内容</h2>
        <p>
          我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容。
        </p>
      </div>
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
			<div className="compontent_title" id="content-anchor2">
				图文2
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
					<div className="component_content_content2">
						<img src={img} alt="请添加图片" />
						<div
							className="text"
							style={{ backgroundColor: "rgb(224,184,120)" }}
						>
							<div className="text_content">
								<h2 style={{ color: "rgb(248, 248, 248)" }}>内容</h2>
								<p style={{ color: "rgb(248, 248, 248)" }}>
									我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容。
								</p>
							</div>
						</div>
					</div>
				</div>
				<ShowCode code={code} />
			</div>
		</>
	);
};

export default Component1;
