import React, { useState, useEffect } from "react";
import ShowCode from "@/components/Components/ShowCode";
import { codeState } from "@/store/Code";

import "./index.css";

const Component1 = () => {
	const code: codeState = {
		element: () => <Component />,
		HTMLCode: (className: string) => `<div${
			className.trim() ? ` class="${className.replace(".", "")}"` : ""
		}>
  <div class="slide_box active">1</div>
  <div class="slide_box next">2</div>
  <div class="slide_box">3</div>
  <div class="slide_box">4</div>
  <div class="slide_box pre">5</div>
</div>`,
		CSSCode: (
			className: string,
			bgColor: string,
			color: string,
			hoverColor: string
		) => {
			return `${className === "" ? "div" : className} {
  position: relative;
  width: 100%;
  height: 400px;
  min-width: 500px; 
  overflow: hidden;
}

${className === "" ? "div" : className} .slide_box {
  position: absolute;
  display: none;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  font-size: 30px;
  flex-shrink: 0;
}

${className === "" ? "div" : className} .slide_box img {
  width: 100%;
  height: 100%;
}

${className === "" ? "div" : className} .active,
${className === "" ? "div" : className} .pre,
${className === "" ? "div" : className} .next {
  display: flex;
  transition: all 0.8s;
}

${className === "" ? "div" : className} .active {
  left: 0;
}

${className === "" ? "div" : className} .pre {
  left: -100%;
}

${className === "" ? "div" : className} .next {
  left: 100%;
}`;
		},
		JSCode: () => `const slideBox = document.querySelectorAll(".slide_box");
  let timer;
  let index = 0;
  
  const length = slideBox.length;
  
  const setTime = () => {
    timer = setInterval(() => {
      index++;
      index = index === length ? 0 : index;
      slideBox[index].className = "slide_box active";
      const preIndex = index === 0 ? length - 1 : index - 1;
      slideBox[preIndex].className = "slide_box pre";
      const preIndex2 = preIndex === 0 ? length - 1 : preIndex - 1;
      slideBox[preIndex2].className = "slide_box";
      const nextIndex = index === length - 1 ? 0 : index + 1;
      slideBox[nextIndex].className = "slide_box next";
    }, 3000);
  };
  
  setTime();
    `,
		VueHTMLCode: (className: string) => `<div${
			className.trim() ? ` class="${className.replace(".", "")}"` : ""
		}>
  <div :class="slideArr[0]">1</div>
  <div :class="slideArr[1]">2</div>
  <div :class="slideArr[2]">3</div>
  <div :class="slideArr[3]">4</div>
  <div :class="slideArr[4]">5</div>
</div>`,
		VueJSCode: () => `import { reactive } from "vue";

  const slideArr = reactive([
    "slide_box active",
    "slide_box next",
    "slide_box",
    "slide_box",
    "slide_box pre",
  ]);
  
  let timer;
  let index = 0;
  
  const length = slideArr.length;
  
  const setTime = () => {
    timer = setInterval(() => {
      index++;
      index = index === length ? 0 : index;
      slideArr[index] = "slide_box active";
      const preIndex = index === 0 ? length - 1 : index - 1;
      slideArr[preIndex] = "slide_box pre";
      const preIndex2 = preIndex === 0 ? length - 1 : preIndex - 1;
      slideArr[preIndex2] = "slide_box";
      const nextIndex = index === length - 1 ? 0 : index + 1;
      slideArr[nextIndex] = "slide_box next";
    }, 3000);
  };
  
  setTime();`,
		ReactHTMLCode: (className: string) => `<div${
			className.trim() ? ` className="${className.replace(".", "")}"` : ""
		}>
  <div className={slideArr[5] ? slideArr[5] : "slide_box active"}>1</div>
  <div className={slideArr[1]}>2</div>
  <div className={slideArr[2]}>3</div>
  <div className={slideArr[3]}>4</div>
  <div className={slideArr[4]}>5</div>
</div>`,
		ReactJSCode: () => `
  const [slideArr, setSlideArr] = useState<Array<string>>([
    "slide_box active",
    "slide_box next",
    "slide_box",
    "slide_box",
    "slide_box pre",
]);  

const length = slideArr.length;
let slideIndex = 4;
let timer;
useEffect(() => {
  if (timer) {
    return; 
  } else {
    timer = setInterval(() => {
      slideIndex++;
      slideIndex = slideIndex === length ? 0 : slideIndex;
      setSlideArr([(slideArr[slideIndex] = "slide_box active"), ...slideArr]);
      const preIndex = slideIndex === 0 ? length - 1 : slideIndex - 1;
      setSlideArr([(slideArr[preIndex] = "slide_box pre"), ...slideArr]);
      const preIndex2 = preIndex === 0 ? length - 1 : preIndex - 1;
      setSlideArr([(slideArr[preIndex2] = "slide_box"), ...slideArr]);
      const nextIndex = slideIndex === length - 1 ? 0 : slideIndex + 1;
      setSlideArr([(slideArr[nextIndex] = "slide_box next"), ...slideArr]);
    }, 3000);
  }
}, []);
  `,
		TSCode: () => `const slideBox = document.querySelectorAll(".slide_box");
  let timer;
  let index = 0;
  
  const length = slideBox.length;
  
  const setTime = () => {
    timer = setInterval(() => {
      index++;
      index = index === length ? 0 : index;
      slideBox[index].className = "slide_box active";
      const preIndex = index === 0 ? length - 1 : index - 1;
      slideBox[preIndex].className = "slide_box pre";
      const preIndex2 = preIndex === 0 ? length - 1 : preIndex - 1;
      slideBox[preIndex2].className = "slide_box";
      const nextIndex = index === length - 1 ? 0 : index + 1;
      slideBox[nextIndex].className = "slide_box next";
    }, 3000);
  };
  
  setTime();
    `,
		VueTSCode: () => `import { reactive } from "vue";

  const slideArr: string[] = reactive([
    "slide_box active",
    "slide_box next",
    "slide_box",
    "slide_box",
    "slide_box pre",
  ]);
  
  let timer: NodeJS.Timer;
  let index: number = 0;
  
  const length: number = slideArr.length;
  
  const setTime = () => {
    timer = setInterval(() => {
      index++;
      index = index === length ? 0 : index;
      slideArr[index] = "slide_box active";
      const preIndex = index === 0 ? length - 1 : index - 1;
      slideArr[preIndex] = "slide_box pre";
      const preIndex2 = preIndex === 0 ? length - 1 : preIndex - 1;
      slideArr[preIndex2] = "slide_box";
      const nextIndex = index === length - 1 ? 0 : index + 1;
      slideArr[nextIndex] = "slide_box next";
    }, 3000);
  };
  
  setTime();`,
		ReactTSCode: () => `
const [slideArr, setSlideArr] = useState<Array<string>>([
    "slide_box active",
    "slide_box next",
    "slide_box",
    "slide_box",
    "slide_box pre",
]);  
const length: number = slideArr.length;
let slideIndex: number = 4;
let timer: NodeJS.Timer;
useEffect(() => {
  if (timer) {
    return;
  } else {
    timer = setInterval(() => {
      slideIndex++;
      slideIndex = slideIndex === length ? 0 : slideIndex;
      setSlideArr([(slideArr[slideIndex] = "slide_box active"), ...slideArr]);
      const preIndex = slideIndex === 0 ? length - 1 : slideIndex - 1;
      setSlideArr([(slideArr[preIndex] = "slide_box pre"), ...slideArr]);
      const preIndex2 = preIndex === 0 ? length - 1 : preIndex - 1;
      setSlideArr([(slideArr[preIndex2] = "slide_box"), ...slideArr]);
      const nextIndex = slideIndex === length - 1 ? 0 : slideIndex + 1;
      setSlideArr([(slideArr[nextIndex] = "slide_box next"), ...slideArr]);
    }, 3000);
  }
}, []);
  `,
	};

	const [slideArr, setSlideArr] = useState<Array<string>>([
		"slide_box active",
		"slide_box next",
		"slide_box",
		"slide_box",
		"slide_box pre",
	]);

	const length: number = slideArr.length;
	let slideIndex: number = 4;
	let timer: NodeJS.Timer;
	useEffect(() => {
		if (timer) {
			return;
		} else {
			timer = setInterval(() => {
				slideIndex++;
				slideIndex = slideIndex === length ? 0 : slideIndex;
				setSlideArr([(slideArr[slideIndex] = "slide_box active"), ...slideArr]);
				const preIndex = slideIndex === 0 ? length - 1 : slideIndex - 1;
				setSlideArr([(slideArr[preIndex] = "slide_box pre"), ...slideArr]);
				const preIndex2 = preIndex === 0 ? length - 1 : preIndex - 1;
				setSlideArr([(slideArr[preIndex2] = "slide_box"), ...slideArr]);
				const nextIndex = slideIndex === length - 1 ? 0 : slideIndex + 1;
				setSlideArr([(slideArr[nextIndex] = "slide_box next"), ...slideArr]);
			}, 3000);
		}
	}, []);

	return (
		<>
			<div className="compontent_title" id="slide-anchor3">
				无缝滚动
			</div>
			<p className="compontent_p">
				在首尾切换时无缝滚动,可以把里面的数字替换为图片，本组件不支持自定义颜色。
			</p>
			<div className="component_box">
				<div className="compontent_box_content">
					<div className="slide_component3_content">
						<div className={slideArr[5] ? slideArr[5] : "slide_box active"}>
							1
						</div>
						<div className={slideArr[1]}>2</div>
						<div className={slideArr[2]}>3</div>
						<div className={slideArr[3]}>4</div>
						<div className={slideArr[4]}>5</div>
					</div>
				</div>
				<ShowCode code={code} />
			</div>
		</>
	);
};

