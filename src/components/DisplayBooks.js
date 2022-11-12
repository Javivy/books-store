/* eslint-disable no-unused-vars */
import { useSelector } from 'react-redux';
import Book from './Book.js';

const DisplayBooks = () => {
  const myState = useSelector((store) => store);

  return (
    <div className='books-container'>
      <Book key='books' books={myState.books}/>
    </div>
  );
};

export default DisplayBooks;