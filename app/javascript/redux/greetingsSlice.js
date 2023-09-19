import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = '/api/random_greeting';
const initialState = {
  greetings: [],
  isLoading: true,
  errorMessage: '',
};

export const fetchGreetings = createAsyncThunk('greeting/fetchGreetings', () => axios.get(baseUrl).then((response) => response.data));

const greetingsSlice = createSlice({
  name: "greeting",
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(fetchGreetings.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchGreetings.fulfilled, (state, action) => {
        const greeting = action.payload;
        state.isLoading = false;
        state.greeting = greeting;
      })
      .addCase(fetchGreetings.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.error.message;
      });
  },

});

export default greetingsSlice.reducer;