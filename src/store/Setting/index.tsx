import { createSlice } from "@reduxjs/toolkit";

export interface settingState {
  color: string;
  bgColor: string;
  kind: string;
  format: string;
}

const initialState: settingState = {
  color: "white",
  bgColor: localStorage.getItem("bgColor") as string,
  kind: "HTML",
  format: "JavaScript",
};

export const settingSlice = createSlice({
  name: "setting",
  initialState,
  reducers: {
    setColor: (state, payload) => {
      state.color = payload.payload;
    },
    setBgColor: (state, payload) => {
      state.bgColor = payload.payload;
      localStorage.setItem("bgColor", state.bgColor);
    },
    setKind: (state, payload) => {
      state.kind = payload.payload;
      localStorage.setItem("kind", state.kind);
    },
    setFormat: (state, payload) => {
      state.format = payload.payload;
      localStorage.setItem("kind", state.kind);
    },
  },
});

export const { setColor, setBgColor, setKind, setFormat } =
  settingSlice.actions;

export default settingSlice.reducer;
