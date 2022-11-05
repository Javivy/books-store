/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import Categories from './components/Categories.js';
import './index.css';
import NewBook from './components/NewBook.js';
import DisplayBooks from './components/DisplayBooks.js';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={[<DisplayBooks />, <NewBook />]} />
          <Route path='/categories' element={<Categories />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;