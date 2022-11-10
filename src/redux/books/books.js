/* eslint-disable arrow-body-style */

// Constants
const defaultState = [];

// Types
const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

// Reducer
export default function bookReducer(state = defaultState, action) {
  switch (action.type) {
    case ADD_BOOK:
      return {
        ...state,
        title: action.title,
        author: action.author,
        index: state.length,
      };
    case REMOVE_BOOK:
      return {
        ...state.filter((book, i) => i !== book.index),
      };
    default:
      return state;
  }
}

// Actions
export const addBook = (title, author) => {
  return {
    type: ADD_BOOK,
    title,
    author,
  };
};

export const removeBook = (index) => {
  return {
    type: REMOVE_BOOK,
    index,
  };
};