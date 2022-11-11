/* eslint-disable no-unused-vars */
import { useSelector, useDispatch } from 'react-redux';
import uniqid from 'uniqid';
import React, { useEffect } from 'react';
import { addBook, getBooks, removeBook } from '../redux/books/booksApi.js';

const Book = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, []);

  const myState = useSelector(((state) => state));

  return (
    myState.books.map((book) => (
      <div className="book-item" key={book.item_id}>
        <p>{book.title}</p>
        <p>{book.author}</p>
        <button onClick={() => {
          dispatch(removeBook(book.item_id));
        }}>Remove</button>
      </div>
    ))
  );
};

export default Book;