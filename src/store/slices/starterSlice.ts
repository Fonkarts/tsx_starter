import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export interface InitialStateInterface {
    data: any;
    isLoading: boolean;
    error: string;
}

const initialState: InitialStateInterface = {
    data: [{}],
    isLoading: false,
    error: "",
};

export const starterThunk = createAsyncThunk(
    "file/sendVisualizerFile",
    async (data: any) => {
        try {
            const endpoint = "http://localhost:5000/endpoint";
            const res = await axios.post(endpoint, data, {
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

export const starterSlice = createSlice({
    name: "starter",
    initialState,
    reducers: {
        setData: (state, action: PayloadAction<string>) => {
            state.data = [...state.data, action.payload];
        },
    },
    extraReducers: (builder) => {
        builder.addCase(starterThunk.pending, (state, _) => {
            state.isLoading = true;
        }),
            builder.addCase(starterThunk.fulfilled, (state, action) => {
                const payload = action.payload.data;
                state.data = payload;
                state.isLoading = false;
            }),
            builder.addCase(starterThunk.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message!;
            });
    },
});

export const { setData } = starterSlice.actions;
export default starterSlice.reducer;
