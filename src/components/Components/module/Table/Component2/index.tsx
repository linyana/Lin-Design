import React from "react";
import ShowCode from "@/components/Components/ShowCode";
import { codeState } from "@/store/Code";

import wrongSrc from "@/assets/svg/normal/wrong.svg";
import rightSrc from "@/assets/svg/normal/right.svg";

import "./index.css";

const Component2 = () => {
	const code: codeState = {
		element: () => <div className="layout_component1_content1">content</div>,
		HTMLCode: (className: string) => `<div${
			className.trim() ? ` class="${className.replace(".", "")}"` : ""
		}>
  content
</div>`,
		CSSCode: (
			className: string,
			bgColor: string,
			color: string,
			hoverColor: string
		) => {
			return `${className === "" ? "div" : className} {
  margin: auto;
  min-height: 200px;
  background-color: rgb(225, 227, 238);
  padding: 10px;
}
        `;
		},
		JSCode: () => `暂无`,
		VueHTMLCode: (className: string) => `<div${
			className.trim() ? ` class="${className.replace(".", "")}"` : ""
		}>
  content
</div>`,
		VueJSCode: () => `暂无`,
		ReactHTMLCode: (className: string) => `<div${
			className.trim() ? ` className="${className.replace(".", "")}"` : ""
		}>
  content
</div>`,
		ReactJSCode: () => `暂无`,
		TSCode: () => `暂无`,
		VueTSCode: () => `暂无`,
		ReactTSCode: () => `暂无`,
	};

	return (
		<>
			<div className="compontent_title" id="button-anchor3">
				系统表格
			</div>
			<p className="function_p">
				背景颜色：
				<img src={wrongSrc} alt="" />
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
					<div className="table_component2_content">
						<table cellSpacing={0}>
							<thead>
								<tr>
									<td>序号</td>
									<td>姓名</td>
									<td>性别</td>
                  <td>
                    描述
                  </td>
									<td>日期</td>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>1</td>
									<td>小李</td>
									<td>男</td>
                  <td>
                    这是一段很长的描述
                  </td>
									<td>2022/12/3</td>
								</tr>
								<tr>
									<td>2</td>
									<td>小李</td>
									<td>男</td>
                  <td>
                    这是一段很长的描述
                  </td>
									<td>2022/12/3</td>
								</tr>
								<tr>
									<td>3</td>
									<td>小李</td>
									<td>男</td>
                  <td>
                    这是一段很长的描述
                  </td>
									<td>2022/12/3</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<ShowCode code={code} />
			</div>
		</>
	);
};

export default Component2;
