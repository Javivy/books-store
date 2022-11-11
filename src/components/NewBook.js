import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books.js';

const NewBook = () => {
  const dispatch = useDispatch();

  const handleEnter = (event) => {
    if (event.key === 'Enter') {
      const title = document.getElementById('title');
      const author = document.getElementById('author');
      if (title.value === '' && author.value === '') {
        alert('Make sure you write both title and author');
      } else {
        dispatch(addBook(title.value, author.value));
      }
      title.value = '';
      author.value = '';
    }
  };

  return (
    <form onKeyDown={handleEnter}>
      <h2>Add a new book</h2>
      <input id='title' type='text' placeholder="Add Title"/>
      <input id='author' type='text' placeholder="Add Author"/>
      <button type="button" onClick={() => {
        const title = document.getElementById('title');
        const author = document.getElementById('author');
        if (title.value === '' && author.value === '') {
          alert('Make sure you write both title and author');
        } else {
          dispatch(addBook(title.value, author.value));
        }
        title.value = '';
        author.value = '';
      }}>
        Add Book
      </button>
    </form>
  );
};

export default NewBook;