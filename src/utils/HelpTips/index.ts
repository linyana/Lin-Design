import "./index.css";

export type TipOptionsType = {
	element: string;
	left: string;
	top: string;
	title?: string;
	content?: string;
	mark?: string;
	width?: string;
};

type TipPageType = {
	position: string;
	width: string;
	height: string;
	backgroundColor: string;
	zIndex: string;
	left: string;
	top: string;
};

export type tipConfigsType = {
	[key: string]: TipOptionsType[];
};

class HelpTips {
	// clone dom
	private newDom: any;

	// get parameters
	private options: TipOptionsType[] | undefined;

	// current number of steps
	private currentIndex: number;

	constructor(options: TipOptionsType[]) {
    this.options = options;
		this.currentIndex = 0;
	}

	begin = () => {
		setTimeout(() => {
			if (document.getElementById("tip-page")) {
				this.skip();
			} else {
				setTimeout(() => {
					this.createTipPage();
				}, 500);
			}
		});
	};

	// create element
	static createElement = (type: any, className = "", html = "") => {
		const element = document.createElement(type);
		element.className = className;
		element.innerHTML = html;
		return element;
	};

	// remove element
	static removeElement = (element: any) => {
		if (element && element.parentNode) {
			element.parentNode.removeChild(element);
		}
	};

	// skip all steps in this page
	skip = () => {
		const tipBox = document.querySelector("#tip-box") as HTMLElement;
		const tipPage = document.querySelector("#tip-page") as HTMLElement;
		tipBox.style.opacity = "1";
		tipPage.style.opacity = "1";
		setTimeout(() => {
			tipBox.style.opacity = "0";
			tipPage.style.opacity = "0";
		}, 0);
		setTimeout(() => {
			HelpTips.removeElement(this.newDom);
			HelpTips.removeElement(tipBox);
			HelpTips.removeElement(tipPage);
		}, 300);
	};

	// go to next step
	next = () => {
		this.currentIndex += 1;
		if (
			document.querySelector(this.options![this.currentIndex]?.element) === null
		) {
			this.currentIndex += 1;
		}
		if (this.currentIndex >= this.options!.length) {
			this.skip();
		} else {
			HelpTips.removeElement(this.newDom);
			const currentSetting = this.options![this.currentIndex];
			const dom = document.querySelector(currentSetting.element);
			if (dom !== null) {
				this.newDom = dom.cloneNode(true);
				document.getElementById("tip-page")!.appendChild(this.newDom);
				if (currentSetting.title) {
					document.querySelector("h1.tip_title")!.innerHTML =
						currentSetting.title;
				}
				if (currentSetting.content) {
					document.querySelector("p.tip_content")!.innerHTML =
						currentSetting.content;
				}
				this.applyCurrentPosition();
			}
		}
	};

	// create mask layer
	createTipPage = () => {
		if (document.getElementById("tip-page") !== null) {
			return null;
		}

		const tipPage = document.createElement("div");
		tipPage.id = "tip-page";

		const TipPageStyles: TipPageType = {
			position: "fixed",
			width: "100%",
			height: "100%",
			backgroundColor: "rgba(0,0,0,0.1)",
			zIndex: "999999999997",
			left: "0",
			top: "0",
		};

		Object.keys(TipPageStyles).forEach((item: any) => {
			tipPage.style[item] = TipPageStyles[item as keyof TipPageType];
		});

		document.body!.appendChild(tipPage);
		setTimeout(() => {
			tipPage.style.backgroundColor = "rgba(0,0,0,0.3)";
		}, 0);

		this.createTipBox();

		window.addEventListener("resize", () => {
			if (
				this.currentIndex < this.options!.length &&
				document.getElementById("tip-page")
			) {
				this.applyCurrentPosition();
			}
		});
	};

