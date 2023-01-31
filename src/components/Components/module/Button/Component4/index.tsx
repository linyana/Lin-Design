import React from "react";
import ShowCode from "@/components/Components/ShowCode";
import { codeState } from "@/store/Code";

import rightSrc from "@/assets/svg/normal/right.svg";
import wrongSrc from "@/assets/svg/normal/wrong.svg";

import "./index.css";

const code: codeState = {
	element: () => (
		<button className="button_compontent_button4">
			赛博朋克
		</button>
	),
	HTMLCode: (className: string) => `<button${
		className.trim() ? ` class="${className.replace(".", "")}"` : ""
	}>
  赛博朋克
</button>`,
	CSSCode: (
		className: string,
		bgColor: string,
		color: string,
		hoverColor: string
	) => `button${className} {
  cursor: pointer;
  width: 130px;
  height: 40px;
  font-size: 16px;
  background: linear-gradient(45deg, transparent 6%, ${bgColor} 5%);
  border: 0;
  color: ${color};
  letter-spacing: 3px;
  line-height: 40px;
  box-shadow: 5px -4px 0px ${bgColor.replace(")", ", 0.5)")};
  outline: transparent;
  position: relative;
}

button${className}::after {
  --slice-0: inset(50% 50% 50% 50%);
  --slice-1: inset(80% -6px 0 0);
  --slice-2: inset(50% -6px 30% 0);
  --slice-3: inset(10% -6px 85% 0);
  --slice-4: inset(40% -6px 43% 0);
  --slice-5: inset(80% -6px 5% 0);
  content: "快速上手";
  display: block;
  position: absolute;
  top: -10px;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    45deg,
    transparent 3%,
    #00e6f6 3%,
    #00e6f6 5%,
    ${bgColor} 5%
  );
  text-shadow: -3px -3px 0px #f8f005, 3px 3px 0px #00e6f6;
  clip-path: var(--slice-0);
}`,
	JSCode: () => `暂无`,
	VueHTMLCode: (className: string) => `<button${
		className.trim() ? ` class="${className.replace(".", "")}"` : ""
	}>
  赛博朋克
</button>`,
	VueJSCode: () => `暂无`,
	ReactHTMLCode: (className: string) => `<button${
		className.trim() ? ` className="${className.replace(".", "")}"` : ""
	}>
  赛博朋克
</button>`,
	ReactJSCode: () => `暂无`,
	TSCode: () => `暂无`,
	VueTSCode: () => `暂无`,
	ReactTSCode: () => `暂无`,
};

const Component3 = () => {
	return (
		<>
			<div className="compontent_title" id="button-anchor4">
				赛博朋克
			</div>
			<p className="compontent_p">赛博朋克风格按钮。</p>
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
					<button className="button_compontent_button4 button_compontent_button4_hover">
						赛博朋克
					</button>
				</div>
				<ShowCode code={code} />
			</div>
		</>
	);
};

export default Component3;
