import React, { useState } from 'react';
import { Route, Routes, NavLink } from 'react-router-dom';
import BooksList from './components/BooksList';
import FormInput from './components/FormInput';

function App() {
  const [booksArr] = useState([
    { id: 1, title: 'Sample book one', author: 'sample author one' },
    { id: 2, title: 'sample book two', author: 'sample author two' },
  ]);
  const mockBooks = [...booksArr];
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
              <BooksList booksArr={mockBooks} />
              <FormInput />
            </>
          )}
        />
        <Route
          path="/categories"
          element={<button type="button">Check Status</button>}
        />
      </Routes>
    </>
  );
}

export default App;
