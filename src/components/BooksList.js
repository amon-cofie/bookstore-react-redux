import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Book from './Book';
import { AsyncGetBooks } from '../redux/books/books';
import styles from '../css/BooksList.module.css';

const BooksList = () => {
  const allBooks = [];
  const dispatch = useDispatch();
  const booksFromAPI = useSelector((state) => state.booksAsync);

  const allBooksObj = booksFromAPI.books;

  useEffect(() => {
    dispatch(AsyncGetBooks());
  }, []);

  Object.keys(allBooksObj).forEach((bookObj) => {
    allBooksObj[bookObj].forEach((newArray) => {
      allBooks.push({ ...newArray, id: bookObj });
    });
  });

  return (
    <div className={styles.mainContainer}>
      <ul className={styles.booksContainer}>
        {allBooks.map((book) => (
          <Book key={book.id} book={book} />
        ))}
      </ul>
    </div>
  );
};

export default BooksList;
