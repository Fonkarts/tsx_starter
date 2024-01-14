import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export interface InitialStateInterface {
    data: Array<string>;
    extractedData: Array<any>;
    isLoading: boolean;
    error: string;
}

const initialState: InitialStateInterface = {
    data: [""],
    extractedData: [],
    isLoading: false,
    error: "",
};

export const sendFileToVisualize = createAsyncThunk(
    "file/sendVisualizerFile",
    async (file: any) => {
        try {
            const endpoint = "http://localhost:5000/xls_data";
            const res = await axios.post(endpoint, file, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            return res.data;
        } catch (error) {
            throw error;
        }
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
        builder.addCase(sendFileToVisualize.pending, (state, _) => {
            state.isLoading = true;
        }),
            builder.addCase(sendFileToVisualize.fulfilled, (state, action) => {
                const payload = action.payload.data;
                state.extractedData = payload;
                state.isLoading = false;

                console.log(state.extractedData);
            }),
            builder.addCase(sendFileToVisualize.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message!;
            });
    },
});

export const { setData } = visualizerSlice.actions;
export default visualizerSlice.reducer;
