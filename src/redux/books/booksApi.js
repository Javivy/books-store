import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { apiAddBook, apiGetBooks } from '../../api/booksApi.js';

// Actions
const addBook = createAsyncThunk(
  'books/addBook',
  apiAddBook,
);

const getBooks = createAsyncThunk(
  'books/getBooks',
  apiGetBooks,
);

const arrayTransform = (object) => {
  const entries = Object.entries(object);
  return entries.map((pair) => ({ ...pair[1][0], item_id: pair[0] }));
};

const initialState = [];

const userSlice = createSlice({
  name: 'books',
  initialState,
  extraReducers: {
    [getBooks.fulfilled]: (state, action) => {
      const payload = arrayTransform(action.payload);
      return [
        ...payload,
      ];
    },
    [addBook.fulfilled]: (state, action) => [...state, action.meta.arg],
  },
});

export default userSlice.reducer;
export { addBook, getBooks };