import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosApi from '../axiosApi';

export const fetchDishes = createAsyncThunk('dishes/fetchDishes', async () => {
    const response = await axiosApi.get('/dishes.json');
    return response.data;
});

const dishSlice = createSlice({
    name: 'dishes',
    initialState: {
        dishes: [],
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchDishes.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchDishes.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.dishes = action.payload;
            })
            .addCase(fetchDishes.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default dishSlice.reducer;
