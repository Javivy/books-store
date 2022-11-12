import { useDispatch } from 'react-redux';
import uniqid from 'uniqid';
import { addBook } from '../redux/books/booksApi.js';

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
      <h2 className='form-title'>Add a new book</h2>
      <input id='title' type='text' placeholder="Book Title"/>
      <input id='author' type='text' placeholder="Book Author"/>
      <input id='category' type='text' placeholder="Category"/>
      <button type="button" onClick={() => {
        const title = document.getElementById('title');
        const author = document.getElementById('author');
        const category = document.getElementById('category');
        if (title.value === '' && author.value === '' && category.value === '') {
          alert('Make sure you are writing title, author and category');
        } else {
          dispatch(addBook({
            title: title.value,
            author: author.value,
            category: category.value,
            item_id: uniqid(),
          }));
        }
        title.value = '';
        author.value = '';
        category.value = '';
      }}>
        Add Book
      </button>
    </form>
  );
};

export default NewBook;