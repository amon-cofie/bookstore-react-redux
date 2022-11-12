/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import { Progress } from 'antd';
import { removeBook } from '../redux/books/books';
import style from '../css/Book.module.css';

const Book = (props) => {
  const dispatch = useDispatch();
  const { book } = props;
  return (
    <li className={style.newBook}>
      <div>
        <p className={`${style.bookCategory} ${style.commonFontStyles}`}>
          {book.category}
        </p>
        <p className={`${style.bookTitle} ${style.commonFontStyles}`}>
          {book.title}
        </p>
        <p className={`${style.bookAuthor} ${style.commonFontStyles}`}>
          {book.author}
        </p>
        <ul className={style.interaction}>
          <li className={`${style.bookInteractions} ${style.commonFontStyles}`}>
            Comments
          </li>
          {/*  eslint-disable-next-line  */}
          <li
            className={`${style.bookInteractions} ${style.removeBtn}`}
            onClick={() => {
              dispatch(removeBook(book.id));
            }}
          >
            Remove
          </li>
          <li className={`${style.bookInteractions} ${style.editBtn}`}>Edit</li>
        </ul>
      </div>
      <div className={style.bookStats}>
        <div className={style.completedStats}>
          <div className={style.progressBar}>
            <Progress
              type="circle"
              percent={60}
              className="circle"
              width={60}
              format={() => ''}
            />
          </div>
          <div>
            <p
              className={`${style.progressPercentage} ${style.commonFontStyles}`}
            >
              60%
            </p>
            <p className={`${style.completed} ${style.commonFontStyles}`}>
              Completed
            </p>
          </div>
        </div>
        <div className={style.chapterStats}>
          <p
            className={`${style.currentChapterStats} ${style.commonFontStyles}`}
          >
            CURRENT CHAPTER
          </p>
          <p className={`${style.currentChapter} ${style.commonFontStyles}`}>
            Chapter 4
          </p>
          <button className={style.updateProgressBtn} type="button">
            UPDATE PROGRESS
          </button>
        </div>
      </div>
    </li>
  );
};

export default Book;
