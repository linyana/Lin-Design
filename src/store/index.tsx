import { configureStore } from "@reduxjs/toolkit";

import isCodeBoxShowSlice from "./isCodeBoxShow";

export const store = configureStore({
  reducer: {
    isCodeBoxShow: isCodeBoxShowSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
