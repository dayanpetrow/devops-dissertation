import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { applicationReducer } from "./rootReducer";

const middleware = [...getDefaultMiddleware({ immutableCheck: false })];

export const store = configureStore({
  reducer: applicationReducer,
  middleware,
  devTools: process.env.NODE_ENV !== "production",
});
