import React from 'react';
import { Route, Routes, NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import BooksList from './components/BooksList';
import FormInput from './components/FormInput';
import { checkStatus } from './redux/categories/categories';

function App() {
  const books = useSelector((state) => state.books);
  const status = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <NavLink to="/">Books</NavLink>
        {' '}
        <NavLink to="/categories">Categories</NavLink>
      </div>
      <Routes>
        <Route
          path="/"
          element={(
            <>
              <BooksList booksArr={books} />
              <FormInput />
            </>
          )}
        />
        <Route
          path="/categories"
          element={(
            <>
              <h1>
                {status}
                {' '}
              </h1>
              <button
                type="button"
                onClick={() => {
                  dispatch(checkStatus());
                }}
              >
                Check Status
              </button>
            </>
          )}
        />
      </Routes>
    </>
  );
}

export default App;
