import { configureStore, combineReducers } from '@reduxjs/toolkit';
import getBooks from './books/books';
import categories from './categories/categories';

const rootReducer = combineReducers({
  booksAsync: getBooks,
  categories,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
