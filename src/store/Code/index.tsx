import { createSlice } from "@reduxjs/toolkit";

export interface codeState {
  element: () => JSX.Element;
  HTMLCode: (className: string) => string;
  CSSCode: (bgColor: string, color: string, hoverColor: string, className: string) => string;
  JSCode: (className: string) => string;
  VueHTMLCode: (className: string) => string;
  VueJSCode: (className: string) => string;
  ReactHTMLCode: (className: string) => string;
  ReactJSCode: (className: string) => string;
  TSCode: (className: string) => string;
  VueTSCode: (className: string) => string;
  ReactTSCode: (className: string) => string;
}

const initialState: codeState = {
  element: () => <></>,
  HTMLCode: () => ``,
  CSSCode: () => ``,
  JSCode: () => ``,
  VueHTMLCode: () => ``,
  VueJSCode: () => ``,
  ReactHTMLCode: () => ``,
  ReactJSCode: () => ``,
  TSCode: () => ``,
  VueTSCode: () => ``,
  ReactTSCode: () => ``,
};

export const codeSlice = createSlice({
  name: "code",
  initialState,
  reducers: {
    setCode: (state, payload: any): void => {
      state.element = payload.payload.element;
      state.HTMLCode = payload.payload.HTMLCode;
      state.JSCode = payload.payload.JSCode;
      state.CSSCode = payload.payload.CSSCode;
      state.VueHTMLCode = payload.payload.VueHTMLCode;
      state.VueJSCode = payload.payload.VueJSCode;
      state.ReactHTMLCode = payload.payload.ReactHTMLCode;
      state.ReactJSCode = payload.payload.ReactJSCode;
      state.TSCode = payload.payload.TSCode;
      state.VueTSCode = payload.payload.VueTSCode;
      state.ReactTSCode = payload.payload.ReactTSCode;
    },
  },
});

export const { setCode } = codeSlice.actions;

export default codeSlice.reducer;
