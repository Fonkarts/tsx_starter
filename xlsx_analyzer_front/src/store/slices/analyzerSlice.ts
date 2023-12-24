import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface InitialStateInterface {
    data: Array<string>;
    isLoading: boolean;
    error: string;
}

const initialState: InitialStateInterface = {
    data: [""],
    isLoading: false,
    error: "",
};

export const analyzerSlice = createSlice({
    name: "analyzer",
    initialState,
    reducers: {
        setData: (state, action: PayloadAction<string>) => {
            state.data = [...state.data, action.payload];
        },
    },
});

export const { setData } = analyzerSlice.actions;
export default analyzerSlice.reducer;
