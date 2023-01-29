import React from "react";
import ShowCode from "@/components/Components/ShowCode";
import { codeState } from "@/store/Code";

import rightSrc from "@/assets/svg/normal/right.svg";

import "./index.css";

const Component1 = () => {
	const code: codeState = {
		element: () => (
			<div className="nav_component1_content">
				<nav>
					<ul>
						<li>
							<a>首页</a>
						</li>
						<li>
							<a>最新资讯</a>
						</li>
						<li>
							<a>关于我们</a>
						</li>
					</ul>
				</nav>
			</div>
		),
		HTMLCode: (className: string) => `<div${
			className.trim() ? ` class="${className.replace(".", "")}"` : ""
		}>
	<nav>
		<ul>
			<li>
				<a href="#">首页</a>
			</li>
			<li>
				<a href="#">最新资讯</a>
			</li>
			<li>
				<a href="#">关于我们</a>
			</li>
		</ul>
	</nav>
</div>`,
		CSSCode: (
			className: string,
			bgColor: string,
			color: string,
			hoverColor: string
		) => {
			return `
${className === "" ? "div" : className} ul {
	display: flex;
}

${className === "" ? "div" : className} ul li {
	cursor: pointer;
	list-style: none;
	background-color: ${bgColor};
	transition: all 0.3s;
}

${className === "" ? "div" : className} ul li:hover {
	background-color: ${hoverColor};
}

${className === "" ? "div" : className} ul li a {
  padding: 0 30px;
  line-height: 50px;
  display: inline-block;
  height: 50px;
	text-decoration: none;
	color: ${color};
	transition: all 0.3s;
}
        `;
		},
		JSCode: () => `暂无`,
		VueHTMLCode: (className: string) => `<div${
			className.trim() ? ` class="${className.replace(".", "")}"` : ""
		}>
	<nav>
		<ul>
			<li>
				<a href="#">首页</a>
			</li>
			<li>
				<a href="#">最新资讯</a>
			</li>
			<li>
				<a href="#">关于我们</a>
			</li>
		</ul>
	</nav>
</div>`,
		VueJSCode: () => `暂无`,
		ReactHTMLCode: (className: string) => `<div${
			className.trim() ? ` className="${className.replace(".", "")}"` : ""
		}>
	<nav>
		<ul>
			<li>
				<a href="#">首页</a>
			</li>
			<li>
				<a href="#">最新资讯</a>
			</li>
			<li>
				<a href="#">关于我们</a>
			</li>
		</ul>
	</nav>
</div>`,
		ReactJSCode: () => `暂无`,
		TSCode: () => `暂无`,
		VueTSCode: () => `暂无`,
		ReactTSCode: () => `暂无`,
	};

	return (
		<>
			<div className="compontent_title" id="nav-anchor1">
				基本导航栏
			</div>
			<p className="compontent_p">较为基本的导航栏。</p>
			<p className="function_p">
				背景颜色：
				<img src={rightSrc} alt="" />
			</p>
			<p className="function_p">
				字体颜色：
				<img src={rightSrc} alt="" />
			</p>
			<p className="function_p">
				悬浮颜色：
				<img src={rightSrc} alt="" />
			</p>
			<div className="component_box">
				<div className="compontent_box_content">
					<div className="nav_component1_content nav_component1_content_hover">
						<nav>
							<ul>
								<li>
									<a>首页</a>
								</li>
								<li>
									<a>最新资讯</a>
								</li>
								<li>
									<a>关于我们</a>
								</li>
							</ul>
						</nav>
					</div>
				</div>
				<ShowCode code={code} />
			</div>
		</>
	);
};

export default Component1;
