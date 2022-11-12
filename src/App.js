import React from 'react';
import { Route, Routes, NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { IoIosPerson } from 'react-icons/io';
import BooksList from './components/BooksList';
import FormInput from './components/FormInput';
import { checkStatus } from './redux/categories/categories';

function App() {
  const books = useSelector((state) => state.books);
  const status = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  return (
    <>
      <div className="app-main-container">
        <header className="center-container header-container ">
          <div className="header-content">
            <h1 className="main-heading">Bookstore CMS</h1>
            <nav className="navbar-container ">
              <NavLink className="nav-links" to="/">
                Books
              </NavLink>
              <NavLink className="nav-links" to="/categories">
                Categories
              </NavLink>
            </nav>
          </div>
          <button className="profile-icon" type="button">
            <IoIosPerson className="userIcon" />
          </button>
        </header>
        <main className="center-container app-components-container">
          <Routes>
            <Route
              path="/"
              element={(
                <>
                  <BooksList booksArr={books} />
                  <hr />
                  <FormInput />
                </>
              )}
            />
            <Route
              path="/categories"
              element={(
                <>
                  <h1>{status}</h1>
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
        </main>
      </div>
    </>
  );
}

export default App;
