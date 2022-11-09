const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

export default function books(
  state = [
    { id: 1, title: 'Sample book one', author: 'sample author one' },
    { id: 2, title: 'sample book two', author: 'sample author two' },
  ],
  action,
) {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.book];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.book.id);
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
