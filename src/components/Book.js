/* eslint-disable no-unused-vars */
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { getBooks, removeBook } from '../redux/books/booksApi.js';

const Book = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, []);

  const myState = useSelector(((state) => state));

  return (
    myState.books.map((book) => (
      <div className='book-container'>
        <div className="book-data" key={book.item_id}>
          <p className='book-category'>{book.category}</p>
          <p className='book-title'>{book.title}</p>
          <p className='book-author'>{book.author}</p>
          <div className='book-links'>
            <a className='book-link-item'>Comment</a>
            <a onClick={() => {
              dispatch(removeBook(book.item_id));
            }} className='book-link-item'>Remove</a>
            <a className='book-link-item'>Edit</a>
          </div>
        </div>
        <div className='book-progress-info'>
          <div className='progress-made'>
            <svg className='circle-progress'>
              <circle cx='50' cy='50' r='50'></circle>
              <circle cx='50' cy='50' r='50'></circle>
            </svg>
            <div className='progress-info'>
              <span className='progress-number'>64%</span>
              <span className='progress-completed'>Completed</span>
            </div>
          </div>

          <div className='divisor-line'>
          </div>

          <div className='progress-chapter'>
            <p className='current-chapter'>Current Chapter</p>
            <p className='chapter-number'>Chapter 17</p>
            <button>Update Progress</button>
          </div>

        </div>
      </div>
    ))
  );
};

export default Book;