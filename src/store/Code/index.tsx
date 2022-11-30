import { createSlice } from "@reduxjs/toolkit";

export interface codeState {
  element: () => JSX.Element;
  HTMLCode: string;
  CSSCode: string;
  JSCode: string;
  VueHTMLCode: string;
  VueJSCode: string;
  ReactHTMLCode: string;
  ReactJSCode: string;
}

const initialState: codeState = {
  element: () => <></>,
  HTMLCode: "",
  CSSCode: "",
  JSCode: "",
  VueHTMLCode: "",
  VueJSCode: "",
  ReactHTMLCode: "",
  ReactJSCode: "",
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
      state.VueHTMLCode = payload.payload.VueHTMLCode;
      state.VueJSCode = payload.payload.VueJSCode;
      state.ReactHTMLCode = payload.payload.ReactHTMLCode;
      state.ReactJSCode = payload.payload.ReactJSCode;
    },
  },
});

export const { setCode } = codeSlice.actions;

export default codeSlice.reducer;
