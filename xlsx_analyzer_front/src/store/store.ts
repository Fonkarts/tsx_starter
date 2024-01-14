import { configureStore } from "@reduxjs/toolkit";
import visualizerSlice from "./slices/visualizerSlice";
export const store = configureStore({
    reducer: {
        visualizerSlice: visualizerSlice,
    },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
