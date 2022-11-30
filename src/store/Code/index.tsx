import { createSlice } from "@reduxjs/toolkit";

export interface codeState {
  element: () => JSX.Element;
  HTMLCode: string;
  CSSCode: string;
  JSCode: string;
  VueHTMLCode: string;
  VueJSCode: string;
}

const initialState: codeState = {
  element: () => <></>,
  HTMLCode: "",
  CSSCode: "",
  JSCode: "",
  VueHTMLCode: "",
  VueJSCode: "",
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
    },
  },
});

export const { setCode } = codeSlice.actions;

export default codeSlice.reducer;
