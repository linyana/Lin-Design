import { createSlice } from "@reduxjs/toolkit";

export interface codeState {
  element: ()=>JSX.Element;
  HCode: string;
  /*   VueCode: JSX.Element;
  ReactCode: JSX.Element;
  HTMLCode: JSX.Element;
  CSSCode: JSX.Element;
  JSCode: JSX.Element; */
}

const initialState: codeState = {
  element: ()=><button>基本按钮</button>,
  HCode: "<span></span>",
  /*   VueCode: <span></span>,
  ReactCode: <span></span>,
  HTMLCode: <span></span>,
  CSSCode: <span></span>,
  JSCode: <span></span>, */
};

export const codeSlice = createSlice({
  name: "code",
  initialState,
  reducers: {
    setCode: (state, payload: any): void => {
      state.element = payload.payload.element;
      state.HCode = payload.payload.HCode;
      /*       state.VueCode = payload.VueCode;
      state.HTMLCode = payload.HTMLCode;
      state.CSSCode = payload.CSSCode;
      state.JSCode = payload.JSCode; */
    },
  },
});

export const { setCode } = codeSlice.actions;

export default codeSlice.reducer;
