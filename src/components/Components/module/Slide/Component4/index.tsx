import React from "react";
import ShowCode from "@/components/Components/ShowCode";
import { codeState } from "@/store/Code";

import wrongSrc from "@/assets/svg/normal/wrong.svg";
import img from "@/assets/images/normal/left.png";

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
  <div class="slide_buttons">
    <div class="slice_button"></div>
    <div class="slice_button"></div>
    <div class="slice_button"></div>
    <div class="slice_button"></div>
    <div class="slice_button"></div>
  </div>
  <div class="slide_left">
    <img src="" alt="" />
  </div>
  <div class="slide_right">
    <img src="" alt="" />
  </div>
</div>`,
		CSSCode: (
			className: string,
			bgColor: string,
			color: string,
			hoverColor: string
		) => {
			return `
${className === "" ? "div" : className} {
  position: relative;
  width: 100%;
  height: 400px;
  min-width: 100px; 
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
  z-index: 3;
  left: 0;
}

${className === "" ? "div" : className} .pre {
  left: -100%;
}

${className === "" ? "div" : className} .next {
  left: 100%;
}

${className === "" ? "div" : className} .slide_buttons {
  z-index: 8;
  width: 100px;
  height: 30px;
  position: absolute;
  left: 50%;
  bottom: 10px;
  transform: translateX(-50%);
  display: flex;
  justify-content: space-between;
}

${className === "" ? "div" : className} .slide_button {
  cursor: pointer;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: 1px solid #495057;
}

${className === "" ? "div" : className} .slide_button_focus {
  background-color: #495057;
}

${className === "" ? "div" : className} .slide_left {
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 9;
  width: 30px;
}

${className === "" ? "div" : className} .slide_right {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 9;
  width: 30px;
}


${className === "" ? "div" : className} .slide_left img {
  cursor: pointer;
  width: 100%;
}

${className === "" ? "div" : className} .slide_right img {
  cursor: pointer;
  width: 100%;
  transform: rotate(180deg);
}`;
		},
		JSCode: () => `const slideBox = document.querySelectorAll(".slide_box");
const slideButton = document.querySelectorAll(".slide_button");
const slideLeft = document.querySelector(".slide_left");
const slideRight = document.querySelector(".slide_right");
let timer;
let index = 0;

const length = slideBox.length;

const slideIncrement = () => {
  index++;
  index = index === length ? 0 : index;
  slideBox[index].className = "slide_box active";
  const preIndex = index === 0 ? length - 1 : index - 1;
  slideBox[preIndex].className = "slide_box pre";
  const preIndex2 = preIndex === 0 ? length - 1 : preIndex - 1;
  slideBox[preIndex2].className = "slide_box";
  const nextIndex = index === length - 1 ? 0 : index + 1;
  slideBox[nextIndex].className = "slide_box next";
  changeSlideButton()
}

const slideDecrement = () => {
  index--;
  index = index === -1 ? length - 1 : index;
  slideBox[index].className = "slide_box active";
  const preIndex = index === 0 ? length - 1 : index - 1;
  slideBox[preIndex].className = "slide_box pre";
  const preIndex2 = preIndex === 0 ? length - 1 : preIndex - 1;
  slideBox[preIndex2].className = "slide_box";
  const nextIndex = index === length - 1 ? 0 : index + 1;
  slideBox[nextIndex].className = "slide_box next";
  changeSlideButton()
}

const changeSlideButton = () => {
  slideButton.forEach((item) => {
    item.className = "slide_button";
  });
  slideButton[index].className = "slide_button slide_button_focus";
}

const setTime = () => {
  timer = setInterval(() => {
    slideIncrement()
  }, 3000);
};

slideRight.addEventListener("click", () => {
  clearInterval(timer);
  setTime();
  slideIncrement()
});

