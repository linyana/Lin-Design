import React from "react";
import ShowCode from "@/components/Components/ShowCode";
import { codeState } from "@/store/Code";

import wrongSrc from "@/assets/svg/normal/wrong.svg";

import "./index.css";

const Component1 = () => {
	const code: codeState = {
		element: () => (
			<div className="content_component3_content" style={{ width: 700 }}>
				<div className="move_card move_card1">
					<div className="move_card_title">标题</div>
					<div className="move_card_text">
						我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容
					</div>
				</div>
				<div className="move_card move_card2">
					<div className="move_card_title">标题</div>
					<div className="move_card_text">
						我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容
					</div>
				</div>
				<div className="move_card move_card3">
					<div className="move_card_title">标题</div>
					<div className="move_card_text">
						我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容
					</div>
				</div>
			</div>
		),
		HTMLCode: (className: string) => `<div${
			className.trim() ? ` class="${className.replace(".", "")}"` : ""
		}>
	<div class="move_card move_card1">
		<div class="move_card_title">标题</div>
		<div class="move_card_text">
			我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容
		</div>
	</div>
	<div class="move_card move_card2">
		<div class="move_card_title">标题</div>
		<div class="move_card_text">
			我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容
		</div>
	</div>
	<div class="move_card move_card3">
		<div class="move_card_title">标题</div>
		<div class="move_card_text">
			我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容
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
  display: flex;
  justify-content: space-around;
}

${className === "" ? "div" : className} .move_card {
  width: 22%;
  padding: 3%;
  height: 200px;
  transition: all 0.8s;
}

${className === "" ? "div" : className} .move_card:hover {
  width: 36%;
}

${className === "" ? "div" : className} .move_card1 {
  background-color: #e7b46c;
}

${className === "" ? "div" : className} .move_card2 {
  background-color: #6e9ae5;
}

${className === "" ? "div" : className} .move_card3 {
  background-color: #7277c3;
}

${className === "" ? "div" : className} .move_card .move_card_title,
${className === "" ? "div" : className} .move_card .move_card_text {
  color: white;
}

${className === "" ? "div" : className} .move_card .move_card_title {
  text-align: center;
  font-size: 26px;
  line-height: 60px;
}

${className === "" ? "div" : className} .move_card .move_card_text {
  width: 100%
}
        `;
		},
		JSCode: () => `暂无`,
		VueHTMLCode: (className: string) => `<div${
			className.trim() ? ` class="${className.replace(".", "")}"` : ""
		}>
	<div class="move_card move_card1">
		<div class="move_card_title">标题</div>
		<div class="move_card_text">
			我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容
		</div>
	</div>
	<div class="move_card move_card2">
		<div class="move_card_title">标题</div>
		<div class="move_card_text">
			我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容
		</div>
	</div>
	<div class="move_card move_card3">
		<div class="move_card_title">标题</div>
		<div class="move_card_text">
			我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容
		</div>
	</div>
</div>`,
		VueJSCode: () => `暂无`,
		ReactHTMLCode: (className: string) => `<div${
			className.trim() ? ` className="${className.replace(".", "")}"` : ""
		}>
	<div className="move_card move_card1">
		<div className="move_card_title">标题</div>
		<div className="move_card_text">
			我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容
		</div>
	</div>
	<div className="move_card move_card2">
		<div className="move_card_title">标题</div>
		<div className="move_card_text">
			我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容
		</div>
	</div>
	<div className="move_card move_card3">
		<div className="move_card_title">标题</div>
		<div className="move_card_text">
			我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容
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
			<div className="compontent_title" id="content-anchor3">
				鼠标经过变宽
			</div>
			<p className="compontent_p">
				为了高度不会随着宽度而改变，请根据需要设置高度为确定的值。
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
					<div className="content_component3_content" style={{ width: 700 }}>
						<div className="move_card move_card1">
							<div className="move_card_title">标题</div>
							<div className="move_card_text">
								我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容
							</div>
						</div>
						<div className="move_card move_card2">
							<div className="move_card_title">标题</div>
							<div className="move_card_text">
								我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容
							</div>
						</div>
						<div className="move_card move_card3">
							<div className="move_card_title">标题</div>
							<div className="move_card_text">
								我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容
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
