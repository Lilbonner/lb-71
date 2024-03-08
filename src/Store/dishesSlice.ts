import { createSlice, PayloadAction, Dispatch } from '@reduxjs/toolkit';
import axiosApi from '../axiosApi';

interface Dish {
  id: string;
  title: string;
  price: number;
}

interface DishesState {
  dishes: Dish[];
  loading: boolean;
  error: string | null;
}

const initialState: DishesState = {
  dishes: [],
  loading: false,
  error: null,
};

const dishesSlice = createSlice({
  name: 'dishes',
  initialState,
  reducers: {
    fetchDishesStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchDishesSuccess(state, action: PayloadAction<Dish[]>) {
      state.dishes = action.payload;
      state.loading = false;
    },
    fetchDishesFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    deleteDishStart(state) {
      state.loading = true;
      state.error = null;
    },
    deleteDishSuccess(state, action: PayloadAction<string>) {
      state.dishes = state.dishes.filter(dish => dish.id !== action.payload);
      state.loading = false;
    },
    deleteDishFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const fetchDishes = () => async (dispatch: Dispatch) => {
  dispatch(fetchDishesStart());
  try {
    const response = await axiosApi.get('/dishes.json');
    if (response.data) {
      const fetchedDishes: Dish[] = Object.keys(response.data).map(key => ({
        id: key,
        ...response.data[key]
      }));
      dispatch(fetchDishesSuccess(fetchedDishes));
    } else {
      throw new Error('Response data is null or undefined');
    }
  } catch (error: any) {
    const errorMessage = typeof error === 'string' ? error : 'An unknown error occurred';
    dispatch(fetchDishesFailure(errorMessage));
  }
};

export const deleteDish = (id: string) => async (dispatch: Dispatch) => {
  dispatch(deleteDishStart());
  try {
    await axiosApi.delete(`/dishes/${id}.json`);
    dispatch(deleteDishSuccess(id));
  } catch (error) {
    const errorMessage = typeof error === 'string' ? error : 'An unknown error occurred';
    dispatch(deleteDishFailure(errorMessage));
  }
};

export default dishesSlice.reducer;

export const {
  fetchDishesStart,
  fetchDishesSuccess,
  fetchDishesFailure,
  deleteDishStart,
  deleteDishSuccess,
  deleteDishFailure
} = dishesSlice.actions;
