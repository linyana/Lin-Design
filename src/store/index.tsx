import { configureStore } from "@reduxjs/toolkit";

import isCodeBoxShowSlice from "./IsCodeBoxShow";
import codeSlice from "./Code";
import settingSlice from "./Setting";

export const store = configureStore({
  reducer: {
    isCodeBoxShow: isCodeBoxShowSlice,
    codeBox: codeSlice,
    setting: settingSlice,
  },
  // 解决非序列化的问题
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
