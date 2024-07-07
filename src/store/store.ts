import { configureStore } from "@reduxjs/toolkit";
import starterSlice from "./slices/starterSlice";
export const store = configureStore({
    reducer: {
        starterSlice: starterSlice,
    },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
