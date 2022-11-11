/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import generateStore from './redux/store.js';
import Navbar from './components/Navbar.js';
import Categories from './components/Categories.js';
import './index.css';
import NewBook from './components/NewBook.js';
import DisplayBooks from './components/DisplayBooks.js';

const store = generateStore();

class App extends React.Component {
  render() {
    return (
      <Provider store={ store }>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={[<DisplayBooks key='display-books'/>, <NewBook key='new-book'/>]} />
            <Route path='/categories' element={<Categories />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;