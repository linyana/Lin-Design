import React from "react";
import ShowCode from "@/components/Components/ShowCode";
import { codeState } from "@/store/Code";

import wrongSrc from "@/assets/svg/normal/wrong.svg";

import "./index.css";

const Component1 = () => {
	const code: codeState = {
		element: () => (
			<div className="table_component1_content">
				<table cellSpacing={0}>
					<thead>
						<tr>
							<td>序号</td>
							<td>姓名</td>
							<td>性别</td>
							<td>描述</td>
							<td>日期</td>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>1</td>
							<td>小李</td>
							<td>男</td>
							<td>这是一段很长的描述</td>
							<td>2022/12/3</td>
						</tr>
						<tr>
							<td>2</td>
							<td>小李</td>
							<td>男</td>
							<td>这是一段很长的描述</td>
							<td>2022/12/3</td>
						</tr>
						<tr>
							<td>3</td>
							<td>小李</td>
							<td>男</td>
							<td>这是一段很长的描述</td>
							<td>2022/12/3</td>
						</tr>
					</tbody>
				</table>
			</div>
		),
		HTMLCode: (className: string) => `<div${
			className.trim() ? ` class="${className.replace(".", "")}"` : ""
		}>
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
</div>`,
		CSSCode: (
			className: string,
			bgColor: string,
			color: string,
			hoverColor: string
		) => {
			return ` 
${className === "" ? "div" : className} {
  width: 100%;
}

${className === "" ? "div" : className} table {
  width: 100%;
}

${className === "" ? "div" : className} table td{
  border: 1px solid rgb(132, 160, 173);
  border-right: none;
  border-bottom: none;
  text-align: center;
  padding: 4px 20px;
}

${className === "" ? "div" : className} table td:last-child {
  border-right: 1px solid rgb(132, 160, 173);
}

${className === "" ? "div" : className} table tr:last-child td {
  border-bottom: 1px solid rgb(132, 160, 173);
}

${className === "" ? "div" : className} table thead td {
  background-color: rgb(87, 153, 214);
  color: white;
  font-weight: 700;
  font-size: 16px;
}

${className === "" ? "div" : className} table tbody td {
  background-color: rgb(187, 212, 235);
  color: #495057;
  font-size: 14px;
}
        `;
		},
		JSCode: () => `暂无`,
		VueHTMLCode: (className: string) => `<div${
			className.trim() ? ` class="${className.replace(".", "")}"` : ""
		}>
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
</div>`,
		VueJSCode: () => `暂无`,
		ReactHTMLCode: (className: string) => `<div${
			className.trim() ? ` className="${className.replace(".", "")}"` : ""
		}>
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
</div>`,
		ReactJSCode: () => `暂无`,
		TSCode: () => `暂无`,
		VueTSCode: () => `暂无`,
		ReactTSCode: () => `暂无`,
	};

	return (
		<>
			<div className="compontent_title" id="button-anchor3">
				基本表格
			</div>
			<p className="compontent_p">
				对表格的颜色进行基本的封装,如果表格内容过多，可以给最外层的盒子设置overflow:scroll，然后参考滚动条进行修饰。
			</p>
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
					<div className="table_component1_content">
						<table cellSpacing={0}>
							<thead>
								<tr>
									<td>序号</td>
									<td>姓名</td>
									<td>性别</td>
									<td>描述</td>
									<td>日期</td>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>1</td>
									<td>小李</td>
									<td>男</td>
									<td>这是一段很长的描述</td>
									<td>2022/12/3</td>
								</tr>
								<tr>
									<td>2</td>
									<td>小李</td>
									<td>男</td>
									<td>这是一段很长的描述</td>
									<td>2022/12/3</td>
								</tr>
								<tr>
									<td>3</td>
									<td>小李</td>
									<td>男</td>
									<td>这是一段很长的描述</td>
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

export default Component1;
