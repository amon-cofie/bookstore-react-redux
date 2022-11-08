const ADD_BOOK = 'bookstore-react-redux/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore-react-redux/books/REMOVE_BOOK';

export default function books(state = [], action) {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.book];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
}

export const addBook = (book) => ({
  type: ADD_BOOK,
  book,
});

export const removeBook = (book) => ({
  type: REMOVE_BOOK,
  book,
});
