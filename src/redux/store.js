import { configureStore, combineReducers } from '@reduxjs/toolkit';
import bookReducer from './books/booksApi.js';
import categoriesReducer from './categories/categories.js';

const rootReducer = combineReducers({
  books: bookReducer,
  categores: categoriesReducer,
});

export default function generateStore() {
  const store = configureStore({
    reducer: rootReducer,
  });
  return store;
}