slideLeft.addEventListener("click", () => {
  clearInterval(timer);
  setTime();
  slideDecrement()
});

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
  <div class="slide_buttons">
    <div
      :class="
        index === currentIndex
          ? 'slide_button slide_button_focus'
          : 'slide_button'
      "
      v-for="(_, currentIndex) in slideArr"
    ></div>
  </div>
  <div class="slide_left" @click="handldeSlideLeft">
    <img src="./left.png" alt="" />
  </div>
  <div class="slide_right" @click="handldeSlideRight">
    <img src="./left.png" alt="" />
  </div>
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
    slideIncrement()
  }, 3000);
};

const slideIncrement = () => {
  index++;
  index = index === length ? 0 : index;
  slideArr[index] = "slide_box active";
  const preIndex = index === 0 ? length - 1 : index - 1;
  slideArr[preIndex] = "slide_box pre";
  const preIndex2 = preIndex === 0 ? length - 1 : preIndex - 1;
  slideArr[preIndex2] = "slide_box";
  const nextIndex = index === length - 1 ? 0 : index + 1;
  slideArr[nextIndex] = "slide_box next";
};

const slideDecrement = () => {
  index--;
  index = index === -1 ? length - 1 : index;
  slideArr[index] = "slide_box active";
  const preIndex = index === 0 ? length - 1 : index - 1;
  slideArr[preIndex] = "slide_box pre";
  const preIndex2 = preIndex === 0 ? length - 1 : preIndex - 1;
  slideArr[preIndex2] = "slide_box";
  const nextIndex = index === length - 1 ? 0 : index + 1;
  slideArr[nextIndex] = "slide_box next";
};

const handldeSlideRight = () => {
  clearInterval(timer)
  slideIncrement()
  timer = setInterval(() => {
    slideIncrement()
  }, 3000);
}

const handldeSlideLeft = () => {
  clearInterval(timer)
  slideDecrement()
  timer = setInterval(() => {
    slideIncrement()
  }, 3000);
}

setTime();`,
		ReactHTMLCode: (className: string) => `<div${
			className.trim() ? ` className="${className.replace(".", "")}"` : ""
		}>
  <div className={this.slideArr[0]}>1</div>
  <div className={this.slideArr[1]}>2</div>
  <div className={this.slideArr[2]}>3</div>
  <div className={this.slideArr[3]}>4</div>
  <div className={this.slideArr[4]}>5</div>
  <div className="slide_buttons">
    {this.slideArr.map((_, index) => {
      return (
        <div
          className={
            this.slideIndex === index
              ? "slide_button slide_button_focus"
              : "slide_button"
          }
          key={index}
        ></div>
      );
    })}
  </div>
  <div className="slide_left" onClick={() => {this.handleClickLeft()}}>
    <img src={img} alt="" />
  </div>
  <div className="slide_right" onClick={() => {this.handleClickRight()}}>
    <img src={img} alt="" />
  </div>
</div>`,
		ReactJSCode: () => `
class Component extends React.Component {
  private timer;
  private slideIndex = 0;
  private slideArr = [
    "slide_box active",
    "slide_box next",
    "slide_box",
    "slide_box",
    "slide_box pre",
  ];

  constructor(props) {
    super(props);
    this.state = {
      slideArr: this.slideArr,
    };
  }

  slideIncrement() {
    const slideDelete =
      this.slideIndex === 0 ? this.slideArr.length - 1 : this.slideIndex - 1;
    this.slideArr[slideDelete] = "slide_box";
    this.slideIndex =
      this.slideIndex === this.slideArr.length - 1 ? 0 : this.slideIndex + 1;
    this.updateSlide();
  }

  slideDecrement()= {
    const slideDelete =
      this.slideIndex === this.slideArr.length - 1 ? 0 : this.slideIndex + 1;
    this.slideArr[slideDelete] = "slide_box";
    this.slideIndex =
      this.slideIndex === 0 ? this.slideArr.length - 1 : this.slideIndex - 1;
    this.updateSlide();
  }

