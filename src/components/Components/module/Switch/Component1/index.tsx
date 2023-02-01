import React, { useState } from "react";
import ShowCode from "@/components/Components/ShowCode";
import { codeState } from "@/store/Code";

import wrongSrc from "@/assets/svg/normal/wrong.svg";
import rightSrc from "@/assets/svg/normal/right.svg";

import "./index.css";

const Switch1 = () => {
	const code: codeState = {
		element: () => <Component></Component>,
		HTMLCode: (className: string) => `<div${
			className.trim() ? ` class="${className.replace(".", "")}"` : ""
		}>
  <div class="switch_box">
    <div class="switch_circle"></div>
  </div>
</div>`,
		CSSCode: (
			className: string,
			bgColor: string,
			color: string,
			hoverColor: string
		) => {
			return `
${className === "" ? "div" : className} .switch_box {
  cursor: pointer;
  position: relative;
  width: 40px;
  height: 20px;
  border-radius: 10px;
  border: 1px solid rgb(187, 183, 183);
  background-color: #bfbfbf;
  transition: all 0.3s;
}

${className === "" ? "div" : className} .switch_circle {
  position: absolute;
  left: 0;
  top: 0;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background-color: #fff;
  transition: all 0.3s;
}

${className === "" ? "div" : className} .is_switch_box {
  background-color: ${bgColor};
}

${className === "" ? "div" : className} .is_switch_box .switch_circle {
  left: 20px;
}
        `;
		},
		JSCode: () => `const switchBox = document.querySelector(".switch_box");
let isSwitch = false;
switchBox.addEventListener("click", () => {
  if (isSwitch) {
    switchBox.className = "switch_box";
    isSwitch = !isSwitch;
  } else {
    switchBox.className = "is_switch_box switch_box";
    isSwitch = !isSwitch;
  }
});`,
		VueHTMLCode: (className: string) => `<div${
			className.trim() ? ` class="${className.replace(".", "")}"` : ""
		}>
	<div
		:class="isSwitch ? 'is_switch_box switch_box' : 'switch_box'"
		@click="changeSwitch"
	>
		<div class="switch_circle"></div>
	</div>
</div>`,
		VueJSCode: () => `import { ref } from "vue";
const isSwitch = ref(false);

const changeSwitch = () => {
	isSwitch.value = !isSwitch.value;
};`,
		ReactHTMLCode: (className: string) => `<div${
			className.trim() ? ` className="${className.replace(".", "")}"` : ""
		}>
  <div
    className={isSwitch ? "is_switch_box switch_box" : "switch_box"}
    onClick={() => {
      setIsSwitch(!isSwitch);
    }}
  >
    <div className="switch_circle"></div>
  </div>
</div>`,
		ReactJSCode: () => `const [isSwitch, setIsSwitch] = useState(false);`,
		TSCode: () => `const switchBox = document.querySelector(".switch_box");
let isSwitch: boolean = false;
switchBox.addEventListener("click", ():void => {
  if (isSwitch) {
    switchBox.className = "switch_box";
    isSwitch = !isSwitch;
  } else {
    switchBox.className = "is_switch_box switch_box";
    isSwitch = !isSwitch;
  }
});`,
		VueTSCode: () => `import { ref } from "vue";
const isSwitch = ref<boolean>(false);

const changeSwitch = (): void => {
	isSwitch.value = !isSwitch.value;
};`,
		ReactTSCode: () =>
			`const [isSwitch, setIsSwitch] = useState<boolean>(false);`,
	};

	const [isSwitch, setIsSwitch] = useState<boolean>(false);

	return (
		<>
			<div className="compontent_title" id="switch-anchor1">
				开关
			</div>
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
					<div className="switch_component1_content switch_component1_content_hover">
						<div
							className={isSwitch ? "is_switch_box switch_box" : "switch_box"}
							onClick={() => {
								setIsSwitch(!isSwitch);
							}}
						>
							<div className="switch_circle"></div>
						</div>
					</div>
				</div>
				<ShowCode code={code} />
			</div>
		</>
	);
};

const Component = () => {
	const [isSwitch, setIsSwitch] = useState<boolean>(false);
	return (
		<div className="switch_component1_content">
			<div
				className={isSwitch ? "is_switch_box switch_box" : "switch_box"}
				onClick={() => {
					setIsSwitch(!isSwitch);
				}}
			>
				<div className="switch_circle"></div>
			</div>
		</div>
	);
};

export default Switch1;
