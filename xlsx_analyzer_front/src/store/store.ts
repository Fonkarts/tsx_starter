import { configureStore } from "@reduxjs/toolkit";
import AnalyzerSlice from "./slices/analyzerSlice";
export const store = configureStore({
    reducer: {
        analyzer: AnalyzerSlice,
    },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
