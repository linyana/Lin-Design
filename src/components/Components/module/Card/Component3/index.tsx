import React from "react";
import ShowCode from "@/components/Components/ShowCode";
import { codeState } from "@/store/Code";

import img from "@/assets/images/normal/img.jpg";

import "./index.css";

const Component1 = () => {
	const code: codeState = {
		element: () => (
			<div className="card_component3_content">
				<div className="img">
					<img src={img} alt="" />
				</div>
				<div className="title">
					标题
				</div>
				<div className="text">
					我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容
				</div>
				<div className="button">
					<button>查看</button>
				</div>
			</div>
		),
		HTMLCode: (className: string) => `<div${
			className.trim() ? ` class="${className.replace(".", "")}"` : ""
		}>
	<div class="img">
		<img src="" alt="请输入图片" />
	</div>
	<div class="title">
		标题
	</div>
	<div class="text">
		我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容
	</div>
	<div class="button">
		<button>查看</button>
	</div>
</div>`,
		CSSCode: (
			className: string,
			bgColor: string,
			color: string,
			hoverColor: string
		) => {
			return `div${className} {
	width: 300px;
	padding: 30px;
	transition: all 0.5s;
	background-color: ${bgColor};
}

div${className}:hover {
	background-color: rgb(248, 248, 248);
}

div${className} .img {
	margin-bottom: 15px;
	text-align: center;
}

div${className} .img img {
	width: 120px;
	height: 120px;
	border-radius: 50%;
}

div${className} .title {
	text-align: center;
	font-size: 26px;
	font-weight: 700;
	color: ${color};
	margin-bottom: 10px;
}

div${className} .text {
	text-align: center;
	margin: 15px 0;
	color: ${color};
}

div${className} .button {
	text-align: center;
	margin-top: 25px;
}

div${className} .button button {
	cursor: pointer;
	padding: 8px 40px;
	background-color: #73a0d3;
	border: none;
	outline: none;
	border-radius: 100px;
	color: #f8f8f8;
	box-shadow: 0 0 5px rgba(47, 121, 206,0.3);
	transition: all 0.8s;
}

div${className} .button button:hover {
	background-color: ${hoverColor}
}
        `;
		},
		JSCode: () => `暂无`,
		VueHTMLCode: (className: string) => `<div${
			className.trim() ? ` class="${className.replace(".", "")}"` : ""
		}>
  content
</div>`,
		VueJSCode: () => `暂无`,
		ReactHTMLCode: (className: string) => `<div${
			className.trim() ? ` className="${className.replace(".", "")}"` : ""
		}>
  content
</div>`,
		ReactJSCode: () => `暂无`,
		TSCode: () => `暂无`,
		VueTSCode: () => `暂无`,
		ReactTSCode: () => `暂无`,
	};

	return (
		<>
			<div className="compontent_title" id="card-anchor3">
				图片+按钮
			</div>
			<p className="compontent_p"></p>
			<div className="component_box">
				<div className="compontent_box_content">
					<div
						className="card_component3_content card_component3_content_hover"
						style={{ backgroundColor: "white" }}
					>
						<div className="img">
							<img src={img} alt="" />
						</div>
						<div className="title" style={{color: '#495057'}}>标题</div>
						<div className="text" style={{color: '#495057'}}>
							我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容
						</div>
						<div className="button">
							<button>查看</button>
						</div>
					</div>
				</div>
				<ShowCode code={code} />
			</div>
		</>
	);
};

export default Component1;
