import React from "react";
import ShowCode from "@/components/Components/ShowCode";
import { codeState } from "@/store/Code";

import "./index.css";

const Component1 = () => {
	const code: codeState = {
		element: () => <input className="input_component2_content1" />,
		HTMLCode: (className: string) =>
			`<input${
				className.trim() ? ` class="${className.replace(".", "")}"` : ""
			} />`,
		CSSCode: (
			className: string,
			bgColor: string,
			color: string,
			hoverColor: string
		) => {
			return `input${className} {
    width: 200px;
    height: 35px;
    border: none;
    outline: none;
    border: 1px solid rgb(201, 200, 200);
    box-shadow: 0 0 5px rgba(201, 200, 200,0.6);
    border-radius: 5px;
    transition: all 0.3s;
    text-indent: 6px;
    font-size: 12px;
}

input${className}:focus {
    width: 350px;
    border: 1px solid ${hoverColor};
    box-shadow: 0 0 5px ${hoverColor.replace(")", ", 0.5)")};
}
        `;
		},
		JSCode: () => `暂无`,
		VueHTMLCode: (className: string) =>
			`<input${
				className.trim() ? ` class="${className.replace(".", "")}"` : ""
			} />`,
		VueJSCode: () => `暂无`,
		ReactHTMLCode: (className: string) =>
			`<input${
				className.trim() ? ` className="${className.replace(".", "")}"` : ""
			} />`,
		ReactJSCode: () => `暂无`,
		TSCode: () => `暂无`,
		VueTSCode: () => `暂无`,
		ReactTSCode: () => `暂无`,
	};

	return (
		<>
			<div className="compontent_title" id="input-anchor2">
				长度变化
			</div>
			<p className="compontent_p">选中时变化长度，如果能让他水平居中的话会有意想不到的效果。</p>
			<div className="component_box">
				<div className="compontent_box_content">
					<input className="input_component2_content1" />
				</div>
				<ShowCode code={code} />
			</div>
		</>
	);
};

export default Component1;
