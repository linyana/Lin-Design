import React from "react";
import ShowCode from "@/components/Components/ShowCode";
import { codeState } from "@/store/Code";

import rightSrc from "@/assets/svg/normal/right.svg";

import "./index.css";

const Component1 = () => {
	const code: codeState = {
		element: () => (
			<div className="title_component3_content">
				<div
					className="title_line"
				></div>
				<div className="title">
					<div className="big_title">
						标题
					</div>
					<div className="small_title">
						Title
					</div>
				</div>
			</div>
		),
		HTMLCode: (className: string) => `<div${
			className.trim() ? ` class="${className.replace(".", "")}"` : ""
		}>
    <div
    class="title_line"
  ></div>
  <div class="title">
    <div class="big_title">
      标题
    </div>
    <div class="small_title">
      Title
    </div>
  </div>
</div>`,
		CSSCode: (
			className: string,
			bgColor: string,
			color: string,
			hoverColor: string
		) => {
			return `${className === ''?'div':className} {
  position: relative;
  margin: 30px 0;
  width: 100%;
  height: 2px;
  text-align: center;
  background-color: inherit;
}

${className === ''?'div':className} .title_line {
  height: 3px;
  width: 100%;
  background-color: ${bgColor};
}

${className === ''?'div':className} .title {
  background-color: inherit;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  padding: 0 20px;
}

${className === ''?'div':className} .title .big_title {
  font-size: 28px;
  font-weight: 700;
  color: ${color};
}

${className === ''?'div':className} .title .small_title {
  font-size: 20px;
  color: ${color};
}

${className === ''?'div':className} .title:hover .big_title,
${className === ''?'div':className} .title:hover .small_title {
  color: var(--hoverColor)
}
        `;
		},
		JSCode: () => `暂无`,
		VueHTMLCode: (className: string) => `<div${
			className.trim() ? ` class="${className.replace(".", "")}"` : ""
		}>
    <div
    class="title_line"
  ></div>
  <div class="title">
    <div class="big_title">
      标题
    </div>
    <div class="small_title">
      Title
    </div>
  </div>
</div>`,
		VueJSCode: () => `暂无`,
		ReactHTMLCode: (className: string) => `<div${
			className.trim() ? ` className="${className.replace(".", "")}"` : ""
		}>
    <div
    className="title_line"
  ></div>
  <div className="title">
    <div className="big_title">
      标题
    </div>
    <div className="small_title">
      Title
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
			<div className="compontent_title" id="basic_button">
				横线居中
			</div>
			<p className="compontent_p">
				可以选择大小标题之一，不会影响位置，标题的背景颜色是继承的父元素的，所以需要保证父元素有颜色才能正常显示，如果觉得不够有特色，可以给title_line加上border-radius:
				50%;。
			</p>
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
					<div className="title_component3_content">
						<div
							className="title_line"
							style={{ backgroundColor: "#495057" }}
						></div>
						<div className="title">
							<div className="big_title" style={{ color: "#495057" }}>
								标题
							</div>
							<div className="small_title" style={{ color: "#495057" }}>
								Title
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
