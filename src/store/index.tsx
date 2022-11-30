import { configureStore } from "@reduxjs/toolkit";

import isCodeBoxShowSlice from "./isCodeBoxShow";
import codeSlice from "./Code";

export const store = configureStore({
  reducer: {
    isCodeBoxShow: isCodeBoxShowSlice,
    codeBox: codeSlice,
  },
  // 解决非序列化的问题
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
