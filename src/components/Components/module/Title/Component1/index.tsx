import React from "react";
import ShowCode from "@/components/Components/ShowCode";
import { codeState } from "@/store/Code";

import "./index.css";

const Component1 = () => {
	const code: codeState = {
		element: () => <div className="title_component1_content">标题</div>,
		HTMLCode: (className: string) => `<div${
			className.trim() ? ` class="${className.replace(".", "")}"` : ""
		}>
  标题
</div>`,
		CSSCode: (
			className: string,
			bgColor: string,
			color: string,
			hoverColor: string
		) => {
			return `${className === "" ? "div" : className} {
  font-size: 26px;
  line-height: 60px;
  color: ${color};
  border-bottom: 2px solid ${bgColor};
  font-weight: 700;
}
        `;
		},
		JSCode: () => `暂无`,
		VueHTMLCode: (className: string) => `<div${
			className.trim() ? ` class="${className.replace(".", "")}"` : ""
		}>
  标题
</div>`,
		VueJSCode: () => `暂无`,
		ReactHTMLCode: (className: string) => `<div${
			className.trim() ? ` className="${className.replace(".", "")}"` : ""
		}>
  标题
</div>`,
		ReactJSCode: () => `暂无`,
		TSCode: () => `暂无`,
		VueTSCode: () => `暂无`,
		ReactTSCode: () => `暂无`,
	};

	return (
		<>
			<div className="compontent_title" id="title-anchor2">
				长下划线
			</div>
			<p className="compontent_p">在标题下方增加一条下划线增强视觉效果</p>
			<div className="component_box">
				<div className="compontent_box_content">
					<div
						className="title_component1_content"
						style={{
							borderBottom: "2px solid rgb(61, 60, 60)",
							color: "#495057",
						}}
					>
						标题
					</div>
				</div>
				<ShowCode code={code} />
			</div>
		</>
	);
};

export default Component1;