	createTipBox = () => {
		const tipBox = document.createElement("div");
		tipBox.id = "tip-box";
		document.getElementById("tip-page")!.appendChild(tipBox);

		const currentSetting = this.options![this.currentIndex];

		const fragment = document.createDocumentFragment();

		fragment.appendChild(HelpTips.createElement("div", "tip_mark", ""));
		fragment.appendChild(
			HelpTips.createElement("h1", "tip_title", currentSetting.title)
		);
		fragment.appendChild(
			HelpTips.createElement("p", "tip_content", currentSetting.content)
		);
		const fragmentFooter = fragment.appendChild(
			HelpTips.createElement("div", "tip_footer", "")
		);
		const button1 = HelpTips.createElement("button", "tip_button", "跳过");
		button1.addEventListener("click", () => this.skip());
		fragmentFooter.appendChild(button1);
		const button2 = HelpTips.createElement("button", "tip_button2", "下一步");
		button2.addEventListener("click", () => this.next());
		fragmentFooter.appendChild(button2);
		// append fragment
		tipBox.appendChild(fragment);

		const mark = document.querySelector(".tip_mark") as HTMLElement;
		mark!.style.opacity = "0";
		setTimeout(() => {
			mark!.style.opacity = "1";
		}, 0);

		// clone dom / highlight element
		const dom = document.querySelector(currentSetting.element);
		// Throws an error when the element cannot be found
		if (dom === null) {
			// avoid generating tip-page and tip-box repeatedly
			if (document.getElementById("tip-page") !== null) {
				HelpTips.removeElement(document.querySelector("#tip-box"));
				HelpTips.removeElement(document.querySelector("#tip-page"));
			}
			throw new Error("can not find element, please check your element option");
		}
		this.newDom = dom.cloneNode(true);
		document.getElementById("tip-page")!.appendChild(this.newDom);

		this.applyCurrentPosition();
	};

	// update view
	applyCurrentPosition = () => {
		const tipBox = document.getElementById("tip-box")!;

		const currentSetting = this.options![this.currentIndex];

		type TipBoxType = {
			position: string;
			maxWidth: string;
			backgroundColor: string;
			zIndex: string;
			left: string;
			top: string;
			padding: string;
			borderRadius: string;
		};

		const dom: any = document.querySelector(currentSetting.element);
		// avoid problems when the width is a percentage
		const width = dom.offsetWidth;
		const style = window.getComputedStyle(dom, null);
		const leftPadding = style.getPropertyValue("padding-left");
		const rightPadding = style.getPropertyValue("padding-right");
		const left = `${
			(dom.getBoundingClientRect().right as number) +
			Number(currentSetting.left.replace("px", ""))
		}px`;
		const top = `${
			(dom.getBoundingClientRect().top as number) +
			Number(currentSetting.top.replace("px", ""))
		}px`;

		const TipBoxStyles: TipBoxType = {
			position: "absolute",
			maxWidth: "180px",
			backgroundColor: "white",
			zIndex: "999999999999",
			left,
			top,
			padding: "10px 20px 15px",
			borderRadius: "10px",
		};

		Object.keys(TipBoxStyles).forEach((item: any) => {
			tipBox.style[item] = TipBoxStyles[item as keyof TipBoxType];
		});

		if (currentSetting.width) {
			tipBox.style.maxWidth = currentSetting.width;
			tipBox.style.width = currentSetting.width;
		}

		// clone dom
		if (style.getPropertyValue("box-sizing") === "border-box") {
			this.newDom.style.boxSizing = "content-box";
		}
		this.newDom.style.width = `${
			width - parseFloat(leftPadding) - parseFloat(rightPadding)
		}px`;
		this.newDom.style.zIndex = "999999999998";
		this.newDom.style.position = "absolute";
		this.newDom.style.left = `${dom?.getBoundingClientRect().left as number}px`;
		this.newDom.style.top = `${dom?.getBoundingClientRect().top as number}px`;
		this.newDom.style.backgroundColor = "white";

		// mark's position
		const mark = document.querySelector(".tip_mark") as HTMLElement;
		mark!.className = `tip_mark tip_${currentSetting.mark}`;
	};
}

export default HelpTips;
