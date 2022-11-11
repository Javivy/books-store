/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-constructor */
import { useSelector, useDispatch } from 'react-redux';
import React from 'react';
import { removeBook } from '../redux/books/books.js';

const Book = () => {
  const myState = useSelector(((state) => state));
  const dispatch = useDispatch();

  return (
    myState.books.map((book) => (
      <div className="book-item" key={book.id}>
        <p>{book.title}</p>
        <p>{book.author}</p>
        <button onClick={() => {
          dispatch(removeBook(myState.books.indexOf(book)));
        }}>Remove</button>
      </div>
    ))
  );
};

export default Book;