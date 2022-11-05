import Book from "./Book";
import React from "react";

class DisplayBooks extends React.Component {
  render() {
    return(
      <div className="books-list">
        <Book title='The little prince' author='Antoine de Saint-Exupéry'/>
      </div>
    )
  }
}

export default DisplayBooks