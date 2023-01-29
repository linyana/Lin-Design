import React from "react";
import ShowCode from "@/components/Components/ShowCode";
import { codeState } from "@/store/Code";

import wrongSrc from "@/assets/svg/normal/wrong.svg";
import rightSrc from "@/assets/svg/normal/right.svg";

import "./index.css";

const Component1 = () => {
	const code: codeState = {
		element: () => (
			<div className="scrollBar_component1_content">
				<div className="scrollBar_content">内容</div>
				<div className="scrollBar_content">内容</div>
				<div className="scrollBar_content">内容</div>
				<div className="scrollBar_content">内容</div>
				<div className="scrollBar_content">内容</div>
				<div className="scrollBar_content">内容</div>
				<div className="scrollBar_content">内容</div>
				<div className="scrollBar_content">内容</div>
				<div className="scrollBar_content">内容</div>
				<div className="scrollBar_content">内容</div>
				<div className="scrollBar_content">内容</div>
			</div>
		),
		HTMLCode: (className: string) => `<div${
			className.trim() ? ` class="${className.replace(".", "")}"` : ""
		}>
  <div class="scrollBar_content">内容</div>
  <div class="scrollBar_content">内容</div>
  <div class="scrollBar_content">内容</div>
  <div class="scrollBar_content">内容</div>
  <div class="scrollBar_content">内容</div>
  <div class="scrollBar_content">内容</div>
  <div class="scrollBar_content">内容</div>
  <div class="scrollBar_content">内容</div>
  <div class="scrollBar_content">内容</div>
  <div class="scrollBar_content">内容</div>
  <div class="scrollBar_content">内容</div>
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
  overflow-y: scroll;
  height: 260px;
}

${className === "" ? "div" : className}::-webkit-scrollbar-thumb:horizontal {
  width: 4px;
  background-color: #CCCCCC;
  -webkit-border-radius: 6px;
  border-radius: 6px;
}

${className === "" ? "div" : className}::-webkit-scrollbar-track-piece {
  background-color: #fff;
  -webkit-border-radius: 0;
  border-radius: 0;
}

${className === "" ? "div" : className}::-webkit-scrollbar {
  width: 10px;
  height: 8px;
}

${className === "" ? "div" : className}::-webkit-scrollbar-thumb:vertical {
  height: 50px;
  background-color: var(--bgColor);
  -webkit-border-radius: 4px;
  border-radius: 4px;
  outline: 2px solid #fff;
  outline-offset: -2px;
  border: 2px solid #fff;
}

${className === "" ? "div" : className}::-webkit-scrollbar-thumb:hover {
  height: 50px;
  background-color: var(--bgColor);
  -webkit-border-radius: 4px;
  border-radius: 4px;
}

.scrollBar_content {
  background-color: rgb(162, 171, 209);
  text-align: center;
  line-height: 60px;
  color:rgb(248, 247, 247);
  margin-bottom: 10px;
}
        `;
		},
		JSCode: () => `暂无`,
		VueHTMLCode: (className: string) => `<div${
			className.trim() ? ` class="${className.replace(".", "")}"` : ""
		}>
  <div class="scrollBar_content">内容</div>
  <div class="scrollBar_content">内容</div>
  <div class="scrollBar_content">内容</div>
  <div class="scrollBar_content">内容</div>
  <div class="scrollBar_content">内容</div>
  <div class="scrollBar_content">内容</div>
  <div class="scrollBar_content">内容</div>
  <div class="scrollBar_content">内容</div>
  <div class="scrollBar_content">内容</div>
  <div class="scrollBar_content">内容</div>
  <div class="scrollBar_content">内容</div>
</div>`,
		VueJSCode: () => `暂无`,
		ReactHTMLCode: (className: string) => `<div${
			className.trim() ? ` className="${className.replace(".", "")}"` : ""
		}>
  <div className="scrollBar_content">内容</div>
  <div className="scrollBar_content">内容</div>
  <div className="scrollBar_content">内容</div>
  <div className="scrollBar_content">内容</div>
  <div className="scrollBar_content">内容</div>
  <div className="scrollBar_content">内容</div>
  <div className="scrollBar_content">内容</div>
  <div className="scrollBar_content">内容</div>
  <div className="scrollBar_content">内容</div>
  <div className="scrollBar_content">内容</div>
  <div className="scrollBar_content">内容</div>
</div>`,
		ReactJSCode: () => `暂无`,
		TSCode: () => `暂无`,
		VueTSCode: () => `暂无`,
		ReactTSCode: () => `暂无`,
	};

	return (
		<>
			<div className="compontent_title" id="button-anchor3">
				基本优化
			</div>
			<p className="compontent_p">对滚动条的样式进行优化，可以将css中的类选择器删除以作用于全局。</p>
			<p className="function_p">
				背景颜色：
				<img src={rightSrc} alt="" />
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
					<div className="scrollBar_component1_content scrollBar_component1_content_color">
						<div className="scrollBar_content">内容</div>
						<div className="scrollBar_content">内容</div>
						<div className="scrollBar_content">内容</div>
						<div className="scrollBar_content">内容</div>
						<div className="scrollBar_content">内容</div>
						<div className="scrollBar_content">内容</div>
						<div className="scrollBar_content">内容</div>
						<div className="scrollBar_content">内容</div>
						<div className="scrollBar_content">内容</div>
						<div className="scrollBar_content">内容</div>
						<div className="scrollBar_content">内容</div>
					</div>
				</div>
				<ShowCode code={code} />
			</div>
		</>
	);
};

export default Component1;
