import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosApi from '../axiosApi';

interface Dish {
  id: string;
  title: string;
  price: number;
  image: string;
}

interface UpdateDishData {
  id: string;
  data: Partial<Dish>;
}

export const updateDish = createAsyncThunk(
  'forms/updateDish',
  async (payload: UpdateDishData, { rejectWithValue }) => {
    try {
      const { id, data } = payload;
      await axiosApi.put(`/dishes/${id}.json`, data);
      return payload;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const formSlice = createSlice({
  name: 'forms',
  initialState: {},
  reducers: {},
  extraReducers: builder => {
    builder.addCase(updateDish.fulfilled, (state, action) => {
      const { id, data } = action.payload;
    });
    builder.addCase(updateDish.rejected, (state, action) => {
      console.error('Error updating dish:', action.payload);
    });
  }
});

export default formSlice.reducer;
