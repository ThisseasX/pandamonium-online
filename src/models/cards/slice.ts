import { /* PayloadAction, */ createSlice } from '@reduxjs/toolkit';

type InitialState = Record<string, never>;

const initialState: InitialState = {};

export const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {},
});

export const { reducer: cardsReducer } = cardsSlice;
