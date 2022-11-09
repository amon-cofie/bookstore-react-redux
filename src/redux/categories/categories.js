const CHECK_STATUS = 'bookstore/categories/CHECK_STATUS';

export default function categories(state = [], action) {
  switch (action.type) {
    case CHECK_STATUS:
      return action.text;
    default:
      return state;
  }
}

export const checkStatus = () => ({
  type: CHECK_STATUS,
  text: 'Under construction',
});
