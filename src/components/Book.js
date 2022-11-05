/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-constructor */
import React from 'react';

class Book extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="book-item">
        <p>{this.props.title}</p>
        <p>{this.props.author}</p>
      </div>
    );
  }
}

export default Book;