// Types
const CHECK_STATUS = 'CHECK_STATUS';

// Constants
const defaultState = [];

// Reducer
export default function categoriesReducer(state = defaultState, action) {
  switch (action.type) {
    case CHECK_STATUS:
      return console.log('Under Construction');
    default:
      return state;
  }
}

// Actions
export const checkStatus = () => (
  {
    type: CHECK_STATUS,
  }
);
