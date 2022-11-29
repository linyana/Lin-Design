import { createSlice } from "@reduxjs/toolkit";

export interface isCodeBoxShowState {
  isCodeBoxShow: boolean;
}

const initialState: isCodeBoxShowState = {
  isCodeBoxShow: false,
};

export const isCodeBoxShowSlice = createSlice({
  name: "isCodeBoxShow",
  initialState,
  reducers: {
    changeShowCodeBox: (state) => {
      if (state.isCodeBoxShow) {
        state.isCodeBoxShow = false;
      } else {
        state.isCodeBoxShow = true;
      }
    },
  },
});

export const { changeShowCodeBox } = isCodeBoxShowSlice.actions;

export default isCodeBoxShowSlice.reducer;
