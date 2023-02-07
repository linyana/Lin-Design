import React from "react";
import ShowCode from "@/components/Components/ShowCode";
import { codeState } from "@/store/Code";

import wrongSrc from "@/assets/svg/normal/wrong.svg";
import rightSrc from "@/assets/svg/normal/right.svg";

import "./index.css";

const Component1 = () => {
	const code: codeState = {
		element: () => (
			<div className="badge_component1_content">
				<div className="badge"></div>
				<button>评价</button>
			</div>
		),
		HTMLCode: (className: string) => `<div${
			className.trim() ? ` class="${className.replace(".", "")}"` : ""
		}>
  <div class="badge"></div>
  <button>
    评价
  </button>
</div>`,
		CSSCode: (
			className: string,
			bgColor: string,
			color: string,
			hoverColor: string
		) => {
			return `${className === "" ? "div" : className} {
  display: inline-block;
  position: relative;
}

${className === "" ? "div" : className} .badge{
  position: absolute;
  right: -3px;
  top: -3px;
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background-color: ${bgColor};
}

${className === "" ? "div" : className} button {
  cursor: pointer;
  padding: 0 30px;
  height: 36px;
  background-color: transparent;
  border: 1px solid rgba(30, 72, 121, 0.1);
  outline: none;
  box-shadow: 0 0 3px rgb(157,184,215, 0.3);
  transition: all 0.5s;
  color: rgb(157,184,215);
  background-color: rgb(157,184,215, 0.1);
}
  
${className === "" ? "div" : className} button:hover {
  border: 1px solid rgb(207, 221, 243);
}      
`;
		},
		JSCode: () => `暂无`,
		VueHTMLCode: (className: string) => `<div${
			className.trim() ? ` class="${className.replace(".", "")}"` : ""
		}>
  <div class="badge"></div>
  <button>
    评价
  </button>
</div>`,
		VueJSCode: () => `暂无`,
		ReactHTMLCode: (className: string) => `<div${
			className.trim() ? ` className="${className.replace(".", "")}"` : ""
		}>
  <div className="badge"></div>
  <button>
    评价
  </button>
</div>`,
		ReactJSCode: () => `暂无`,
		TSCode: () => `暂无`,
		VueTSCode: () => `暂无`,
		ReactTSCode: () => `暂无`,
	};

	return (
		<>
			<div className="compontent_title" id="badge-anchor1">
				标记
			</div>
			<p className="compontent_p">将需要添加标记的元素替换掉button。</p>
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
				<img src={wrongSrc} alt="" />
			</p>
			<div className="component_box">
				<div className="compontent_box_content">
					<div className="badge_component1_content badge_component1_content_color">
						<div className="badge"></div>
						<button>评价</button>
					</div>
				</div>
				<ShowCode code={code} />
			</div>
		</>
	);
};

export default Component1;
