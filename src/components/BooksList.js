import React from 'react';
import { PropTypes } from 'prop-types';
import Book from './Book';

const BooksList = (props) => {
  const { booksArr } = props;
  return (
    <div>
      <ul>
        {booksArr.map((book) => (
          <Book key={book.id} book={book} />
        ))}
      </ul>
    </div>
  );
};

BooksList.propTypes = {
  booksArr: PropTypes.arrayOf(Object).isRequired,
};

export default BooksList;
