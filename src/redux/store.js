import { configureStore } from '@reduxjs/toolkit';
import { filterSlice } from './Slices/filterSlice';
import { contactsSlice } from './Slices/contactsSlice';

export const store = configureStore({
  reducer: {
    filter: filterSlice.reducer,
    contacts: contactsSlice.reducer,
  },
});
