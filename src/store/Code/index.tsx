import { createSlice } from "@reduxjs/toolkit";

export interface codeState {
  element: () => JSX.Element;
  HTMLCode: string;
  CSSCode: string;
  JSCode: string;
}

const initialState: codeState = {
  element: () => <button>基本按钮</button>,
  HTMLCode: "<span></span>",
  CSSCode: "<span></span>",
  JSCode: "<span></span>",
};

export const codeSlice = createSlice({
  name: "code",
  initialState,
  reducers: {
    setCode: (state, payload: any): void => {
      state.element = payload.payload.element;
      state.HTMLCode = payload.payload.HTMLCode;
      state.CSSCode = payload.payload.CSSCode;
      state.JSCode = payload.payload.JSCode;
    },
  },
});

export const { setCode } = codeSlice.actions;

export default codeSlice.reducer;
