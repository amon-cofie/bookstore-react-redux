import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import booksService from '../services/bookStoreAPIAccess';

const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

const initialState = {
  books: {},
  isLoading: true,
};

export const AsyncGetBooks = createAsyncThunk('GET_BOOKS', async () => {
  try {
    const response = await booksService.get();
    return response.data;
  } catch (err) {
    return err.message;
  }
});

const getBooks = createSlice({
  name: 'booksAsync',
  initialState,
  reducers: {},
  extraReducers: {
    [AsyncGetBooks.pending]: (state) => {
      state.isLoading = true;
    },
    [AsyncGetBooks.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.books = action.payload;
    },
    [AsyncGetBooks.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const addBook = createAsyncThunk(ADD_BOOK, async (book, thunkAPI) => {
  try {
    await booksService.create(book);
    return thunkAPI.dispatch(AsyncGetBooks());
  } catch (error) {
    return error;
  }
});

export const removeBook = createAsyncThunk(
  REMOVE_BOOK,
  async (payload, thunkAPI) => {
    try {
      await booksService.remove(payload);
      return thunkAPI.dispatch(AsyncGetBooks());
    } catch (error) {
      return error;
    }
  },
);

export default getBooks.reducer;
