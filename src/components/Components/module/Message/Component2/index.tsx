import React, { useState } from "react";
import ShowCode from "@/components/Components/ShowCode";
import { codeState } from "@/store/Code";

import wrongSrc from "@/assets/svg/normal/wrong.svg";
import tipNoticeSrc from "@/assets/images/tip/tip-notice.png";

import "./index.css";

const Component1 = () => {
	const code: codeState = {
		element: () => (
			<div className="message_component1_content">
				<div className={noticeMessageClass}>
					<img src={tipNoticeSrc} alt="" />
					密码安全性较低
				</div>
				<button
					onClick={() => {
						showNoticeMessage();
					}}
				>
					警告
				</button>
			</div>
		),
		HTMLCode: (className: string) => `<div${
			className.trim() ? ` class="${className.replace(".", "")}"` : ""
		}>
  <div class="popup_message notice_message">
    <img src="" alt="" />
    密码安全性较低
  </div>
  <button onclick="showNoticeMessage()">警告</button>
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

${className === "" ? "div" : className} .notice_message {
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
			() => `const noticeMessage = document.querySelector(".notice_message");

const showNoticeMessage = () => {
  if (
    document.querySelector(".show_message") === null &&
    document.querySelector(".hidden_message") === null
  ) {
    noticeMessage.className = "popup_message notice_message show_message";
    setTimeout(() => {
      noticeMessage.className =
        "popup_message notice_message hidden_message";
      setTimeout(() => {
        noticeMessage.className = "popup_message notice_message";
      }, 280);
    }, 1200);
  }
};`,
		VueHTMLCode: (className: string) => `<div${
			className.trim() ? ` class="${className.replace(".", "")}"` : ""
		}>
  <div :class="noticeMessageClass">
    <img src="" alt="" />
    密码安全性较低
  </div>
  <button @click="showNoticeMessage">警告</button>
</div>`,
		VueJSCode: () => `import { ref } from "vue";
const noticeMessageClass = ref("popup_message notice_message");

const showNoticeMessage = () => {
  if (
    document.querySelector(".show_message") === null &&
    document.querySelector(".hidden_message") === null
  ) {
    noticeMessageClass.value = "popup_message notice_message show_message";
    setTimeout(() => {
      noticeMessageClass.value = "popup_message notice_message hidden_message";
      setTimeout(() => {
        noticeMessageClass.value = "popup_message notice_message";
      }, 280);
    }, 1200);
  }
};`,
		ReactHTMLCode: (className: string) => `<div${
			className.trim() ? ` className="${className.replace(".", "")}"` : ""
		}>
  <div className={noticeMessageClass}>
    <img src={tipRightSrc} alt="" />
    密码安全性较低
  </div>
  <button
    onClick={() => {
      showNoticeMessage();
    }}
  >
    警告
  </button>
</div>`,
		ReactJSCode:
			() => `	const [noticeMessageClass, setNoticeMessageClass] = useState<string>(
  "popup_message notice_message"
);

const showNoticeMessage = (): void => {
  if (
    document.querySelector(".show_message") === null &&
    document.querySelector(".hidden_message") === null
  ) {
    setNoticeMessageClass("popup_message notice_message show_message");
    setTimeout(() => {
      setNoticeMessageClass("popup_message notice_message hidden_message");
      setTimeout(() => {
        setNoticeMessageClass("popup_message notice_message");
      }, 280);
    }, 1200);
  }
};
    `,
		TSCode: () => `const noticeMessage = document.querySelector(".notice_message");

const showNoticeMessage = (): void => {
  if (
    document.querySelector(".show_message") === null &&
    document.querySelector(".hidden_message") === null
  ) {
    noticeMessage.className = "popup_message notice_message show_message";
    setTimeout(() => {
      noticeMessage.className =
        "popup_message notice_message hidden_message";
      setTimeout(() => {
        noticeMessage.className = "popup_message notice_message";
      }, 280);
    }, 1200);
  }
};`,
		VueTSCode: () => `import { ref } from "vue";
const noticeMessageClass = ref<string>("popup_message notice_message");

const showNoticeMessage = (): void => {
  if (
    document.querySelector(".show_message") === null &&
    document.querySelector(".hidden_message") === null
  ) {
    noticeMessageClass.value = "popup_message notice_message show_message";
    setTimeout(() => {
      noticeMessageClass.value = "popup_message notice_message hidden_message";
      setTimeout(() => {
        noticeMessageClass.value = "popup_message notice_message";
      }, 280);
    }, 1200);
  }
};`,
		ReactTSCode:
			() => `	const [noticeMessageClass, setNoticeMessageClass] = useState<string>(
  "popup_message notice_message"
);

const showNoticeMessage = (): void => {
  if (
    document.querySelector(".show_message") === null &&
    document.querySelector(".hidden_message") === null
  ) {
    setNoticeMessageClass("popup_message notice_message show_message");
    setTimeout(() => {
      setNoticeMessageClass("popup_message notice_message hidden_message");
      setTimeout(() => {
        setNoticeMessageClass("popup_message notice_message");
      }, 280);
    }, 1200);
  }
};
    `,
	};

	const [noticeMessageClass, setNoticeMessageClass] = useState<string>(
		"popup_message notice_message"
	);

	const showNoticeMessage = (): void => {
		if (
			document.querySelector(".show_message") === null &&
			document.querySelector(".hidden_message") === null
		) {
			setNoticeMessageClass("popup_message notice_message show_message");
			setTimeout(() => {
				setNoticeMessageClass("popup_message notice_message hidden_message");
				setTimeout(() => {
					setNoticeMessageClass("popup_message notice_message");
				}, 280);
			}, 1200);
		}
	};

	return (
		<>
			<div className="compontent_title" id="message-anchor2">
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
					<div className="message_component2_content">
						<div className={noticeMessageClass}>
							<img src={tipNoticeSrc} alt="" />
							密码安全性较低
						</div>
						<button
							onClick={() => {
								showNoticeMessage();
							}}
						>
							警告
						</button>
					</div>
				</div>
				<ShowCode code={code} />
			</div>
		</>
	);
};

export default Component1;
