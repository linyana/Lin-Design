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
		JSCode: () => `const SwitchBox = document.querySelector(".switch_box");
let isSwitch = false;
SwitchBox.addEventListener("click", () => {
  if (isSwitch) {
    SwitchBox.className = "switch_box";
    isSwitch = !isSwitch;
  } else {
    SwitchBox.className = "is_switch_box switch_box";
    isSwitch = !isSwitch;
  }
});`,
		VueHTMLCode: (className: string) => `<div${
			className.trim() ? ` class="${className.replace(".", "")}"` : ""
		}>
  content
</div>`,
		VueJSCode: () => `import { ref } from "vue";
const switchClass = ref("switch_box");

const changeSwitch = () => {
  if(switchClass.value === "switch_box"){
    switchClass.value = "switch_box is_switch_box"
  }else {
    switchClass.value = "switch_box"
  }
}`,
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
		TSCode: () => `const SwitchBox = document.querySelector(".switch_box");
let isSwitch: boolean = false;
SwitchBox.addEventListener("click", ():void => {
  if (isSwitch) {
    SwitchBox.className = "switch_box";
    isSwitch = !isSwitch;
  } else {
    SwitchBox.className = "is_switch_box switch_box";
    isSwitch = !isSwitch;
  }
});`,
		VueTSCode: () => `import { ref } from "vue";
const switchClass = ref<string>("switch_box");

const changeSwitch = (): void => {
  if(switchClass.value === "switch_box"){
    switchClass.value = "switch_box is_switch_box"
  }else {
    switchClass.value = "switch_box"
  }
}`,
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
