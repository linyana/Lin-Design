import { createSlice } from "@reduxjs/toolkit";

export interface settingState {
  color: string;
  bgColor: string;
  kind: string;
  format: string;
}

const initialState: settingState = {
  color: "white",
  bgColor: "rgb(47, 121, 206)",
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
    },
    setKind: (state, payload) => {
      state.kind = payload.payload;
    },
    setVersion: (state, payload) => {
      state.format = payload.payload;
    },
  },
});

export const { setColor, setBgColor, setKind, setVersion } =
  settingSlice.actions;

export default settingSlice.reducer;
