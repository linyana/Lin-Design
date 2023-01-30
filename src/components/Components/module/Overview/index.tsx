import React from "react";
import { useNavigate } from "react-router";

import "@/components/Components/index.css";
import "./index.css";

import buttonSrc from "@/assets/images/overview/button.png";
import layoutSrc from "@/assets/images/overview/layout.png";
import inputSrc from "@/assets/images/overview/input.png";
import titleSrc from "@/assets/images/overview/title.png";
import slideSrc from "@/assets/images/overview/slide.gif";
import cardSrc from "@/assets/images/overview/card.png";
import contentSrc from "@/assets/images/overview/content.png";
import scrollBarSrc from "@/assets/images/overview/scrollBar.png";
import switchSrc from "@/assets/images/overview/switch.png";
import tableSrc from "@/assets/images/overview/table.png";
import backTopSrc from "@/assets/images/overview/backTop.png";
import navSrc from "@/assets/images/overview/nav.png";
import messageSrc from "@/assets/images/overview/message.png";

const Button = () => {
	const navigate = useNavigate();
	const toTarget = (target: string): void => {
		navigate(target, {
			replace: false,
		});
	};
	return (
		<div>
			<div className="component_big_title">
				综述 <span>Overview</span>
			</div>
			<div className="compontent_title" id="overview-anchor">
				通用
			</div>
			<div className="summary_cards">
				<div
					className="summary_card"
					onClick={() => {
						toTarget("../layout");
					}}
				>
					<div className="summary_content">
						<div className="summary_title">布局</div>
						<div className="summary_img_content">
							<div className="summary_img">
								<img src={layoutSrc} alt="" />
							</div>
						</div>
						<div className="summary_text">Layout</div>
					</div>
				</div>
				<div
					className="summary_card"
					onClick={() => {
						toTarget("../button");
					}}
				>
					<div className="summary_content">
						<div className="summary_title">按钮</div>
						<div className="summary_img_content">
							<div className="summary_img">
								<img src={buttonSrc} alt="" />
							</div>
						</div>
						<div className="summary_text">Button</div>
					</div>
				</div>
				<div
					className="summary_card"
					onClick={() => {
						toTarget("../input");
					}}
				>
					<div className="summary_content">
						<div className="summary_title">输入框</div>
						<div className="summary_img_content">
							<div className="summary_img">
								<img src={inputSrc} alt="" />
							</div>
						</div>
						<div className="summary_text">Input</div>
					</div>
				</div>
				<div
					className="summary_card"
					onClick={() => {
						toTarget("../title");
					}}
				>
					<div className="summary_content">
						<div className="summary_title">标题</div>
						<div className="summary_img_content">
							<div className="summary_img">
								<img src={titleSrc} alt="" />
							</div>
						</div>
						<div className="summary_text">Title</div>
					</div>
				</div>
				<div
					className="summary_card"
					onClick={() => {
						toTarget("../scrollBar");
					}}
				>
					<div className="summary_content">
						<div className="summary_title">滚动条</div>
						<div className="summary_img_content">
							<div className="summary_img">
								<img src={scrollBarSrc} alt="" />
							</div>
						</div>
						<div className="summary_text">ScrollBar</div>
					</div>
				</div>
				<div
					className="summary_card"
					onClick={() => {
						toTarget("../backTop");
					}}
				>
					<div className="summary_content">
						<div className="summary_title">返回顶部</div>
						<div className="summary_img_content">
							<div className="summary_img">
								<img src={backTopSrc} alt="" />
							</div>
						</div>
						<div className="summary_text">BackTop</div>
					</div>
				</div>
				<div
					className="summary_card"
					onClick={() => {
						toTarget("../switch");
					}}
				>
					<div className="summary_content">
						<div className="summary_title">开关</div>
						<div className="summary_img_content">
							<div className="summary_img">
								<img src={switchSrc} alt="" />
							</div>
						</div>
						<div className="summary_text">Switch</div>
					</div>
				</div>
				<span></span>
				<span></span>
			</div>
			<div className="compontent_title" id="overview-anchor2">
				内容展示
			</div>
			<div className="summary_cards">
				<div
					className="summary_card"
					onClick={() => {
						toTarget("../nav");
					}}
				>
					<div className="summary_content">
						<div className="summary_title">导航栏</div>
						<div className="summary_img_content">
							<div className="summary_img">
								<img src={navSrc} alt="" />
							</div>
						</div>
						<div className="summary_text">Nav</div>
					</div>
				</div>
				<div
					className="summary_card"
					onClick={() => {
						toTarget("../slide");
					}}
				>
					<div className="summary_content">
						<div className="summary_title">轮播图</div>
						<div className="summary_img_content">
							<div className="summary_img">
								<img src={slideSrc} alt="" />
							</div>
						</div>
						<div className="summary_text">Slide</div>
					</div>
				</div>
				<div
					className="summary_card"
					onClick={() => {
						toTarget("../card");
					}}
				>
					<div className="summary_content">
						<div className="summary_title">卡片</div>
						<div className="summary_img_content">
							<div className="summary_img">
								<img src={cardSrc} alt="" />
							</div>
						</div>
						<div className="summary_text">Card</div>
					</div>
				</div>
				<div
					className="summary_card"
					onClick={() => {
						toTarget("../content");
					}}
				>
					<div className="summary_content">
						<div className="summary_title">内容</div>
						<div className="summary_img_content">
							<div className="summary_img">
								<img src={contentSrc} alt="" />
							</div>
						</div>
						<div className="summary_text">Content</div>
					</div>
				</div>
				<div
					className="summary_card"
					onClick={() => {
						toTarget("../table");
					}}
				>
					<div className="summary_content">
						<div className="summary_title">表格</div>
						<div className="summary_img_content">
							<div className="summary_img">
								<img src={tableSrc} alt="" />
							</div>
						</div>
						<div className="summary_text">Table</div>
					</div>
				</div>
				<div
					className="summary_card"
					onClick={() => {
						toTarget("../message");
					}}
				>
					<div className="summary_content">
						<div className="summary_title">消息通知</div>
						<div className="summary_img_content">
							<div className="summary_img">
								<img src={messageSrc} alt="" />
							</div>
						</div>
						<div className="summary_text">Message</div>
					</div>
				</div>
				<span></span>
				<span></span>
			</div>
		</div>
	);
};

export default Button;
