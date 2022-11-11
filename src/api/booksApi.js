//* CONSTANTS
// API
const APP_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/';
const APP_ID = '8Qq0oSnNwpAIklIje702';

const apiAddBook = async (book) => {
  await fetch(`${APP_URL}${APP_ID}/books`, {
    method: 'POST',
    body: JSON.stringify(book),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    cache: 'no-cache',
    credentials: 'same-origin',

  });
};

const apiGetBooks = async () => {
  const books = await fetch(`${APP_URL}${APP_ID}/books`);
  const data = await books.json();
  return data;
};

const apiRemoveBook = async (id) => {
  await fetch(`${APP_URL}${APP_ID}/books/${id}`, {
    method: 'DELETE',
  });
};

export { apiAddBook, apiGetBooks, apiRemoveBook };