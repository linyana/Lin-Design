import React from "react";
import ShowCode from "@/components/Components/ShowCode";
import { codeState } from "@/store/Code";

import wrongSrc from "@/assets/svg/normal/wrong.svg";

import "./index.css";

const Component3 = () => {
	const code: codeState = {
		element: () => (
			<div className="table_component3_content">
				<table cellSpacing={0}>
					<thead>
						<tr>
							<td>序号</td>
							<td>姓名</td>
							<td>性别</td>
							<td>描述</td>
							<td>日期</td>
							<td>操作</td>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>1</td>
							<td>小李</td>
							<td>男</td>
							<td>这是一段很长的描述</td>
							<td>2022/12/3</td>
							<td>
								<button className="edit_button">修改</button>
								<button className="delete_button">删除</button>
							</td>
						</tr>
						<tr>
							<td>2</td>
							<td>小李</td>
							<td>男</td>
							<td>这是一段很长的描述</td>
							<td>2022/12/3</td>
							<td>
								<button className="edit_button">修改</button>
								<button className="delete_button">删除</button>
							</td>
						</tr>
						<tr>
							<td>3</td>
							<td>小李</td>
							<td>男</td>
							<td>这是一段很长的描述</td>
							<td>2022/12/3</td>
							<td>
								<button className="edit_button">修改</button>
								<button className="delete_button">删除</button>
							</td>
						</tr>
						<tr>
							<td>3</td>
							<td>小李</td>
							<td>男</td>
							<td>这是一段很长的描述</td>
							<td>2022/12/3</td>
							<td>
								<button className="edit_button">修改</button>
								<button className="delete_button">删除</button>
							</td>
						</tr>
						<tr>
							<td>3</td>
							<td>小李</td>
							<td>男</td>
							<td>这是一段很长的描述</td>
							<td>2022/12/3</td>
							<td>
								<button className="edit_button">修改</button>
								<button className="delete_button">删除</button>
							</td>
						</tr>
						<tr>
							<td>3</td>
							<td>小李</td>
							<td>男</td>
							<td>这是一段很长的描述</td>
							<td>2022/12/3</td>
							<td>
								<button className="edit_button">修改</button>
								<button className="delete_button">删除</button>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		),
		HTMLCode: (className: string) => `<div${
			className.trim() ? ` class="${className.replace(".", "")}"` : ""
		}>
  <table cellSpacing="0">
    <thead>
      <tr>
        <td>序号</td>
        <td>姓名</td>
        <td>性别</td>
        <td>描述</td>
        <td>日期</td>
        <td>操作</td>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>小李</td>
        <td>男</td>
        <td>这是一段很长的描述</td>
        <td>2022/12/3</td>
        <td>
          <button class="edit_button">修改</button>
          <button class="delete_button">删除</button>
        </td>
      </tr>
      <tr>
        <td>2</td>
        <td>小李</td>
        <td>男</td>
        <td>这是一段很长的描述</td>
        <td>2022/12/3</td>
        <td>
          <button class="edit_button">修改</button>
          <button class="delete_button">删除</button>
        </td>
      </tr>
      <tr>
        <td>3</td>
        <td>小李</td>
        <td>男</td>
        <td>这是一段很长的描述</td>
        <td>2022/12/3</td>
        <td>
          <button class="edit_button">修改</button>
          <button class="delete_button">删除</button>
        </td>
      </tr>
      <tr>
        <td>3</td>
        <td>小李</td>
        <td>男</td>
        <td>这是一段很长的描述</td>
        <td>2022/12/3</td>
        <td>
          <button class="edit_button">修改</button>
          <button class="delete_button">删除</button>
        </td>
      </tr>
      <tr>
        <td>3</td>
        <td>小李</td>
        <td>男</td>
        <td>这是一段很长的描述</td>
        <td>2022/12/3</td>
        <td>
          <button class="edit_button">修改</button>
          <button class="delete_button">删除</button>
        </td>
      </tr>
      <tr>
        <td>3</td>
        <td>小李</td>
        <td>男</td>
        <td>这是一段很长的描述</td>
        <td>2022/12/3</td>
        <td>
          <button class="edit_button">修改</button>
          <button class="delete_button">删除</button>
        </td>
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

${className === "" ? "div" : className} table td {
  color: #495057;
  padding: 8px 20px;
  text-align: center;
}

${className === "" ? "div" : className} table thead td {
  font-weight: 700;
  font-size: 15px;
  background-color: #e8ebf0;
}

${className === "" ? "div" : className} table tbody td {
  font-size: 14px;
}

${className === "" ? "div" : className} table tbody tr:nth-child(2n) td{
  background-color: #f5f5f5;
}

${className === "" ? "div" : className} table tbody td button {
  width: 50px;
  height: 24px;
  margin: 3px 6px;
  cursor: pointer;
  outline: none;
  font-size: 13px;
  padding: 0;
  border-radius: 3px;
}

${className === "" ? "div" : className} table tbody td button.delete_button {
  background-color: rgb(212, 101, 101);
  box-shadow: 0 0 3px rgba(202, 139, 139, 0.3);
  border: none;
  color:rgb(241, 241, 241);
}

${className === "" ? "div" : className} table tbody td button.edit_button {
  border:1px solid rgb(179, 189, 212);
  background-color: rgb(248, 248, 248);
  color: rgb(140, 146, 160);
  box-shadow: 0 0 3px rgba(139, 174, 202, 0.3);
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
        <td>描述</td>
        <td>日期</td>
        <td>操作</td>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>小李</td>
        <td>男</td>
        <td>这是一段很长的描述</td>
        <td>2022/12/3</td>
        <td>
          <button class="edit_button">修改</button>
          <button class="delete_button">删除</button>
        </td>
      </tr>
      <tr>
        <td>2</td>
        <td>小李</td>
        <td>男</td>
        <td>这是一段很长的描述</td>
        <td>2022/12/3</td>
        <td>
          <button class="edit_button">修改</button>
          <button class="delete_button">删除</button>
        </td>
      </tr>
      <tr>
        <td>3</td>
        <td>小李</td>
        <td>男</td>
        <td>这是一段很长的描述</td>
        <td>2022/12/3</td>
        <td>
          <button class="edit_button">修改</button>
          <button class="delete_button">删除</button>
        </td>
      </tr>
      <tr>
        <td>3</td>
        <td>小李</td>
        <td>男</td>
        <td>这是一段很长的描述</td>
        <td>2022/12/3</td>
        <td>
          <button class="edit_button">修改</button>
          <button class="delete_button">删除</button>
        </td>
      </tr>
      <tr>
        <td>3</td>
        <td>小李</td>
        <td>男</td>
        <td>这是一段很长的描述</td>
        <td>2022/12/3</td>
        <td>
          <button class="edit_button">修改</button>
          <button class="delete_button">删除</button>
        </td>
      </tr>
      <tr>
        <td>3</td>
        <td>小李</td>
        <td>男</td>
        <td>这是一段很长的描述</td>
        <td>2022/12/3</td>
        <td>
          <button class="edit_button">修改</button>
          <button class="delete_button">删除</button>
        </td>
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
        <td>描述</td>
        <td>日期</td>
        <td>操作</td>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>小李</td>
        <td>男</td>
        <td>这是一段很长的描述</td>
        <td>2022/12/3</td>
        <td>
          <button className="edit_button">修改</button>
          <button className="delete_button">删除</button>
        </td>
      </tr>
      <tr>
        <td>2</td>
        <td>小李</td>
        <td>男</td>
        <td>这是一段很长的描述</td>
        <td>2022/12/3</td>
        <td>
          <button className="edit_button">修改</button>
          <button className="delete_button">删除</button>
        </td>
      </tr>
      <tr>
        <td>3</td>
        <td>小李</td>
        <td>男</td>
        <td>这是一段很长的描述</td>
        <td>2022/12/3</td>
        <td>
          <button className="edit_button">修改</button>
          <button className="delete_button">删除</button>
        </td>
      </tr>
      <tr>
        <td>3</td>
        <td>小李</td>
        <td>男</td>
        <td>这是一段很长的描述</td>
        <td>2022/12/3</td>
        <td>
          <button className="edit_button">修改</button>
          <button className="delete_button">删除</button>
        </td>
      </tr>
      <tr>
        <td>3</td>
        <td>小李</td>
        <td>男</td>
        <td>这是一段很长的描述</td>
        <td>2022/12/3</td>
        <td>
          <button className="edit_button">修改</button>
          <button className="delete_button">删除</button>
        </td>
      </tr>
      <tr>
        <td>3</td>
        <td>小李</td>
        <td>男</td>
        <td>这是一段很长的描述</td>
        <td>2022/12/3</td>
        <td>
          <button className="edit_button">修改</button>
          <button className="delete_button">删除</button>
        </td>
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
			<div className="compontent_title" id="table-anchor3">
				斑马纹表格
			</div>
			<p className="compontent_p">
				使用带斑马纹的表格，可以更容易区分出不同行的数据。
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
					<div className="table_component3_content">
						<table cellSpacing={0}>
							<thead>
								<tr>
									<td>序号</td>
									<td>姓名</td>
									<td>性别</td>
									<td>描述</td>
									<td>日期</td>
									<td>操作</td>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>1</td>
									<td>小李</td>
									<td>男</td>
									<td>这是一段很长的描述</td>
									<td>2022/12/3</td>
									<td>
										<button className="edit_button">修改</button>
										<button className="delete_button">删除</button>
									</td>
								</tr>
								<tr>
									<td>2</td>
									<td>小李</td>
									<td>男</td>
									<td>这是一段很长的描述</td>
									<td>2022/12/3</td>
									<td>
										<button className="edit_button">修改</button>
										<button className="delete_button">删除</button>
									</td>
								</tr>
								<tr>
									<td>3</td>
									<td>小李</td>
									<td>男</td>
									<td>这是一段很长的描述</td>
									<td>2022/12/3</td>
									<td>
										<button className="edit_button">修改</button>
										<button className="delete_button">删除</button>
									</td>
								</tr>
								<tr>
									<td>3</td>
									<td>小李</td>
									<td>男</td>
									<td>这是一段很长的描述</td>
									<td>2022/12/3</td>
									<td>
										<button className="edit_button">修改</button>
										<button className="delete_button">删除</button>
									</td>
								</tr>
								<tr>
									<td>3</td>
									<td>小李</td>
									<td>男</td>
									<td>这是一段很长的描述</td>
									<td>2022/12/3</td>
									<td>
										<button className="edit_button">修改</button>
										<button className="delete_button">删除</button>
									</td>
								</tr>
								<tr>
									<td>3</td>
									<td>小李</td>
									<td>男</td>
									<td>这是一段很长的描述</td>
									<td>2022/12/3</td>
									<td>
										<button className="edit_button">修改</button>
										<button className="delete_button">删除</button>
									</td>
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

export default Component3;
