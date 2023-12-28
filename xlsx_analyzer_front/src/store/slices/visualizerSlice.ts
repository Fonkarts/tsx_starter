import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export interface InitialStateInterface {
    data: Array<string>;
    file: any;
    isLoading: boolean;
    error: string;
}

const initialState: InitialStateInterface = {
    data: [""],
    file: {},
    isLoading: false,
    error: "",
};

export const sendFileToVisualize = createAsyncThunk(
    "file/sendVisualizerFile",
    async (file: any) => {
        const endpoint = "http://localhost:5000";
        const response = await axios.post(endpoint, file);
        return response.data;
    }
);

export const visualizerSlice = createSlice({
    name: "analyzer",
    initialState,
    reducers: {
        setData: (state, action: PayloadAction<string>) => {
            state.data = [...state.data, action.payload];
        },
    },
    extraReducers: (builder) => {
        builder.addCase(sendFileToVisualize.pending, (state, action) => {
            state.isLoading = true;
            console.log(action.payload);
        }),
            builder.addCase(sendFileToVisualize.fulfilled, (state, action) => {
                state.isLoading = true;
                console.log(action.payload);
            }),
            builder.addCase(sendFileToVisualize.rejected, (state, action) => {
                state.isLoading = true;
                state.error = action.error.message!;
            });
    },
});

export const { setData } = visualizerSlice.actions;
export default visualizerSlice.reducer;
