import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

const FormInput = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <input type="text" placeholder="Title" id="title" />
      <input type="text" placeholder="Author" id="author" />
      <button
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          dispatch(
            addBook({
              id: uuidv4(),
              title: document.getElementById('title').value,
              author: document.getElementById('author').value,
            }),
          );
        }}
      >
        ADD SCORE
      </button>
    </div>
  );
};

export default FormInput;