  updateSlide()= {
    this.slideArr[this.slideIndex] = "slide_box active";
    const slideNext =
      this.slideIndex === this.slideArr.length - 1 ? 0 : this.slideIndex + 1;
    const slidePre =
      this.slideIndex === 0 ? this.slideArr.length - 1 : this.slideIndex - 1;
    this.slideArr[slideNext] = "slide_box next";
    this.slideArr[slidePre] = "slide_box pre";
    this.setState({});
  }

  componentDidMount()= {
    this.timer = setInterval(() => {
      this.slideIncrement();
    }, 3000);
  }

  componentWillUnmount()= {
    clearInterval(this.timer);
  }

  handleClickLeft() {
    clearInterval(this.timer)
    this.slideDecrement()
    this.timer = setInterval(() => {
      this.slideIncrement();
    }, 3000);
  }

  handleClickRight(): void {
    clearInterval(this.timer)
    this.slideIncrement()
    this.timer = setInterval(() => {
      this.slideIncrement();
    }, 3000);
  }

  render() {
    return (
      <>
        <div className="slide_component4_content">
          <div className={this.slideArr[0]}>1</div>
          <div className={this.slideArr[1]}>2</div>
          <div className={this.slideArr[2]}>3</div>
          <div className={this.slideArr[3]}>4</div>
          <div className={this.slideArr[4]}>5</div>
          <div className="slide_buttons">
            {this.slideArr.map((_, index) => {
              return (
                <div
                  className={
                    this.slideIndex === index
                      ? "slide_button slide_button_focus"
                      : "slide_button"
                  }
                  key={index}
                ></div>
              );
            })}
          </div>
          <div className="slide_left" onClick={() => {this.handleClickLeft()}}>
            <img src={img} alt="" />
          </div>
          <div className="slide_right" onClick={() => {this.handleClickRight()}}>
            <img src={img} alt="" />
          </div>
        </div>
      </>
    );
  }
}
  `,
		TSCode: () => `const slideBox = document.querySelectorAll(".slide_box");
const slideButton = document.querySelectorAll(".slide_button");
const slideLeft = document.querySelector(".slide_left");
const slideRight = document.querySelector(".slide_right");
let timer: NodeJS.Timer | undefined;
let index: number = 0;

const length: number = slideBox.length;

const slideIncrement = (): void => {
  index++;
  index = index === length ? 0 : index;
  slideBox[index].className = "slide_box active";
  const preIndex = index === 0 ? length - 1 : index - 1;
  slideBox[preIndex].className = "slide_box pre";
  const preIndex2 = preIndex === 0 ? length - 1 : preIndex - 1;
  slideBox[preIndex2].className = "slide_box";
  const nextIndex = index === length - 1 ? 0 : index + 1;
  slideBox[nextIndex].className = "slide_box next";
  changeSlideButton()
}

const slideDecrement = (): void => {
  index--;
  index = index === -1 ? length - 1 : index;
  slideBox[index].className = "slide_box active";
  const preIndex = index === 0 ? length - 1 : index - 1;
  slideBox[preIndex].className = "slide_box pre";
  const preIndex2 = preIndex === 0 ? length - 1 : preIndex - 1;
  slideBox[preIndex2].className = "slide_box";
  const nextIndex = index === length - 1 ? 0 : index + 1;
  slideBox[nextIndex].className = "slide_box next";
  changeSlideButton()
}

const changeSlideButton = (): void => {
  slideButton.forEach((item) => {
    item.className = "slide_button";
  });
  slideButton[index].className = "slide_button slide_button_focus";
}

const setTime = (): void => {
  timer = setInterval(() => {
    slideIncrement()
  }, 3000);
};

slideRight.addEventListener("click", () => {
  clearInterval(timer);
  setTime();
  slideIncrement()
});

slideLeft.addEventListener("click", () => {
  clearInterval(timer);
  setTime();
  slideDecrement()
});

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

let timer: number | undefined;
let index: number = 0;

const length: number = slideArr.length;

const setTime = (): void => {
  timer = setInterval(() => {
    slideIncrement()
  }, 3000);
};

