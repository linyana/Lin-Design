import React from "react";
import ShowCode from "@/components/Components/ShowCode";
import { codeState } from "@/store/Code";

import topSrc from "@/assets/images/normal/top.png";
import wrongSrc from "@/assets/svg/normal/wrong.svg";

import "./index.css";

const Component1 = () => {
	const code: codeState = {
		element: () => (
			<div className="backtop_component1_content">
				<div
					className="to_top"
					onClick={() => {
						window.scrollTo(0, 0);
					}}
				>
					<img src={topSrc} alt="" />
				</div>
			</div>
		),
		HTMLCode: (className: string) => `<div${
			className.trim() ? ` class="${className.replace(".", "")}"` : ""
		} onclick="BackTop()">
  <img src="" alt="" />
</div>`,
		CSSCode: (
			className: string,
			bgColor: string,
			color: string,
			hoverColor: string
		) => {
			return `${className === "" ? "div" : className} {
  cursor: pointer;
  position: fixed;
  z-index: 999;
  right: 40px;
  bottom: 40px;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  border: 1px solid rgb(221, 219, 219);
  box-shadow: 0 0 3px rgba(0,0,0,0.2);
  background-color: #fff;
  text-align: center;
  transition: all 0.3s;
}

${className === "" ? "div" : className}:hover {
  animation: hoverToTop 0.8s;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
}

${className === "" ? "div" : className}:hover img {
  width: 60%;
  margin-top: 20%;
}

@keyframes hoverToTop {
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-8px);
  }

  100% {
    transform: translateY(0);
  }
}

${className === "" ? "div" : className} img {
  transition: all 0.3s;
  width: 50%;
  margin-top: 25%;
}
        `;
		},
		JSCode: () => `const BackTop = () => {
  window.scrollTo(0,0);
}`,
		VueHTMLCode: (className: string) => `<div${
			className.trim() ? ` class="${className.replace(".", "")}"` : ""
		} @click="BackTop()">
  <img src={topSrc} alt="" />
</div>`,
		VueJSCode: () => `const BackTop = () => {
  window.scrollTo(0,0);
}`,
		ReactHTMLCode: (className: string) => `<div${
			className.trim() ? ` className="${className.replace(".", "")}"` : "" } onClick={() => {
  window.scrollTo(0, 0);
}}>
  content
</div>`,
		ReactJSCode: () => `暂无`,
		TSCode: () => `const BackTop = (): void => {
  window.scrollTo(0,0);
}`,
		VueTSCode: () => `const BackTop = (): void => {
  window.scrollTo(0,0);
}`,
		ReactTSCode: () => `暂无`,
	};

	return (
		<>
			<div className="compontent_title" id="backtop-anchor1">
				基本样式
			</div>
			<p className="compontent_p">鼠标经过时会有一小段移动。</p>
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
					<div className="backtop_component1_content">
						<div
							className="to_top"
							onClick={() => {
								window.scrollTo(0, 0);
							}}
						>
							<img src={topSrc} alt="" />
						</div>
					</div>
				</div>
				<ShowCode code={code} />
			</div>
		</>
	);
};

export default Component1;
