import React, { useState } from "react";
import ShowCode from "@/components/Components/ShowCode";
import { codeState } from "@/store/Code";

import wrongSrc from "@/assets/svg/normal/wrong.svg";
import tipErrorSrc from "@/assets/images/tip/tip-error.png";

import "./index.css";

const Component1 = () => {
	const code: codeState = {
		element: () => (
			<div className="message_component3_content">
				<div className={errorMessageClass}>
					<img src={tipErrorSrc} alt="" />
					密码输入错误
				</div>
				<button
					onClick={() => {
						showErrorMessage();
					}}
				>
					错误
				</button>
			</div>
		),
		HTMLCode: (className: string) => `<div${
			className.trim() ? ` class="${className.replace(".", "")}"` : ""
		}>
  <div class="popup_message error_message">
    <img src="" alt="" />
    密码输入错误
  </div>
  <button onclick="showErrorMessage()">错误</button>
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
}

${className === "" ? "div" : className} .error_message {
	background-color: rgba(186, 233, 180, 0.6);
	box-shadow: 0 0 10px rgba(132, 207, 122, 0.3);
	color: rgb(113, 182, 127);
	transform: translateY(3px);
}

${className === "" ? "div" : className} .show_message {
  display: block;
	animation: showMessage 0.3s;
}

${className === "" ? "div" : className} .hidden_message {
  display: block;
	animation: hiddenMessage 0.3s;
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
			() => `const errorMessage = document.querySelector(".error_message");

const showErrorMessage = () => {
  if (
    document.querySelector(".show_message") === null &&
    document.querySelector(".hidden_message") === null
  ) {
    errorMessage.className = "popup_message error_message show_message";
    setTimeout(() => {
      errorMessage.className =
        "popup_message error_message hidden_message";
      setTimeout(() => {
        errorMessage.className = "popup_message error_message";
      }, 280);
    }, 1200);
  }
};`,
		VueHTMLCode: (className: string) => `<div${
			className.trim() ? ` class="${className.replace(".", "")}"` : ""
		}>
  <div :class="errorMessageClass">
    <img src="" alt="" />
    密码输入错误
  </div>
  <button @click="showErrorMessage">错误</button>
</div>`,
		VueJSCode: () => `import { ref } from "vue";
const errorMessageClass = ref("popup_message error_message");

const showErrorMessage = () => {
  if (
    document.querySelector(".show_message") === null &&
    document.querySelector(".hidden_message") === null
  ) {
    errorMessageClass.value = "popup_message error_message show_message";
    setTimeout(() => {
      errorMessageClass.value = "popup_message error_message hidden_message";
      setTimeout(() => {
        errorMessageClass.value = "popup_message error_message";
      }, 280);
    }, 1200);
  }
};`,
		ReactHTMLCode: (className: string) => `<div${
			className.trim() ? ` className="${className.replace(".", "")}"` : ""
		}>
  <div className={errorMessageClass}>
    <img src={tipRightSrc} alt="" />
    密码输入错误
  </div>
  <button
    onClick={() => {
      showErrorMessage();
    }}
  >
    错误
  </button>
</div>`,
		ReactJSCode:
			() => `	const [errorMessageClass, setErrorMessageClass] = useState<string>(
  "popup_message error_message"
);

const showErrorMessage = (): void => {
  if (
    document.querySelector(".show_message") === null &&
    document.querySelector(".hidden_message") === null
  ) {
    setErrorMessageClass("popup_message error_message show_message");
    setTimeout(() => {
      setErrorMessageClass("popup_message error_message hidden_message");
      setTimeout(() => {
        setErrorMessageClass("popup_message error_message");
      }, 280);
    }, 1200);
  }
};
    `,
		TSCode: () => `const errorMessage = document.querySelector(".error_message");

const showErrorMessage = (): void => {
  if (
    document.querySelector(".show_message") === null &&
    document.querySelector(".hidden_message") === null
  ) {
    errorMessage.className = "popup_message error_message show_message";
    setTimeout(() => {
      errorMessage.className =
        "popup_message error_message hidden_message";
      setTimeout(() => {
        errorMessage.className = "popup_message error_message";
      }, 280);
    }, 1200);
  }
};`,
		VueTSCode: () => `import { ref } from "vue";
const errorMessageClass = ref<string>("popup_message error_message");

const showErrorMessage = (): void => {
  if (
    document.querySelector(".show_message") === null &&
    document.querySelector(".hidden_message") === null
  ) {
    errorMessageClass.value = "popup_message error_message show_message";
    setTimeout(() => {
      errorMessageClass.value = "popup_message error_message hidden_message";
      setTimeout(() => {
        errorMessageClass.value = "popup_message error_message";
      }, 280);
    }, 1200);
  }
};`,
		ReactTSCode:
			() => `	const [errorMessageClass, setErrorMessageClass] = useState<string>(
  "popup_message error_message"
);

const showErrorMessage = (): void => {
  if (
    document.querySelector(".show_message") === null &&
    document.querySelector(".hidden_message") === null
  ) {
    setErrorMessageClass("popup_message error_message show_message");
    setTimeout(() => {
      setErrorMessageClass("popup_message error_message hidden_message");
      setTimeout(() => {
        setErrorMessageClass("popup_message error_message");
      }, 280);
    }, 1200);
  }
};
    `,
	};

	const [errorMessageClass, setErrorMessageClass] = useState<string>(
		"popup_message error_message"
	);

	const showErrorMessage = (): void => {
		if (
			document.querySelector(".show_message") === null &&
			document.querySelector(".hidden_message") === null
		) {
			setErrorMessageClass("popup_message error_message show_message");
			setTimeout(() => {
				setErrorMessageClass("popup_message error_message hidden_message");
				setTimeout(() => {
					setErrorMessageClass("popup_message error_message");
				}, 280);
			}, 1200);
		}
	};

	return (
		<>
			<div className="compontent_title" id="message-anchor3">
				错误提示
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
					<div className="message_component3_content">
						<div className={errorMessageClass}>
							<img src={tipErrorSrc} alt="" />
							密码输入错误
						</div>
						<button
							onClick={() => {
								showErrorMessage();
							}}
						>
							错误
						</button>
					</div>
				</div>
				<ShowCode code={code} />
			</div>
		</>
	);
};

export default Component1;
