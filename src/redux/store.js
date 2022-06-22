import { configureStore } from '@reduxjs/toolkit';
import { shopReducer } from './features/reducer';

export const store = configureStore({
  reducer: shopReducer,
});
