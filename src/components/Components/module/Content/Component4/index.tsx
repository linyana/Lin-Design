import React, { useState } from "react";
import ShowCode from "@/components/Components/ShowCode";
import { codeState } from "@/store/Code";

import "./index.css";

const Component1 = () => {
	const code: codeState = {
		element: () => {
			return <Component />;
		},
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
}`;
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
	<div
		className="move_card move_card1"
		style={{ width: width1 ? "36%" : "22%" }}
		onMouseEnter={() => {
			restore();
			setWidth1(true);
		}}
	>
		<div className="move_card_title">标题</div>
		<div className="move_card_text">
			我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容
		</div>
	</div>
	<div
		className="move_card move_card2"
		style={{ width: width2 ? "36%" : "22%" }}
		onMouseEnter={() => {
			restore();
			setWidth2(true);
		}}
	>
		<div className="move_card_title">标题</div>
		<div className="move_card_text">
			我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容
		</div>
	</div>
	<div
		className="move_card move_card3"
		style={{ width: width3 ? "36%" : "22%" }}
		onMouseEnter={() => {
			restore();
			setWidth3(true);
		}}
	>
		<div className="move_card_title">标题</div>
		<div className="move_card_text">
			我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容
		</div>
	</div>
</div>`,
		ReactJSCode: () => `
import { useState } from 'react'

const [width1, setWidth1] = useState(true);
const [width2, setWidth2] = useState(false);
const [width3, setWidth3] = useState(false);

const restore = () => {
	setWidth1(false);
	setWidth2(false);
	setWidth3(false);
};		
		`,
		TSCode: () => `暂无`,
		VueTSCode: () => `暂无`,
		ReactTSCode: () => `
import { useState } from 'react'

const [width1, setWidth1] = useState<boolean>(true);
const [width2, setWidth2] = useState<boolean>(false);
const [width3, setWidth3] = useState<boolean>(false);

const restore = (): void => {
	setWidth1(false);
	setWidth2(false);
	setWidth3(false);
};`,
	};

	const [width1, setWidth1] = useState<boolean>(true);
	const [width2, setWidth2] = useState<boolean>(false);
	const [width3, setWidth3] = useState<boolean>(false);

	const restore = (): void => {
		setWidth1(false);
		setWidth2(false);
		setWidth3(false);
	};

	return (
		<>
			<div className="compontent_title" id="basic_button">
				鼠标经过变宽2
			</div>
			<p className="compontent_p">跟上一个组件相比，增加了默认打开的状态。</p>
			<div className="component_box">
				<div className="compontent_box_content">
					<div className="content_component4_content" style={{ width: 700 }}>
						<div
							className="move_card move_card1"
							style={{ width: width1 ? "36%" : "22%" }}
							onMouseEnter={() => {
								restore();
								setWidth1(true);
							}}
						>
							<div className="move_card_title">标题</div>
							<div className="move_card_text">
								我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容
							</div>
						</div>
						<div
							className="move_card move_card2"
							style={{ width: width2 ? "36%" : "22%" }}
							onMouseEnter={() => {
								restore();
								setWidth2(true);
							}}
						>
							<div className="move_card_title">标题</div>
							<div className="move_card_text">
								我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容
							</div>
						</div>
						<div
							className="move_card move_card3"
							style={{ width: width3 ? "36%" : "22%" }}
							onMouseEnter={() => {
								restore();
								setWidth3(true);
							}}
						>
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

const Component = () => {
	const [width1, setWidth1] = useState<boolean>(true);
	const [width2, setWidth2] = useState<boolean>(false);
	const [width3, setWidth3] = useState<boolean>(false);

	const restore = (): void => {
		setWidth1(false);
		setWidth2(false);
		setWidth3(false);
	};

	return (
		<>
			<div className="content_component4_content">
				<div
					className="move_card move_card1"
					style={{ width: width1 ? "36%" : "22%" }}
					onMouseEnter={() => {
						restore();
						setWidth1(true);
					}}
				>
					<div className="move_card_title">标题</div>
					<div className="move_card_text">
						我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容
					</div>
				</div>
				<div
					className="move_card move_card2"
					style={{ width: width2 ? "36%" : "22%" }}
					onMouseEnter={() => {
						restore();
						setWidth2(true);
					}}
				>
					<div className="move_card_title">标题</div>
					<div className="move_card_text">
						我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容
					</div>
				</div>
				<div
					className="move_card move_card3"
					style={{ width: width3 ? "36%" : "22%" }}
					onMouseEnter={() => {
						restore();
						setWidth3(true);
					}}
				>
					<div className="move_card_title">标题</div>
					<div className="move_card_text">
						我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容
					</div>
				</div>
			</div>
		</>
	);
};

export default Component1;
