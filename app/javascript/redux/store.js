import { configureStore } from '@reduxjs/toolkit';
import greetingsReducer from './redux/greetingsSlice';


const store = configureStore({
  reducer: {
    greetings: greetingsReducer,
  },
});

export default store;