const slideIncrement = (): void => {
  index++;
  index = index === length ? 0 : index;
  slideArr[index] = "slide_box active";
  const preIndex = index === 0 ? length - 1 : index - 1;
  slideArr[preIndex] = "slide_box pre";
  const preIndex2 = preIndex === 0 ? length - 1 : preIndex - 1;
  slideArr[preIndex2] = "slide_box";
  const nextIndex = index === length - 1 ? 0 : index + 1;
  slideArr[nextIndex] = "slide_box next";
};

const slideDecrement = (): void => {
  index--;
  index = index === -1 ? length - 1 : index;
  slideArr[index] = "slide_box active";
  const preIndex = index === 0 ? length - 1 : index - 1;
  slideArr[preIndex] = "slide_box pre";
  const preIndex2 = preIndex === 0 ? length - 1 : preIndex - 1;
  slideArr[preIndex2] = "slide_box";
  const nextIndex = index === length - 1 ? 0 : index + 1;
  slideArr[nextIndex] = "slide_box next";
};

const handldeSlideRight = (): void => {
  clearInterval(timer)
  slideIncrement()
  timer = setInterval(() => {
    slideIncrement()
  }, 3000);
}

const handldeSlideLeft = (): void => {
  clearInterval(timer)
  slideDecrement()
  timer = setInterval(() => {
    slideIncrement()
  }, 3000);
}

setTime();`,
		ReactTSCode: () => `
