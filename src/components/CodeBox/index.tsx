import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import HelpTips from "@/utils/HelpTips";
import { CodeBoxTipConfig } from "@/utils/HelpTips/config";

import Header from "./Header";
import Left from "./Left";
import Middle from "./Middle";
import Right from "./Right";

import "./index.css";

const CodeBox = () => {
	const [pageClass, setPageClass] = useState<string>("no_show_page code_page");
	const [codeBoxClass, setCodeBoxClass] = useState<string>("");
	const [isPage, setIsPage] = useState<boolean>(false);
	const isCodeBoxShow = useSelector(
		(state: RootState) => state.isCodeBoxShow.isCodeBoxShow
	);

	if (isPage && localStorage.getItem("lin-tip") !== "true") {
		const tip = new HelpTips(CodeBoxTipConfig);
		tip.begin();
		localStorage.setItem("lin-tip", "true");
	}

	useEffect(() => {
		if (isCodeBoxShow) {
			if (!isPage) {
				setPageClass("show_page close_code_page code_page");
				setCodeBoxClass("close_code_box code_box");
				setTimeout(() => {
					setPageClass("show_page code_page open_code_page");
					setCodeBoxClass("open_code_box code_box");
				}, 100);
				setIsPage(true);
			} else {
				setPageClass("show_page code page open_code_page");
				setCodeBoxClass("open_code_box code_box");
				setIsPage(true);
			}
		} else {
			if (isPage) {
				setPageClass("code_page close_code_page");
				setCodeBoxClass("close_code_box code_box");
				setTimeout(() => {
					setPageClass("code_page close_code_page no_show_page");
				}, 500);
				setIsPage(false);
			} else {
				setPageClass("code_page close_code_page no_show_page");
				setCodeBoxClass("close_code_box code_box");
				setIsPage(false);
			}
		}
	}, [isCodeBoxShow]);

	return (
		<div className={pageClass}>
			<div className={codeBoxClass}>
				<div className="code_box_content">
					<Header></Header>
					<div className="flex_between" style={{ height: "100%" }}>
						<Left></Left>
						<Middle></Middle>
						<Right></Right>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CodeBox;
