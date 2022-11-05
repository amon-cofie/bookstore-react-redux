/* eslint-disable react/prop-types */
import React from 'react';

const Book = (props) => {
  const { book } = props;
  return (
    <li>
      <span>
        <em>{book.title}</em>
        {' '}
        by
        <em>{book.author}</em>
      </span>
      {' '}
      <button type="button">Delete</button>
    </li>
  );
};

export default Book;