class Component extends React.Component {
  private timer: NodeJS.Timer | undefined;
  private slideIndex: number = 0;
  private slideArr: string[] = [
    "slide_box active",
    "slide_box next",
    "slide_box",
    "slide_box",
    "slide_box pre",
  ];

  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = {
      slideArr: this.slideArr,
    };
  }

  slideIncrement(): void {
    const slideDelete =
      this.slideIndex === 0 ? this.slideArr.length - 1 : this.slideIndex - 1;
    this.slideArr[slideDelete] = "slide_box";
    this.slideIndex =
      this.slideIndex === this.slideArr.length - 1 ? 0 : this.slideIndex + 1;
    this.updateSlide();
  }

  slideDecrement(): void {
    const slideDelete =
      this.slideIndex === this.slideArr.length - 1 ? 0 : this.slideIndex + 1;
    this.slideArr[slideDelete] = "slide_box";
    this.slideIndex =
      this.slideIndex === 0 ? this.slideArr.length - 1 : this.slideIndex - 1;
    this.updateSlide();
  }

  updateSlide(): void {
    this.slideArr[this.slideIndex] = "slide_box active";
    const slideNext =
      this.slideIndex === this.slideArr.length - 1 ? 0 : this.slideIndex + 1;
    const slidePre =
      this.slideIndex === 0 ? this.slideArr.length - 1 : this.slideIndex - 1;
    this.slideArr[slideNext] = "slide_box next";
    this.slideArr[slidePre] = "slide_box pre";
    this.setState({});
  }

  componentDidMount(): void {
    this.timer = setInterval(() => {
      this.slideIncrement();
    }, 3000);
  }

  componentWillUnmount(): void {
    clearInterval(this.timer);
  }

  handleClickLeft(): void {
    clearInterval(this.timer)
    this.slideDecrement()
    this.timer = setInterval(() => {
      this.slideIncrement();
    }, 3000);
  }

  handleClickRight(): void {
    clearInterval(this.timer)
    this.slideIncrement()
    this.timer = setInterval(() => {
      this.slideIncrement();
    }, 3000);
  }

  render() {
    return (
      <>
        <div className="slide_component4_content">
          <div className={this.slideArr[0]}>1</div>
          <div className={this.slideArr[1]}>2</div>
          <div className={this.slideArr[2]}>3</div>
          <div className={this.slideArr[3]}>4</div>
          <div className={this.slideArr[4]}>5</div>
          <div className="slide_buttons">
            {this.slideArr.map((_, index) => {
              return (
                <div
                  className={
                    this.slideIndex === index
                      ? "slide_button slide_button_focus"
                      : "slide_button"
                  }
                  key={index}
                ></div>
              );
            })}
          </div>
          <div className="slide_left" onClick={() => {this.handleClickLeft()}}>
            <img src={img} alt="" />
          </div>
          <div className="slide_right" onClick={() => {this.handleClickRight()}}>
            <img src={img} alt="" />
          </div>
        </div>
      </>
    );
  }
}
  `,
	};

	return (
		<>
			<div className="compontent_title" id="slide-anchor4">
				无缝滚动 + 控制器
			</div>
			<p className="compontent_p">
				在首尾切换时无缝滚动,可以用左箭头和右箭头进行调整，可以把里面的数字替换为图片，本组件不支持自定义颜色。
			</p>
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
					<Component />
				</div>
				<ShowCode code={code} />
			</div>
		</>
	);
};

class Component extends React.Component {
	private timer: NodeJS.Timer | undefined;
	private slideIndex: number = 0;
	private slideArr: string[] = [
		"slide_box active",
		"slide_box next",
		"slide_box",
		"slide_box",
		"slide_box pre",
	];

	constructor(props: {} | Readonly<{}>) {
		super(props);
		this.state = {
			slideArr: this.slideArr,
		};
	}

	slideIncrement(): void {
		const slideDelete =
			this.slideIndex === 0 ? this.slideArr.length - 1 : this.slideIndex - 1;
		this.slideArr[slideDelete] = "slide_box";
		this.slideIndex =
			this.slideIndex === this.slideArr.length - 1 ? 0 : this.slideIndex + 1;
		this.updateSlide();
	}

	slideDecrement(): void {
		const slideDelete =
			this.slideIndex === this.slideArr.length - 1 ? 0 : this.slideIndex + 1;
		this.slideArr[slideDelete] = "slide_box";
		this.slideIndex =
			this.slideIndex === 0 ? this.slideArr.length - 1 : this.slideIndex - 1;
		this.updateSlide();
	}

	updateSlide(): void {
		this.slideArr[this.slideIndex] = "slide_box active";
		const slideNext =
			this.slideIndex === this.slideArr.length - 1 ? 0 : this.slideIndex + 1;
		const slidePre =
			this.slideIndex === 0 ? this.slideArr.length - 1 : this.slideIndex - 1;
		this.slideArr[slideNext] = "slide_box next";
		this.slideArr[slidePre] = "slide_box pre";
		this.setState({});
	}

	componentDidMount(): void {
		this.timer = setInterval(() => {
			this.slideIncrement();
		}, 3000);
	}

	componentWillUnmount(): void {
		clearInterval(this.timer);
	}

	handleClickLeft(): void {
		clearInterval(this.timer);
		this.slideDecrement();
		this.timer = setInterval(() => {
			this.slideIncrement();
		}, 3000);
	}

	handleClickRight(): void {
		clearInterval(this.timer);
		this.slideIncrement();
		this.timer = setInterval(() => {
			this.slideIncrement();
		}, 3000);
	}

	render() {
		return (
			<>
				<div className="slide_component4_content">
					<div className={this.slideArr[0]}>1</div>
					<div className={this.slideArr[1]}>2</div>
					<div className={this.slideArr[2]}>3</div>
					<div className={this.slideArr[3]}>4</div>
					<div className={this.slideArr[4]}>5</div>
					<div className="slide_buttons">
						{this.slideArr.map((_, index) => {
							return (
								<div
									className={
										this.slideIndex === index
											? "slide_button slide_button_focus"
											: "slide_button"
									}
									key={index}
								></div>
							);
						})}
					</div>
					<div
						className="slide_left"
						onClick={() => {
							this.handleClickLeft();
						}}
					>
						<img src={img} alt="" />
					</div>
					<div
						className="slide_right"
						onClick={() => {
							this.handleClickRight();
						}}
					>
						<img src={img} alt="" />
					</div>
				</div>
			</>
		);
	}
}

export default Component1;
