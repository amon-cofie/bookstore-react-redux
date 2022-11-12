import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';
import formStyle from '../css/FormInput.module.css';

const FormInput = () => {
  const [titleValue, setTitleValue] = useState('');
  const [authorValue, setAuthorValue] = useState('');
  const dispatch = useDispatch();

  return (
    <div className={formStyle.formContainer}>
      <h3 className={formStyle.mainHeading}>ADD NEW BOOK</h3>
      <form className={formStyle.mainForm}>
        <input
          className={formStyle.formControl}
          type="text"
          value={titleValue}
          placeholder="Title"
          id="title"
          onChange={(e) => setTitleValue(e.target.value)}
        />
        <input
          className={`${formStyle.formControl} ${formStyle.authorControl}`}
          type="text"
          value={authorValue}
          placeholder="Author"
          id="author"
          onChange={(e) => setAuthorValue(e.target.value)}
        />
        <button
          className={formStyle.button}
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
          ADD BOOK
        </button>
      </form>
    </div>
  );
};

export default FormInput;
