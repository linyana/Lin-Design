import React from "react";
import ShowCode from "@/components/Components/ShowCode";
import { codeState } from "@/store/Code";
import { Link } from "react-router-dom";

import rightSrc from "@/assets/svg/normal/right.svg";

import "./index.css";

const Component3 = () => {
	const code: codeState = {
		element: () => (
			<div className="nav_component3_content">
				<nav>
					<ul>
						<li>
							<div className="left_menu_line">
								<Link to="#">
									首页
									<span>Index</span>
								</Link>
							</div>
						</li>
						<li>
							<div className="left_menu_line">
								<Link to="#">
									最新资讯
									<span>News</span>
								</Link>
							</div>
						</li>
						<li>
							<div className="left_menu_line">
								<Link to="#">
									关于我们
									<span>About</span>
								</Link>
							</div>
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
				<div class="left_menu_line">
					<a to="#">
						首页
						<span>Index</span>
					</a>
				</div>
			</li>
			<li>
				<div class="left_menu_line">
					<a to="#">
						最新资讯
						<span>News</span>
					</a>
				</div>
			</li>
			<li>
				<div class="left_menu_line">
					<a to="#">
						关于我们
						<span>About</span>
					</a>
				</div>
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
			return `${className === "" ? "div" : className} {
  overflow-y: scroll;
}

${className === "" ? "div" : className}::-webkit-scrollbar-thumb:horizontal {
  width: 4px;
  background-color: #CCCCCC;
  -webkit-border-radius: 6px;
  border-radius: 6px;
}

${className === "" ? "div" : className}::-webkit-scrollbar-track-piece {
  background-color: ${bgColor};
  -webkit-border-radius: 0;
  border-radius: 0;
}

${className === "" ? "div" : className}::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

${className === "" ? "div" : className}::-webkit-scrollbar-thumb:vertical {
  height: 50px;
  background-color: rgb(220, 221, 221);
  -webkit-border-radius: 4px;
  border-radius: 4px;
  outline: 2px solid #fff;
  outline-offset: -2px;
  border: 2px solid #fff;
}

${className === "" ? "div" : className}::-webkit-scrollbar-thumb:hover {
  height: 50px;
  background-color: rgb(220, 221, 221);
  -webkit-border-radius: 4px;
  border-radius: 4px;
}

${className === "" ? "div" : className} ul li {
  list-style: none;
}

${className === "" ? "div" : className} .left_menu_line {
  padding: 0 20px;
  cursor: pointer;
  font-size: 21px;
  line-height: 65px;
  height: 65px;
  transition: all 0.8s;
  overflow: hidden;
  background-color: ${bgColor};
}

${className === "" ? "div" : className} .left_menu_line a {
  color: ${color};
}

${className === "" ? "div" : className} .left_menu_line:hover {
  background-color: ${hoverColor};
}

${className === "" ? "div" : className} .left_menu_line span {
  color: ${color};
  font-size: 15px;
  margin-left: 10px;
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
				<div class="left_menu_line">
					<a to="#">
						首页
						<span>Index</span>
					</a>
				</div>
			</li>
			<li>
				<div class="left_menu_line">
					<a to="#">
						最新资讯
						<span>News</span>
					</a>
				</div>
			</li>
			<li>
				<div class="left_menu_line">
					<a to="#">
						关于我们
						<span>About</span>
					</a>
				</div>
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
				<div className="left_menu_line">
					<a to="#">
						首页
						<span>Index</span>
					</a>
				</div>
			</li>
			<li>
				<div className="left_menu_line">
					<a to="#">
						最新资讯
						<span>News</span>
					</a>
				</div>
			</li>
			<li>
				<div className="left_menu_line">
					<a to="#">
						关于我们
						<span>About</span>
					</a>
				</div>
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
			<div className="compontent_title" id="nav-anchor3">
				侧边导航
			</div>
			<p className="compontent_p">基本的侧边导航栏。</p>
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
					<div className="nav_component3_content nav_component3_content_hover">
						<nav>
							<ul>
								<li>
									<div className="left_menu_line">
										<Link to="#">
											首页
											<span>Index</span>
										</Link>
									</div>
								</li>
								<li>
									<div className="left_menu_line">
										<Link to="#">
											最新资讯
											<span>News</span>
										</Link>
									</div>
								</li>
								<li>
									<div className="left_menu_line">
										<Link to="#">
											关于我们
											<span>About</span>
										</Link>
									</div>
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

export default Component3;
