import React, { useState } from "react";
import ShowCode from "@/components/Components/ShowCode";
import { codeState } from "@/store/Code";

import wrongSrc from "@/assets/svg/normal/wrong.svg";
import tipRightSrc from "@/assets/images/tip/tip-right.png";

import "./index.css";

const Component1 = () => {
	const code: codeState = {
		element: () => <Component />,
		HTMLCode: (className: string) => `<div${
			className.trim() ? ` class="${className.replace(".", "")}"` : ""
		}>
  <div class="popup_message success_message">
    <img src="" alt="" />
    登录成功
  </div>
  <button onclick="showSuccessMessage()">成功</button>
</div>`,
		CSSCode: (
			className: string,
			bgColor: string,
			color: string,
			hoverColor: string
		) => {
			return `
${className === "" ? "div" : className} .popup_message {
	padding: 0 48px;
	height: 40px;
	position: fixed;
	top: 30px;
	left: 50%;
	transform: translateX(-50%);
	border-radius: 6px;
	z-index: 999999999;
	display: flex;
	justify-content: center;
	align-items: center;
	line-height: 40px;
	backdrop-filter: blur(20px);
	font-size: 14px;
  display: none;
}

${className === "" ? "div" : className} .popup_message img {
	width: 16px;
	height: 16px;
	margin-right: 10px;
	transform: translateY(3px);
}

${className === "" ? "div" : className} .success_message {
	background-color: rgba(186, 233, 180, 0.6);
	box-shadow: 0 0 10px rgba(132, 207, 122, 0.3);
	color: rgb(113, 182, 127);
}

${className === "" ? "div" : className} .show_message {
  display: block;
	animation: showMessage 0.3s;
}

${className === "" ? "div" : className} .hidden_message {
  display: block;
	animation: hiddenMessage 0.3s;
}

${className === "" ? "div" : className} .message_component1_content button {
	cursor: pointer;
	padding: 0 30px;
	height: 36px;
	background-color: transparent;
	border: 1px solid rgb(104, 185, 132, 0.1);
	outline: none;
	border-radius: 6px;
	box-shadow: 0 0 3px rgb(104, 185, 132, 0.3);
	transition: all 0.5s;
	color: rgb(104, 185, 132);
	background-color: rgb(104, 185, 132, 0.1);
}
  
${className === "" ? "div" : className} .message_component1_content button:hover {
	border: 1px solid rgb(170, 218, 138);
}

@keyframes showMessage {
	from {
		transform: translateY(-50px) translateX(-50%);
		opacity: 0;
	}
	to {
		transform: translateY(0) translateX(-50%);
		opacity: 1;
	}
}

@keyframes hiddenMessage {
	from {
		transform: translateY(0) translateX(-50%);
		opacity: 1;
	}
	to {
		transform: translateY(-50px) translateX(-50%);
		opacity: 0;
	}
}
`;
		},
		JSCode:
			() => `const successMessage = document.querySelector(".success_message");

const showSuccessMessage = () => {
  if (
    document.querySelector(".show_message") === null &&
    document.querySelector(".hidden_message") === null
  ) {
    successMessage.className = "popup_message success_message show_message";
    setTimeout(() => {
      successMessage.className =
        "popup_message success_message hidden_message";
      setTimeout(() => {
        successMessage.className = "popup_message success_message";
      }, 280);
    }, 1200);
  }
};`,
		VueHTMLCode: (className: string) => `<div${
			className.trim() ? ` class="${className.replace(".", "")}"` : ""
		}>
  <div :class="successMessageClass">
    <img src="" alt="" />
    登录成功
  </div>
  <button @click="showSuccessMessage">成功</button>
</div>`,
		VueJSCode: () => `import { ref } from "vue";
const successMessageClass = ref("popup_message success_message");

const showSuccessMessage = () => {
  if (
    document.querySelector(".show_message") === null &&
    document.querySelector(".hidden_message") === null
  ) {
    successMessageClass.value = "popup_message success_message show_message";
    setTimeout(() => {
      successMessageClass.value = "popup_message success_message hidden_message";
      setTimeout(() => {
        successMessageClass.value = "popup_message success_message";
      }, 280);
    }, 1200);
  }
};`,
		ReactHTMLCode: (className: string) => `<div${
			className.trim() ? ` className="${className.replace(".", "")}"` : ""
		}>
  <div className={successMessageClass}>
    <img src={tipRightSrc} alt="" />
    登录成功
  </div>
  <button
    onClick={() => {
      showSuccessMessage();
    }}
  >
    成功
  </button>
</div>`,
		ReactJSCode:
			() => `	const [successMessageClass, setSuccessMessageClass] = useState<string>(
  "popup_message success_message"
);

const showSuccessMessage = (): void => {
  if (
    document.querySelector(".show_message") === null &&
    document.querySelector(".hidden_message") === null
  ) {
    setSuccessMessageClass("popup_message success_message show_message");
    setTimeout(() => {
      setSuccessMessageClass("popup_message success_message hidden_message");
      setTimeout(() => {
        setSuccessMessageClass("popup_message success_message");
      }, 280);
    }, 1200);
  }
};
    `,
		TSCode:
			() => `const successMessage = document.querySelector(".success_message");

const showSuccessMessage = (): void => {
  if (
    document.querySelector(".show_message") === null &&
    document.querySelector(".hidden_message") === null
  ) {
    successMessage.className = "popup_message success_message show_message";
    setTimeout(() => {
      successMessage.className =
        "popup_message success_message hidden_message";
      setTimeout(() => {
        successMessage.className = "popup_message success_message";
      }, 280);
    }, 1200);
  }
};`,
		VueTSCode: () => `import { ref } from "vue";
const successMessageClass = ref<string>("popup_message success_message");

const showSuccessMessage = (): void => {
  if (
    document.querySelector(".show_message") === null &&
    document.querySelector(".hidden_message") === null
  ) {
    successMessageClass.value = "popup_message success_message show_message";
    setTimeout(() => {
      successMessageClass.value = "popup_message success_message hidden_message";
      setTimeout(() => {
        successMessageClass.value = "popup_message success_message";
      }, 280);
    }, 1200);
  }
};`,
		ReactTSCode:
			() => `	const [successMessageClass, setSuccessMessageClass] = useState<string>(
  "popup_message success_message"
);

const showSuccessMessage = (): void => {
  if (
    document.querySelector(".show_message") === null &&
    document.querySelector(".hidden_message") === null
  ) {
    setSuccessMessageClass("popup_message success_message show_message");
    setTimeout(() => {
      setSuccessMessageClass("popup_message success_message hidden_message");
      setTimeout(() => {
        setSuccessMessageClass("popup_message success_message");
      }, 280);
    }, 1200);
  }
};
    `,
	};

	const [successMessageClass, setSuccessMessageClass] = useState<string>(
		"popup_message success_message"
	);

	const showSuccessMessage = (): void => {
		if (
			document.querySelector(".show_message") === null &&
			document.querySelector(".hidden_message") === null
		) {
			setSuccessMessageClass("popup_message success_message show_message");
			setTimeout(() => {
				setSuccessMessageClass("popup_message success_message hidden_message");
				setTimeout(() => {
					setSuccessMessageClass("popup_message success_message");
				}, 280);
			}, 1200);
		}
	};

	return (
		<>
			<div className="compontent_title" id="message-anchor1">
				成功提示
			</div>
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
					<div className="message_component1_content">
						<div className={successMessageClass}>
							<img src={tipRightSrc} alt="" />
							登录成功
						</div>
						<button
							onClick={() => {
								showSuccessMessage();
							}}
						>
							成功
						</button>
					</div>
				</div>
				<ShowCode code={code} />
			</div>
		</>
	);
};

const Component = () => {
	const [successMessageClass2, setSuccessMessageClass2] = useState<string>(
		"popup_message success_message"
	);

	const showSuccessMessage2 = (): void => {
		if (
			document.querySelector(".show_message") === null &&
			document.querySelector(".hidden_message") === null
		) {
			setSuccessMessageClass2("popup_message success_message show_message");
			setTimeout(() => {
				setSuccessMessageClass2("popup_message success_message hidden_message");
				setTimeout(() => {
					setSuccessMessageClass2("popup_message success_message");
				}, 280);
			}, 1200);
		}
	};
	return (
		<div className="message_component1_content">
			<div className={successMessageClass2}>
				<img src={tipRightSrc} alt="" />
				登录成功
			</div>
			<button
				onClick={() => {
					showSuccessMessage2();
				}}
			>
				成功
			</button>
		</div>
	);
};

export default Component1;
