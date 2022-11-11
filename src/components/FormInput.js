import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

const FormInput = () => {
  const [titleValue, setTitleValue] = useState('');
  const [authorValue, setAuthorValue] = useState('');
  const dispatch = useDispatch();

  return (
    <div>
      <input
        type="text"
        value={titleValue}
        placeholder="Title"
        id="title"
        onChange={(e) => setTitleValue(e.target.value)}
      />
      <input
        type="text"
        value={authorValue}
        placeholder="Author"
        id="author"
        onChange={(e) => setAuthorValue(e.target.value)}
      />
      <button
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          dispatch(
            addBook({
              item_id: uuidv4(),
              title: document.getElementById('title').value,
              author: document.getElementById('author').value,
              category: 'Fiction',
            }),
          );
          setTitleValue('');
          setAuthorValue('');
        }}
      >
        ADD SCORE
      </button>
    </div>
  );
};

export default FormInput;
