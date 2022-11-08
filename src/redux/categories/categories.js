const CHECK_STATUS = 'bookstore-react-redux/books/CHECK_STATUS';

export default function categories(state = [], action) {
  if (action.types === CHECK_STATUS) {
    return 'Under construction';
  }

  return state;
}

export const checkStatus = () => ({
  type: CHECK_STATUS,
});
