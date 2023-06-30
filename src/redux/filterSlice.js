import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filter: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    getFilterContacts(state, { payload }) {
      state.filter = payload;
    },
  },
});

export const { getFilterContacts } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
