import React from "react";
import ShowCode from "@/components/Components/ShowCode";
import { codeState } from "@/store/Code";

import rightSrc from "@/assets/svg/normal/right.svg";

import "./index.css";

const Component2 = () => {
	const code: codeState = {
		element: () => (
			<div className="nav_component2_content">
				<nav>
					<ul>
						<li>
							<a>首页</a>
						</li>
						<li>
							<a>最新资讯</a>
						</li>
						<li className="second_li">
							<a>
								我的博客{" "}
								<div className="nav_bottom">
									<span className="nav_bottom_span1"></span>
									<span className="nav_bottom_span2"></span>
								</div>
								<div className="second_nav">
									<ul>
										<li>
											<a>文章一</a>
										</li>
										<li>
											<a>文章二</a>
										</li>
										<li>
											<a>文章三</a>
										</li>
									</ul>
								</div>
							</a>
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
				<a>首页</a>
			</li>
			<li>
				<a>最新资讯</a>
			</li>
			<li class="second_li">
				<a>
					我的博客 
					<div class="nav_bottom">
						<span class="nav_bottom_span1"></span>
						<span class="nav_bottom_span2"></span>
					</div>
					<div class="second_nav">
						<ul>
							<li>
								<a href="">文章一</a>
							</li>
							<li>
								<a href="">文章二</a>
							</li>
							<li>
								<a href="">文章三</a>
							</li>
						</ul>
					</div>
				</a>
			</li>
			<li>
				<a>关于我们</a>
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
	position: relative;
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

${className === "" ? "div" : className} ul li.second_li a {
	display: flex;
}

${className === "" ? "div" : className} ul li.second_li .nav_bottom {
	width: 16px;
	height: 16px;
	transform: translateY(-3px);
	margin-left: 10px;
	transition: all 0.3s;
}

${className === "" ? "div" : className} ul li.second_li:hover .nav_bottom {
	transform: translateY(37px) translateX(-2px) rotate(-180deg);
}

${className === "" ? "div" : className} ul li.second_li:hover .second_nav {
	display: block;
	animation: showSecondNav 0.3s;
}

${className === "" ? "div" : className} .second_nav {
	z-index: 999;
	display: none;
	position: absolute;
	padding: 10px 0;
	top: 50px;
	left: 0;
	overflow: hidden;
	transition: all 0.3s;
}

${className === "" ? "div" : className} .second_nav {
	width: 100%;
}

${className === "" ? "div" : className} .second_nav ul {
	width: 100%;
}

${className === "" ? "div" : className} .second_nav ul li {
	text-align: center;
	width: 100%;
}

${className === "" ? "div" : className} .second_nav ul li a {
	display: inline-block;
	width: 100%;
	padding: 0;
	text-align: center;
}

${className === "" ? "div" : className} .second_nav ul {
	flex-wrap: wrap;
}

@keyframes showSecondNav {
	from {
		transform: scale(0.1) translateY(-60px);
    opacity: 0.2;
	}
	to {
		transform: scale(1) translateY(0);
    opacity: 1;
	}
}

${className === "" ? "div" : className} span.nav_bottom_span1 {
	display: inline-block;
	width: 8px;
	height: 2px;
	background-color: ${color};
	transform: rotate(45deg) translateY(-1.5px);
}

${className === "" ? "div" : className} span.nav_bottom_span2 {
	display: inline-block;
	width: 8px;
	height: 2px;
	background-color: ${color};
	transform: rotate(135deg) translateY(1.5px);
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
				<a>首页</a>
			</li>
			<li>
				<a>最新资讯</a>
			</li>
			<li class="second_li">
				<a>
					我的博客 
					<div class="nav_bottom">
						<span class="nav_bottom_span1"></span>
						<span class="nav_bottom_span2"></span>
					</div>
					<div class="second_nav">
						<ul>
							<li>
								<a href="">文章一</a>
							</li>
							<li>
								<a href="">文章二</a>
							</li>
							<li>
								<a href="">文章三</a>
							</li>
						</ul>
					</div>
				</a>
			</li>
			<li>
				<a>关于我们</a>
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
				<a>首页</a>
			</li>
			<li>
				<a>最新资讯</a>
			</li>
			<li className="second_li">
				<a>
					我的博客{" "}
					<div className="nav_bottom">
						<span className="nav_bottom_span1"></span>
						<span className="nav_bottom_span2"></span>
					</div>
					<div className="second_nav">
						<ul>
							<li>
								<a href="">文章一</a>
							</li>
							<li>
								<a href="">文章二</a>
							</li>
							<li>
								<a href="">文章三</a>
							</li>
						</ul>
					</div>
				</a>
			</li>
			<li>
				<a>关于我们</a>
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
				二级导航
			</div>
			<p className="compontent_p">增加了二级导航栏。</p>
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
					<div className="nav_component2_content nav_component2_content_hover">
						<nav>
							<ul>
								<li>
									<a>首页</a>
								</li>
								<li>
									<a>最新资讯</a>
								</li>
								<li className="second_li">
									<a>
										我的博客{" "}
										<div className="nav_bottom">
											<span className="nav_bottom_span1 nav_bottom_span_color"></span>
											<span className="nav_bottom_span2 nav_bottom_span_color"></span>
										</div>
										<div className="second_nav">
											<ul>
												<li>
													<a>文章一</a>
												</li>
												<li>
													<a>文章二</a>
												</li>
												<li>
													<a>文章三</a>
												</li>
											</ul>
										</div>
									</a>
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

export default Component2;
