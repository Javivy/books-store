import uniqid from 'uniqid';
// Constants
const defaultState = [
  {
    title: 'The little prince',
    author: 'Antoine de Saint-Exupéry',
    item_id: uniqid(),
    category: 'Fiction',
  },
  {
    title: 'The aclhemist',
    author: 'Paulo Coelho',
    item_id: uniqid(),
    category: 'Fiction',
  },
];

// Types
const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

// Reducer
export default function bookReducer(state = defaultState, action) {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        {
          title: action.title,
          author: action.author,
          id: uniqid(),
        },
      ];
    case REMOVE_BOOK:
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1, state.length),
      ];
    default:
      return state;
  }
}

// Actions
export const addBook = (title, author) => ({
  type: ADD_BOOK,
  title,
  author,
});

export const removeBook = (index) => (
  {
    type: REMOVE_BOOK,
    index,
  }
);