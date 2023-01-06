import React from "react";
import ShowCode from "@/components/Components/ShowCode";

import { codeState } from "@/store/Code";

import "./index.css";

const code: codeState = {
	element: () => (
		<button
			className="button_compontent_button3"
			style={{
				backgroundColor: "var(--bgColor)",
				boxShadow: "var(--bgColor03)",
			}}
		>
			圆角按钮
		</button>
	),
	HTMLCode: (className: string) => `<button${
		className.trim() ? ` class="${className.replace(".", "")}"` : ""
	}>
  圆角按钮
</button>`,
	CSSCode: (
		className: string,
		bgColor: string,
		color: string,
		hoverColor: string
	) => `button${className} {
  cursor: pointer;
  padding: 0 30px;
  height: 36px;
  background-color: ${bgColor};
  border: none;
  outline: none;
  border-radius: 100px;
  color: ${color};
  box-shadow: 0 0 5px ${bgColor.replace(")", ", 0.3)")};
  transition: all 0.5s;
}
    
button${className}:hover {
  background-color: ${hoverColor};
}`,
	JSCode: () => `暂无`,
	VueHTMLCode: (className: string) => `<button${
		className.trim() ? ` class="${className.replace(".", "")}"` : ""
	}>
  圆角按钮
</button>`,
	VueJSCode: () => `暂无`,
	ReactHTMLCode: (className: string) => `<button${
		className.trim() ? ` className="${className.replace(".", "")}"` : ""
	}>
  圆角按钮
</button>`,
	ReactJSCode: () => `暂无`,
	TSCode: () => `暂无`,
	VueTSCode: () => `暂无`,
	ReactTSCode: () => `暂无`,
};

const Component3 = () => {
	return (
		<>
			<div className="compontent_title" id="button-anchor3">
				圆角按钮
			</div>
			<p className="compontent_p">圆角按钮样式</p>
			<div className="component_box">
				<div className="compontent_box_content">
					<button
						className="button_compontent_button3 button_compontent_button3_hover"
						style={{
							backgroundColor: "rgb(47, 121, 206)",
							color: "rgb(248, 248, 248)",
						}}
					>
						圆角按钮
					</button>
				</div>
				<ShowCode code={code} />
			</div>
		</>
	);
};

export default Component3;
