import React, { useState } from "react";
import ShowCode from "@/components/Components/ShowCode";
import { codeState } from "@/store/Code";

import wrongSrc from "@/assets/svg/normal/wrong.svg";

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
		JSCode: () => `
const moveCards = document.querySelectorAll(".move_card");
const restore = () => {
	for (let i = 0; i < moveCards.length; i++) {
		moveCards[i].style.width = "22%";
	}
};
for (let i = 0; i < moveCards.length; i++) {
	moveCards[i].addEventListener('mouseenter',() => {
		restore();
		moveCards[i].style.width = "36%";
	})
}`,
		VueHTMLCode: (className: string) => `<div${
			className.trim() ? ` class="${className.replace(".", "")}"` : ""
		}>
	<div
		className="move_card move_card1"
		:style="{ width: width1 ? '36%' : '22%' }"
		@mouseenter="restore(1)"
	>
		<div className="move_card_title">标题</div>
		<div className="move_card_text">
			我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容
		</div>
	</div>
	<div
		className="move_card move_card2"
		:style="{ width: width2 ? '36%' : '22%' }"
		@mouseenter="restore(2)"
	>
		<div className="move_card_title">标题</div>
		<div className="move_card_text">
			我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容
		</div>
	</div>
	<div
		className="move_card move_card3"
		:style="{ width: width3 ? '36%' : '22%' }"
		@mouseenter="restore(3)"
	>
		<div className="move_card_title">标题</div>
		<div className="move_card_text">
			我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容
		</div>
	</div>
</div>`,
		VueJSCode: () => `
import { ref } from "vue";

const width1 = ref(true);
const width2 = ref(false);
const width3 = ref(false);
const restore = (index: number) => {
	width1.value = false;
	width2.value = false;
	width3.value = false;
	index === 1
		? (width1.value = true)
		: index === 2
		? (width2.value = true)
		: (width3.value = true);
};`,
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
		TSCode: () => `
const moveCards = document.querySelectorAll(".move_card");
const restore = (): void => {
	for (let i = 0; i < moveCards.length; i++) {
		moveCards[i].style.width = "22%";
	}
};
for (let i = 0; i < moveCards.length; i++) {
	moveCards[i].addEventListener('mouseenter',() => {
		restore();
		moveCards[i].style.width = "36%";
	})
}`,
		VueTSCode: () => `
import { ref } from "vue";

const width1 = ref<boolean>(true);
const width2 = ref<boolean>(false);
const width3 = ref<boolean>(false);
const restore = (index: number): void => {
	width1.value = false;
	width2.value = false;
	width3.value = false;
	index === 1
		? (width1.value = true)
		: index === 2
		? (width2.value = true)
		: (width3.value = true);
};
		`,
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
			<div className="compontent_title" id="content-anchor4">
				鼠标经过变宽2
			</div>
			<p className="compontent_p">跟上一个组件相比，增加了默认打开的状态。</p>
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
