import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = '/greetings';
const initialState = {
  greetings: [],
  isLoading: true,
  errorMessage: '',
};

export const fetchRockets = createAsyncThunk('rockets/fetchRockets', () => axios.get(baseUrl).then((response) => response.data));

