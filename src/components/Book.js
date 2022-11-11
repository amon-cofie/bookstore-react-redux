/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Book = (props) => {
  const dispatch = useDispatch();
  const { book } = props;
  return (
    <li>
      <span>
        <em>{book.title}</em>
        <span>{' by '}</span>
        <em>{book.author}</em>
      </span>
      <button
        type="button"
        onClick={() => {
          dispatch(removeBook(book.id));
        }}
      >
        Delete
      </button>
    </li>
  );
};

export default Book;