const Component = () => {
	const [slideArr, setSlideArr] = useState<Array<string>>([
		"slide_box active",
		"slide_box next",
		"slide_box",
		"slide_box",
		"slide_box pre",
	]);

	const length: number = slideArr.length;
	let slideIndex: number = 4;
	let timer: NodeJS.Timer;
	useEffect(() => {
		if (timer) {
			return;
		} else {
			timer = setInterval(() => {
				slideIndex++;
				slideIndex = slideIndex === length ? 0 : slideIndex;
				setSlideArr([(slideArr[slideIndex] = "slide_box active"), ...slideArr]);
				const preIndex = slideIndex === 0 ? length - 1 : slideIndex - 1;
				setSlideArr([(slideArr[preIndex] = "slide_box pre"), ...slideArr]);
				const preIndex2 = preIndex === 0 ? length - 1 : preIndex - 1;
				setSlideArr([(slideArr[preIndex2] = "slide_box"), ...slideArr]);
				const nextIndex = slideIndex === length - 1 ? 0 : slideIndex + 1;
				setSlideArr([(slideArr[nextIndex] = "slide_box next"), ...slideArr]);
			}, 3000);
		}
	}, []);

	return (
		<>
			<div className="slide_component3_content">
				<div className={slideArr[5] ? slideArr[5] : "slide_box active"}>1</div>
				<div className={slideArr[1]}>2</div>
				<div className={slideArr[2]}>3</div>
				<div className={slideArr[3]}>4</div>
				<div className={slideArr[4]}>5</div>
			</div>
		</>
	);
};

export default Component1;
