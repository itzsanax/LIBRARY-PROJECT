
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { books as initialBooks } from './mockData';

const bookSlice = createSlice({
  name: 'books',
  initialState: initialBooks,
  reducers: {
    addBook: (state, action) => {
      state.push(action.payload);
    },
    setBooks: (state, action) => {
      return action.payload;
    },
  },
});

export const { addBook, setBooks } = bookSlice.actions;

const store = configureStore({
  reducer: {
    books: bookSlice.reducer,
  },
});

export default store;
