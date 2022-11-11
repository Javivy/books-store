/* eslint-disable no-unused-vars */
import { useSelector, useDispatch } from 'react-redux';
import uniqid from 'uniqid';
import React, { useEffect } from 'react';
import { removeBook } from '../redux/books/books.js';
import { addBook, getBooks } from '../redux/books/booksApi.js';
import { apiRemoveBook } from '../api/booksApi.js';

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
          console.log(book);
          apiRemoveBook(myState.books.indexOf(book));
        }}>Remove</button>
      </div>
    ))
  );
};

export default Book;