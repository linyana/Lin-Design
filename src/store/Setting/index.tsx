import { createSlice } from "@reduxjs/toolkit";

export interface settingState {
  color: string;
  bgColor: string;
  hoverColor: string;
  kind: string;
  format: string;
  class: string;
}

const initialState: settingState = {
  color: (localStorage.getItem("lin-color") as string) || "white",
  bgColor: (localStorage.getItem("lin-bgColor") as string) || "rgb(47, 121, 206)",
  hoverColor:
    (localStorage.getItem("lin-hoverColor") as string) || "rgb(56, 137, 230)",
  kind: "HTML",
  format: "JavaScript",
  class:  (localStorage.getItem("lin-class") as string) || "",
};

export const settingSlice = createSlice({
  name: "setting",
  initialState,
  reducers: {
    setColor: (state, payload) => {
      state.color = payload.payload;
      localStorage.setItem("lin-color", state.color);
    },
    setBgColor: (state, payload) => {
      state.bgColor = payload.payload;
      localStorage.setItem("lin-bgColor", state.bgColor);
    },
    setHoverColor: (state, payload) => {
      state.hoverColor = payload.payload;
      localStorage.setItem("lin-hoverColor", state.hoverColor);
    },
    setKind: (state, payload) => {
      state.kind = payload.payload;
      localStorage.setItem("lin-kind", state.kind);
    },
    setFormat: (state, payload) => {
      state.format = payload.payload;
      localStorage.setItem("lin-kind", state.kind);
    },
    setClass: (state, payload) => {
      state.class = payload.payload;
      localStorage.setItem("lin-class", state.class);
    },
  },
});

export const { setColor, setBgColor, setKind, setFormat, setHoverColor, setClass } =
  settingSlice.actions;

export default settingSlice.reducer;
